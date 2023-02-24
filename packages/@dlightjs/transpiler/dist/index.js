"use strict";var me=Object.create;var F=Object.defineProperty;var ye=Object.getOwnPropertyDescriptor;var $e=Object.getOwnPropertyNames;var he=Object.getPrototypeOf,be=Object.prototype.hasOwnProperty;var xe=(t,e)=>{for(var r in e)F(t,r,{get:e[r],enumerable:!0})},O=(t,e,r,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of $e(e))!be.call(t,s)&&s!==r&&F(t,s,{get:()=>e[s],enumerable:!(n=ye(e,s))||n.enumerable});return t};var _=(t,e,r)=>(r=t!=null?me(he(t)):{},O(e||!t||!t.__esModule?F(r,"default",{value:t,enumerable:!0}):r,t)),ve=t=>O(F({},"__esModule",{value:!0}),t);var Ve={};xe(Ve,{parseDlightFile:()=>ge});module.exports=ve(Ve);var u=_(require("@babel/types"));var T=_(require("@babel/core")),z=_(require("@babel/generator")),d={traverse:T.traverse,generate:t=>(0,z.default)(t).code,parse:t=>T.parse(t,{plugins:[["@babel/plugin-syntax-typescript",{isTSX:!0}],"@babel/plugin-syntax-jsx","@babel/plugin-syntax-do-expressions",["@babel/plugin-syntax-decorators",{legacy:!0}]]})};function H(t,e,r,n){n.body.includes(r)||n.body.unshift(r),r.value.properties.push(u.objectProperty(u.identifier(t),u.arrayExpression(e.map(s=>u.stringLiteral(s)))))}function B(t,e,r){r.body.includes(e)||r.body.unshift(e),!e.value.properties.map(n=>n.key.name).includes(t)&&e.value.properties.push(u.objectProperty(u.identifier(t),u.newExpression(u.identifier("Map"),[])))}function V(t,e){let r=!1,n=t.parentPath;for(;n&&n.node!==e;){if(u.isArrowFunctionExpression(n.node)){r=!0;break}n=n.parentPath}return r}function _e(t){let e=t.parentPath.node;return u.isAssignmentExpression(e)&&e.left===t.node}function Pe(t,e){let r=t.node,n=!1,s=t.parentPath;for(;s&&s.node!==e;){if(u.isAssignmentExpression(s.node)){let o=s.node.left,i=r.type===o.type,a=r.property.name===o.property.name;n=i&&a}s=s.parentPath}return n}function J(t,e){return!V(t,e)&&!_e(t)&&!Pe(t,e)}function N(t){return d.parse(t).program.body[0].body}function q(t,e,r){return[u.classMethod("get",u.identifier(t),[],e),u.classMethod("set",u.identifier(t),[u.identifier("value")],r)]}function R(t){let e=t.value;t.value={type:"ArrowFunctionExpression",params:[],body:e}}function U(t){return d.generate(t.expression)}function Z(t){return d.parse(t).program.body[0].expression}var p=_(require("@babel/types"));function G(t){let e=/html\((.+)\)/;return e.test(t.tag)?(t.tag=t.tag.replace(e,"$1"),!0):/^[a-z][a-z0-9]*$/.test(t.tag)?(t.tag=`"${t.tag}"`,!0):!1}function Q(t){let e=/tag\((.+)\)/;e.test(t.tag)&&(t.tag=t.tag.replace(e,"$1"))}function K(t){return`${t}
`}function Y(t){return"["+t.map((e,r)=>e.attr.isSubView?`..._$node${r}`:`_$node${r}`).join(", ")+"]"}var $=class{value="";add(e){this.value+=K(e)}shift(e){this.value=K(e)+this.value}addBody(e){this.value+=e.value}};var h=_(require("@babel/types"));function x(t){return"["+t.map(e=>e.startsWith("...")?e:'"'+e+'"').join(", ")+"]"}function k(){return Math.random().toString(20).slice(2,8)}function ee(t,e,r=[]){let n=d.parse(`(${t})`),s=[];return d.traverse(n,{MemberExpression(o){e.includes(o.node.property.name)&&J(o)&&s.push(o.node.property.name)}}),s=[...new Set([...s,...r])],s}function te(t,e,r=[]){let n=d.parse(`(${t})`),s=[];return d.traverse(n,{Identifier(o){for(let{ids:i,propNames:a}of e)i.includes(o.node.name)&&(V(o)||s.push(...a))}}),s=[...new Set([...s,...r])],s}function ne(t){return t.match(/[_$a-zA-Z][_$a-zA-Z0-9]*/g)??[]}function X(t){let e=d.parse(`(${t})`);return h.isMemberExpression(e.program.body[0].expression)}function re(t,e,r){let n=[],s=d.parse(e);d.traverse(s,{Identifier(i){n.push(i.node.name)}});let o=d.parse(`function tempFunc() {${t}}`);return d.traverse(o,{Identifier(i){if(n.includes(i.node.name)&&!h.isMemberExpression(i.parentPath.node)){let a=h.memberExpression(h.identifier(r),h.identifier(i.node.name));i.replaceWith(a),i.skip()}}}),d.generate(o.program.body[0].body).trim().replace(/(^\{)|(\}$)/g,"")}function se(t){let e=d.parse(`let _ = ${t}`).program.body[0].declarations[0].init;return!!(h.isArrowFunctionExpression(e)||h.isFunctionExpression(e))}var C=class{depChain;subViews;idDepsArr=[];constructor(e,r,n=[]){this.depChain=e,this.subViews=r,this.idDepsArr=n}generate(e){let r=new $;for(let[n,s]of e.entries())r.addBody(this.resolveParserNode(s,n));return r.add(`return ${Y(e)}`),r.value}geneDeps(e){return[...new Set([...ee(e,this.depChain),...te(e,this.idDepsArr)])]}resolveParserNode(e,r){return this.subViews.includes(e.tag)?this.resolveSubView(e,r):e.tag==="env"?this.resolveEnv(e,r):e.tag==="_"?this.resolveExpression(e,r):e.tag==="if"?this.resolveIf(e,r):e.tag==="for"?this.resolveFor(e,r):e.tag==="_$text"?this.resolveText(e,r):G(e)?this.resolveHTML(e,r):(Q(e),this.resolveCustom(e,r))}resolveIf(e,r){let n=new $,s=`_$node${r}`;n.add(`const ${s} = new _$.IfNode()`);for(let o of e.attr.conditions){n.add(`${s}._$addCond(() => ${o.condition}, () => {`),n.add(this.generate(o.parserNodes));let i=this.geneDeps(o.condition);if(i.length>0){n.add(`}, this, ${x(i)})`);continue}n.add("})")}return n}resolveFor(e,r){let n=new $,s=e.attr.key,o=e.attr.item,i=e.attr.array,a=`_$node${r}`;n.add(`const ${a} = new _$.ForNode()`);let l=this.geneDeps(i);if(l.length>0){n.add(`${a}._$addNodeFunc((_$key, _$idx, node_for) => {`);let y=o.match(/[_$a-zA-Z][_$a-zA-Z0-9]*/g)??[];n.add(`const ${o} = node_for._$getItem(_$key, _$idx)`);let c=`_$valuedItem${k()}`;n.add(`const ${c} = {}`);for(let E of y)n.add(`${c}.${E} = ${E}`);n.add(`node_for._$listen(this, ()=>node_for._$getItem(_$key, _$idx),             ${x(l)}, (_$item) => {`),n.add(`const ${o} = _$item`);for(let E of y)n.add(`${c}.${E} = ${E}`);n.add("})");let S=new C(this.depChain,this.subViews,[...this.idDepsArr,{ids:ne(o),propNames:l}]).generate(e.children);S=re(S,o,c),n.add(S),n.add("})"),s&&(n.add(`${a}._$addKeyFunc(() => {`),n.add("const keys = []"),n.add(`for (let ${o} of ${i}) {`),n.add(`keys.push(${s})`),n.add("}"),n.add("return keys"),n.add("})")),n.add(`${a}._$addArrayFunc(this, () => (${i}), ${x(l)})`)}else n.add(`${a}._$addNodess(() => Array.from(${i}).map((${o}) => (() => {`),n.add(this.generate(e.children)),n.add("})()))");return n}resolveText(e,r){let n=new $,s=e.attr._$content,o=this.geneDeps(`${s}`),i=`_$node${r}`;return o.length>0?n.add(`const ${i} = new _$.TextNode(() => ${s}, this, ${x(o)})`):n.add(`const ${i} = new _$.TextNode(${s}, )`),n}resolveHTML(e,r){let n=new $,s=`_$node${r}`;n.add(`const ${s} = new _$.HtmlNode(${e.tag}, )`);for(let{key:o,value:i,nodes:a}of e.attr.props){if(i=this.parsePropNodes(i,a),o==="element"){n.add(`${i} = ${s}._$el`);continue}if(["willAppear","didAppear","willDisappear","didDisappear"].includes(o)){n.add(`${s}._$addLifeCycle(${i}, "${o}")`);continue}o==="_$content"&&(o="innerText");let l=this.geneDeps(i);if(l.length>0){n.add(`${s}._$addProp("${o}", () => (${i}), this, ${x(l)})`);continue}n.add(`${s}._$addProp("${o}", ${i})`)}return e.children.length>0&&(n.add(`${s}._$addNodes((() => {`),n.add(this.generate(e.children)),n.add("})())")),n}resolveCustom(e,r){let n=new $,s=`_$node${r}`;n.add(`const ${s} = new (${e.tag})()`);for(let{key:o,value:i,nodes:a}of e.attr.props){if(i=this.parsePropNodes(i,a),o==="element"){se(i)?n.add(`${s}._$addAfterset(() => (${i})(${s}._$el))`):n.add(`${s}._$addAfterset(() => ${i} = ${s}._$el)`);continue}if(["willMount","didMount","willUnmount","didUnmount"].includes(o)){n.add(`${s}._$addLifeCycle(${i}, "${o}")`);continue}let l=this.geneDeps(i);if(l.length>0){n.add(`${s}._$addProp("${o}", () => (${i}), this, ${x(l)}, ${X(i)})`);continue}n.add(`${s}._$addProp("${o}", ${i})`)}return e.children.length>0&&(n.add(`${s}._$addChildren((() => {`),n.add(this.generate(e.children)),n.add("})())")),n}resolveSubView(e,r){e.attr.isSubView=!0;let n=new $,s=e.attr.props.map(({key:a,value:l,nodes:y})=>({key:a,value:this.parsePropNodes(l,y)})),o=k(),i=[];for(let{key:a,value:l}of s){let y=`${a}_${o}`,b=x(this.geneDeps(l));n.add(`const ${y} = {value: ${l}, deps: ${b}}`),n.add(`this._$addDeps(${b}, {}, () => {${y}.value = ${l}})`),i.push({key:a,keyWithId:y})}return n.add(`const _$node${r} = ${e.tag}({${i.map(({key:a,keyWithId:l})=>`${a}: ${l}`).join(", ")}})`),n}resolveEnv(e,r){let n=new $,s=`_$node${r}`;n.add(`const ${s} = new _$.EnvNode()`),e.children.length>0&&(n.add(`${s}._$addNodes((() => {`),n.add(this.generate(e.children)),n.add("})())"));for(let{key:o,value:i,nodes:a}of e.attr.props){i=this.parsePropNodes(i,a);let l=this.geneDeps(i);if(l.length>0){n.add(`${s}._$addProp("${o}", () => (${i}), this, ${x(l)}, ${X(i)})`);continue}n.add(`${s}._$addProp("${o}", ${i})`)}return n}resolveExpression(e,r){let n=new $,s=`_$node${r}`;for(let{key:o,value:i,nodes:a}of e.attr.props){if(i=this.parsePropNodes(i,a),o==="_$content"){let y=this.geneDeps(i);y.length>0?n.add(`const ${s} = new _$.ExpressionNode(() => ${i}, this, ${x(y)})`):n.add(`const ${s} = new _$.ExpressionNode(${i}, )`);continue}if(o==="onUpdateNodes"){n.add(`${s}._$onUpdateNodes(${i})`);continue}let l=this.geneDeps(i);if(l.length>0){n.add(`${s}._$addProp("${o}", () => (${i}), this, ${x(l)}, ${X(i)})`);continue}n.add(`${s}._$addProp("${o}", ${i})`)}return n}parsePropNodes(e,r){for(let[n,s]of Object.entries(r)){let o=new $;o.add("((()=>{"),o.add(this.generate(s)),o.add("})())"),e=e.replace('"'+n+'"',o.value)}return e}};function D(t,e,r,n=[]){return new C(e,r,n).generate(t)}var f=_(require("@babel/types"));function Ee(){return Math.random().toString(32).slice(2)}function oe(t,e){if(!e)return{key:t,value:!0,nodes:{}};let r=d.parse(`let _ = ${d.generate(e)}`),n={};return d.traverse(r,{DoExpression(s){let o=s.node,i=Ee();n[i]=de(o.body.body),s.replaceWith(f.stringLiteral(i))}}),{key:t,value:d.generate(r.program.body[0].declarations[0].init),nodes:n}}function Ne(t){let e={tag:"",attr:{props:[]},children:[]},r=t;for(;r&&r.callee?.object&&!f.isThisExpression(r.callee?.object);){let n=r.arguments[0],s=r.callee.property.name;e.attr.props.unshift(oe(s,n)),r=r.callee.object}return r.arguments.length>0&&e.attr.props.unshift(oe("_$content",r.arguments[0])),e.tag=d.generate(r.callee),e}function Se(t){return{tag:"_$text",attr:{_$content:d.generate(t)},children:[]}}function we(t){let e=ie(t.tag);Array.isArray(e)||(e=[e]);let r={tag:"_$text",attr:{_$content:d.generate(t.quasi)},children:[]};return[...e,r]}function ie(t){return f.isCallExpression(t)?Ne(t):f.isStringLiteral(t)||f.isTemplateLiteral(t)?Se(t):f.isTaggedTemplateExpression(t)?we(t):{}}function ke(t){let e=d.generate(t.left.declarations[0]),r=d.generate(t.right),n={tag:"for",attr:{item:e,array:r},children:[]},s=t.body.body;return f.isArrayExpression(s[0].expression)&&(n.attr.key=d.generate(s[0].expression.elements[0]),s=s.slice(1)),n.children=I(s),n}function Ce(t){return{tag:"if",attr:{conditions:ae(t)},children:[]}}function ae(t){let e=[],r=d.generate(t.test),n=I(t.consequent.body);return e.push({condition:r,parserNodes:n}),f.isIfStatement(t.alternate)?e.push(...ae(t.alternate)):t.alternate&&e.push({condition:!0,parserNodes:I(t.alternate.body)}),e}function I(t){let e=[];for(let r of t)if(f.isExpressionStatement(r)){let n=ie(r.expression);Array.isArray(n)||(n=[n]),e.push(...n)}else f.isBlockStatement(r)?e[e.length-1].children=I(r.body):f.isForOfStatement(r)?e.push(ke(r)):f.isIfStatement(r)&&e.push(Ce(r));return e}function de(t){return I(t)}var M=de;var v=_(require("@babel/types"));function pe(t,e){if(!e)return{key:t,value:!0,nodes:{}};let r=d.parse(d.generate(e)),n={};d.traverse(r,{JSXElement(o){let i=k();n[i]=P([o.node]),o.replaceWith(v.stringLiteral(i))}});let s=d.generate(e);return v.isJSXExpressionContainer(e)&&(s=s.replace(/^\{(.+)\}$/,"$1")),s.trim()===""&&(s='""'),{key:t,value:s,nodes:n}}function De(t){let e=t.openingElement.name.name,r=[];for(let n of t.openingElement.attributes)n=n,r.push(pe(n.name.name,n.value));return{tag:e,attr:{props:r},children:P(t.children)}}function Ie(t){let e=t.value.trim();return e===""?void 0:{tag:"_$text",attr:{_$content:`"${e}"`},children:[]}}function A(t,e){let r=t.openingElement.attributes.find(o=>o.name.name===e);if(!r)return r;let n="",s=r.value;return n=v.isJSXExpressionContainer(s)?d.generate(s.expression):d.generate(s),n}function Ae(t){return{tag:"if",attr:{conditions:[{condition:A(t,"cond"),parserNodes:P(t.children)}]},children:[]}}function Fe(t,e){e.attr.conditions.push({condition:A(t,"cond"),parserNodes:P(t.children)})}function Te(t,e){e.attr.conditions.push({condition:"true",parserNodes:P(t.children)})}function Be(t){return{tag:"for",attr:{item:A(t,"let"),array:A(t,"of"),key:A(t,"key")},children:P(t.children)}}function Je(t){return{tag:"_",attr:{props:[pe("_$content",t)]},children:[]}}function P(t){let e=[];for(let r of t){if(v.isJSXText(r)){let s=Ie(r);s&&e.push(s);continue}if(v.isJSXExpressionContainer(r)){e.push(Je(r));continue}if(v.isJSXFragment(r)){e.push(...P(r.children));continue}let n=r.openingElement.name.name;if(n==="if"){e.push(Ae(r));continue}if(n==="else-if"){Fe(r,e[e.length-1]);continue}if(n==="else"){Te(r,e[e.length-1]);continue}if(n==="for"){e.push(Be(r));continue}e.push(De(r))}return e}function Xe(t){return P([t])}var le=Xe;var g=_(require("@babel/types"));function ce(t,e){let r=t.key.name;t.key.name=`_$$${r}`;let n=e.body.indexOf(t),s=N(`
    function ${r}() {
        return this._$$${r}
    }`),o=N(`
    function ${r}(value) {
        if (this._$$${r} === value) return
        this._$$${r} = value
        this._$runDeps("${r}")
    }`),[i,a]=q(r,s,o);e.body.splice(n+1,0,i,a)}function ue(t,e,r){let n=t.key.name,s=e.body.indexOf(t),o=r.toLowerCase(),i=g.classProperty(g.identifier(`_$$${n}`),g.stringLiteral(`_$${o}`));e.body.splice(s,0,i)}function fe(t,e){let r=t.value;t.value=g.callExpression(e,[r??g.identifier("undefined"),g.arrowFunctionExpression([g.identifier("_$newMember")],g.assignmentExpression("=",g.memberExpression(g.thisExpression(),g.identifier(t.key.name)),g.identifier("_$newMember")))])}function Me(t,e,r,n=!1){let s;if(n){let o=t.params[0];if(!o||!p.isObjectPattern(o))s=D(M(t.body.body),e,r);else{let a=o.properties.map(l=>l.key.name).map(l=>({ids:[l],propNames:[`...${l}.deps`]}));s=D(M(t.body.body),e,r,a)}}else s=D(M(t.body.body),e,r);t.body=N(`function tmp() { ${s} }`)}function Le(t,e,r){let n=D(le(t.value),e,r);t.value=p.arrowFunctionExpression([],N(`function tmp() { ${n} }`))}function je(t){let e=t.params[0];if(!e||!p.isObjectPattern(e))return;let r=[];for(let s of e.properties){let o=s.key.name;r.push(o),p.isAssignmentPattern(s.value)&&(s.value.right=p.objectExpression([p.objectProperty(p.identifier("value"),s.value.right),p.objectProperty(p.identifier("deps"),p.arrayExpression())]))}let n=d.parse(`function tmp() ${d.generate(t.body)}`);d.traverse(n,{Identifier(s){r.includes(s.node.name)&&!p.isMemberExpression(s.parentPath.node)&&(s.replaceWith(p.memberExpression(p.identifier(s.node.name),p.identifier("value"))),s.skip())}}),t.body=n.program.body[0].body}function W(t,e,r){let n=r==="jsd"?Me:Le,s,o=[];for(let a of t.body)a.decorators?.find(l=>p.isIdentifier(l.expression)&&l.expression.name==="View")?(a.decorators=void 0,o.push(a)):a.key.name==="Body"&&(s=a);let i=o.map(a=>"this."+a.key.name);for(let a of o)n(a,e,i,!0),je(a);n(s,e,i)}function ge(t,e){let r=d.parse(t),n=null,s=null,o=null,i=null,a=[];return d.traverse(r,{ClassDeclaration(b){let c=b.node;if(p.isIdentifier(c.superClass,{name:"View"})){n=c,s=n.body,s.body.unshift(p.classProperty(p.identifier("_$tag"),p.stringLiteral(n.id.name))),i=p.classProperty(p.identifier("_$derivedPairs"),p.objectExpression([])),o=p.classProperty(p.identifier("_$deps"),p.objectExpression([])),a=[];return}},ClassMethod(b){!n||s.body.indexOf(b.node)===s.body.length-1&&W(s,a,e)},ClassProperty(b){if(!n)return;let c=b.node,L=s.body.indexOf(b.node)===s.body.length-1;if(c.decorators?.find(m=>p.isIdentifier(m.expression)&&m.expression.name==="View")||c.key.name==="Body"){L&&W(s,a,e);return}let S=["EnvState","PropState","State","Prop","Env"],E=(c.decorators??[]).map(m=>{let j=U(m);if(S.includes(j))return j;fe(c,Z(j))}).filter(m=>m),w=[];b.scope.traverse(c,{MemberExpression(m){a.includes(m.node.property.name)&&J(m,n)&&w.push(m.node.property.name)}}),w=[...new Set(w)],w.length>0&&(H(c.key.name,w,i,s),B(c.key.name,o,s),R(c),a.push(c.key.name));for(let m of E){if(["EnvState","PropState","State"].includes(m)){a.push(c.key.name),B(c.key.name,o,s),ce(c,s);break}if(["Prop","Env"].includes(m)){a.push(c.key.name),B(c.key.name,o,s),ue(c,s,m);break}}c.decorators=null,L&&W(s,a,e)}}),`import * as _$ from '@dlightjs/dlight';
`+d.generate(r)}0&&(module.exports={parseDlightFile});

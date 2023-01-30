"use strict";var Ne=Object.create;var D=Object.defineProperty;var we=Object.getOwnPropertyDescriptor;var Ee=Object.getOwnPropertyNames;var Pe=Object.getPrototypeOf,_e=Object.prototype.hasOwnProperty;var Ie=(i,e)=>{for(var s in e)D(i,s,{get:e[s],enumerable:!0})},O=(i,e,s,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of Ee(e))!_e.call(i,r)&&r!==s&&D(i,r,{get:()=>e[r],enumerable:!(t=we(e,r))||t.enumerable});return i};var p=(i,e,s)=>(s=i!=null?Ne(Pe(i)):{},O(e||!i||!i.__esModule?D(s,"default",{value:i,enumerable:!0}):s,i)),Be=i=>O(D({},"__esModule",{value:!0}),i);var ze={};Ie(ze,{JSDConfig:()=>Ce,JSXConfig:()=>be,geneParserNode:()=>Ke});module.exports=Be(ze);var C=p(require("@babel/types"));function G(i,e,s){return[C.classMethod("get",C.identifier(i),[],e),C.classMethod("set",C.identifier(i),[C.identifier("value")],s)]}function V(i){let e=i.value;i.value={type:"ArrowFunctionExpression",params:[],body:e}}var h=p(require("@babel/types"));function U(i,e,s,t){t.body.includes(s)||t.body.unshift(s),s.value.properties.push(h.objectProperty(h.identifier(i),h.arrayExpression(e.map(r=>h.stringLiteral(r)))))}function F(i,e,s){s.body.includes(e)||s.body.unshift(e),!e.value.properties.map(t=>t.key.name).includes(i)&&e.value.properties.push(h.objectProperty(h.identifier(i),h.newExpression(h.identifier("Map"),[])))}function _(i,e){let s=!1,t=i.parentPath;for(;t&&t.node!==e;){if(h.isArrowFunctionExpression(t.node)){s=!0;break}t=t.parentPath}return s}var w=p(require("@babel/types"));var W=p(require("@babel/core")),Xe=W.parse;function I(i){return Xe(i).program.body[0]}function K(i,e){let s=i.key.name;i.key.name=`_$$${s}`;let t=e.body.indexOf(i),r=I(`
    function ${s}() {
        return this._$$${s}
    }`),o=I(`
    function ${s}(value) {
        if (this._$$${s} === value) return
        this._$$${s} = value
        this._$runDeps("${s}")
    }`),[n,a]=G(s,r.body,o.body);e.body.splice(t+1,0,n,a)}function z(i,e,s){let t=i.key.name,r=e.body.indexOf(i),o=s.toLowerCase(),n=w.classProperty(w.identifier(`_$$${t}`),w.stringLiteral(`_$${o}`));e.body.splice(r,0,n)}var M=p(require("@babel/core")),oe=p(require("@babel/generator")),ie=p(require("@babel/traverse")),c=p(require("@babel/types"));function Fe(i){return!["If","For","TextNode"].includes(i.tag)}function q(i){return i.tag[0].toUpperCase()===i.tag[0]&&Fe(i)}function Z(i){return`${i}
`}function Q(i){return"["+i.children.map((e,s)=>`_$node${s}`).join(", ")+"]"}var $=class{value="";add(e){this.value+=Z(e)}shift(e){this.value=Z(e)+this.value}addBody(e){this.value+=e.value}};var Y=p(require("@babel/core")),j=p(require("@babel/generator")),B=p(require("@babel/traverse")),N=p(require("@babel/types"));var J=i=>Y.parse(i,Me),Ae=i=>(0,j.default)(i).code,Me={filename:"*.ts",presets:["@babel/preset-typescript"]};function b(i){return"["+i.map(e=>'"'+e+'"').join(", ")+"]"}function S(){return Math.random().toString(20).slice(2,8)}function ee(i,e,s=[]){let t=J(`(${i})`),r=[];return(0,B.default)(t,{MemberExpression(o){e.includes(o.node.property.name)&&(_(o)||r.push(o.node.property.name))}}),r=[...new Set([...r,...s])],r}function te(i,e,s=[]){let t=J(`(${i})`),r=[];return(0,B.default)(t,{Identifier(o){for(let{ids:n,propNames:a}of e)n.includes(o.node.name)&&(_(o)||r.push(...a))}}),r=[...new Set([...r,...s])],r}function se(i){return i.match(/[_$a-zA-Z][_$a-zA-Z0-9]*/g)??[]}function A(i){let e=J(`(${i})`);return N.isMemberExpression(e.program.body[0].expression)}function re(i,e){let s=[],t=J(e);(0,B.default)(t,{Identifier(o){s.push(o.node.name)}});let r=J(`function tempFunc() {${i}}`);return(0,B.default)(r,{Identifier(o){if(s.includes(o.node.name)){let n=N.memberExpression(N.identifier("_$valuedItem"),N.identifier(o.node.name));o.replaceWith(n),o.skip()}}}),Ae(r.program.body[0].body).trim().replace(/(^\{)|(\}$)/g,"")}var E=class{depChain;idDepsArr=[];constructor(e){this.depChain=e}generate(e){let s=new $;for(let[t,r]of e.children.entries())s.addBody(this.resolveParserNode(r,t));return s.add(`return ${Q(e)}`),s.value}geneDeps(e){return[...new Set([...ee(e,this.depChain),...te(e,this.idDepsArr)])]}resolveParserNode(e,s){return e.tag==="Exp"?this.resolveExpression(e,s):e.tag==="If"?this.resolveIf(e,s):e.tag==="For"?this.resolveFor(e,s):e.tag==="Env"?this.resolveEnv(e,s):q(e)?this.resolveCustom(e,s):e.tag==="text"?this.resolveText(e,s):this.resolveHTML(e,s)}resolveIf(e,s){let t=new $,r=`_$node${s}`;t.add(`const ${r} = new _$.IfNode()`);for(let o in e.kv.condition){let n=e.kv.condition[o];t.add(`${r}._$addCond(() => ${n.condition}, () => {`),t.add(this.generate(n.parserNode));let a=this.geneDeps(n.condition);if(a.length>0){t.add(`}, this, ${b(a)})`);continue}t.add("})")}return t}resolveFor(e,s){let t=new $,r=e.kv.key,o=/^(?:(?:let)|(?:var))\s+?(.+?)\s+?(?:of)\s+?(.+?)$/,n=e.kv.forValue.replace(o,"$1"),a=e.kv.forValue.replace(o,"$2"),d=`_$node${s}`;t.add(`const ${d} = new _$.ForNode()`);let g=this.geneDeps(a);if(g.length>0){t.add(`const ${d}_for = ${d}`),t.add(`${d}_for._$addNodeFunc((_$key, _$idx) => {`);let x=n.match(/[_$a-zA-Z][_$a-zA-Z0-9]*/g)??[];t.add(`const ${n} = ${d}_for._$getItem(_$key, _$idx)`),t.add("const _$valuedItem = {}");for(let f of x)t.add(`_$valuedItem.${f} = ${f}`);t.add(`${d}_for._$listen(this, ()=>${d}_for._$getItem(_$key, _$idx),             ${b(g)}, (item) => {`),t.add(`const ${n} = item`);for(let f of x)t.add(`_$valuedItem.${f} = ${f}`);t.add("})");let l=new E(this.depChain);l.idDepsArr=[{ids:se(n),propNames:g}];let k=l.generate(e);k=re(k,n),t.add(k),t.add("})"),r&&(t.add(`${d}._$addKeyFunc(() => {`),t.add("const keys = []"),t.add(`for (${e.kv.forValue}) {`),t.add(`keys.push(${r})`),t.add("}"),t.add("return keys"),t.add("})")),t.add(`${d}._$addArrayFunc(this, () => (${a}), ${b(g)})`)}else t.add(`${d}._$addNodess(Array.from(${a}).map((${n}) => (() => {`),t.add(this.generate(e)),t.add("})()))");return t}resolveText(e,s){let t=new $,r=e.kv.value,o=e.kv.strSymbol,n=this.geneDeps(`${o}${r}${o}`),a=`_$node${s}`;return n.length>0?t.add(`const ${a} = new _$.TextNode(() => ${o}${r}${o}, this, ${b(n)})`):t.add(`const ${a} = new _$.TextNode(${o}${r}${o}, )`),t}resolveHTML(e,s){let t=new $,r=`_$node${s}`;t.add(`const ${r} = new _$.HtmlNode("${e.tag}", )`);for(let{key:o,value:n,nodes:a}of e.kv.props){if(n=this.parsePropNodes(n,a),o==="element"){t.add(`${n} = ${r}._$el`);continue}if(["willAppear","didAppear","willDisappear","didDisappear"].includes(o)){t.add(`${r}._$addLifeCycle(${n}, "${o}")`);continue}o==="_$content"&&(o="innerHTML");let d=this.geneDeps(n);if(d.length>0){t.add(`${r}._$addProp("${o}", () => (${n}), this, ${b(d)})`);continue}t.add(`${r}._$addProp("${o}", ${n})`)}return e.children.length>0&&(t.add(`${r}._$addNodes((() => {`),t.add(this.generate(e)),t.add("})())")),t}resolveCustom(e,s){let t=new $,r=`_$node${s}`;t.add(`const ${r} = new ${e.tag}()`);for(let{key:o,value:n,nodes:a}of e.kv.props){if(n=this.parsePropNodes(n,a),o==="element"){t.add(`${r}._$addAfterset(() => ${n} = ${r}._$el)`);continue}if(["willMount","didMount","willUnmount","didUnmount"].includes(o)){t.add(`${r}._$addLifeCycle(${n}, "${o}")`);continue}let d=this.geneDeps(n);if(d.length>0){t.add(`${r}._$addProp("${o}", () => (${n}), this, ${b(d)}, ${A(n)})`);continue}t.add(`${r}._$addProp("${o}", ${n})`)}if(e.children.length>0){t.add(`${r}._$addChildren([`);for(let o of e.children)t.add("() => {"),t.addBody(this.resolveParserNode(o,0)),t.add("return _$node0"),t.add("},");t.add("])")}return t}resolveEnv(e,s){let t=new $,r=`_$node${s}`;t.add(`const ${r} = new _$.EnvNode()`),e.children.length>0&&(t.add(`${r}._$addNodes((() => {`),t.add(this.generate(e)),t.add("})())"));for(let{key:o,value:n,nodes:a}of e.kv.props){n=this.parsePropNodes(n,a);let d=this.geneDeps(n);if(d.length>0){t.add(`${r}._$addProp("${o}", () => (${n}), this, ${b(d)}, ${A(n)})`);continue}t.add(`${r}._$addProp("${o}", ${n})`)}return t}resolveExpression(e,s){let t=new $,r=`_$node${s}`;for(let{key:o,value:n,nodes:a}of e.kv.props){if(n=this.parsePropNodes(n,a),o==="_$content"){let g=this.geneDeps(n);g.length>0?t.add(`const ${r} = new _$.ExpressionNode(() => ${n}, this, ${b(g)})`):t.add(`const ${r} = new _$.ExpressionNode(${n}, )`);continue}if(o==="propScope"){t.add(`${r}.propScope = ${n}`);continue}if(o==="deepLoopEl"){t.add(`${r}.deepLoopEl = ${n}`);continue}if(o==="onUpdate"){t.add(`${r}._$onUpdateNodes(${n})`);continue}if(["willMount","didMount","willUnmount","didUnmount"].includes(o)){t.add(`${r}._$addLifeCycle(${n}, "${o}")`);continue}let d=this.geneDeps(n);if(d.length>0){t.add(`${r}._$addProp("${o}", () => (${n}), this, ${b(d)}, ${A(n)})`);continue}t.add(`${r}._$addProp("${o}", ${n})`)}return t}parsePropNodes(e,s){for(let[t,r]of Object.entries(s)){let o=new $;o.add("((()=>{"),o.add(this.generate(r)),o.add("})())"),e=e.replace('"'+t+'"',o.value)}return e}};function ne(i,e){return new E(e).generate(i)}var Te=i=>M.parse(i,Oe),Le=i=>(0,oe.default)(i).code,Oe={filename:"*.ts",presets:["@babel/preset-typescript"],plugins:[["@babel/plugin-proposal-decorators",{legacy:!0}]]};function ae(i,e){let s=Te(i),t=null,r=null,o=null,n=null,a=[];return(0,ie.default)(s,{ClassDeclaration(x){let l=x.node;if(c.isIdentifier(l.superClass)){t=l,r=t.body,r.body.unshift(c.classProperty(c.identifier("_$tag"),c.stringLiteral(t.id.name))),n=c.classProperty(c.identifier("_$derivedPairs"),c.objectExpression([])),o=c.classProperty(c.identifier("_$deps"),c.objectExpression([])),a=[];return}},ClassProperty(x){if(!t)return;let l=x.node;if(c.isIdentifier(l.key,{name:"Body"})){let f=l.value.value,T=`
                    function tmp() {
                        ${ne(e[f],a)}
                    }
                `;T=M.transform(T,{filename:"*.ts",presets:["@babel/preset-typescript"]}).code,l.value=c.arrowFunctionExpression([],I(T).body);return}let k=[];if(x.scope.traverse(l,{MemberExpression(f){a.includes(f.node.property.name)&&(_(f,t)||k.push(f.node.property.name))}}),k=[...new Set(k)],k.length>0&&(U(l.key.name,k,n,r),F(l.key.name,o,r),V(l),a.push(l.key.name)),l.decorators){for(let f of l.decorators){let X=f.expression.name??f.expression.callee.name;if(["EnvState","PropState","State"].includes(X)){a.push(l.key.name),F(l.key.name,o,r),K(l,r);break}if(["Prop","Env"].includes(X)){a.push(l.key.name),F(l.key.name,o,r),z(l,r,X);break}}l.decorators=null}}}),`import * as _$ from "@dlightjs/dlight" 
`+Le(s)}var u=class{tag="";kv={props:[]};children=[];parent;constructor(e){this.tag=e}get lastChild(){return this.children.length===0?this:this.children[this.children.length-1]}addChild(e){this.children.push(e),e.parent=this}addChildren(e){for(let s of e)this.addChild(s)}};var de=p(require("@babel/core")),le=p(require("@babel/generator")),pe=p(require("@babel/traverse")),m=p(require("@babel/types"));var Ge={presets:["@babel/preset-react"]},ce=i=>de.parse(i,Ge),y=i=>(0,le.default)(i).code,v=class{parserNode=new u("");jsxElement;constructor(e){this.jsxElement=e}resolveEl(e){let s=e.openingElement.name.name,t=new u(s);for(let r of e.openingElement.attributes){r=r;let o=r.name.name,n=r.value;n=m.isJSXExpressionContainer(n)?y(n.expression):y(n),t.kv.props.push({key:o,value:n})}for(let r of e.children){let o=new v(r);o.parse(),t.addChildren(o.parserNode.children)}this.parserNode.addChild(t)}resolveFragment(e){for(let s of e.children)this.resolveJSXElement(s)}resolveText(e){let s=new u("text"),t=e.value.trim();t!==""&&(s.kv.strSymbol="`",s.kv.value=t,this.parserNode.addChild(s))}resolveFor(e){let s=new u("For"),t=e.openingElement.attributes.filter(n=>n.name.name==="expression")[0],r="";if(t!==void 0){let n=t.value;r=m.isJSXExpressionContainer(n)?y(n.expression):y(n).replace(/(^["'`])|(["'`]$)/g,"")}s.kv.forValue=r;let o=e.openingElement.attributes.filter(n=>n.name.name==="key")[0];if(o!==void 0){let n=o.value;s.kv.key=m.isJSXExpressionContainer(n)?y(n.expression):y(n).replace(/(^["'`])|(["'`]$)/g,"")}for(let n of e.children){let a=new v(n);a.parse(),s.addChildren(a.parserNode.children)}this.parserNode.addChild(s)}resolveIf(e){let s=new u("If"),t=e.openingElement.attributes.filter(n=>n.name.name==="condition")[0],r="";if(t!==void 0){let n=t.value;r=m.isJSXExpressionContainer(n)?y(n.expression):y(n)}let o=new v(e.children);o.parse(),s.kv.condition=[{condition:r,parserNode:o.parserNode}],this.parserNode.addChild(s)}resolveElseIf(e){let s=this.parserNode.lastChild,t=e.openingElement.attributes.filter(n=>n.name.name==="condition")[0],r="";if(t!==void 0){let n=t.value;r=m.isJSXExpressionContainer(n)?y(n.expression):y(n)}let o=new v(e.children);o.parse(),s.kv.condition!==void 0&&s.kv.condition.push({condition:r,parserNode:o.parserNode})}resolveElse(e){let s=this.parserNode.lastChild,t=new v(e.children);t.parse(),s.kv.condition!==void 0&&s.kv.condition.push({condition:"true",parserNode:t.parserNode})}resolveJSXExpression(e){let s=new u("Exp");s.kv.nodes={};let t=ce(y(e));(0,pe.default)(t,{JSXElement(r){let o=S(),n=new v(r.node);n.parse(),s.kv.nodes[o]=n.parserNode,r.replaceWith(m.stringLiteral(o))}}),s.kv.content=y(t).trim().slice(1,-1).replace(";",""),this.parserNode.addChild(s)}resolveJSXElement(e){if(Array.isArray(e))return e.forEach(t=>this.resolveJSXElement(t));if(m.isJSXFragment(e))return this.resolveFragment(e);if(m.isJSXText(e))return this.resolveText(e);if(m.isJSXExpressionContainer(e))return this.resolveJSXExpression(e);let s=e.openingElement.name.name;if(s==="For")return this.resolveFor(e);if(s==="If")return this.resolveIf(e);if(s==="ElseIf")return this.resolveElseIf(e);if(s==="Else")return this.resolveElse(e);this.resolveEl(e)}parse(){this.resolveJSXElement(this.jsxElement)}};function he(i){let s=ce(i).program.body[0].expression,t=new v(s);return t.parse(),t.parserNode}var fe=p(require("@babel/core")),me=p(require("@babel/generator")),$e=p(require("@babel/traverse")),ye=p(require("@babel/types"));var Ve={filename:"*.jsx",presets:["@babel/preset-react","@babel/preset-typescript"],plugins:[["@babel/plugin-proposal-decorators",{legacy:!0}]]},He=i=>fe.parse(i,Ve),ue=i=>(0,me.default)(i).code;function ge(i){let e={},s=He(i);return(0,$e.default)(s,{ClassProperty(r){if(r.node.key.name==="Body"){let o=S();e[o]=ue(r.node.value),r.node.value=ye.stringLiteral(o)}}}),{code:ue(s),bodyMap:e}}var be={bodyGetter:ge,bodyParser:he};var L=class{code;codeOut="";c="";idx=-1;flag=!1;commentRegex=/(\/\*[\S\s]*\*\/)|(\/\/.*)/g;bodyMap={};constructor(e){this.code=e}ok(){return this.idx<this.code.length-1}look(){return this.code[this.idx+1]}eat(){this.idx++,this.c=this.code[this.idx]}add(){this.codeOut+=this.c}eatSpace(){for(;this.ok()&&this.look().trim()==="";)this.eat()}metBody(){return/Body\(\)\s*\{$/.test(this.codeOut)}eatBrackets(){this.flag||(this.flag=!0);let e="",s=1;for(;this.ok();){if(this.eat(),this.c==="{")s++;else if(this.c==="}"&&(s--,s===0))break;e+=this.c}return e}eatBody(){this.eatSpace();let e=S(),s=this.eatBrackets();this.bodyMap[e]=s.replace(this.commentRegex,""),this.codeOut=this.codeOut.replace(/\(\)\s*\{$/,"")+`= "${e}"`}parse(){for(;this.ok();){for(;this.ok()&&!this.metBody();)this.eat(),this.add();this.ok()&&this.eatBody()}return this.codeOut}};function ve(i){let e=new L(i);return e.parse(),{code:e.codeOut,bodyMap:e.bodyMap}}var ke=p(require("@babel/core")),Se=p(require("@babel/generator")),Ue={filename:"*.ts",presets:["@babel/preset-typescript"]},We=i=>ke.parse(i,Ue),Re=i=>(0,Se.default)(i).code,P=class{code;token="";c="";idx=-1;constructor(e){this.code=e}stopCharacters=["(","{"," ",`
`,'"',"`","'"];ok(){return this.idx<this.code.length-1}look(){return this.code[this.idx+1]}eat(){this.idx++,this.c=this.code[this.idx]}add(){this.token+=this.c}erase(){this.token=""}eatSpace(){for(;this.ok()&&this.look().trim()==="";)this.eat()}parserNode=new u("null");get el(){return this.parserNode.lastChild}addElKey(){let e=this.token.slice(1);this.erase(),this.eatSpace(),this.eat(),this.eatSpace();let s=this.eatContent();s.trim()===""&&(s="true"),this.el.kv.props.push(this.parseProp(e,s)),this.erase()}eatBrackets(e,s){let t=1;for(;this.ok();){if(this.eat(),this.c===e)t++;else if(this.c===s&&(t--,t===0))break;this.add()}}eatParentheses(){this.eatBrackets("(",")")}eatCurlyBrackets(){this.eatBrackets("{","}")}eatSquareBrackets(){this.eatBrackets("[","]")}eatContent(){this.eatParentheses();let e=this.token;return this.erase(),e}eatSubEl(){this.eatCurlyBrackets();let e=new P(this.token);return e.parse(),this.erase(),e.parserNode}parse(){for(;this.ok();){for(;this.ok()&&!this.stopCharacters.includes(this.look());)this.eat(),this.add();if(this.token.trim()!==""){if(["If","ElseIf","Else"].includes(this.token)){this.resolveIf(this.token);continue}if(["For"].includes(this.token)){this.resolveFor();continue}if(this.token.startsWith(".")){this.addElKey();continue}this.resolveEl()}else if(this.eat(),['"',"'","`"].includes(this.c)){this.add();let e=this.c;for(;this.ok()&&(["\\"].includes(this.c)||this.look()!==e);)this.eat(),this.add();this.ok()&&(this.eat(),this.add(),this.resolveText())}}}parseProp(e,s){let t=0,r="",o="",n={key:e,nodes:{}};for(let a=0;a<s.length;a++)if(s[a]==="@"&&s[a+1]==="{")t++,a++;else if(s[a]==="}"&&t===1){t--;let d=S();o+='"'+d+'"';let g=new P(r);g.parse(),n.nodes[d]=g.parserNode,r=""}else t!==0?r+=s[a]:o+=s[a];return n.value=o,n}resolveText(){let e=new u("text");e.kv.strSymbol=this.token[0],e.kv.value=this.token.slice(1,-1),this.erase(),this.parserNode.addChild(e)}resolveEl(){let e=new u(this.token);if(this.erase(),this.eatSpace(),this.look()==="("){if(this.eat(),this.eatSpace(),this.look()==="{"){let s=this.eatContent(),r=We(`(${s})`).program.body[0].expression.properties;for(let o of r)e.kv.props.push(this.parseProp(o.key.name,Re(o.value)))}else{let s=this.eatContent();s.trim()!==""&&e.kv.props.push(this.parseProp("_$content",s))}this.eatSpace()}this.look()==="{"&&(this.eat(),e.children=this.eatSubEl().children),this.parserNode.addChild(e)}handleIfish(e){this.erase(),this.eatSpace(),this.eat();let s=this.eatSubEl();this.el.kv.condition.push({condition:e,parserNode:s}),this.erase()}handleIf(){this.parserNode.addChild(new u(this.token)),this.erase(),this.eatSpace(),this.eat(),this.eatParentheses(),this.el.kv.condition=[],this.handleIfish(this.token)}handleElseIf(){this.erase(),this.eatSpace(),this.eat(),this.eatParentheses(),this.handleIfish(this.token)}handleElse(){this.handleIfish("true")}resolveIf(e){e==="If"?this.handleIf():e==="ElseIf"?this.handleElseIf():e==="Else"&&this.handleElse()}resolveFor(){let e=new u(this.token);this.erase(),this.eatSpace(),this.eat(),this.eatParentheses(),e.kv.forValue=this.token,this.erase(),this.eatSpace(),this.eat(),this.c==="["&&(this.eatSquareBrackets(),e.kv.key=this.token,this.erase(),this.eatSpace(),this.eat()),e.children=this.eatSubEl().children,this.parserNode.addChild(e)}};function xe(i){let e=new P(i);return e.parse(),e.parserNode}var Ce={bodyGetter:ve,bodyParser:xe};function Ke(i,e){let{bodyGetter:s,bodyParser:t}=e,{code:r,bodyMap:o}=s(i),n={};for(let[a,d]of Object.entries(o))n[a]=t(d);return ae(r,n)}0&&(module.exports={JSDConfig,JSXConfig,geneParserNode});

import {DlightBodyParser} from "./parser";

function transpileBodyCode(code: string): [string, boolean] {
    const parser = new DlightBodyParser(code)
    parser.parse()

    return [parser.codeOut, parser.flag]
}

function transpileDerived(code: string) {
    return code.replaceAll(/(@Derived[\s\S]+?=)/g, "$1 () =>")
}
function transpilePropDerived(code: string) {
    return code.replaceAll(/(@PropDerived[\s\S]+?=)/g, "$1 () =>")
}
export function transpileDLightTsCode(code: string) {
    let [alteredCode, flag] = transpileBodyCode(code)
    alteredCode = transpileDerived(alteredCode)
    alteredCode = transpilePropDerived(alteredCode)
    alteredCode = `import * as _$ from "@/core/func";\n` + alteredCode

    return flag ? alteredCode: code
}
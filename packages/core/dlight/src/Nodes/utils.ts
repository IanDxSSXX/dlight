import { type CustomNode } from "./CustomNode"
import { type DLNode, DLNodeType } from "./DLNode"
import { type HtmlNode } from "./HtmlNode"
import { loopNodes, loopShallowEls } from "../utils/nodes"
import { type AnyDLNode } from "./type"
import { TextNode } from "./TextNode"

/**
 * Remove nodes' elements from DOM
 */
export function removeNodes(parentEl: HTMLElement, nodes: DLNode[]) {
  runDLightNodesWillLifecycle(nodes)
  loopShallowEls(nodes, (el: HTMLElement, node: HtmlNode) => {
    ;(node as AnyDLNode).willDisappear?.(el, node)
    parentEl.removeChild(el)
    ;(node as AnyDLNode).didDisappear?.(el, node)
  })
  runDLightNodesDidLifecycle(nodes)
}

/**
 * 删掉所有有关node的deps
 * @param nodes
 * @param dlScope
 */
export function deleteNodesDeps(nodes: DLNode[], dlScope: CustomNode) {
  const depArr = (dlScope as AnyDLNode)._$stateDepArr
  if (!depArr) return
  const cleanUpDepFuncs: Array<() => void> = []
  loopNodes(nodes, (node: DLNode) => {
    const cleanUps = (node as AnyDLNode)._$cleanUps
    if (!cleanUps) return
    cleanUpDepFuncs.push(...cleanUps)
  })

  depArr.forEach((dep: string) => {
    cleanUpDepFuncs.forEach(func => {
      (dlScope as AnyDLNode)[dep].delete(func)
    })
  })
}

/**
 * 把DLNode插到指定index的parentEl上
 * 如果index===length说明是最后一个append
 * 不然就insertBefore
 * @param nodes
 * @param index
 * @param parentEl
 * @param lengthIn - 调用parentEl.childNodes.length会浪费时间，从外面传入会省很多时间
 * @returns
 */
export function appendNodesWithIndex(nodes: DLNode[], parentEl: HTMLElement, index: number, length: number) {
  const indexIn = index
  const notLast = length !== index
  loopShallowEls(nodes, (el: HTMLElement, node: HtmlNode) => {
    if ((node as AnyDLNode).willAppear) {
      (node as AnyDLNode).willAppear?.(node._$el, node)
      delete (node as AnyDLNode).willAppear
    }
    if (notLast) {
      parentEl.insertBefore(el, parentEl.childNodes[index])
    } else {
      parentEl.appendChild(el)
    }
    if ((node as AnyDLNode).willAppear) {
      (node as AnyDLNode).didAppear?.(node._$el, node)
      delete (node as AnyDLNode).didAppear
    }
    index++
  })
  return index - indexIn
}

export function appendNodesWithSibling(nodes: DLNode[], parentEl: HTMLElement, nextSibling: HTMLElement): number {
  if (nextSibling) return insertNodesBefore(nodes, parentEl, nextSibling)
  return appendNodes(nodes, parentEl)
}

export function insertNodesBefore(nodes: DLNode[], parentEl: HTMLElement, nextSibling: HTMLElement) {
  let count = 0
  loopShallowEls(nodes, (el: HTMLElement, node: HtmlNode) => {
    if ((node as AnyDLNode).willAppear) {
      (node as AnyDLNode).willAppear?.(node._$el, node)
      delete (node as AnyDLNode).willAppear
    }
    parentEl.insertBefore(el, nextSibling)
    count++
    if ((node as AnyDLNode).willAppear) {
      (node as AnyDLNode).didAppear?.(node._$el, node)
      delete (node as AnyDLNode).didAppear
    }
  })
  return count
}

export function appendNodes(nodes: DLNode[], parentEl: HTMLElement) {
  let count = 0
  loopShallowEls(nodes, (el: HTMLElement, node: HtmlNode) => {
    if ((node as AnyDLNode).willAppear) {
      (node as AnyDLNode).willAppear?.(node._$el, node)
      delete (node as AnyDLNode).willAppear
    }
    parentEl.appendChild(el)
    count++
    if ((node as AnyDLNode).willAppear) {
      (node as AnyDLNode).didAppear?.(node._$el, node)
      delete (node as AnyDLNode).didAppear
    }
  })
  return count
}

/**
 * flowCursor相关，index表明前面有n个普通HTMLElement
 * flowNodes是flow相关的节点，element个数不定，每次插入都要重新计算，但是这个节点的reference是固定的
 * @param flowNodes
 * @returns
 */
export function getFlowIndexFromParentNode(parentNode: HtmlNode, stopNode: DLNode) {
  return getFlowIndexFromNodesTillId(parentNode._$nodes, stopNode)
}

export function getFlowIndexFromNodes(nodes: DLNode[]) {
  return getFlowIndexFromNodesTillId(nodes, undefined as any)
}

function getFlowIndexFromNodesTillId(nodes: DLNode[], stopNode: DLNode) {
  let index = 0
  let stop = false
  loopNodes(nodes, (node: DLNode) => {
    if (stop) return false
    if (node === stopNode) {
      stop = true
      return false
    }
    if (node._$nodeType === DLNodeType.HTML || node._$nodeType === DLNodeType.Text) {
      index++
      return false
    }
    return true
  })
  return index
}

function runDLightNodesWillLifecycle(nodes: DLNode[]) {
  loopNodes(nodes, (node: DLNode) => {
    (node as AnyDLNode).willUnmount?.(node)
  })
}

function runDLightNodesDidLifecycle(nodes: DLNode[]) {
  loopNodes(nodes, (node: DLNode) => {
    (node as AnyDLNode).didUnmount?.(node)
  })
}

export function arraysEqual(a: any[], b: any[]) {
  if (a === b) {
    return true
  }
  if (a == null || b == null || a.length !== b.length) {
    return false
  }
  for (let i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) {
      return false
    }
  }
  return true
}

export function formatNodes(nodes: AnyDLNode) {
  if (!Array.isArray(nodes)) nodes = [nodes]
  return nodes
    .map((node: any) => {
      if (typeof node === "function") return node()
      return node
    })
    .flat(1)
    .filter((node: AnyDLNode) => (
      node !== undefined && node !== null && typeof node !== "boolean"
    )).map((node: any) => {
      if (node._$nodeType !== undefined) return node
      const textNode = new TextNode()
      textNode.t(node)
      return textNode
    })
}

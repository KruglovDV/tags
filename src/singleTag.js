import Node from './node';

export default class SingleTag extends Node {
  toString = () => (
    `<${this.name} ${this.renderAttrs()}/>`
  )
}

import Node from './node';

export default class PairTag extends Node {
  constructor(name, attrs, value) {
    super(name, attrs);
    this.value = value;
  }

  toString = () => (
    `<${this.name} ${this.renderAttrs()}>${this.value}</${this.name}>`
  );
}

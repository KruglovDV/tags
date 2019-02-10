import _ from 'lodash';

export default class Node {
  constructor(name, attrs) {
    this.name = name;
    this.attrs = attrs;
  }

  renderAttrs = () => {
    const { attrs } = this;
    const result = _.toPairs(attrs)
      .map(([attr, value]) => `${attr}="${value}"`)
      .join(' ');
    return result;
  }
}

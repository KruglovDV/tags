import PairTag from '../src/pairTag';

test('render div with text and attributes', () => {
  const div = new PairTag('div', { class: 'row' }, 'content');
  const expected = '<div class="row">content</div>';
  const result = div.toString();
  expect(result).toBe(expected);
});

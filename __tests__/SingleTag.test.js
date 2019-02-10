import SingleTag from '../src/singleTag';

test('render div with text and attributes', () => {
  const div = new SingleTag('br', { class: 'row' });
  const expected = '<br class="row"/>';
  const result = div.toString();
  expect(result).toBe(expected);
});

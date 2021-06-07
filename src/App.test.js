import { render, queryByAttribute } from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from './App';

const getById = queryByAttribute.bind(null, 'id');

test('renders Stats', () => {
  const { container } = render(<App />);
  const stats = getById(container, 'stats');
  expect(stats).toBeInTheDocument();
});

test('basic snapshot test', () => {
  const component = renderer.create(<App />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

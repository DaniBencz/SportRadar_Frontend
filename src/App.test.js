import { render, screen, queryByAttribute } from '@testing-library/react';
import App from './App';
import renderer from 'react-test-renderer';

const getById = queryByAttribute.bind(null, 'id');

test('renders Stats', () => {
  const { container } = render(<App />);
  const stats = getById(container, 'stats');
  expect(stats).toBeInTheDocument();
});

test('basic snapshot test', () => {
  const component = renderer.create(<App />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

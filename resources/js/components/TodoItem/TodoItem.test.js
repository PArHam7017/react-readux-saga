import React from 'react';
import { shallow } from 'enzyme';
import TodoItem from './TodoItem';

describe('<TodoItem />', () => {
  test('renders', () => {
    const wrapper = shallow(<TodoItem />);
    expect(wrapper).toMatchSnapshot();
  });
});

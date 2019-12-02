import React from 'react';
import { shallow } from 'enzyme';
import App from '../App/App';

it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    const intro = <span> Dec 2019 | Made by Yiqi</span>
    expect(wrapper.contains(intro)).toEqual(true);
}); 
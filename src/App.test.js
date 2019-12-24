import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import App from './App'

it('renders without crashing', () => {
    const container = shallow(<App />)
    const wrapper = <h2>Welcome to React</h2>;
    expect(container.contains(wrapper)).toBe(true)
})
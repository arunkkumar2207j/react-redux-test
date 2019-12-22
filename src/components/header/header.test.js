import React from 'react'
import { shallow } from 'enzyme'
import Header from './index'

describe('Header Component', () => {
    it('Should render without error', () => {
        const component = shallow(<Header />)
        const wrapper = component.find('.headerComponent')
        expect(wrapper.length).toBe(1)
    })
})
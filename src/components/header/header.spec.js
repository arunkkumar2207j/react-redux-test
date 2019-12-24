import React from 'react'
import { shallow } from 'enzyme'
import Header from './index'
import { findByTestAttr } from '../../../Utils'

const setUp = (props={}) => {
    const container = shallow(<Header {...props} />)
    return container;
}

describe('Header Component', () => {

    let component;
    beforeEach(() => {
        component = setUp();
    })

    it('It should render without errors', () => {
        const wrapper = findByTestAttr(component, 'headerComponent')
        expect(wrapper.length).toBe(1)
    })
    it('Should render logoIMG', () => {
        const wrapper = findByTestAttr(component, 'logoIMG')
        expect(wrapper.length).toBe(1)
    })
})

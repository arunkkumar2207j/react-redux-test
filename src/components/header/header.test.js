import React from 'react'
import { shallow } from 'enzyme'
import Header from './index'

const setUp = (props={}) => {
    const component = shallow(<Header {...props} />);
    return component
}

const findByTestAttr = (component, attr) => {
    const wrapper = component.find(`[data-test="${attr}"]`)
    return wrapper;
}

describe('Header Component', () => {
    let component;
    beforeEach(() => {
        component = setUp();
    })

    it('Should render without error', () => {
        const wrapper = findByTestAttr(component, 'headerComponent')
        expect(wrapper.length).toBe(1)
    })

    it("Should render Image", () => {
        const wrapper = component.find(`[data-test="logoIMG"]`)
        expect(wrapper.length).toBe(1)
    })
})
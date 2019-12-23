import React from 'react'
import { shallow } from 'enzyme'
import Headline from './index'

const setUp = (props={}) => {
    const component = shallow(<Headline {...props} />);
    return component
}
const findByTestAttr = (component, attr) => {
    const wrapper = component.find(`[data-test="${attr}"]`)
    return wrapper;
}

describe('Headline Component', () => {

    describe("Have props", () => {
        let wrapper;

        beforeEach(() => {
            const props = {
                header: 'Test Header',
                desc: 'Test Description'
            }
            wrapper = setUp(props)
        })

        it('Should render without error', () => {
            const component = findByTestAttr(wrapper, "headlineComponent")
            expect(component.length).toBe(1)
        })
    })

    describe('Have No props', () => {
        let wrapper;
        beforeEach(() => {

        })

        it('test', () => {

        })
    })
    
})
import React from 'react';
import { shallow } from 'enzyme';
import Headline from './index';
import { findByTestAttr } from '../../../Utils'

const setUp = (props={}) => {
    const component = shallow(<Headline {...props} />);
    return component;
}

describe('Headline Component', () => {
   describe('Have props', () => {
       let wrapper;
       beforeEach(() => {
           const props = {
               headline: 'Test Header',
               desc: 'Test Description'
           }
           wrapper = setUp(props);
       })
       it("Should render without error", () => {
           const component = findByTestAttr(wrapper, 'HeadlineComponent')
           expect(component.length).toBe(1)
       })
       it('Should render a H1', () => {
           const component = findByTestAttr(wrapper, 'header')
           expect(component.length).toBe(1)
       })
       it("Should render a desc", () => {
        const component = findByTestAttr(wrapper, 'desc')
        expect(component.length).toBe(1)
       })
   })
   describe('Have NO props', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = setUp();
        })
        it('Should not render', () => {
            const component = findByTestAttr(wrapper, 'HeadlineComponent')
           expect(component.length).toBe(0)
        })
   })
})


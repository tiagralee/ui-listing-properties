import React from 'react';
import Card from '../Card/Card';
import { shallow,mount } from 'enzyme';

describe('<Card/>', () => {
    // On result List
    it('should call save callback once if it is not saved', ()=> {
        const cb = jest.fn();
        const propertyCard = mount(
            <Card 
              onChange={cb}
              text={'Add'}
              isSaved={false}
            />
        );
        propertyCard.find('button').simulate('click')
        expect(cb.mock.calls.length).toEqual(1);
    });
    it('should not call save callback if is saved', ()=> {
        const cb = jest.fn();
        const propertyCard = mount(
            <Card 
              onChange={cb}
              text={'Saved'}
              isSaved={true}
            />
        );
        propertyCard.find('button').simulate('click')
        expect(cb.mock.calls.length).toEqual(0);
    });
    // On saved List
    it('should call save callback if it removes', ()=> {
        const cb = jest.fn();
        const propertyCard = mount(
            <Card 
              onChange={cb}
              text={'Remove'}
            />
        );
        propertyCard.find('button').simulate('click')
        expect(cb.mock.calls.length).toEqual(1);
    });
})

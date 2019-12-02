import React from 'react'
import Card from '../Card/Card'
import renderer from 'react-test-renderer'

const propertyTest = {
    "price": "$526,500",
    "agency": {
        "brandingColors": {
            "primary": "#000000"
        },
        "logo": "https://i2.au.reastatic.net/170x32/3015ba9710c7e3ddc2ac30f45fd7906df5b04e442a7f6948f75a6029b8b871e2/main.gif"
    },
    "id": "4",
    "mainImage": "https://i2.au.reastatic.net/640x480/5e84d96722dda3ea2a084d6935677f64872d1d760562d530c3cabfcb7bcda9c2/main.jpg"
};

describe("Property Card render", ()=>{
    it('renders ADD Card correctly', () =>{
        const cb = jest.fn();
        const tree = renderer.create(
            <Card
                key={propertyTest.id}
                price={propertyTest.price}
                image={propertyTest.mainImage}
                text={"Add"}
                isSaved={false}
                agency_colors={propertyTest.agency.brandingColors.primary}
                agency_logo={propertyTest.agency.logo}
                onChange={cb}
            />     
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('renders REMOVE Card correctly', () =>{
        const cb = jest.fn();
        const tree = renderer.create(
            <Card
                key={propertyTest.id}
                price={propertyTest.price}
                image={propertyTest.mainImage}
                text={"Remove"}
                agency_colors={propertyTest.agency.brandingColors.primary}
                agency_logo={propertyTest.agency.logo}
                onChange={cb}
            />     
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('renders SAVED Card correctly', () =>{
        const cb = jest.fn();
        const tree = renderer.create(
            <Card
                key={propertyTest.id}
                price={propertyTest.price}
                image={propertyTest.mainImage}
                text={"Saved"}
                isSaved={false}
                agency_colors={propertyTest.agency.brandingColors.primary}
                agency_logo={propertyTest.agency.logo}
                onChange={cb}
            />     
        ).toJSON();
        expect(tree).toMatchSnapshot();
    })
})
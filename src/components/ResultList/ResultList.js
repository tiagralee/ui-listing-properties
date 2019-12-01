import Card from '../Card/Card'
import React from 'react'
import * as Actions from '../../actions/actions'
import { useDispatch, useSelector } from 'react-redux'

const ResultList = () => {
    const dispatch = useDispatch();
    const { properties, savedProperties } = useSelector( state => ({
        properties: state.property.results,
        savedProperties: state.property.saved,
    }));
    const savedIds = savedProperties.map(property => property.id);
    const isSaved = (propertId) => savedIds.includes(propertId);

    return (
        properties.length > 0? 
        (
            <div>
            {
                properties.map(property =>
                   <Card 
                    key={property.id}
                    price={property.price}
                    image={property.mainImage}
                    agency_colors={property.agency.brandingColors.primary}
                    agency_logo={property.agency.logo}
                    text={isSaved(property.id)? "Saved": "Add"}
                    isSaved={isSaved(property.id)}
                    onChange={() => dispatch(Actions.saveProperty(property.id))}
                   />
                )
            }
            </div>
        ): <h4> Oops..No property found</h4>
    )
   
}


export default ResultList;
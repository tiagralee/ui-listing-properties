import Card from '../Card/Card'
import React from 'react'
import * as Actions from '../../actions/actions';
import { useDispatch, useSelector } from 'react-redux'

const SavedList = () => {
    // const savedProperties = useSelector(state => state.property.savedProperties);
    
    const { properties, savedProperties } = useSelector( state => ({
        properties: state.property.results,
        savedProperties: state.property.saved,
    }));

    const dispatch = useDispatch();

    return (
        <div> 
            {
                savedProperties.map((property, index) => 
                    <Card
                    key={property.id}
                    price={property.price}
                    image={property.mainImage}
                    text={'Remove'}
                    agency_colors={property.agency.brandingColors.primary}
                    agency_logo={property.agency.logo}
                    onChange={() => dispatch(Actions.removeProperty(property.id))}
                    />        
                )
            }
            {
                savedProperties.length > 0? 
                <h4> You have {savedProperties.length} saved properties</h4>
                : <h4> Hey you don't any saved properties</h4>
            }    
        </div>
    )
}


export default SavedList; 
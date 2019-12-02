import Card from '../Card/Card'
import React from 'react'
import * as Actions from '../../actions/actions';
import CARDSTATUS from '../Shared/CardStatus';
import { useDispatch, useSelector } from 'react-redux'

const SavedList = () => {
    const dispatch = useDispatch();
    const { properties, savedProperties } = useSelector(state => ({
        properties: state.property.results,
        savedProperties: state.property.saved,
    }));

    return (
        <div> 
            {
                savedProperties.map((property, index) => 
                    <Card
                    key={property.id}
                    price={property.price}
                    image={property.mainImage}
                    text={CARDSTATUS.REMOVE}
                    agency_colors={property.agency.brandingColors.primary}
                    agency_logo={property.agency.logo}
                    onChange={() => dispatch(Actions.removeProperty(property.id))}
                    />        
                )
            }
            {
                savedProperties.length > 0? 
                <span> You have {savedProperties.length} saved properties</span>
                : <span> Hey you don't any saved properties</span>
            }    
        </div>
    )
}

export default SavedList; 
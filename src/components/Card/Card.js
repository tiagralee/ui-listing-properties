import React from 'react'
import { CardWrapper, CardContent, CardBody, CardDetails, CardButton, CardHeader} from './Card_styles'
import PropTypes from 'prop-types'

const Card = (props) => {
    return(
         <CardWrapper>
            <CardBody>
                {/* agency logo and color */}
                <CardHeader color={props.agency_colors}>
                    <img src={props.agency_logo} alt="agency logo"></img>
                </CardHeader>
                <CardContent>
                    <img src={props.image} alt="property pic"/>
                </CardContent>  
                <CardDetails>
                    <span>Price: {props.price}</span>
                    <CardButton disabled={props.isSaved} onClick={props.onChange}>{props.text}</CardButton>
                </CardDetails>
            </CardBody>
        </CardWrapper>
    )
}

Card.prototype = {
    isSaved: PropTypes.bool,
    price: PropTypes.string,
    agency_logo: PropTypes.string,
    agency_colors: PropTypes.string,
    image: PropTypes.string,
    text: PropTypes.string,
    onChange: PropTypes.func
};

export default Card;
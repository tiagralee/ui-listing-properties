import React from 'react'
import { CardWrapper, CardLogo, CardImage, CardDetails, CardButton} from './Card_styles'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import ACTION_TYPES from '../../actions/action_types';

const Card = (props) => {

    const dispatch = useDispatch();
    return(
       <CardWrapper>
           <CardImage>
                <img src={props.image} alt="no pic"></img>
           </CardImage>
           <CardDetails>
                <CardLogo color={props.agency_colors}>
                        <img src={props.agency_logo} alt="no pic"></img>
                </CardLogo>
                <p>{props.price}</p>
           </CardDetails>
           <button onClick={ () => dispatch({type: ACTION_TYPES.SAVE_PROPERTY})}>
                {props.text}
           </button>
       </CardWrapper>
    )
}

Card.prototype = {
    price: PropTypes.string,
    agency_logo: PropTypes.string,
    agency_colors: PropTypes.string,
    image: PropTypes.string,
    text: PropTypes.string
};

export default Card;
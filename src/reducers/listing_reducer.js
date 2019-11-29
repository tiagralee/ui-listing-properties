import ACTION_TYPES from '../actions/action_types';

const initialState = {
    properties:[],
    savedProperties:["1","2"]
};

export default function (state = initialState, action){
    switch(action.type){
        // get the property list
        case ACTION_TYPES.GET_PROPERTY_LISTING: {
            const newState = {
                ...state,
                properties: action.payload
            };
            return newState;
        }
        // save new property
        case ACTION_TYPES.SAVE_PROPERTY: {
            const newState = {
                ...state,
                savedProperties: [...state.savedProperties, action.payload]
            }
            return newState;
        }
        // unsave a property
        case ACTION_TYPES.REMOVE_PROPERTY: {
            const newState = {
                ...state,
                // may prob
                savedProperties: state.properties.filter(property => property !== action.payload)
            };
            return newState;
        }
        default: return state;
    }
}

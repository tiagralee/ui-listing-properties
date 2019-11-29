import ACTION_TYPES from './action_types';

export const saveProperty = propertyId => ({
  type: ACTION_TYPES.SAVE_PROPERTY,
  propertyId
});

export const removeProperty = propertyId => ({
  type: ACTION_TYPES.REMOVE_PROPERTY,
  propertyId
});

export const getProperties = () => ({
  type: ACTION_TYPES.GET_PROPERTY_LISTING
});
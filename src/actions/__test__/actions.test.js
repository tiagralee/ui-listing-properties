import * as ACTIONS from '../actions'
import ACTION_TYPES from '../action_types'

describe('actions', () => {
  it('should create an action to save a property', () => {
    const propertyId = '1';
    const expectedAction = {
      type: ACTION_TYPES.SAVE_PROPERTY,
      propertyId: '1'
    }
    expect(ACTIONS.saveProperty(propertyId)).toEqual(expectedAction)
  });
  it('should create an action to remove a property', () => {
      const propertyId = '4';
      const expectedAction = {
          type: ACTION_TYPES.REMOVE_PROPERTY,
          propertyId: '4'
      }
      expect(ACTIONS.removeProperty(propertyId)).toEqual(expectedAction);
  })
})
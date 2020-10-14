import {DELETE_ITEM, EDIT_ITEM, ADD_ITEM} from '../actions/types';

const initialState = {
  items: [],
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.id != action.id),
      };
    case ADD_ITEM:
      return {
        ...state,
        items: state.items.concat({item: Math.random(), name: action.item}),
      };
    default:
      return state;
  }
};

export default itemReducer;

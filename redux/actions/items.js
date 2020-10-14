import {DELETE_ITEM, EDIT_ITEM, ADD_ITEM} from './types';

export const deleteItem = (id) => ({
  type: DELETE_ITEM,
  id,
});

export const addItem = (item) => ({
  type: ADD_ITEM,
  item,
});

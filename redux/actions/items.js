import {DELETE_ITEM, EDIT_ITEM} from './types';

export const deleteItem = (id) => ({
  type: DELETE_ITEM,
  id: id,
});

export const editItem = (id) => ({
  type: EDIT_ITEM,
  id: id,
});

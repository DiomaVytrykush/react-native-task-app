import {DELETE_ITEM, EDIT_ITEM, ADD_ITEM} from './types';

export const deleteItem = (id) => ({
  type: DELETE_ITEM,
  id,
});

export const addItem = (title, avatar, id, name, phone, time) => ({
  type: ADD_ITEM,
  title,
  avatar,
  id,
  name,
  phone,
  time,
});

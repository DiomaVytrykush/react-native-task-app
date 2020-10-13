import {DELETE_ITEM, EDIT_ITEM} from '../actions/types';

const initialState = {
  items: [
    {
      title: '11 Жовтня',
      data: [
        {
          id: '1',
          name: 'Morgan Horton',
          phone: '+1 (906) 403-3637',
          avatar: 'https://source.unsplash.com/random/100x100?face',
          time: '14:00',
        },
        {
          id: '2',
          name: 'Henrietta Franklin',
          phone: '+1 (986) 499-2017',
          avatar: 'https://source.unsplash.com/random/100x100?face',
          time: '14:00',
        },
        {
          id: '3',
          name: 'Brown Kirby',
          phone: '+1 (917) 493-2944',
          avatar: 'https://source.unsplash.com/random/100x100?face',
          time: '14:00',
        },
        {
          id: '4',
          name: 'Mable Blevins',
          phone: '+1 (954) 517-2947',
          avatar: 'https://source.unsplash.com/random/100x100?face',
          time: '14:00',
        },
        {
          id: '5',
          name: 'Deanna Wilkinson',
          phone: '+1 (953) 425-3668',
          avatar: 'https://source.unsplash.com/random/100x100?face',
          time: '14:00',
        },
        {
          id: '6',
          name: 'Patel Castillo',
          phone: '+1 (824) 447-3232',
          avatar: 'https://source.unsplash.com/random/100x100?face',
          time: '14:00',
        },
      ],
    },
    {
      title: '12 Жовтня',
      data: [
        {
          id: '7',
          name: 'Cleo Collins',
          phone: '+1 (952) 488-2242',
          avatar: 'https://source.unsplash.com/random/100x100?face',
          time: '14:00',
        },
        {
          id: '8',
          name: 'Robles Kelly',
          phone: '+1 (982) 579-2805',
          avatar: 'https://source.unsplash.com/random/100x100?face',
          time: '14:00',
        },
        {
          id: '9',
          name: 'Alyssa Macdonald',
          phone: '+1 (962) 536-3799',
          avatar: 'https://source.unsplash.com/random/100x100?face',
          time: '14:00',
        },
        {
          id: '10',
          name: 'Beverley Maldonado',
          phone: '+1 (936) 520-3813',
          avatar: 'https://source.unsplash.com/random/100x100?face',
          time: '14:00',
        },
      ],
    },
  ],
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((id) => action.id === id),
      };
    case EDIT_ITEM:
      return;
    default:
      return state;
  }
};

export default itemReducer;

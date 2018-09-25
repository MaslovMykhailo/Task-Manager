import * as types from '../constants/ActionTypes';

const createId = (name) => {
  return Math.round(Math.random() * 100) + '-' +
    name.toLowerCase().split(' ').join('-') +
    '-' + new Date().getDate();
};

export default (state = {}, action) => {
  switch (action.types) {
    case types.CREATE_PROJECT_CARD: {
      const { name, description, cardColor } = action.projectConfig;
      const id = createId(name);
      
      return { ...state, [id]: { name, description, cardColor }};
    }
    case types.EDIT_PROJECT_CARD: {
      const { id, name, description, cardColor } = action.projectConfig;
  
      return { ...state, [id]: { name, description, cardColor }};
    }
    default:
      return state;
  }
}
const defaultState = {
  signedIn: false
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'SIGN_IN': {
      return {
        signedIn: true
      }
    }
    default: return state;
  }
};
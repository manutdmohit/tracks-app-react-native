import createDataContext from './createDataContext';

const authReducer = (state, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

const signup = (dispatchc) => {
  return ({ email, password }) => {};
};

const signin = (dispatchc) => {
  return ({ email, password }) => {};
};

const signout = (dispatchc) => {
  return () => {};
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signout },
  { isSignedIn: false }
);

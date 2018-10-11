const initialState = {
  auth: {
    user: {},
    signin: {
      loading: false,
      error: ''
    },
    signup: {
      loading: false,
      error: ''
    },
    isAuthenticated: false
  },
  article: {
    article: {},
    isLoading: true,
    error: ''
  }
};

export default initialState;

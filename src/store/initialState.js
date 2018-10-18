const initialState = {
  auth: {
    user: {},
    signin: {
      loading: false,
      error: ""
    },
    signup: {
      loading: false,
      error: ""
    },
    isAuthenticated: false
  },
  comments: {
    articleComments: {
      data: [],
      error: "",
      loading: false
    },
    newComment: {
      data: {},
      error: "",
      loading: false
    }
  },
  articleCategory: {
    category: {
      isLoading: false,
      isError: false,
      data: {}
    },
    categories: {
      isLoading: false,
      isError: false,
      data: []
    }
  },
  article: {
    allArticle: {
      isLoading: false,
      error: false,
      data: []
    },
    oneArticle: {
      article: {
        author: {},
        tags: [{}]
      },
      loading: false,
      error: ""
    }
  },
  createArticle: {
    article: {},
    loading: false,
    error: {}
  },
  favoriteArticle: {
    loading: false,
    error: "",
    message: ""
  },
  relatedArticles: {
    articles: [],
    loading: true,
    error: ""
  },
  drafts: {
    newDraft: {
      data: {},
      error: "",
      loading: false
    },
    allDrafts: {
      data: [],
      error: "",
      loading: false
    },
  },
  articleUpdate: {
    data: {},
    loading: false,
    error: ""
  },
};
export default initialState;

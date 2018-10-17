import { articleComments, newComment } from '../../reducers/comments';
import * as types from '../../actionTypes/comments';

describe('articleComments reducer', () => {
  it('should return initial state', () => {
    expect(articleComments(undefined, {})).toEqual({
      data: [],
      error: '',
      loading: false,
    });
  });

  it('should handle FETCH_ARTICLE_COMMENTS_LOADING', () => {
    const action = {
      type: types.FETCH_ARTICLE_COMMENTS_LOADING,
      payload: true
    };
    expect(articleComments({}, action)).toEqual({
      loading: action.payload,
    });
  });

  it('should handle FETCH_ARTICLE_COMMENTS_SUCCESS', () => {
    const action = {
      type: types.FETCH_ARTICLE_COMMENTS_SUCCESS,
      payload: [{id: 1, comment: 'the comment'}]
    };
    expect(articleComments({}, action)).toEqual({
      data: action.payload,
    });
  });

  it('should handle FETCH_ARTICLE_COMMENTS_FAILURE', () => {
    const action = {
      type: types.FETCH_ARTICLE_COMMENTS_FAILURE,
      payload: 'some error'
    };
    expect(articleComments({}, action)).toEqual({
      error: action.payload,
    });
  });

  it('should handle LIKE_COMMENT', () => {
    const action = {
      type: types.LIKE_COMMENT,
      key: 0
    }

    const mockState = {
      data: [{
        liked: false,
        disliked: false,
        likesCount: 3,
        dislikesCount: 5,
      }]
    }
    expect(articleComments(mockState, action)).toEqual({
      data: [{
        liked: true,
        disliked: false,
        likesCount: 4,
        dislikesCount: 5,
      }]
    })
  });

  it('should handle DISLIKE_COMMENT', () => {
    const action = {
      type: types.DISLIKE_COMMENT,
      key: 0
    }

    const mockState = {
      data: [{
        liked: false,
        disliked: false,
        likesCount: 3,
        dislikesCount: 5,
      }]
    }
    expect(articleComments(mockState, action)).toEqual({
      data: [{
        liked: false,
        disliked: true,
        likesCount: 3,
        dislikesCount: 6,
      }]
    })
  });

});

describe('newComment reducer', () => {
  it('should return initial state', () => {
    expect(newComment(undefined, {})).toEqual({
      data: {},
      error: '',
      loading: false,
    });
  });

 it('should handle CREATE_COMMENT_REQUEST', () => {
    const action = {
      type: types.CREATE_COMMENT_REQUEST,
      payload: true
    };
    expect(newComment({}, action)).toEqual({
      loading: action.payload,
    });
  });

  it('should handle CREATE_COMMENT_SUCCESS', () => {
    const action = {
      type: types.CREATE_COMMENT_SUCCESS,
      payload: {id: 1, body: 'commentOne'}
    };
    expect(newComment({}, action)).toEqual({
      data: action.payload,
    });
    expect(articleComments({data: ['one']}, action)).toEqual({
      data: [action.payload, 'one']
    })
  });

  it('should handle CREATE_COMMENT_FAILED', () => {
    const action = {
      type: types.CREATE_COMMENT_FAILED,
      payload: 'some errors'
    };
    expect(newComment({}, action)).toEqual({
      error: action.payload,
    });
  });
});

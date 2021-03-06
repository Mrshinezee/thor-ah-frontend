import React from "react";
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import Articles from '../../components/Articles/Articles';
import initialState from '../../store/initialState';


const state = {
  ...initialState,
  allArticleReducer: {
    data: [],
    count: 0,
  },
  recommendedReducer: {
    data: [],
    count: 0,
  }
}

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore(state);

describe('Articles Component', () => {
  test("renders the Articles Component", () => {
    const wrapper = mount(
      <Provider store={store}>
        <Articles/>
      </Provider>
    );
    expect(wrapper.exists()).toBe(true);
  });
});

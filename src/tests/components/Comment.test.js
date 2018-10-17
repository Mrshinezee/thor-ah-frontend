import React from "react";
import { mount, render } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import Comment from "../../components/Comment/Comment";

const mockStore = configureMockStore();
const store = mockStore({});

describe("Comment Component", () => {
  test("renders the Comment Component", () => {
    const comment = {
      commenter: {
        firstName: 'John'
      }
    }
    const wrapper = mount(
      <Provider store={store}>
        <Comment comment={comment} />
      </Provider>
    );
    expect(wrapper.exists()).toBe(true);
  });
});

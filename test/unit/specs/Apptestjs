import Vue from "vue";
import App from "@/App";
import { shallow } from "vue-test-utils";

describe("App", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(App);
    wrapper.setData({
      messages: ["Hello there General Kenobi!"]
    });
  });

  it("equals messages to ['Hello there General Kenobi!']", () => {
    expect(wrapper.vm.messages).toEqual(["Hello there General Kenobi!"]);
  });

  it("has the expected html structure", () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});

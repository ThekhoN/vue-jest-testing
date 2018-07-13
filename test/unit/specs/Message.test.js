import Vue from "vue";
import Message from "@/components/Message";
import { mount } from "vue-test-utils";

describe("Message", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(Message, {
      propsData: {
        message: "Hello there!"
      }
    });
  });

  it("contains text matching message props", () => {
    expect(wrapper.text()).toContain("Hello there!");
  });
});

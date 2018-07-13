import Vue from "vue";
import Message from "@/components/Message";
import { mount } from "vue-test-utils";

describe("Message", () => {
  let cmp;
  beforeEach(() => {
    cmp = mount(Message, {
      propsData: {
        message: "Hello there!"
      }
    });
  });

  it("contains text matching message props", () => {
    expect(cmp.text()).toContain("Hello there!");
  });
});

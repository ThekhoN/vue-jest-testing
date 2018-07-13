import Vue from "vue";
import Resetor from "@/components/counter/components/Resetor";
import { mount } from "vue-test-utils";

describe("Resetor", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(Resetor);
  });
  it("it calls resetCount on clicking button", () => {
    const stub = jest.fn();
    wrapper.setMethods({
      resetCount: stub
    });
    const button = wrapper.find("button");
    button.trigger("click");
    expect(stub).toBeCalled();
  });
});

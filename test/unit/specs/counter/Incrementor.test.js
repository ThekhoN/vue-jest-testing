import Vue from "vue";
import Incrementor from "@/components/counter/components/Incrementor";
import { mount } from "vue-test-utils";

describe("Incrementor", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(Incrementor);
  });
  it("it calls incrementCount on clicking button", () => {
    const stub = jest.fn();
    wrapper.setMethods({
      incrementCount: stub
    });
    const button = wrapper.find("button");
    button.trigger("click");
    expect(stub).toBeCalled();
  });
});

import Vue from "vue";
import Decrementor from "@/components/counter/components/Decrementor";
import { mount } from "vue-test-utils";

describe("Decrementor", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(Decrementor);
  });
  it("it calls decrementCount on clicking button", () => {
    // ONE WAY OF DOING IT
    // const spy = jest.spyOn(wrapper.vm, "decrementCount");
    // wrapper.update();
    // const button = wrapper.find("button");
    // button.trigger("click");
    // expect(wrapper.vm.decrementCount).toBeCalled();

    // ANOTHER WAY TO DO IT
    const stub = jest.fn();
    wrapper.setMethods({
      decrementCount: stub
    });
    const button = wrapper.find("button");
    button.trigger("click");
    expect(stub).toBeCalled();
  });
});

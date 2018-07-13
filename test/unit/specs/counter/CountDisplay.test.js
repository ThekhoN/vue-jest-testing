import Vue from "vue";
import CountDisplay from "@/components/counter/components/CountDisplay";
import { mount } from "vue-test-utils";

describe("CountDisplay", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(CountDisplay, {
      propsData: {
        count: 0
      }
    });
  });
  it("contains text matching count props", () => {
    expect(wrapper.text()).toContain("0");
  });

  it("contains h2 tag", () => {
    const h2 = wrapper.find("h2");
    expect(h2.is("h2")).toBe(true);
  });

  // it("contains ONE h2 tag", () => {
  //   const h2 = wrapper.find("h2");
  //   expect(h2).toHaveLength(1);
  // });
});

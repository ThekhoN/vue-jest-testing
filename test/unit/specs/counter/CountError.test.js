import Vue from "vue";
import CountError from "@/components/counter/components/CountError";
import { mount } from "vue-test-utils";

const nonDefaultError = "WE HAVE AN ERROR!!!";
describe("CountError", () => {
  let wrapper, defaultWrapper;
  beforeEach(() => {
    wrapper = mount(CountError, {
      propsData: {
        error: nonDefaultError
      }
    });
    // for testing default props...
    defaultWrapper = mount(CountError, {
      propsData: {}
    });
  });

  it("contains text matching count props", () => {
    expect(wrapper.text()).toContain(nonDefaultError);
  });

  it("has correct prop === count props", () => {
    expect(wrapper.props("error", nonDefaultError)).toBeTruthy();
  });

  it("has correct default props", () => {
    expect(defaultWrapper.props("error", "Error in Service...")).toBeTruthy();
  });
});

import { mount } from "vue-test-utils";
import MessageList from "../../../src/components/MessageList";

describe("MessageList", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(MessageList, {
      propsData: {
        messages: ["Cat"]
      }
    });
  });
  it("receives ['Cat'] as message property", () => {
    expect(wrapper.vm.messages).toEqual(["Cat"]);
  });
  it("renders li for each message in messages", () => {
    expect(wrapper.findAll("li")).toHaveLength(1);
  });
});

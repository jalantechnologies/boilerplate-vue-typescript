import { shallowMount } from "@vue/test-utils";
import BaseLabel from "@/components/base-label/index.vue";

describe("BaseLabel.vue", () => {
  it("should mount component", () => {
    const wrapper = shallowMount(BaseLabel);
    expect(wrapper.exists()).toBeTruthy();
  });
});

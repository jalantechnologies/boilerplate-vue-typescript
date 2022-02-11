import { shallowMount } from "@vue/test-utils";
import BaseButton from "@/components/base-button/index.vue";

describe("BaseButton.vue", () => {
  it("should mount button component", () => {
    const wrapper = shallowMount(BaseButton);
    expect(wrapper.exists()).toBeTruthy();
  });
});

it("should emit click when button is clicked", () => {
  const wrapper = shallowMount(BaseButton, {
    props: {
      disabled: false,
    },
  });
  wrapper.find("button").trigger("click");
  expect(wrapper.emitted("click")).toBeTruthy();
});

it("should not emit click when button is disabled", () => {
  const wrapper = shallowMount(BaseButton, {
    props: {
      disabled: true,
    },
  });
  wrapper.find("button").trigger("click");
  expect(wrapper.emitted("click")).toBeUndefined();
});

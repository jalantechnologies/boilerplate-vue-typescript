import { shallowMount } from "@vue/test-utils";
import BaseInput from "@/components/base-input/index.vue";

describe("BaseInput.vue", () => {
  it("should mount button component", () => {
    const wrapper = shallowMount(BaseInput);
    expect(wrapper.exists()).toBeTruthy();
  });

  it("should emit focus on Focus", () => {
    const wrapper = shallowMount(BaseInput);
    wrapper.find("input").trigger("focus");
    expect(wrapper.emitted("focus")).toBeTruthy();
  });

  it("should emit blur on blur", () => {
    const wrapper = shallowMount(BaseInput);
    wrapper.find("input").trigger("blur");
    expect(wrapper.emitted("blur")).toBeTruthy();
  });

  it("should emit input on input", () => {
    const wrapper = shallowMount(BaseInput);
    wrapper.find("input").trigger("blur");
    expect(wrapper.emitted("blur")).toBeTruthy();
  });

  it("should not emit focus on Focus if disabled", () => {
    const wrapper = shallowMount(BaseInput, {
      props: {
        disabled: true,
      },
    });
    wrapper.find("input").trigger("focus");
    expect(wrapper.emitted("focus")).toBeUndefined();
  });

  it("should not emit blur on blur if disabled", () => {
    const wrapper = shallowMount(BaseInput, {
      props: {
        disabled: true,
      },
    });
    wrapper.find("input").trigger("blur");
    expect(wrapper.emitted("blur")).toBeUndefined();
  });

  it("should not emit input on input if disabled", () => {
    const wrapper = shallowMount(BaseInput, {
      props: {
        disabled: true,
      },
    });
    wrapper.find("input").trigger("input");
    expect(wrapper.emitted("input")).toBeUndefined();
  });

  it("should show label if label is passed", () => {
    const wrapper = shallowMount(BaseInput, {
      props: {
        label: "test",
      },
    });
    wrapper.find("labelClasses");
    expect(wrapper.text()).toBe("test");
  });

  it("should show error if error is passed", () => {
    const wrapper = shallowMount(BaseInput, {
      props: {
        label: "test",
      },
    });
    wrapper.find("invalid-feedback");
    expect(wrapper.text()).toBe("test");
  });

  it("should show info if info is passed", () => {
    const wrapper = shallowMount(BaseInput, {
      props: {
        label: "test",
      },
    });
    wrapper.find("infoBlock");
    expect(wrapper.text()).toBe("test");
  });
});

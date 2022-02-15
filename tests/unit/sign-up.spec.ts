import { shallowMount } from "@vue/test-utils";
import SignUp from "@/views/sign-up/index.vue";

describe("SignUp.vue", () => {
  it("renders message when component is created", () => {
    const wrapper = shallowMount(SignUp);
    expect(wrapper.vm.$options.name).toMatch("SignUp");
  });
});

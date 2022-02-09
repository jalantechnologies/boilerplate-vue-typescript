import { shallowMount } from "@vue/test-utils";
import App from "@/app.vue";

describe("App.vue", () => {
  it("should mount component", () => {
    const wrapper = shallowMount(App);
    expect(wrapper.exists()).toBeTruthy();
  });
});

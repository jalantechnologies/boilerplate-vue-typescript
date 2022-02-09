import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/hello-world/index.vue";

describe("HelloWorld.vue", () => {
  it("should mount component", () => {
    const wrapper = shallowMount(HelloWorld);
    expect(wrapper.exists()).toBeTruthy();
  });
});

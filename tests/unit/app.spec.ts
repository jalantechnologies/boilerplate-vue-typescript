import { shallowMount } from "@vue/test-utils";
import App from "@/app.vue";
import { mount } from "@vue/test-utils";
import Home from "@/views/home/index.vue";
import SignUp from "@/views/sign-up/index.vue";
import { createRouter, createMemoryHistory } from "vue-router";
import { routes } from "../../src/router";


describe("App.vue", () => {
  it("should mount component", () => {
    const router = createRouter({
      history: createMemoryHistory(),
      routes,
    });
    const wrapper = shallowMount(App, {
      global: {
        plugins: [router],
      },
    });
    expect(wrapper.exists()).toBeTruthy();
  });

  it("renders Home component on /", async () => {
    const router = createRouter({
      history: createMemoryHistory(),
      routes,
    });
    router.push("/");
    await router.isReady();
    const wrapper = mount(App, {
      global: {
        plugins: [router],
      },
    });
    expect(wrapper.findComponent(Home).exists()).toBe(true);
  });

  it("renders Signup component on /signup", async () => {
    const router = createRouter({
      history: createMemoryHistory(),
      routes,
    });
    router.push("/signup");
    await router.isReady();
    const wrapper = mount(App, {
      global: {
        plugins: [router],
      },
    });
    expect(wrapper.findComponent(SignUp).exists()).toBe(true);
  });
});

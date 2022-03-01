import { mount } from "@vue/test-utils";
import { createStore } from 'vuex';
import SignUp from "../../src/views/sign-up/index.vue";
import BaseInput from "../../src/components/base-input/index.vue";
import BaseButton from "../../src/components/base-button/index.vue";
import { createMemoryHistory, createRouter } from "vue-router";
import { routes } from "../../src/router";

describe("Signup.vue", () => {

  const router = createRouter({
    history: createMemoryHistory(),
    routes,
  });

  const actions = { register: jest.fn() }

  const store = createStore({
    modules: {
      account: {
        actions: actions,
        namespaced: true,
      }
    }
  })
  store.dispatch = jest.fn()

  it("should throw a validation error if no input is provided.", async () => {
    const wrapper = mount(SignUp, {
      stubs: {
        BaseButton: true,
        BaseInput: true
      },
      global: {
        plugins: [router],
      },

    });
    await wrapper.find("button").trigger("click")
    expect(wrapper.findAllComponents(BaseInput)).toHaveLength(3);
    expect(wrapper.findAllComponents(BaseInput)[0].props().errors[0]).toBe('Username field is required.');
    expect(wrapper.findAllComponents(BaseInput)[1].props().errors[0]).toBe('Password field is required.');
    expect(wrapper.findAllComponents(BaseInput)[2].props().errors[0]).toBe('Confirm Password field is required.');
  });

  it("should throw a validation error if invalid email type username is provided.", async () => {
    const wrapper = mount(SignUp, {
      stubs: {
        BaseButton: true,
        BaseInput: true
      },
      global: {
        plugins: [router],
      },
    });
    wrapper.vm.user = {
      username: 'test@test',
      password: 'asdasd',
      confirmPassword: 'asdasd'
    };
    await wrapper.find("button").trigger("click")
    expect(wrapper.findAllComponents(BaseInput)).toHaveLength(3);
    expect(wrapper.findAllComponents(BaseInput)[0].props().errors[0]).toBe('Please enter a valid email address.');
    expect(wrapper.findAllComponents(BaseInput)[1].props().errors[0]).toBeUndefined();
    expect(wrapper.findAllComponents(BaseInput)[2].props().errors[0]).toBeUndefined();
  });

  it("should throw a validation error if confirm password does not match.", async () => {
    const wrapper = mount(SignUp, {
      stubs: {
        BaseButton: true,
        BaseInput: true
      },
      global: {
        plugins: [router],
      },
    });
    wrapper.vm.user = {
      username: 'test@test.com',
      password: 'asdasd',
      confirmPassword: 'asdadss'
    };
    await wrapper.find("button").trigger("click")
    expect(wrapper.findAllComponents(BaseInput)).toHaveLength(3);
    expect(wrapper.findAllComponents(BaseInput)[0].props().errors[0]).toBeUndefined();
    expect(wrapper.findAllComponents(BaseInput)[1].props().errors[0]).toBeUndefined();
    expect(wrapper.findAllComponents(BaseInput)[2].props().errors[0]).toBe('Confirm Password must be same as Password field.');
  });

  it("should not throw a validation error if valid input is provided.", async () => {
    const wrapper = mount(SignUp, {
      stubs: {
        BaseButton: true,
        BaseInput: true
      },
      global: {
        plugins: [router],
      },
    });
    wrapper.vm.user = {
      username: 'test@test.com',
      password: 'asdasd',
      confirmPassword: 'asdasd'
    };
    expect(wrapper.findAllComponents(BaseInput)).toHaveLength(3);

    const usernameInput = wrapper.findAllComponents(BaseInput)[0];
    const passwordInput = wrapper.findAllComponents(BaseInput)[1];
    const confirmPasswordInput = wrapper.findAllComponents(BaseInput)[2];

    expect(usernameInput.props().errors[0]).toBeUndefined();
    expect(passwordInput.props().errors[0]).toBeUndefined();
    expect(confirmPasswordInput.props().errors[0]).toBeUndefined();
  });
})

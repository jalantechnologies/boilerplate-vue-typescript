import { shallowMount } from "@vue/test-utils";
import Vuex from 'vuex'
import SignUp from "@/views/sign-up/index.vue";
import { ScreenState, CreateAccountParam } from "@/types";
import { ref } from "vue";
import useVuelidate from "@vuelidate/core";

describe("SignUp.vue", () => {
  it("renders message when component is created", () => {
    const wrapper = shallowMount(SignUp);
    expect(wrapper.vm.$options.name).toMatch("SignUp");
  });

  it("should not validate all fields are empty", async () => {
    const wrapper = shallowMount(SignUp, {
      setup() {
        const user = ref<CreateAccountParam>({
          username: "",
          password: "",
          confirmPassword: "",
        });
        const state = ref<ScreenState>(ScreenState.DEFAULT);
        return {
          user,
          state,
          v$: useVuelidate(),
        };
      },
      plugins: [Vuex],
    });
    expect(wrapper.vm.v$.user.confirmPassword.$invalid).toBe(true);
    expect(wrapper.vm.v$.user.password.$invalid).toBe(true);
    expect(wrapper.vm.v$.user.username.$invalid).toBe(true);
  });

  it("should not validate if email is not valid", async () => {
    const wrapper = shallowMount(SignUp, {
      setup() {
        const user = ref<CreateAccountParam>({
          username: "test",
          password: "asdasd",
          confirmPassword: "asdasd",
        });
        const state = ref<ScreenState>(ScreenState.DEFAULT);
        return {
          user,
          state,
          v$: useVuelidate(),
        };
      },
      plugins: [Vuex],
    });
    expect(wrapper.vm.v$.user.confirmPassword.$invalid).toBe(false);
    expect(wrapper.vm.v$.user.password.$invalid).toBe(false);
    expect(wrapper.vm.v$.user.username.$invalid).toBe(true);
  });

  it("should validate if password does not match", async () => {
    const wrapper = shallowMount(SignUp, {
      setup() {
        const user = ref<CreateAccountParam>({
          username: "test@test.com",
          password: "asdasd",
          confirmPassword: "asdasda",
        });
        const state = ref<ScreenState>(ScreenState.DEFAULT);
        return {
          user,
          state,
          v$: useVuelidate(),
        };
      },
      plugins: [Vuex],
    });
    expect(wrapper.vm.v$.user.confirmPassword.$invalid).toBe(true);
    expect(wrapper.vm.v$.user.password.$invalid).toBe(false);
    expect(wrapper.vm.v$.user.username.$invalid).toBe(false);
  });

  it("should validate if password length is less than 6", async () => {
    const wrapper = shallowMount(SignUp, {
      setup() {
        const user = ref<CreateAccountParam>({
          username: "test@test.com",
          password: "asdas",
          confirmPassword: "asdas",
        });
        const state = ref<ScreenState>(ScreenState.DEFAULT);
        return {
          user,
          state,
          v$: useVuelidate(),
        };
      },
      plugins: [Vuex],
    });
    expect(wrapper.vm.v$.user.confirmPassword.$invalid).toBe(true);
    expect(wrapper.vm.v$.user.password.$invalid).toBe(true);
    expect(wrapper.vm.v$.user.username.$invalid).toBe(false);
  });

  it("should validate if all fields are valid", async () => {
    const wrapper = shallowMount(SignUp, {
      setup() {
        const user = ref<CreateAccountParam>({
          username: "test@test.com",
          password: "asdasd",
          confirmPassword: "asdasd",
        });
        const state = ref<ScreenState>(ScreenState.DEFAULT);
        return {
          user,
          state,
          v$: useVuelidate(),
        };
      },
      plugins: [Vuex],
    });
    expect(wrapper.vm.v$.user.confirmPassword.$invalid).toBe(false);
    expect(wrapper.vm.v$.user.password.$invalid).toBe(false);
    expect(wrapper.vm.v$.user.username.$invalid).toBe(false);
  });
});

import { defineComponent, ref } from "vue";
import BaseInput from "@/components/base-input/index.vue";
import BaseButton from "@/components/base-button/index.vue";
import TheCard from "@/components/the-card/index.vue";
import useVuelidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
import { LoginUserDetail } from "@/types/interface";
import { ScreenState } from "@/types/enums";
import { mapActions, mapGetters } from "vuex";

export default defineComponent({
  name: "Login",
  components: {
    BaseInput,
    BaseButton,
    TheCard,
  },
  setup() {
    const user = ref<LoginUserDetail>({
      email: "",
      password: "",
    });
    const submitButtonState = ref<ScreenState>(ScreenState.DEFAULT);
    return {
      user,
      v$: useVuelidate(),
      ScreenState,
      submitButtonState,
    };
  },
  computed: {
    ...mapGetters("account", { state: "status" }),
  },
  methods: {
    ...mapActions("account", ["login"]),
    updateUser(value: string, id: string) {
      switch (id) {
        case "email":
          this.user.email = value;
          break;
        case "password":
          this.user.password = value;
          break;
      }
    },
    async registerUser() {
      this.submitButtonState = ScreenState.LOADED;
      this.v$.$touch();
      if (this.v$.$invalid) {
        return false;
      }
      const data = await this.login(this.user);
      if (this.state == ScreenState.LOADED) {
        alert(`Successfully Logged in!`);
      }
      if (this.state == ScreenState.ERROR) {
        alert(`Error response ${data.error}`);
      }
      return true;
    },
  },
  validations() {
    return {
      user: {
        email: { required, email },
        password: { required, minLength: minLength(6) },
      },
    };
  },
});

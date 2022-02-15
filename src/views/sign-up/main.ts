import { defineComponent, ref } from "vue";
import BaseInput from "@/components/base-input/index.vue";
import BaseButton from "@/components/base-button/index.vue";
import TheCard from "@/components/the-card/index.vue";
import useVuelidate from "@vuelidate/core";
import { required, email, minLength, sameAs } from "@vuelidate/validators";
import { User } from "@/types/interface";
import { ScreenState } from "@/types/enums";
import { mapActions, mapGetters } from "vuex";

export default defineComponent({
  name: "SignUp",
  components: {
    BaseInput,
    BaseButton,
    TheCard,
  },
  setup() {
    const user = ref<User>({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
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
    ...mapActions("account", ["register"]),
    updateUser(value: string, id: string) {
      switch (id) {
        case "firstName":
          this.user.firstName = value;
          break;
        case "lastName":
          this.user.lastName = value;
          break;
        case "email":
          this.user.email = value;
          break;
        case "password":
          this.user.password = value;
          break;
        case "confirmPassword":
          this.user.confirmPassword = value;
          break;
      }
    },
    async registerUser() {
      this.submitButtonState = ScreenState.LOADED;
      this.v$.$touch();
      if (this.v$.$invalid) {
        return false;
      }
      const data = await this.register(this.user);
      if (this.state == ScreenState.LOADED) {
        alert(`Successfully Signed Up!`);
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
        firstName: { required },
        lastName: { required },
        email: { required, email },
        password: { required, minLength: minLength(6) },
        confirmPassword: {
          required,
          minLength: minLength(6),
          sameAsPassword: sameAs(this.user.password),
        },
      },
    };
  },
});

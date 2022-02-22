import { defineComponent, ref } from "vue";
import zxcvbn from 'zxcvbn';
import BaseInput from "@/components/base-input/index.vue";
import BaseButton from "@/components/base-button/index.vue";
import TheCard from "@/components/the-card/index.vue";
import useVuelidate from "@vuelidate/core";
import { required, email, minLength, sameAs } from "@vuelidate/validators";
import { User } from "@/types/interface";
import { ScreenState } from "@/types/enums";
import { mapActions, mapGetters } from "vuex";
import { ValidationFailure } from "@/models";

export default defineComponent({
  name: "SignUp",
  components: {
    BaseInput,
    BaseButton,
    TheCard,
  },
  setup() {
    const user = ref<User>({
      username: "",
      password: "",
      confirmPassword: "",
    });
    const validationFailureErrors = ref({
      username: "",
      password: "",
    });
    const reponseMessage = ref<string>('');
    const passwordStrength = ref<string>("");
    const submitButtonState = ref<ScreenState>(ScreenState.DEFAULT);
    return {
      passwordStrength,
      reponseMessage,
      user,
      v$: useVuelidate(),
      ScreenState,
      submitButtonState,
      validationFailureErrors,
    };
  },
  computed: {
    ...mapGetters("account", { state: "status", error: "error", validationFailures: "validationFailures" }),
  },
  methods: {
    ...mapActions("account", ["register"]),
    updateUser(value: string, id: string) {
      this.validationFailureErrors.password = '';
      this.validationFailureErrors.username = '';
      switch (id) {
        case "username":
          this.user.username = value;
          break;
        case "password":
          this.passwordStrength = this.getPasswordStrength(value);
          this.user.password = value;
          break;
        case "confirmPassword":
          this.user.confirmPassword = value;
          break;
      }
    },
    getPasswordStrength(value: string) {
      switch (zxcvbn(value).score) {
        case 0:
          return 'weak';
        case 1:
          return 'weak';
        case 2:
          return 'medium';
        case 3:
          return 'medium';
        case 4:
          return 'strong';
      }
    },
    async registerUser() {
      this.submitButtonState = ScreenState.LOADED;
      if (this.validateUser()) {
        return;
      }
      await this.register(this.user);
      if (this.state == ScreenState.LOADED) {
        this.reponseMessage = 'Successfully Signed Up!';
      }
      if (this.state == ScreenState.ERROR) {
        this.reponseMessage = this.error;
        this.validationFailureErrors.password = this.validationFailures?.find((element: ValidationFailure) => element.field == 'password')?.message;
        this.validationFailureErrors.username = this.validationFailures?.find((element: ValidationFailure) => element.field == 'username')?.message;
      }
      return true;
    },
    validateUser(): boolean {
      this.v$.$touch();
      if (this.v$.$invalid) {
        return false;
      }
      return true;
    }
  },
  validations() {
    return {
      user: {
        username: { required, email },
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

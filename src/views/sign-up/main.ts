import { defineComponent, ref } from "vue";
import zxcvbn from 'zxcvbn';
import BaseInput from "@/components/base-input/index.vue";
import BaseButton from "@/components/base-button/index.vue";
import TheCard from "@/components/the-card/index.vue";
import useVuelidate from "@vuelidate/core";
import { required, email, minLength, sameAs, helpers } from "@vuelidate/validators";
import { CreateAccountParam } from "@/types/interface";
import { RequestState, ScreenState } from "@/types/enums";
import { mapActions, mapGetters } from "vuex";
import { getErrorMessage } from "@/utils";
import { ValidationFailure } from "@/models";

export default defineComponent({
  name: "SignUp",
  components: {
    BaseInput,
    BaseButton,
    TheCard,
  },
  setup() {
    const user = ref<CreateAccountParam>({
      username: "",
      password: "",
      confirmPassword: "",
    });

    const validationFailureErrors = ref<{
      username: ValidationFailure[],
      password: ValidationFailure[],
    }>({
      username: [],
      password: [],
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
      this.validationFailureErrors.password = [];
      this.validationFailureErrors.username = [];
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
      if (!this.validateUser()) {
        return;
      }
      await this.register(this.user);
      if (this.state == RequestState.FINISHED_SUCCESSFULLY) {
        this.reponseMessage = 'Successfully Signed Up!';
      }
      if (this.state == RequestState.FAILED) {
        this.reponseMessage = this.error;
        this.validationFailureErrors.password = getErrorMessage(this.validationFailures, 'password')
        this.validationFailureErrors.username = getErrorMessage(this.validationFailures, 'username')
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
        username: {
          required: helpers.withMessage('Username field is required.', required),
          email: helpers.withMessage('Please enter a valid email address.', email),
        },
        password: {
          required: helpers.withMessage('Password field is required.', required),
          minLength: helpers.withMessage('Password should be at least 6 characters long.', minLength(6))
        },
        confirmPassword: {
          required: helpers.withMessage('Confirm Password field is required.', required),
          minLength: helpers.withMessage('Confirm Password should be at least 6 characters long.', minLength(6)),
          sameAsPassword: helpers.withMessage('Confirm Password must be same as Password field.', sameAs(this.user.password)),
        },
      },
    };
  },
});

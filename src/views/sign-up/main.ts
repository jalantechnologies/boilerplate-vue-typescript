import { defineComponent } from "vue";
import BaseInput from "@/components/base-input/index.vue";
import BaseButton from "@/components/base-button/index.vue";
import TheCard from "@/components/the-card/index.vue";
import useVuelidate from "@vuelidate/core";
import { CreateAccountParam } from "@/types/interface";
import { ScreenState } from "@/types/enums";
import { mapActions, mapGetters } from "vuex";
import { getErrorMessage, getPasswordStrength, validationRules } from "@/utils";

export default defineComponent({
  name: "SignUp",
  components: {
    BaseInput,
    BaseButton,
    TheCard,
  },
  setup: () => {
    return { v$: useVuelidate() }
  },
  data(): {
    user: CreateAccountParam;
    validationFailureErrors: {
      username: string[];
      password: string[];
    };
    reponseMessage: string;
    passwordStrength: string;
    submitButtonState: ScreenState;
  } {
    return {
      user: <CreateAccountParam>{
        username: "",
        password: "",
        confirmPassword: "",
      },
      validationFailureErrors: <{
        username: string[],
        password: string[],
      }>({
        username: [],
        password: [],
      }),
      reponseMessage: <string>'',
      passwordStrength: <string>'',
      submitButtonState: <ScreenState>ScreenState.DEFAULT
    }
  },
  computed: {
    ...mapGetters("account", ["account", "isLoggedIn"]),
  },
  methods: {
    ...mapActions("account", ["register"]),
    async registerUser(): Promise<boolean> {
      this.submitButtonState = ScreenState.LOADED_NO_DATA;
      this.v$.$touch();
      if (this.v$.$invalid) {
        return false;
      }
      this.submitButtonState = ScreenState.LOADING;

      const response = await this.register(this.user);

      if (response.hasData()) {
        this.reponseMessage = 'Successfully Signed Up!';
      }
      if (response.hasError() && response.error) {
        this.reponseMessage = response.error.error;
        this.validationFailureErrors.password = getErrorMessage(response.error.validationFailures, 'password')
        this.validationFailureErrors.username = getErrorMessage(response.error.validationFailures, 'username')
      }
      this.submitButtonState = ScreenState.LOADED;
      return true;
    },
    updateUser(value: string, id: string) {
      this.validationFailureErrors.password = [];
      this.validationFailureErrors.username = [];
      switch (id) {
        case "username":
          this.user.username = value;
          break;
        case "password":
          this.passwordStrength = getPasswordStrength(value);
          this.user.password = value;
          break;
        case "confirmPassword":
          this.user.confirmPassword = value;
          break;
      }
    },
  },
  validations() {
    return validationRules(this.user)
  },
});

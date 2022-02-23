import { defineComponent, ref } from "vue";
import BaseInput from "@/components/base-input/index.vue";
import BaseButton from "@/components/base-button/index.vue";
import TheCard from "@/components/the-card/index.vue";
import useVuelidate from "@vuelidate/core";
import { CreateAccountParam } from "@/types/interface";
import { ScreenState } from "@/types/enums";
import { useStore } from "vuex";
import { getErrorMessage, getPasswordStrength, validationRules } from "@/utils";
import { ServiceResponse } from "@/services/api";

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
      username: string[],
      password: string[],
    }>({
      username: [],
      password: [],
    });

    const reponseMessage = ref<string>('');
    const passwordStrength = ref<string>("");
    const submitButtonState = ref<ScreenState>(ScreenState.DEFAULT);

    const register = (user: CreateAccountParam): Promise<ServiceResponse<Account>> => store.dispatch('account/register', user);

    const store = useStore()
    const v$ = useVuelidate()

    const registerUser = async () => {
      submitButtonState.value = ScreenState.LOADED_NO_DATA;
      if (!validateUser()) {
        return;
      }

      submitButtonState.value = ScreenState.LOADING;
      const response = await register(user.value);
      if (response.hasData()) {
        reponseMessage.value = 'Successfully Signed Up!';
      }
      if (response.hasError() && response.error) {
        reponseMessage.value = response.error.error;
        validationFailureErrors.value.password = getErrorMessage(response.error.validationFailures, 'password')
        validationFailureErrors.value.username = getErrorMessage(response.error.validationFailures, 'username')
      }
      submitButtonState.value = ScreenState.LOADED;
      return true;
    }

    const updateUser = (value: string, id: string) => {
      validationFailureErrors.value.password = [];
      validationFailureErrors.value.username = [];
      switch (id) {
        case "username":
          user.value.username = value;
          break;
        case "password":
          passwordStrength.value = getPasswordStrength(value);
          user.value.password = value;
          break;
        case "confirmPassword":
          user.value.confirmPassword = value;
          break;
      }
    }

    const validateUser = (): boolean => {
      v$.value.$touch();
      if (v$.value.$invalid) {
        return false;
      }
      return true;
    }

    return {
      passwordStrength,
      reponseMessage,
      register,
      registerUser,
      ScreenState,
      submitButtonState,
      updateUser,
      user,
      v$,
      validationFailureErrors,
      validateUser,
    };
  },
  validations() {
    return validationRules(this.user)
  },
});

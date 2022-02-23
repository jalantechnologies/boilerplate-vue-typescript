import { computed, defineComponent, ref } from "vue";
import BaseInput from "@/components/base-input/index.vue";
import BaseButton from "@/components/base-button/index.vue";
import TheCard from "@/components/the-card/index.vue";
import useVuelidate from "@vuelidate/core";
import { CreateAccountParam } from "@/types/interface";
import { RequestState, ScreenState } from "@/types/enums";
import { useStore } from "vuex";
import { getErrorMessage, getPasswordStrength, validationRules } from "@/utils";
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


    const state = computed(() => store.getters['account/status']);
    const error = computed(() => store.getters['account/error']);
    const validationFailures = computed(() => store.getters['account/validationFailures']);
    const register = (user: CreateAccountParam) => store.dispatch('account/register', user);

    const store = useStore()
    const v$ = useVuelidate()

    const registerUser = async () => {
      console.log(user.value)
      submitButtonState.value = ScreenState.LOADED;
      if (!validateUser()) {
        return;
      }
      await register(user.value);
      if (state.value == RequestState.FINISHED_SUCCESSFULLY) {
        reponseMessage.value = 'Successfully Signed Up!';
      }
      if (state.value == RequestState.FAILED) {
        reponseMessage.value = error.value;
        validationFailureErrors.value.password = getErrorMessage(validationFailures.value, 'password')
        validationFailureErrors.value.username = getErrorMessage(validationFailures.value, 'username')
      }
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
      error,
      passwordStrength,
      reponseMessage,
      register,
      registerUser,
      ScreenState,
      state,
      submitButtonState,
      updateUser,
      user,
      v$,
      validationFailures,
      validationFailureErrors,
      validateUser,
    };
  },
  validations() {
    return validationRules(this.user)
  },
});

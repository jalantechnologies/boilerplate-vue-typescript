import { ValidationFailure } from "../../models";
import { computed, ComputedRef, PropType, Ref, ref, SetupContext } from "vue";

interface BaseInputProps {
  addonRightIcon?: string;
  addonLeftIcon?: string;
  alternative?: boolean;
  error?: string;
  showError?: boolean;
  inputClasses?: string;
  label?: string;
  labelClasses?: string;
  required?: boolean;
  valid?: boolean;
  value?: [string, number];
}

export default {
  inheritAttrs: false,
  name: "BaseInput",
  props: {
    required: {
      type: Boolean as PropType<BaseInputProps>,
      description: "Whether input is required (adds an asterix *)",
    },
    valid: {
      type: Boolean as PropType<BaseInputProps>,
      description: "Whether is valid",
      default: undefined,
    },
    alternative: {
      type: Boolean as PropType<BaseInputProps>,
      description: "Whether input is of alternative layout",
    },
    label: {
      type: String as PropType<BaseInputProps>,
      description: "Input label (text before input)",
    },
    error: {
      type: String as PropType<BaseInputProps>,
      description: "Input error (below input)",
    },
    labelClasses: {
      type: String as PropType<BaseInputProps>,
      description: "Input label css classes",
    },
    inputClasses: {
      type: String as PropType<BaseInputProps>,
      description: "Input css classes",
    },
    value: {
      type: [String, Number] as PropType<BaseInputProps>,
      description: "Input value",
    },
    addonRightIcon: {
      type: String,
      description: "Addon right icon",
    },
    addonLeftIcon: {
      type: String,
      description: "Addont left icon",
    },
    showError: {
      type: Boolean as PropType<BaseInputProps>,
      description: "Show error message and indicator",
    },
    validationFailure: {
      type: ValidationFailure as PropType<BaseInputProps>
    }
  },
  setup(props: BaseInputProps, { emit }: SetupContext): {
    focused: Ref<boolean>;
    onFocus: (value: string) => void,
    updateValue: (evt: { target: { value: string } }) => void,
    onBlur: (value: string) => void,
    hasIcon: ComputedRef<boolean>
  } {
    let focused = ref<boolean>(false);
    const updateValue = (evt: { target: { value: string } }) => {
      const value = evt.target.value;
      emit("input", value);
    };
    const onFocus = (value: string) => {
      focused = ref(true);
      emit("focus", value);
    };
    const onBlur = (value: string) => {
      focused = ref(false);
      emit("blur", value);
    };
    const hasIcon = computed(() => {
      return (
        props.addonRightIcon !== undefined || props.addonLeftIcon !== undefined
      );
    });

    return {
      focused,
      onFocus,
      updateValue,
      onBlur,
      hasIcon,
    };
  },
  emits: ["input", "focus", "blur"],
};

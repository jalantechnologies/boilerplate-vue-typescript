import { computed, PropType, ref, SetupContext } from "vue";

interface BaseInputProps {
  required?: boolean;
  valid?: boolean;
  alternative?: boolean;
  label?: string;
  error?: string;
  labelClasses?: string;
  inputClasses?: string;
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
  },
  setup(props: any, { emit }: SetupContext) {
    let focused = ref<boolean>(false);
    const updateValue = (evt: { target: { value: any } }) => {
      const value = evt.target.value;
      emit("input", value);
    };
    const onFocus = (value: any) => {
      focused = ref(true);
      emit("focus", value);
    };
    const onBlur = (value: any) => {
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
      props,
      hasIcon,
    };
  },
  emits: ["input", "focus", "blur"],
};

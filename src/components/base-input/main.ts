export default {
  inheritAttrs: false,
  name: "BaseInput",
  props: {
    required: {
      type: Boolean,
      description: "Whether input is required (adds an asterix *)",
    },
    valid: {
      type: Boolean,
      description: "Whether is valid",
      default: undefined,
    },
    alternative: {
      type: Boolean,
      description: "Whether input is of alternative layout",
    },
    label: {
      type: String,
      description: "Input label (text before input)",
    },
    error: {
      type: String,
      description: "Input error (below input)",
    },
    labelClasses: {
      type: String,
      description: "Input label css classes",
    },
    inputClasses: {
      type: String,
      description: "Input css classes",
    },
    value: {
      type: [String, Number],
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
  data() {
    return {
      focused: false,
    };
  },
  emits: ["input", "focused", "blur"],
  computed: {
    slotData() {
      return {
        focused: this.focused,
        ...this.listeners,
      };
    },
    hasIcon() {
      const { addonRight, addonLeft } = this.$slots;
      return (
        addonRight !== undefined ||
        addonLeft !== undefined ||
        this.addonRightIcon !== undefined ||
        this.addonLeftIcon !== undefined
      );
    },
  },
  methods: {
    updateValue(evt: { target: { value: any } }) {
      let value = evt.target.value;
      this.$emit("input", value);
    },
    onFocus(value: any) {
      this.focused = true;
      this.$emit("focus", value);
    },
    onBlur(value: any) {
      this.focused = false;
      this.$emit("blur", value);
    },
  },
};

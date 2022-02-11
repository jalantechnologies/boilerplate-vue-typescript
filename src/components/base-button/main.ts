import { computed, reactive } from "vue";

export default {
  name: "base-button",
  props: {
    tag: {
      type: String,
      default: "button",
      description: "Button tag (default -> button)",
    },
    type: {
      type: String,
      default: "default",
      description: "Button type (e,g primary, danger etc)",
    },
    size: {
      type: String,
      default: "",
      description: "Button size lg|sm",
    },
    textColor: {
      type: String,
      default: "",
      description: "Button text color (e.g primary, danger etc)",
    },
    nativeType: {
      type: String,
      default: "button",
      description: "Button native type (e.g submit,button etc)",
    },
    icon: {
      type: String,
      default: "",
      description: "Button icon",
    },
    text: {
      type: String,
      default: "",
      description: "Button text in case not provided via default slot",
    },
    outline: {
      type: Boolean,
      default: false,
      description: "Whether button style is outline",
    },
    rounded: {
      type: Boolean,
      default: false,
      description: "Whether button style is rounded",
    },
    iconOnly: {
      type: Boolean,
      default: false,
      description: "Whether button contains only an icon",
    },
    block: {
      type: Boolean,
      default: false,
      description: "Whether button is of block type",
    },
  },
  setup(props: any) {
    props = reactive(props);

    const btnClasses = computed(() => {
      return {
        "btn-block": props.block,
        "rounded-circle": props.rounded,
        "btn-icon-only": props.iconOnly,
        [`text-${props.textColor}`]: props.textColor,
        "btn-icon": props.icon || props.$slots.icon,
        [`btn-${props.type}`]: props.type && !props.outline,
        [`btn-outline-${props.type}`]: props.outline,
        [`btn-${props.size}`]: props.size,
      };
    });

    const handleClick = (evt: any) => {
      props.$emit("click", evt);
    };

    return {
      btnClasses,
      handleClick,
    };
  },
};

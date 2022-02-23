import { LooseObject } from "@/types";
import { Slot } from "@vue/test-utils/dist/types";
import { computed, reactive, PropType, SetupContext, ComputedRef } from "vue";

interface BaseButtonProps {
  tag?: string;
  type?: string;
  size?: string;
  textColor?: string;
  nativeType?: string;
  icon?: string;
  text?: string;
  outline?: boolean;
  rounded?: boolean;
  iconOnly?: boolean;
  block?: boolean;
}

export default {
  name: "BaseButton",
  props: {
    tag: {
      type: String as PropType<BaseButtonProps>,
      default: "button",
      description: "Button tag (default -> button)",
    },
    type: {
      type: String as PropType<BaseButtonProps>,
      default: "default",
      description: "Button type (e,g primary, danger etc)",
    },
    size: {
      type: String as PropType<BaseButtonProps>,
      default: "",
      description: "Button size lg|sm",
    },
    textColor: {
      type: String as PropType<BaseButtonProps>,
      default: "",
      description: "Button text color (e.g primary, danger etc)",
    },
    nativeType: {
      type: String as PropType<BaseButtonProps>,
      default: "button",
      description: "Button native type (e.g submit,button etc)",
    },
    icon: {
      type: String as PropType<BaseButtonProps>,
      default: "",
      description: "Button icon",
    },
    text: {
      type: String as PropType<BaseButtonProps>,
      default: "",
      description: "Button text in case not provided via default slot",
    },
    outline: {
      type: Boolean as PropType<BaseButtonProps>,
      default: false,
      description: "Whether button style is outline",
    },
    rounded: {
      type: Boolean as PropType<BaseButtonProps>,
      default: false,
      description: "Whether button style is rounded",
    },
    iconOnly: {
      type: Boolean as PropType<BaseButtonProps>,
      default: false,
      description: "Whether button contains only an icon",
    },
    block: {
      type: Boolean as PropType<BaseButtonProps>,
      default: false,
      description: "Whether button is of block type",
    },
  },
  emits: ["click"],
  setup(props: BaseButtonProps, { emit, slots }: SetupContext): {
    classes: ComputedRef<LooseObject>;
    handleClick: (evt: MouseEvent) => void;
    slots: Slot
  } {
    props = reactive(props);
    const classes = computed(() => {
      return {
        "btn-block": props.block,
        "rounded-circle": props.rounded,
        "btn-icon-only": props.iconOnly,
        [`text-${props.textColor}`]: props.textColor,
        "btn-icon": props.icon || slots.icon,
        [`btn-${props.type}`]: props.type,
        [`btn-outline-${props.type}`]: props.outline,
        [`btn-${props.size}`]: props.size,
      };
    });

    const handleClick = (evt: MouseEvent) => {
      emit("click", evt);
    };

    return {
      classes,
      handleClick,
      slots,
    };
  },
};

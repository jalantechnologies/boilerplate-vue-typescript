export default {
  name: "TheCard",
  props: {
    type: {
      type: String,
      description: "Card type",
    },
    gradient: {
      type: String,
      description: "Card background gradient type (warning,danger etc)",
    },
    hover: {
      type: Boolean,
      description: "Whether card should move on hover",
    },
    shadow: {
      type: Boolean,
      description: "Whether card has shadow",
    },
    shadowSize: {
      type: String,
      description: "Card shadow size",
    },
    noBody: {
      type: Boolean,
      default: false,
      description: "Whether card should have wrapper body class",
    },
    bodyClasses: {
      type: [String, Object, Array],
      description: "Card body css classes",
    },
    headerClasses: {
      type: [String, Object, Array],
      description: "Card header css classes",
    },
    footerClasses: {
      type: [String, Object, Array],
      description: "Card footer css classes",
    },
  },
};

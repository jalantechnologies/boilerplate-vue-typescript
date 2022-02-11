import BaseLabel from "../components/base-label/index.vue";

export default {
  title: "Components/Typography",
  component: BaseLabel,
};

const Template = () => ({
  components: { BaseLabel },
  template: "<BaseLabel>Hello World</BaseLabel>",
});

export const Label = Template.bind({});

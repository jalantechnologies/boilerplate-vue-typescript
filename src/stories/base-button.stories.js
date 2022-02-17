import BaseButton from "../components/base-button/index.vue";

export default {
  title: "Components/BaseButton",
  component: BaseButton,
};

const Template = (args) => ({
  components: { BaseButton },
  setup() {
    return { args };
  },
  template: `<BaseButton v-bind="args" class= "btn-1" type="primary">Primary</BaseButton>
            <BaseButton v-bind="args" class="btn-1" type="info"> Info</BaseButton>
            <BaseButton v-bind="args" class="btn-1" type="success"> Success</BaseButton>
            <BaseButton v-bind="args" class="btn-1" type="warning"> Warning</BaseButton>
            <BaseButton v-bind="args" class="btn-1" type="danger"> Danger</BaseButton>
            <BaseButton v-bind="args" class="btn-1" type="neutral"> Neutral</BaseButton>`,
});

export const Buttons = Template.bind({});

export const OutlineButtons = Template.bind({});
OutlineButtons.args = {
  outline: true,
};

export const SmallButton = Template.bind({});
SmallButton.args = {
  size: "sm",
};

export const LargeButton = Template.bind({});
SmallButton.args = {
  size: "lg",
};

export const BlockButton = Template.bind({});
BlockButton.args = {
  block: true,
};

export const DisabledButton = Template.bind({});
DisabledButton.args = {
  disabled: true,
};

export const RoundedButton = Template.bind({});
RoundedButton.args = {
  rounded: true,
};

export const ButtonWithIcon = Template.bind({});
ButtonWithIcon.args = {
  icon: "fa fa-twitter",
};

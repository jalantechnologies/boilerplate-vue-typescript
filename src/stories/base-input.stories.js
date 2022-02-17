import BaseInput from "../components/base-input/index.vue";

export default {
  title: "Components/BaseInput",
  component: BaseInput,
};

const Template = (args) => ({
  components: { BaseInput },
  setup() {
    return { args };
  },
  template: `<base-input v-bind="args" placeholder="Regular"> </base-input>
            <base-input v-bind="args" placeholder="Alternative" alternative> </base-input>`,
});

export const Input = Template.bind({});

export const DisabledInput = Template.bind({});
DisabledInput.args = {
  disabled: true,
};

export const SuccessInput = Template.bind({});
SuccessInput.args = {
  valid: true,
};

export const ErrorInput = Template.bind({});
ErrorInput.args = {
  valid: false,
};

export const LabelInput = Template.bind({});
LabelInput.args = {
  label: "Label",
};

export const ErrorMessageInput = Template.bind({});
ErrorMessageInput.args = {
  error: "Invalid Input.",
};

export const ValuedInput = Template.bind({});
ValuedInput.args = {
  value: "This is the value.",
};

export const IconInput = Template.bind({});
IconInput.args = {
  addonRightIcon: "ni ni-lock-circle-open",
};

import TheCard from "../components/the-card/index.vue";

export default {
  title: "Components/TheCard",
  component: TheCard,
};

const Template = (args) => ({
  components: { TheCard },
  setup() {
    return { args };
  },
  template: `<the-card v-bind="args" class="shadow-lg--hover mt-5">
                <div class="d-flex px-3">
                    <div>
                        <icon name="ni ni-satisfied" gradient="success" color="white" shadow rounded></icon>
                    </div>
                    <div class="pl-4">
                        <h5 class="title text-success">Awesome Support</h5>
                            <p>The Arctic Ocean freezes every winter and much of the sea-ice then thaws
                                very summer, and that process will continue whatever happens.
                            </p>
                    </div>
                </div>
            </the-card>`,
});

export const Card = Template.bind({});

export const ShadowCard = Template.bind({});
ShadowCard.args = {
  shadow: true,
};

export const WarningCard = Template.bind({});
WarningCard.args = {
  gradient: "warning",
};

export const SecondaryCard = Template.bind({});
SecondaryCard.args = {
  gradient: "secondary",
};

export const HoverCard = Template.bind({});
HoverCard.args = {
  hover: true,
};

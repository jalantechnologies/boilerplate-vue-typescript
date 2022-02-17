import "!style-loader!css-loader!sass-loader!../src/assets/scss/main.scss";
import "!style-loader!css-loader!sass-loader!../src/assets/vendor/font-awesome/css/font-awesome.css";
import "!style-loader!css-loader!sass-loader!../src/assets/vendor/nucleo/css/nucleo.css";
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

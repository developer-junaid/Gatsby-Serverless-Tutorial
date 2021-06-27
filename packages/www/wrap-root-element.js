// basic usage
const React = require("react");
const { ThemeProvider } = require("theme-ui");
const { deep } = require("@theme-ui/presets");

// Set width of container
const tokens = {
  ...deep,
  sizes: { container: 1024 },
};

// Export
module.exports = ({ element }) => (
  <ThemeProvider theme={tokens}>{element}</ThemeProvider>
);

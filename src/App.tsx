import { styled, useGlobalStyles } from "src/config/stitches.config";

const ApplicationWrapper = styled("div", {
  backgroundColor: "$main",
  width: '100vw',
  height: '100vh'
});

const App = () => {
  useGlobalStyles()
  return <ApplicationWrapper>App</ApplicationWrapper>;
};

export default App;

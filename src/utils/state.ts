import { createGlobalState } from "react-hooks-global-state";

const { setGlobalState, useGlobalState } = createGlobalState({
  open: false,
  message: "",
  type: "error",
  auth: [],
});

export { setGlobalState, useGlobalState };

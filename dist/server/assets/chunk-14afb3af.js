import * as jsxRuntime from "react/jsx-runtime";
import React, { useContext } from "react";
const Fragment = jsxRuntime.Fragment;
const jsx = jsxRuntime.jsx;
const jsxs = jsxRuntime.jsxs;
const Context = React.createContext(void 0);
function PageContextProvider({ pageContext, children }) {
  return /* @__PURE__ */ jsx(Context.Provider, { value: pageContext, children });
}
function usePageContext() {
  const pageContext = useContext(Context);
  return pageContext;
}
export {
  Fragment as F,
  PageContextProvider as P,
  jsx as a,
  jsxs as j,
  usePageContext as u
};

import { u as usePageContext, a as jsx } from "./chunk-14afb3af.js";
import "react";
import { l as localeDefault } from "../pageFiles.js";
function Link({ href, locale, ...props }) {
  const pageContext = usePageContext();
  locale = locale || pageContext.locale;
  if (locale !== localeDefault) {
    href = "/" + locale + href;
  }
  return /* @__PURE__ */ jsx("a", { href, ...props });
}
export {
  Link as L
};

import { definePlugin } from "@monokle/plugin-toolkit";
import { noEmptyAnnotations } from "./rules/1-example.js";

export default definePlugin({
  id: "YCP",
  name: "prv-annotations",
  displayName: "Private Annotations Plugin",
  description: "My first custom plugin!",
  rules: {
    noEmptyAnnotations
  },
});

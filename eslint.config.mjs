import antfu from "@antfu/eslint-config";

export default antfu({
  ignores: ["src/shared/public/**/*", "dist/**/*"],
  stylistic: {
    semi: true,
    quotes: "double",
    indent: 2,
  },
  vue: true,
  typescript: true,
});

module.exports = {
  extends: "stylelint-config-standard",
  rules: {
    "declaration-colon-newline-after": null,
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: ["global"],
      },
    ],
    "at-rule-no-unknown": [
        true,
        {
          ignoreAtRules: [
            "variants",
            "responsive",
            "screen",
          ],
        },
      ],
  },
};

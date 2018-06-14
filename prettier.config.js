module.exports = {
  singleQuote: true,
  useTabs: false,
  printWidth: 120,
  trailingComma: 'es5',
  parser: 'typescript',
  overrides: [
    {
      files: '**/*.{gql,graphql,graphql.ts}',
      options: {
        parser: 'graphql',
      },
    },
    {
      files: '**/*.{js,jsx}',
      options: {
        parser: 'flow',
      },
    },
    {
      files: '**/*.{ts,tsx}',
      options: {
        parser: 'typescript',
      },
    },
    {
      files: '**/*.json',
      options: {
        parser: 'json',
      },
    },
  ],
};

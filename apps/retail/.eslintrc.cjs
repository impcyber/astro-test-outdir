module.exports = {
  extends: ['@test-repo'],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    extraFileExtensions: ['.astro'],
  },
}

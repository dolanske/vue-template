import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: {
    css: true,
    html: true,
    markdown: true,
  },
  rules: {
    'no-console': 'off',
    'vue/no-unused-vars': [
      'error',
      {
        ignorePattern: '^_',
      },
    ],
  },
})

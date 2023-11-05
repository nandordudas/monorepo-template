// @ts-check
import antfu from '@antfu/eslint-config'

export default antfu({
  ignores: ['**/devcontainer.json'],
  rules: {
    'complexity': ['error', 5],
    'import/no-anonymous-default-export': 'warn',
    'import/order': ['error', {
      'alphabetize': { caseInsensitive: true, order: 'asc' },
      'groups': ['external', 'builtin', ['sibling', 'parent'], 'index', 'object'],
      'newlines-between': 'always',
      'pathGroups': [
        // You need to start your aliases with "~/".
        { group: 'external', pattern: '~/**', position: 'after' },
      ],
    }],
    'max-len': ['error', { code: 120, comments: 80, ignoreStrings: true, ignoreUrls: true }],
    'perfectionist/sort-objects': 'error',
  },
})

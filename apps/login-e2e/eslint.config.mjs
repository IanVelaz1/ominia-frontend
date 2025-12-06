import cypress from 'eslint-plugin-cypress/flat';
import baseConfig from '../../eslint.config.mjs';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export default [
  cypress.configs['recommended'],
  ...baseConfig,
  {
    // Override or add rules here
    rules: {},
  },
];


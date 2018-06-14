import { describe, TYPE_NUMBER, TYPE_STRING, TYPE_BOOLEAN, TYPE_JSON } from '@mrboolean/envconfig';

export type Config = {
  port: number;
  isDevelopment: boolean;
  environment: 'development' | 'production';
  githubToken: string;
  healthRoutePath: string;
  maxReviewers: number;
  useSuggestedReviewers: boolean;
  skipFiles: string[];
};

const config: Config = describe({
  port: {
    type: TYPE_NUMBER,
    name: 'PORT',
    isRequired: true,
    standard: 3000,
  },
  isDevelopment: {
    name: 'NODE_ENV',
    isRequired: true,
    sanitize(value: string): boolean {
      return value === 'development';
    },
  },
  environment: {
    name: 'NODE_ENV',
    type: TYPE_STRING,
    isRequired: true,
    standard: 'development',
  },
  githubToken: {
    name: 'GITHUB_TOKEN',
    type: TYPE_STRING,
    isRequired: true,
  },
  healthRoutePath: {
    name: 'HEALTH_ROUTE_PATH',
    type: TYPE_STRING,
    isRequired: false,
    standard: '/_health',
  },
  maxReviewers: {
    name: 'MAX_REVIEWERS',
    type: TYPE_NUMBER,
    isRequired: false,
    standard: 5,
  },
  useSuggestedReviewers: {
    name: 'USE_SUGGESTED_REVIEWERS',
    type: TYPE_BOOLEAN,
    isRequired: false,
    standard: false,
  },
  skipFiles: {
    name: 'SKIP_FILES',
    type: TYPE_JSON,
    isRequired: false,
    standard: [],
  },
});

export default config;

import { describe, TYPE_NUMBER, TYPE_STRING, TYPE_BOOLEAN } from '@mrboolean/envconfig';

export type Config = {
  port: number;
  isDevelopment: boolean;
  environment: 'development' | 'production';
  healthRoutePath: string;
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
  healthRoutePath: {
    name: 'HEALTH_ROUTE_PATH',
    type: TYPE_STRING,
    isRequired: false,
    standard: '/_health',
  },
});

export default config;

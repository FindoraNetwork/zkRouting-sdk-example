import { Sdk } from 'zk-routing-sdk';

export const ENV_CONFIG = {
  hostUrl: 'https://prod-testnet.prod.findora.org',
};

Sdk.init(ENV_CONFIG);

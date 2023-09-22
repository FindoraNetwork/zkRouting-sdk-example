## Findora EVM → Findora EVM


#### Supported Chains

- Findora-forge:

  - chain id: `2154`
  - https://prod-forge.prod.findora.org:8545

<!-- - BSC-testnet:

  - chain id: `97`
  - https://data-seed-prebsc-1-s2.binance.org:8545

- Avalanche-testnet:

  - chain id: `43113`
  - https://api.avax-test.network/ext/bc/C/rpc

- Polygon-testnet:

  - chain id: `80001`
  - https://morning-cool-thunder.matic-testnet.quiknode.pro/5c6850724d8800e961585cbed802871151ed5a74 -->

#### Supported Tokens

- ##### FRC20(FRA token)
- ##### FRC20(Customized token)
  - any FRC20 token on Findora EVM

---

#### Runs the app

```bash
yarn
yarn dev
```

#### Initialize `zk-routing-sdk`



```js
import { Sdk } from 'zk-routing-sdk';

export const ENV_CONFIG = {
  hostUrl: 'https://prod-testnet.prod.findora.org',
};

Sdk.init(ENV_CONFIG);
```

#### Default Setting for Findora EVM to Findora EVM

```js

// ...
export const FINDORA_EVM_CHAIN_ID = '2153';

export const FINDORA_NETWORK = {
  chainId: FINDORA_EVM_CHAIN_ID,
  chainName: 'Findora',
  nativeCurrency: {
    name: 'FRA',
    symbol: 'FRA',
    decimals: 18,
  },
  rpcUrls: ['https://prod-testnet.prod.findora.org:8545'],
  blockExplorerUrls: ['https://prod-testnet-blockscout.prod.findora.org/'],
};

export const CONTRACTS_ADDRESS = {
  prismBridge: '0x3780a04B4D267bd0cDC66F3ee4835489c57E4e63',
  prismBridgeLedger: '0x9EB33Ee15982076a1Fd985Fd9eD4EbCA3B4972E5'
};

export const DEFAULT_SEND_INFO = {
  sourceChainId: '2153',
  destinationChainId: '2153',
  tokenAddress: '0x......', // FRC20 Token Address
  amount: '5',
  sourceAddress: '',
  destinationAddress: '',
};
```

- **sourceChainId**: Findora EVM for this example

- **destinationChainId**: Findora EVM for this example

- **tokenAddress**: [supported tokens](#supported-tokens)

- **amount**

- **sourceAddress**: sync with your metamask account

- **destinationAddress**: receiver address


---

### Transfer
[containers/TransferModal](https://github.com/FindoraNetwork/zkRouting-sdk-example/tree/main/src/containers/TransferModal)

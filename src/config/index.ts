export interface ISendInfo {
  sourceChainId: string;
  destinationChainId: string;
  tokenAddress: string;
  amount: string;
  sourceAddress: string;
  destinationAddress: string;
}

export const FINDORA_EVM_CHAIN_ID = '3333'; // Findora EVM

export const FINDORA_NETWORK = {
  chainId: FINDORA_EVM_CHAIN_ID,
  chainName: 'Findora',
  nativeCurrency: {
    name: 'FRA',
    symbol: 'FRA',
    decimals: 18,
  },
  rpcUrls: ['https://dev-qa01.dev.findora.org:8545'],
  blockExplorerUrls: ['https://dev-qa01-blockscout.dev.findora.org/'],
};

export const CONTRACTS_ADDRESS = {
  prismBridge: '0x5f9552fEd754F20B636C996DaDB32806554Bb995',
  prismBridgeLedger: '0xa897D081bf941bBD60E831EDFE219D5887eFC755',
};

export const DEFAULT_SEND_INFO: ISendInfo = {
  sourceChainId: FINDORA_EVM_CHAIN_ID,
  destinationChainId: FINDORA_EVM_CHAIN_ID,
  tokenAddress: '', // FRC20 Token Address, if FRA = ''
  amount: '5',
  sourceAddress: '',
  destinationAddress: '',
};

export const TOKENS = [
  { value: '', label: 'FRA' },
  { value: '0xA1Ba325d71204e89cA44C5378E84dc1AAcD45f9e', label: 'zkUSDT' },
]

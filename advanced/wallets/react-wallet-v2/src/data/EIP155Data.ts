/**
 * @desc Refference list of eip155 chains
 * @url https://chainlist.org
 */

/**
 * Types
 */
export type TEIP155Chain = keyof typeof EIP155_CHAINS

export type EIP155TestChain = {
  chainId: number
  name: string
  logo: string
  rgb: string
  rpc: string
  namespace: string
  smartAccountEnabled?: boolean
}

/**
 * Chains
 */
export const EIP155_MAINNET_CHAINS = {
}

export const EIP155_TEST_CHAINS: Record<string,EIP155TestChain> = {
  'eip155:338': {
    chainId: 338,
    name: 'Test Cronos',
    logo: '/chain-logos/eip155-1.png',
    rgb: '99, 125, 234',
    rpc: 'https://evm-dev-t3.cronos.org',
    namespace: 'eip155',
    smartAccountEnabled: true,
  }
}

export const EIP155_CHAINS = { ...EIP155_MAINNET_CHAINS, ...EIP155_TEST_CHAINS }

/**
 * Methods
 */
export const EIP155_SIGNING_METHODS = {
  PERSONAL_SIGN: 'personal_sign',
  ETH_SIGN: 'eth_sign',
  ETH_SIGN_TRANSACTION: 'eth_signTransaction',
  ETH_SIGN_TYPED_DATA: 'eth_signTypedData',
  ETH_SIGN_TYPED_DATA_V3: 'eth_signTypedData_v3',
  ETH_SIGN_TYPED_DATA_V4: 'eth_signTypedData_v4',
  ETH_SEND_RAW_TRANSACTION: 'eth_sendRawTransaction',
  ETH_SEND_TRANSACTION: 'eth_sendTransaction'
}

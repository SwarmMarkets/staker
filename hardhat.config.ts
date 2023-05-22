import '@nomicfoundation/hardhat-toolbox'
import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-etherscan'
import '@nomiclabs/hardhat-waffle'
import '@typechain/hardhat'
import 'hardhat-contract-sizer'
import { HardhatUserConfig } from 'hardhat/config'
import { SolcUserConfig } from 'hardhat/types'
import 'solidity-coverage'

import dotenv from 'dotenv'
dotenv.config()

// Ensure that we have all the environment variables we need.
const mnemonic = process.env.MNEMONIC || ''
const privateKey = process.env.PK || ''

const etherscanApiKey = process.env.ETHERSCAN_API_KEY || ''
const polyscanApiKey = process.env.POLYSCAN_API_KEY || ''

const infuraApiKey = process.env.INFURA_API_KEY
const alchemyApiKey = process.env.ALCHEMY_API_KEY

const DEFAULT_COMPILER_SETTINGS: SolcUserConfig = {
  version: '0.7.6',
  settings: {
    optimizer: {
      enabled: true,
      runs: 1_000_000,
    },
    metadata: {
      bytecodeHash: 'none',
    },
  },
}

if (process.env.RUN_COVERAGE == '1') {
  /**
   * Updates the default compiler settings when running coverage.
   *
   * See https://github.com/sc-forks/solidity-coverage/issues/417#issuecomment-730526466
   */
  console.info('Using coverage compiler settings')
  DEFAULT_COMPILER_SETTINGS.settings.optimizer.details = {
    yul: true,
    yulDetails: {
      stackAllocation: true,
    },
  }
}

const config: HardhatUserConfig = {
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      blockGasLimit: 20000000,
      throwOnCallFailures: false,
      chainId: 31337,
      initialBaseFeePerGas: 0,
      accounts: {
        mnemonic,
        accountsBalance: '1000000000000000000000',
      },
    },
    ganache: {
      url: 'http://localhost:8545', // Localhost (default: none)
      chainId: 1337,
      blockGasLimit: 20000000,
      timeout: 200000,
    },
    mainnet: {
      url: `https://eth-mainnet.alchemyapi.io/v2/${alchemyApiKey}`,
      chainId: 1,
      accounts: { mnemonic },
      // accounts: {
      //   mnemonic,
      // },
      gas: 2100000,
      gasPrice: 45000000000, // 45
    },
    polygon: {
      url: `https://polygon-mainnet.g.alchemy.com/v2/${alchemyApiKey}`,
      chainId: 137,
      accounts: { mnemonic },
      gas: 2100000,
      gasPrice: 45000000000, // 45
    },
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${alchemyApiKey}`,
      chainId: 80001,
      accounts: [privateKey],
      gas: 2100000,
      gasPrice: 45000000000, // 45
      gasMultiplier: 2,
    },
  },
  paths: {
    artifacts: './artifacts',
    cache: './cache',
    sources: './contracts',
    tests: './test',
  },

  solidity: {
    compilers: [DEFAULT_COMPILER_SETTINGS],
  },
  typechain: {
    outDir: 'typechain',
    target: 'ethers-v5',
  },
  contractSizer: {
    alphaSort: false,
    disambiguatePaths: true,
    runOnCompile: false,
  },
  etherscan: {
    apiKey: etherscanApiKey || polyscanApiKey,
  },
};
export default config

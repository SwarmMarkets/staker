import { verifyContract } from './helpers/verify-contract'

const contract = '0x45Eb32B40c17eF402229675f3302974af62c464e'
const UniswapV3Factory = '0x1F98431c8aD98523631AE4a59f267346ea31F984' // All networks
const NonfungiblePositionManager = '0xC36442b4a4522E871399CD717aBDD847Ab11FE88' // All networks

async function main(): Promise<void> {
  await verifyContract(contract, [UniswapV3Factory, NonfungiblePositionManager])
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error: Error) => {
    console.error(error)
    process.exit(1)
  })

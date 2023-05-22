import { UniswapV3Staker } from '../typechain'
import { ethers } from 'hardhat'
import { ContractFactory } from 'ethers'

const UniswapV3Factory = '0x1F98431c8aD98523631AE4a59f267346ea31F984' // All networks
const NonfungiblePositionManager = '0xC36442b4a4522E871399CD717aBDD847Ab11FE88' // All networks

async function main() {
  const UniswapV3Staker: ContractFactory = await ethers.getContractFactory('UniswapV3Staker')
  const uniswapV3Staker: UniswapV3Staker = (await UniswapV3Staker.deploy(
    UniswapV3Factory,
    NonfungiblePositionManager,
  )) as UniswapV3Staker
  await uniswapV3Staker.deployed()

  console.log(`Deployed to ${uniswapV3Staker.address}`)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch(error => {
  console.error(error)
  process.exitCode = 1
})

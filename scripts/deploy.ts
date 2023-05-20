
import { UniswapV3Staker } from '../typechain';
import hre, { ethers } from 'hardhat';
import { ContractFactory } from 'ethers';




async function main() {
  const { ethers } = hre;

  const UniswapV3Staker: ContractFactory = await ethers.getContractFactory('UniswapV3Staker');
  const uniswapV3Staker: UniswapV3Staker = await UniswapV3Staker.deploy() as UniswapV3Staker;
  await uniswapV3Staker.deployed();

  console.log(`Deployed to ${uniswapV3Staker.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});

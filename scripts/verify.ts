import { verifyContract } from './helpers/verify-contract';

const contract = '';

async function main(): Promise<void> {
  await verifyContract(contract);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error: Error) => {
    console.error(error);
    process.exit(1);
  });

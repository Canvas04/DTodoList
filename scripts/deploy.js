import hre from "hardhat";

const { ethers } = hre;

async function main() {
  const todoListFactory = await ethers.getContractFactory("TodoList");
  const todoListInstance = await todoListFactory.deploy();
  await todoListInstance.waitForDeployment();
  console.log(
    "Conract was deployed on address:",
    await todoListInstance.getAddress()
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

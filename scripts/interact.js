import hre from "hardhat";

const { ethers } = hre;

async function main() {
  const contractAddress = "0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6";
  const todoListFactory = await ethers.getContractFactory("TodoList");
  const todoListAttached = todoListFactory.attach(contractAddress);

  await todoListAttached.addTask("Deploy App");
  console.log("Task was added");

  const count = await todoListAttached.getTaskCount();
  console.log("Number of tasks:", count);
}

main().catch(console.error);

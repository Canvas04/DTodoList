import chai from "chai";
import hre from "hardhat";

const { expect } = chai;
const { ethers } = hre;

describe("TodoList", function () {
  let todoListInstance;

  before(async () => {
    const todoListFactory = await ethers.getContractFactory("TodoList");
    todoListInstance = await todoListFactory.deploy();
  });

  it("Should add task", async () => {
    await todoListInstance.addTask("Learn Solidity");
    expect(await todoListInstance.getTaskCount()).to.equal(1);
  });

  it("Should toggle task", async () => {
    await todoListInstance.addTask("Write tests");
    await todoListInstance.toggleCompleted(1);
    const task = await todoListInstance.tasks(1);
    expect(task.isCompleted).to.equal(true);
  });
});

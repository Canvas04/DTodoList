// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract TodoList {

    struct Task {
        string description;
        bool isCompleted;
    }

    Task[] public tasks;

    event TaskAdded(uint taskId, string description);

    event TaskToggled(uint taskId, bool isCompleted);

    function addTask(string memory _description) external {
        tasks.push(Task(_description,false));
        emit TaskAdded(tasks.length - 1, _description);
    }

    function toggleCompleted(uint _taskId) external {

    require(_taskId < tasks.length, "Invalid task ID");
    tasks[_taskId].isCompleted = !tasks[_taskId].isCompleted;
    emit TaskToggled(_taskId, tasks[_taskId].isCompleted);
    }

    function getTaskCount() external view returns (uint) {
        return tasks.length;
    }
}
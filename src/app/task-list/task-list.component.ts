import { Component, OnInit } from '@angular/core';
import { Task } from '../test.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  taskList:Task[];
  newTaskTitle:string;
  constructor(
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
    this.taskList = this.taskService.getTasks();
  }

  addTask()
  {
    if(this.newTaskTitle != '')
    {
      const task = new Task(this.newTaskTitle, false);
      this.taskService.addTask(task);
    }
  }
}

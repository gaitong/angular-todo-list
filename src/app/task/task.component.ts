import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../test.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task:Task;
  @Input() index:number;

  constructor(
    private taskService:TaskService
  ) { }

  ngOnInit(): void {
  }

  onClick(){
    console.log(this.task);
  }

  deleteTask()
  {
    this.taskService.removeTask(this.index);
  }

  updateTask()
  {
    this.task.isDone=true;
  }
}

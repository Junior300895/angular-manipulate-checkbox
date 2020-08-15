import {Component, OnInit} from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import { FormBuilder, FormGroup } from '@angular/forms';

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

/**
 * @title Basic checkboxes
 */
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  task: Task = {
    name: 'Indeterminate',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'Primary', completed: false, color: 'primary'},
      {name: 'Accent', completed: false, color: 'accent'},
      {name: 'Warn', completed: false, color: 'warn'}
    ]
  };
  form: FormGroup;
  constructor(private _formBuilder: FormBuilder,){

  }
  allComplete: boolean = false;

  updateAllComplete() {
    console.log('values : ', this.task)
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
    console.log('every completed : ', this.task.subtasks.every(t => t.completed))
  }
  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => t.completed = completed);
  }
}

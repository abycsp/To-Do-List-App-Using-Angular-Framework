import { Component } from '@angular/core';
@Component({
 selector: 'app-todo-list',
 templateUrl: './home.page.html',
 styleUrls: ['./home.page.scss']
})
export class HomePage {
 newTask: string = '';
 tasks: string[] = [];
 addTask() {
 if (this.newTask) {
 this.tasks.push(this.newTask);
 this.newTask = '';
 }
 }
 editTask(index: number) {
 const updatedTask = prompt('Edit Task', this.tasks[index]);
 if (updatedTask !== null) {
 this.tasks[index] = updatedTask;
 }
 }
 deleteTask(index: number) {
 const confirmDelete = confirm('Are you sure you want to delete this task?');
 if (confirmDelete) {
 this.tasks.splice(index, 1);
 }
 }
}

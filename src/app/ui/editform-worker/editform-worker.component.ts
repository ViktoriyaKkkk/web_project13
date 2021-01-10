import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MyWorker, MyWorkerType } from 'src/app/shared/worker.model';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-editform-worker',
  templateUrl: './editform-worker.component.html',
  styleUrls: ['./editform-worker.component.css']
})
export class EditformWorkerComponent implements OnInit {

  name: string;
  surname: string;
  type = 0;
  id: number;
  phone: string;
  myWorkerType = MyWorkerType;

  @Output() editWorker =
    new EventEmitter<MyWorker>();

  constructor() { }

  ngOnInit(): void {
  }

  onEditWorker() {
    let worker: MyWorker = {
      id: this.id,
      name: this.name,
      surname: this.surname,
      phone:this.phone,
      type: this.type,
    };
    console.log(worker);
    this.editWorker.emit(worker);
  }

}

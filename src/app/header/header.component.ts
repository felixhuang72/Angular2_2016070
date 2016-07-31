import { Component, OnInit, Input} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})

export class HeaderComponent implements OnInit {

@Input()
title:string;

isEdit = false;
inputText = this.title;
linkTarget = '_blank';
num = 1;
num2 = 1;
constructor() { }

ModifyTitle(){
  this.isEdit = true;
}

PlusOne(){
  this.num = this.num +1;
}

modifySubmit(e){
  if(e.keyCode==13)
  {
    //console.log($event)
    this.title = this.inputText;

  }
}

modifySubmit_OneWay(e, value){
  if(e.keyCode==13)
  {
    //console.log($event)
    this.title = value;
    this.isEdit = false;
  }
}

  ngOnInit() {
    //Input Binding 後，才進行初始化
    this.inputText = this.title;
  }

}

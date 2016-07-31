import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {
title = '<i>appssss works!</i>';
inputText = this.title;
titlelink = 'http://tw.yahoo.com';
linkTarget = '_blank';
num = 1;
num2 = 1;
constructor() { }



PlusOne(){
  this.num = this.num +1;
}

modifySubmit(e){
  if(e.keyCode==13)
  {
    this.title = this.inputText;

  }
}

  ngOnInit() {
  }

}

import { Injectable } from '@angular/core';
import { Http  } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {

 data: any;
 data_default :any;

 constructor(private http: Http){

    this.http.get('/api/articles.json')
    .map((res) => res.json())
    .subscribe((value) =>{
      this.data = this.data_default = value;
    });
  }

  doSearch(keyword){
    this.data = this.data_default.filter(value => {
      if(!keyword){ return true;} //修正 keyword 為空值時無法顯示內容項目
      return value.title.toLowerCase().indexOf(keyword.toLowerCase()) > -1;
    });
  }
}

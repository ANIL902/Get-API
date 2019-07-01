import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  
  constructor(private http:HttpClient) { }

  getdata(){
    let apiURL="http://202.65.158.172:9097/floor/{loginid}/all/{orgid}";
    apiURL = apiURL.replace('{loginid}', '1').replace('{orgid}','1')
    return this.http.get(apiURL);
    
  }

  createdata(value){
    let url="http://202.65.158.172:9097/floor/{loginid}/create";
    url=url.replace('{loginid}','1')
    return this.http.get(url,value);
  }


}

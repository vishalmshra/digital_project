import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

HttpClient

@Injectable({
  providedIn: 'root',
})
export class CommonserviceService {
  constructor(public httpclient: HttpClient) {}

  registerUser(formdata: any) {
    return this.httpclient.post<any[]>(environment.apiUrl + 'users/registeruser',{ formdata });
  }
  loginUserAPI(loginformdata: any) {
    return this.httpclient.post<any[]>(environment.apiUrl + 'users/loginuser', {loginformdata});
  }
  userlistAPI() {
    return this.httpclient.get<any[]>(environment.apiUrl + 'users/userlist');
  }
  edituserdetailsAPI(userid :any) {
    return this.httpclient.post<any[]>(environment.apiUrl + 'users/edituserdetails' ,{userid:userid});
  } 
  deleteuserdetailsAPI(userid :any) {
    return this.httpclient.post<any[]>(environment.apiUrl + 'users/deleteuserdetails' ,{userid:userid});
  }
  UpdateuserdetailsApI(formdata :any,userid :any){
    return this.httpclient.post<any[]>(environment.apiUrl + 'users/Updateuserdetails' ,{formdata:formdata,userid:userid});
  }

  registerformUser(formdata: any) {
    return this.httpclient.post<any[]>(environment.apiUrl + 'users/registerformuser',{ formdata });
}
}
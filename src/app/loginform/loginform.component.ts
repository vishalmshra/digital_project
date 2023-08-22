import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { CommonserviceService, } from '../commonservice.service';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

  
  constructor(public commonservice :CommonserviceService,public messageService:MessageService, private router: Router) { }
  loginForm = new FormGroup({
      
    UserName: new FormControl('', [Validators.required]), 
    password: new FormControl('', [Validators.required])
  })

  ngOnInit(): void {

  
}
loginReactiveForm(){
  console.log(this.loginForm.value);
  if(this.loginForm.valid){
  this.commonservice.loginUserAPI(this.loginForm.value).subscribe((data:any)=>{
    console.log(data);
    if(data == 'success'){
      this.messageService.add({severity:'success', summary:'Login', detail:'Login Successfully'});
      console.log('logged in successfully');
      setTimeout(() => {
        this.router.navigate(['userlist'])
      }, 2000)
   
    }else{
      this.messageService.add({severity:'warn', summary:'failed', detail:'Login Failed wrong password and email'});

      
    }
    
  })
}
else{
  // alert('form is not valid'); 
  this.messageService.add({severity:'error', summary: 'Error', detail: 'Correct email & password are required'});
}
}

}
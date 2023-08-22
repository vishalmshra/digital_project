import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonserviceService } from '../commonservice.service'

@Component({
  selector: 'app-registrationform',
  templateUrl: './registrationform.component.html',
  styleUrls: ['./registrationform.component.css']
})
export class RegistrationformComponent implements OnInit {

  RegisterForm: FormGroup;
  constructor(public commonservice :CommonserviceService,public messageService:MessageService, private router: Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.RegisterForm = new FormGroup({
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      Username: new FormControl('', [Validators.required]),
      enteremail: new FormControl('', [Validators.required]),
      password: new FormControl('',[Validators.required]),
  })

}
submitReactiveForm(){
  console.log(this.RegisterForm.value);
  if(this.RegisterForm.valid){
  this.commonservice.registerformUser(this.RegisterForm.value).subscribe((data:any)=>{
    console.log(data);
    if(data=='inserted'){
      // confirm('Record Submited')
      this.messageService.add({severity:'success', summary:'Submit', detail:'Record Submit'});
  
        // this.router.navigate(['loginform'])

    
    }else{
     
    }
  })
}

else{
  // alert('form not valid');
  this.messageService.add({severity:'error', summary: 'Error', detail: 'All value are required'}); 
 
}
}
}

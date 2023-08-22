import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonserviceService } from '../commonservice.service';
import {MessageService} from 'primeng/api';
import {Message} from 'primeng//api';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css']
})
export class SharedComponent implements OnInit {

  registrationForm: FormGroup;


  constructor(public commonservice: CommonserviceService,private messageService: MessageService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      fatherName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      number: new FormControl('',[Validators.required]),
      adhar: new FormControl('', [Validators.required]),
      bdate: new FormControl('', [Validators.required]),
      gender: new FormControl('',[Validators.required]),
      password: new FormControl('', [Validators.required]), 
      cpassword: new FormControl('', [Validators.required])
    })
  }

  submitReactiveForm(){
    console.log(this.registrationForm.value);
    if(this.registrationForm.valid){
      // messageService: this.messageService.add({severity:'warn', summary:'failed', detail:'Form not valid'}),
    this.commonservice.registerUser(this.registrationForm.value).subscribe((data:any)=>{
      console.log(data);
      if(data=='inserted'){
        // confirm('Record Submited')
        this.messageService.add({severity:'success', summary:'Submit', detail:'Record Submit'});
        setTimeout(() => {
          this.router.navigate(['loginform'])
        }, 2000)
        // this.router.navigate(['loginform'])
      }else{
        // this.messageService.add({severity:'error', summary: 'Error', detail: 'All value are required'});
       
      }
    })
  }
  
  else{
    // alert('form not valid');
    this.messageService.add({severity:'error', summary: 'Error', detail: 'All value are required'}); 
   
  }
}
}

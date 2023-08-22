import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CommonserviceService } from '../commonservice.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  registrationForm: FormGroup;
  userListData:any []=[];
  userid:any;
  userdata:any  []=[];


display:boolean = false
  msgs: any;
list: any;
  constructor(public commonservice :CommonserviceService,private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.confirm();
    this.userlist();
    this.registrationForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      fatherName:new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      number: new FormControl('',[Validators.required]),
      adhar: new FormControl('', [Validators.required]),
      bdate: new FormControl('', [Validators.required]),
      gender: new FormControl('',[Validators.required]),
      password: new FormControl('', [Validators.required]), 
      cpassword: new FormControl('', [Validators.required])
    })
  }
userlist(){
  this.commonservice.userlistAPI().subscribe((data:any)=>{
    console.log(data);
    this.userListData=data
    console.log(this.userListData);
    
  })
}

editUserDetails(userid: any){
  this.commonservice.edituserdetailsAPI(userid).subscribe((data:any)=>{
    console.log(data);
    this.userdata=data;
    
  })
  // this.messageService.add({severity:'success', summary:'Service Message', detail:'Via MessageService'});
}

showDialog(id:any) {
  this.commonservice.edituserdetailsAPI(id).subscribe((data:any)=>{
    console.log(data);
    this.userdata=data;
    
  })
    this.display = true;
   this.userid=id
    this.registrationForm.patchValue(
      
     {
      firstName: this.userdata[0].name,
     fatherName: this.userdata[0].fathername,
     email:this.userdata[0].email,
     password:this.userdata[0].password,
     number:this.userdata[0].mobile_no,
     adhar:this.userListData[0].aadhar,
     bdate:this.userdata[0].birth_date,
     gender:this.userdata[0].gender,
     cpassword:this.userdata[0].password
 
    }
   
  
    )
      
      {}
    
}

deleteUserDetails(userid: any){  
  console.log("data");
  this.confirmationService.confirm({
    message: 'Are you sure that you want to perform this action?',
    accept: () => {
         this.commonservice.deleteuserdetailsAPI(userid).subscribe((data:any)=>{
    console.log(data);
    if(data=='Deleted'){
      this.userlist();
      this.messageService.add({severity:'success', summary:'Deleted', detail:'Record Deleted'});
    } else {
      this.messageService.add({severity:'warn', summary:'failled', detail:'Declined'});
    }
    
  })
    }
});
 
}

confirm() {
console.log('hello world');

}


submitReactiveUpdateForm(){
  console.log(this.registrationForm.value);
  this.commonservice.UpdateuserdetailsApI(this.registrationForm.value, this.userid).subscribe((data:any)=>{
    console.log(data);
    
    if(data=='Update'){
      // alert('jhwgsuygi')
      this.messageService.add({severity:'success', summary:'Update', detail:'Record Updated'});
      this.userlist();
    }else{
      this.messageService.add({severity:'warn', summary:'failed', detail:'Declined'});

    }

})
}
};


import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projStatus = ['Stable', 'Critical', 'Finished'];
  projectForm: FormGroup;

  ngOnInit(){
    this.projectForm = new FormGroup({
      'projectname': new FormControl(null, Validators.required, this.forbiddenName),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'projectstatus': new FormControl(null, Validators.required)
    });
  }

  onSubmit(){
    console.log(this.projectForm.value);
  }

  forbiddenName(control: FormControl): Promise<any> | Observable<any>{
    const promise = new Promise<any>((resolve, reject) => {
      if (control.value === 'Test'){
        resolve({'nameIsForbidden': true});
      }
      else{
        resolve(null);
      }
    });

    return promise;
  }
}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  public view : string = '';
  public op1 : string = '';
  public oper : string = ''; 

  ngOnInit() {
  }

  perform(){
    switch (this.oper) {
        case '+': this.view = String(Number.parseFloat(this.op1) + Number.parseFloat(this.view)); 
                  break;
        case '-': this.view = String(Number.parseFloat(this.op1) - Number.parseFloat(this.view)); 
                  break;
        case '/': this.view = String(Number.parseFloat(this.op1) / Number.parseFloat(this.view)); 
                  break;
        case '*': this.view = String(Number.parseFloat(this.op1) * Number.parseFloat(this.view)); 
      }  
      this.oper ='&';  
  }

  handler(param : string){
    if (this.oper ==='&'){
      this.oper ='';  
      this.view = '';  
    }  
    if (param !== '+' && param !== '-' &&  param !== '/' && param !== '*' && param !== '&' ){
     this.view = this.view + param;
    } else {
      switch (param) {
        case "+": 
        case "-": 
        case "/":
        case "*":this.oper = param;
                 this.op1 = this.view;
                 this.view = '';
                 break;
        case "&": this.perform();
      }
       
    }
  }

}

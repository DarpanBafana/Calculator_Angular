import {Component} from '@angular/core';

@Component({
    selector: 'app-calculator-component',
    templateUrl: './app.calculator.view.html'
})

export class CalculatorComponent{
    result: string;
    i1: string;
    temp: string;
    operation:string;
    numRes: number;

    constructor(){
        this.result = '';
        this.i1 = '';
        this.temp = '0';
    }

    display(i1: string){
        this.i1 += i1;
        this.result = this.i1;
    }

    getOperator(operator: string){
        this.temp = this.i1;
        this.i1 = '';
        this.operation = operator;
    }

    showResult(i2: string){
        this.i1 = i2; 
        if(this.operation == "+")
            this.numRes = +this.temp + +this.i1;
        if(this.operation == '-')
            this.numRes = +this.temp - +this.i1;
        if(this.operation == '*')
            this.numRes = +this.temp * +this.i1;
        if(this.operation == '/')
            this.numRes = +this.temp / +this.i1;
               
        this.result = this.numRes.toString();
        this.i1 = '';
        this.temp = '';
    }
}
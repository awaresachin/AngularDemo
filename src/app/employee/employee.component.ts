import { Component } from '@angular/core';

@Component({
    selector:'app-employee',
    templateUrl:'./employee.component.html',
    styleUrls:['./employee.component.css']
})

export class EmployeeComponent{

    name="sachin"
    add="Nashik"
    contact=9404566120

    student : any[];
    constructor(){
        this.student=[
           {id:100, name:"Sachin"},
           {id:101, name:"Sanjay"},
           {id:102, name:"Swapnil"},
           {id:103, name:"Somesh"}
        ]
    }    

    person : any[]=[
        {id:1, name:"Sachin", add:"Nashik",contact:9404566120},
        {id:1, name:"Sachin", add:"Nashik",contact:9404566120},
        {id:1, name:"Sachin", add:"Nashik",contact:9404566120},
        {id:1, name:"Sachin", add:"Nashik",contact:9404566120},
        {id:1, name:"Sachin", add:"Nashik",contact:9404566120},
        {id:1, name:"Sachin", add:"Nashik",contact:9404566120},
        {id:1, name:"Sachin", add:"Nashik",contact:9404566120}
    ]
}
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  img= '../../assets/images/home/home-bg.jpg';
  showData:any=[];
  formatdate = 'dd/MM/yyyy';
  str:string="";
  myDate = Date.now();  
  nameSearch:any="";
  public starRating = 0; 


 imageAddress='resources/img/new.png';

 constructor(private http:HttpClient,private router: Router,) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.http.get('http://localhost:8080/api/showdata').subscribe(data=>{
      console.log(data);
      this.showData=data;
    })
  }

  public incCount(){
    this.starRating += 1;
    console.log(this.starRating);
  }
  public desCount(){
    this.starRating -= 1;
    console.log(this.starRating);
  }
  showdate(){
    
  }

  allCards()
{
  console.log("all cards");
}
  action(){

    alert("action");
  

}
}

import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";




@Component({
  selector: 'app-portfolio',
  imports: [HeaderComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  GalleryList:string[]=["images/poert1.png","images/poert2.png","images/poert3.png","images/port1.png","images/port2.png","images/port3.png"]
  displayMOdel:boolean=true
  currentPhoto!:string;
  CurrentPhotoIndex:number=this.GalleryList.indexOf(this.currentPhoto); 
  displayPhoto(photo:string):void{

    this.displayMOdel=false
    this.currentPhoto=photo
  }

  closePhoto():void{

    this.displayMOdel=true

  }

  nextPhoto():void{
    if(this.CurrentPhotoIndex < this.GalleryList.length-1){
      this.CurrentPhotoIndex++

  } else { this.CurrentPhotoIndex =0    }

  this.currentPhoto=this.GalleryList[this.CurrentPhotoIndex]

  }



  perviousPhoto(currentPhoto:string):void{
    if(this.CurrentPhotoIndex <= 0){
      this.CurrentPhotoIndex=this.GalleryList.length
      this.CurrentPhotoIndex--

  } else { this.CurrentPhotoIndex--   }

  this.currentPhoto=this.GalleryList[this.CurrentPhotoIndex]

}


}
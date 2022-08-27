import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CarouselService } from '../services/carousel.service';

interface corouselImagens{
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  @Input() imagens: corouselImagens[] = []
  @Input() indicators = true;
  @Input() controls = true;
  @Input() autoSlide = false;
  @Input() slideInterval = 3000; ///Default 3 segundos

  carouselForm!: FormGroup;

  selectedIndex = 0;

  constructor( private formBuilder : FormBuilder, 
    private router: Router,public carouselService: CarouselService) { }

  ngOnInit(): void {
    if(this.autoSlide){
      this.autoSlideImagens();
    }
    this.carouselForm = this.formBuilder.group(
      {
        cupom : [''],
      }
    );
  }

  autoSlideImagens(): void{
    setInterval(() => {
      this.onNextClick();
    }, this.slideInterval);
  }

  selectImagens(index: number) : void{
    this.selectedIndex = index;
  }

  onPrevClick():void{
      if(this.selectedIndex === 0){
        this.selectedIndex = this.imagens.length -1;
      } else{
        this.selectedIndex--;
      }

  }

  onNextClick():void{
    if(this.selectedIndex === this.imagens.length -1){
      this.selectedIndex = 0;
    } else{
      this.selectedIndex++;
    }
  }

}

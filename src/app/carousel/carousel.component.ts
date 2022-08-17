import { Component, Input, OnInit } from '@angular/core';

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

  selectedIndex = 0;

  constructor() { }

  ngOnInit(): void {
  }

}

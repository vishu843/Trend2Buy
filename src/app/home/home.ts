import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home  implements OnInit, OnDestroy{
 currentYear = new Date().getFullYear();
  images: string[] = [
    'https://sanishtech.com/i/6914e3fcd338b-1762976764.png',
    'https://sanishtech.com/i/6914e43c5f559-1762976828.png'
  ];
  // activeIndex decides which image is opaque (visible)
  activeIndex = 0;

  private rotateIntervalId: any;
  private readonly ROTATE_MS = 3000; // 10 seconds

  ngOnInit(): void {
    // start automatic cycling
    this.rotateIntervalId = setInterval(() => {
      this.activeIndex = (this.activeIndex + 1) % this.images.length;
    }, this.ROTATE_MS);
  }

  ngOnDestroy(): void {
    if (this.rotateIntervalId) {
      clearInterval(this.rotateIntervalId);
    }
  }

}

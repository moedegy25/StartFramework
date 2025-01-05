import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  expandednav:boolean=false;
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event): void {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    console.log('Scroll position:', scrollTop);

    // يمكنك تنفيذ أي منطق خاص بك هنا
    if (scrollTop > 80) {
      console.log('Scrolled more than 80px');
      this.expandednav=true
    }else { this.expandednav=false}
  }
}

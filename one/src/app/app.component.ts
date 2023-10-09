import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, Observer, ScrollToPlugin, MotionPathPlugin, TextPlugin);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'one';
  @ViewChild('introVid', { static: true }) vidElement: ElementRef;

  ngOnInit(): void {
    this.vidElement.nativeElement.playbackRate = 0.5;
    this.vidElement.nativeElement.play()
    this.introScene()
  }

  introScene(): void {
    gsap.fromTo(["#mercury", "#media"], { opacity: 0, translateY: 200 }, { opacity: 1, translateY: 0, stagger: 1 })
  }

}

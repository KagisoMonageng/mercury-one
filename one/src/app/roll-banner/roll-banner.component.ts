import { Component, OnInit } from '@angular/core';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, Observer, ScrollToPlugin, MotionPathPlugin, TextPlugin);

@Component({
  selector: 'app-roll-banner',
  templateUrl: './roll-banner.component.html',
  styleUrls: ['./roll-banner.component.scss']
})
export class RollBannerComponent implements OnInit {

  ngOnInit(): void {
    
  }

}

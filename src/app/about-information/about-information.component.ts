import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component( {
    selector: 'about-information',
    templateUrl: './about-information.component.html',
    styleUrls: ['./about-information.component.css']
} )
export class AboutInformationComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        AOS.init();
    }

}

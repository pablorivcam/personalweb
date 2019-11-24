import { Component, OnInit } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core'
import * as AOS from 'aos';

@Component( {
    selector: 'main-content',
    templateUrl: './main-content.component.html',
    styleUrls: ['./main-content.component.css']
} )
export class MainContentComponent implements OnInit {

    title = 'personalweb';
    faArrowRight = faArrowRight;

    ngOnInit(): void {
        AOS.init();
    }

    constructor( private translateService: TranslateService ) {
        //translateService.setDefaultLang( 'es' );
    }

    switchLanguage( language: string ) {
        this.translateService.use( language );
    }
}

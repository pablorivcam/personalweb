import { Component, OnInit } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core'

@Component( {
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
} )
export class AppComponent implements OnInit {

    title = 'personalweb';
    faArrowRight = faArrowRight;

    ngOnInit(): void {
    }

    constructor( private translateService: TranslateService ) {
        //translateService.setDefaultLang( 'es' );
    }

    switchLanguage( language: string ) {
        this.translateService.use( language );
    }
}

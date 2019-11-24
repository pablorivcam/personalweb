import { Component, OnInit } from '@angular/core';
import { faAngleDoubleUp, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component( {
    selector: 'footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
} )
export class FooterComponent implements OnInit {

    faArrowRight = faAngleDoubleUp;
    faEmail = faEnvelope;
    faPhone = faPhone;

    constructor() { }

    ngOnInit() {
    }

}

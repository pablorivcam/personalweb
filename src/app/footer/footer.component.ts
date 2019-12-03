import { Component, OnInit } from '@angular/core';
import { faAngleDoubleUp, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component( {
    selector: 'footer-component',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
} )
export class FooterComponent implements OnInit {

    faArrowRight = faAngleDoubleUp;
    faEmail = faEnvelope;
    faPhone = faPhone;

    constructor( private router: Router ) { }

    ngOnInit() {
    }

    onLinkedin() {
        window.location.href = 'https://www.linkedin.com/in/pablo-rivas-camino';
    }

    onGithub() {
        window.location.href = 'https://github.com/pablorivcam';
    }

}

import { Component, OnInit } from '@angular/core';
import { faPhone, faEnvelope, faDesktop, faMapMarkerAlt, faCircle, faStar } from '@fortawesome/free-solid-svg-icons';

@Component( {
    selector: 'curriculum',
    templateUrl: './curriculum.component.html',
    styleUrls: ['./curriculum.component.css']
} )
export class CurriculumComponent implements OnInit {

    faEmail = faEnvelope;
    faPhone = faPhone;
    faWeb = faDesktop;
    faLocation = faMapMarkerAlt;
    faCircle = faCircle;
    faStar = faStar;

    constructor() { }

    ngOnInit() {
    }

}

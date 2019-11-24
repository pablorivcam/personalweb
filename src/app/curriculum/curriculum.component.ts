import { Component, OnInit } from '@angular/core';
import { faPhone, faEnvelope, faDesktop, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

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

    constructor() { }

    ngOnInit() {
    }

}

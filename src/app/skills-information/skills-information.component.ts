import { Component, OnInit, HostListener } from '@angular/core';

@Component( {
    selector: 'skills-information',
    templateUrl: './skills-information.component.html',
    styleUrls: ['./skills-information.component.css']
} )
export class SkillsInformationComponent implements OnInit {

    private barWidth: number[] = [];
    private barVisible: boolean[] = [];
    private barCount = 30;

    constructor() {

        this.barWidth.push( 90 );

        for ( var i = 0; i < this.barWidth.length; i++ ) {
            this.barVisible.push( false );
        }

    }

    public onIntersection( { target, visible }: { target: Element; visible: boolean } ): void {
        if ( visible ) {
            target.setAttribute( 'class', 'progress-bar' );

        } else {
            target.setAttribute( 'class', 'progress-bar out-of-view' );

        }
    }

    ngOnInit() {
    }

}

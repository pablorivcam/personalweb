import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AnimationPoint } from 'src/app/initial-animation/animation-point';
import { angularMath } from 'angular-ts-math/dist/angular-ts-math';
import { Observable, fromEvent } from 'rxjs';

@Component( {
    selector: 'initial-animation',
    templateUrl: './initial-animation.component.html',
    styleUrls: ['./initial-animation.component.css']
} )
export class InitialAnimationComponent implements OnInit {
    mouseX: number;
    mouseY: number;

    @ViewChild( 'canvas' )
    canvas: ElementRef<HTMLCanvasElement>;

    private N_POINTS = 50;

    private ctx: CanvasRenderingContext2D;

    private windowHeight;
    private windowWidth;

    private iteration = 0;

    private points: AnimationPoint[] = [];
    private polygon: AnimationPoint[] = [];

    constructor() {
        this.windowWidth = document.body.clientWidth;
        this.windowHeight = document.body.clientHeight;

        fromEvent<MouseEvent>( document.body, 'mousemove' ).subscribe( e => {
            this.mouseX = e.pageX;
            this.mouseY = e.pageY;
        } )
    }

    onResize( event ) {
        this.windowWidth = document.body.clientWidth;
        this.windowHeight = document.body.clientHeight;
        this.render();
    }

    ngOnInit() {
        this.render();
        this.animate();
    }

    private initializePoints( canvas: ElementRef<HTMLCanvasElement> ) {

        this.points = [];

        for ( var i = 0; i < this.N_POINTS; i++ ) {
            this.points.push( new AnimationPoint( this.randomRange( 0, canvas.nativeElement.width ),
                this.randomRange( 0, canvas.nativeElement.height ), canvas ) );
        }

    }

    private randomRange( min: number, max: number ) {
        return Math.floor( Math.random() * ( +max - +min ) ) + +min;
    }

    render() {
        this.canvas.nativeElement.width = document.body.clientWidth;
        this.canvas.nativeElement.height = document.body.clientHeight;

        this.ctx = this.canvas.nativeElement.getContext( '2d' );

        this.ctx.clearRect( 0, 0, this.windowWidth, this.windowHeight );

        this.initializePoints( this.canvas );
        /*
        this.canvas.nativeElement.addEventListener( 'mousemove', function( evt ) {
            this.mouseX = evt.clientX;
            this.mouseY = evt.clientY;
        }, false );*/
    }

    getMousePos( canvas, evt ) {

    }

    animate = () => {
        if ( this.canvas.nativeElement.width !== document.body.clientWidth ) {
            this.canvas.nativeElement.width = document.body.clientWidth;
            this.canvas.nativeElement.height = document.body.clientHeight;
        }

        requestAnimationFrame( this.animate );

        this.iteration++;
        if ( this.iteration === 2 ) {
            this.iteration = 0;
            this.ctx.clearRect( 0, 0, this.windowWidth, this.windowHeight );

            for ( var i = 0; i < this.N_POINTS; i++ ) {

                /*this.ctx.beginPath();
                this.ctx.moveTo( this.points[i].getPositionX(), this.points[i].getPositionY() );
                const nextPoints = this.points[i].getNextClosertPointsOnAPointsArray( this.points );
                this.ctx.strokeStyle = '#FFFFDD';
                if ( nextPoints[0] !== undefined ) {
                    this.ctx.lineTo( nextPoints[0].getPositionX(), nextPoints[0].getPositionY() );
                }
                if ( nextPoints[1] !== undefined ) {
                    this.ctx.lineTo( nextPoints[1].getPositionX(), nextPoints[1].getPositionY() );
                }
                this.ctx.fillStyle = this.points[i].getColor();
    
                this.ctx.closePath();
                this.ctx.fill();
                this.ctx.beginPath();
                */

                this.ctx.strokeStyle = this.points[i].getColor();
                this.ctx.beginPath();
                this.ctx.arc( this.points[i].getPositionX(), this.points[i].getPositionY(), this.points[i].getRadious(), 0, 2 * Math.PI );
                this.ctx.stroke();

                //this.ctx.lineTo( nextPoints[1].getPositionX(), nextPoints[1].getPositionY() );
                //this.ctx.stroke();

                this.points[i].move( this.isPointCloseToMouse( this.points[i], ( this.windowWidth + this.windowHeight ) / 8 ) );

            }
        }
    }

    private isPointCloseToMouse( point: AnimationPoint, radious: number ): boolean {
        return ( this.mouseX < point.getPositionX() + radious && this.mouseX > point.getPositionX() - radious
            && this.mouseY < point.getPositionY() + radious && this.mouseY > point.getPositionY() - radious );
    }

}

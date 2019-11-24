import { ElementRef } from '@angular/core';
import { angularMath } from 'angular-ts-math';

export class AnimationPoint {

    private positionX: number;
    private positionY: number;

    private initialX: number;
    private initialY: number;

    private radiousVelocity = 0;
    private radious = 0;
    private maxRadious = 0;

    private canvas: ElementRef<HTMLCanvasElement>;

    constructor( positionX: number, positionY: number, canvas ) {
        this.positionX = positionX;
        this.positionY = positionY;
        this.canvas = canvas;

        this.initialX = positionX;
        this.initialY = positionY;

        this.radiousVelocity = this.randomRange( 1, 2 );
        this.maxRadious = this.randomRange( 100, 200 );

    }

    public getRadious() {
        return this.radious;
    }

    public getMaxRadious() {
        return this.maxRadious;
    }

    public getColor() {

        var r = ( this.maxRadious - this.radious ) * 255 / this.maxRadious;
        var g = ( this.maxRadious - this.radious ) * 255 / this.maxRadious;
        var b = 21 + ( this.maxRadious - this.radious ) * 255 / this.maxRadious;

        return 'rgba(' + r + ',' + g + ',' + b + ')';
    }

    public move( canStart: boolean ) {

        if ( this.radious > 0 || canStart ) {
            this.radious += this.radiousVelocity;
        }
        if ( this.radious >= this.maxRadious ) {
            this.positionX = this.randomRange( 0, this.canvas.nativeElement.width );
            this.positionY = this.randomRange( 0, this.canvas.nativeElement.height );
            this.radious = 0;
        }


    }

    public getPositionX() {
        return this.positionX;
    }
    public getPositionY() {
        return this.positionY;
    }

    public setPositionX( positionX ) {
        this.positionX = positionX;
    }
    public setPositionY( positionY ) {
        this.positionY = positionY;
    }

    public getNextClosertPointsOnAPointsArray( pointsArray ): AnimationPoint[] {

        var distance1: number = 0;
        var distance2: number = 0;
        var point1: number;
        var point2: number;
        var aux;

        for ( var i = 0; i < pointsArray.length; i++ ) {
            if ( !this.equals( pointsArray[i] ) ) {
                aux = this.calculateDistanceBetweenAnotherPoint( pointsArray[i] );

                //if ( aux < 100 ) {

                if ( aux >= distance1 ) {
                    point2 = point1;
                    distance2 = distance1;
                    distance1 = aux;
                    point1 = i;
                } else if ( aux >= distance2 ) {
                    distance2 = aux;
                    point2 = i;
                }
                //}
            }
        }

        return [pointsArray[point1], pointsArray[point2]];
    }

    public calculateDistanceBetweenAnotherPoint( point: AnimationPoint ): number {
        return angularMath.squareOfNumber( this.square( point.getPositionX() - this.getPositionX() ) + this.square( point.getPositionY() - this.getPositionY() ) );
    }

    public square( n: number ): number {
        return n * n;
    }

    public equals( point: AnimationPoint ): boolean {
        return point.getPositionX() == this.getPositionX() && point.getPositionY() == this.getPositionY();
    }

    private randomRange( min: number, max: number ) {
        return Math.floor( Math.random() * ( +max - +min ) ) + +min;
    }

}

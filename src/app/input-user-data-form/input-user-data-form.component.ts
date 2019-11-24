import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MessageService } from 'src/app/services/message.service';

@Component( {
    selector: 'input-user-data-form',
    templateUrl: './input-user-data-form.component.html',
    styleUrls: ['./input-user-data-form.component.css']
} )
export class InputUserDataFormComponent implements OnInit {
    registered = false;
    submitted = false;
    userForm: FormGroup;

    constructor( private formBuilder: FormBuilder, public _MessageService: MessageService ) { }

    ngOnInit() {

        this.userForm = this.formBuilder.group( {
            name: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            message: ['', Validators.required]
        } );

    }

    invalidName() {
        return ( this.submitted && this.userForm.controls.name.errors != null );
    }

    invalidMessage() {
        return ( this.submitted && this.userForm.controls.message.errors != null );
    }

    invalidEmail() {
        return ( ( this.submitted || this.userForm.controls.email.value !== '' ) && this.userForm.controls.email.errors != null );
    }

    onSubmit( form ) {
        this.submitted = true;

        if ( this.userForm.invalid == true ) {
            return;
        }
        else {
            this.registered = true;
            this._MessageService.sendMessage( form ).subscribe(() => { alert( 'Mensaje enviado correctamente' ); } );
        }
    }

    submit() {
        this.submitted = true;

        if ( this.userForm.invalid == true ) {
            return;
        }
        else {
            const form = { name: '', message: '', email: '' };
            form.name = this.userForm.get( 'name' ).value;
            form.email = this.userForm.get( 'email' ).value;
            form.message = this.userForm.get( 'message' ).value;
            this.registered = true;
            this._MessageService.sendMessage( form ).subscribe(() => { alert( 'Mensaje enviado correctamente' ); } );
        }
    }


}

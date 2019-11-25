import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputUserDataFormComponent } from './input-user-data-form/input-user-data-form.component';

import { MessageService } from './services/message.service';
import { InitialAnimationComponent } from './initial-animation/initial-animation.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { MainContentComponent } from './main-content/main-content.component';
import { AboutInformationComponent } from './about-information/about-information.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { SkillsInformationComponent } from './skills-information/skills-information.component';
import { InViewportModule } from 'ng-in-viewport';
import { FooterComponent } from './footer/footer.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { RouterModule, Routes } from '@angular/router';
import { EducationComponent } from './education/education.component';

export function translateHttpLoaderFactory( http: HttpClient ) {
    return new TranslateHttpLoader( http );
}

const appRoutes: Routes = [
    {
        path: 'curriculum',
        component: CurriculumComponent,
        data: { title: 'Curriculum' }
    },
    {
        path: '',
        component: MainContentComponent,
        data: { title: 'Pablo Rivas Camino' }
    }
];

@NgModule( {
    declarations: [
        AppComponent,
        InputUserDataFormComponent,
        InitialAnimationComponent,
        MainContentComponent,
        NavBarComponent,
        AboutInformationComponent,
        SkillsInformationComponent,
        FooterComponent,
        CurriculumComponent,
        EducationComponent
    ],
    imports: [
        InViewportModule,
        ScrollToModule.forRoot(),
        BrowserAnimationsModule,
        FontAwesomeModule,
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        TranslateModule.forRoot( {
            loader: {
                provide: TranslateLoader,
                useFactory: translateHttpLoaderFactory,
                deps: [HttpClient]
            }
        } ),
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // <-- debugging purposes only
        )
    ],
    providers: [MessageService],
    bootstrap: [AppComponent],
    exports: [RouterModule]
} )
export class AppModule { }

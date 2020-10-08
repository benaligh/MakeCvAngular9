import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { AddEducationComponent } from './add-education/add-education.component';
import { UpdateEducationComponent } from './update-education/update-education.component';
import { ExperienceComponent } from './experience/experience.component';
import { AddExperienceComponent } from './add-experience/add-experience.component';
import { UpdateExperienceComponent } from './update-experience/update-experience.component';
import { StageComponent } from './stage/stage.component';
import { AddStageComponent } from './add-stage/add-stage.component';
import { UpdateStageComponent } from './update-stage/update-stage.component';
import { ProjectComponent } from './project/project.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { UpdateProjectComponent } from './update-project/update-project.component';
import { CertificationComponent } from './certification/certification.component';
import { AddCertificationComponent } from './add-certification/add-certification.component';
import { UpdateCertificationComponent } from './update-certification/update-certification.component';
import { LanguageComponent } from './language/language.component';
import { AddLanguageComponent } from './add-language/add-language.component';
import { UpdateLanguageComponent } from './update-language/update-language.component';
import { SkillsComponent } from './skills/skills.component';
import { AddSkillsComponent } from './add-skills/add-skills.component';
import { UpdateSkillsComponent } from './update-skills/update-skills.component';
import { OrganizationComponent } from './organization/organization.component';
import { AddOrganizationComponent } from './add-organization/add-organization.component';
import { UpdateOrganizationComponent } from './update-organization/update-organization.component';
import { ProfileComponent } from './profile/profile.component';
import { AddProfileComponent } from './add-profile/add-profile.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { EducationService } from './Service/education.service';
import { ExperienceService } from './Service/experience.service';
import { LanguageService } from './Service/language.service';
import { CertificationService } from './Service/certification.service';
import { OrganizationService } from './Service/organization.service';
import { ProfileService } from './Service/profile.service';
import { AboutService } from './Service/about.service';
import { SkillsService } from './Service/skills.service';
import { StageService } from './Service/stage.service';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LoadCvComponent } from './load-cv/load-cv.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    EducationComponent,
    AddEducationComponent,
    UpdateEducationComponent,
    ExperienceComponent,
    AddExperienceComponent,
    UpdateExperienceComponent,
    StageComponent,
    AddStageComponent,
    UpdateStageComponent,
    ProjectComponent,
    AddProjectComponent,
    UpdateProjectComponent,
    CertificationComponent,
    AddCertificationComponent,
    UpdateCertificationComponent,
    LanguageComponent,
    AddLanguageComponent,
    UpdateLanguageComponent,
    SkillsComponent,
    AddSkillsComponent,
    UpdateSkillsComponent,
    OrganizationComponent,
    AddOrganizationComponent,
    UpdateOrganizationComponent,
    ProfileComponent,
    AddProfileComponent,
    UpdateProfileComponent,
    RegisterComponent,
    LoginComponent,
    LoadCvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    EducationService,
    CertificationService,
    ExperienceService,
    LanguageService,
    OrganizationService,
    ProfileService,
    AboutService,
    SkillsService,
    StageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

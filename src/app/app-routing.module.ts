import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';
import { EducationComponent } from './education/education.component';
import { AddEducationComponent } from './add-education/add-education.component';
import { UpdateEducationComponent } from './update-education/update-education.component';
import { LanguageComponent } from './language/language.component';
import { SkillsComponent } from './skills/skills.component';
import { CertificationComponent } from './certification/certification.component';
import { OrganizationComponent } from './organization/organization.component';
import { StageComponent } from './stage/stage.component';
import { ProjectComponent } from './project/project.component';
import { ExperienceComponent } from './experience/experience.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoadCvComponent } from './load-cv/load-cv.component';


const routes: Routes = [
  {path:'', component: AboutComponent },
  {path:'about', component: AboutComponent },
  {path:'login', component: LoginComponent },
  {path:'register', component: RegisterComponent },
  {path:'profile', component: ProfileComponent },
  {path:'education', component: EducationComponent,
  children: [
    {path:'add-education', component: AddEducationComponent },
    {path:'update-education', component: UpdateEducationComponent },
  ]
 },
 {path: 'experience', component: ExperienceComponent},
 {path: 'projects', component: ProjectComponent},
 {path: 'stages', component: StageComponent},
 {path: 'organizations', component: OrganizationComponent},
 {path: 'certifications', component: CertificationComponent},
 {path: 'skills', component: SkillsComponent},
 {path: 'languages', component: LanguageComponent},
 {path: 'cv', component: LoadCvComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Type } from '@angular/core';
import { pageComponentTypes } from './../shared/page-content/page-content.component';
import { ContactsComponent } from "./contacts/contacts.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { MybackgroundComponent } from "./mybackground/mybackground.component";
import { ProjectsComponent } from "./projects/projects.component";
import { SocialsComponent } from "./socials/socials.component";

export function getPageComponentTypeValue(name: string): Type<pageComponentTypes>
{
  switch(name){
    case "homepage":
      return HomepageComponent;
    case "contacts":
      return ContactsComponent;
    case "myBackground":
      return MybackgroundComponent;
    case "projects":
      return ProjectsComponent;
    case "socials":
      return SocialsComponent
    default:
      return HomepageComponent
  }
}

import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IExperience } from './iexperience';

@Component({
  selector: 'app-mybackground',
  templateUrl: './mybackground.component.html',
  styleUrls: ['./mybackground.component.css', '../pagesCommon.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MybackgroundComponent
{
  public experiences: IExperience[] = [
    {
      id: 1,
      companyName: "Infor PSSC",
      position: "Associate Software Engineer",
      yearsOfStay: "2023 - Present",
      description: "I was given a chance to work with brilliant people here, it was a roller coaster learning a new tech stack (C# .net) , but these people guided me to be efficient developer, taught clean coding, best practices, optimization, and how to really develop an enterprise-level applications.",
      iconLink: "assets/logos/design/infor_logo.png"
    },
    {
      id: 2,
      companyName: "Accenture",
      position: "Accenture Technology Academy Program",
      yearsOfStay: "2023",
      description: "I took Accenture's  ATA Program, equivalent as my internship. They gave an opportunity for me to learn Front-end development with Angular, and as my final output, we we’re able to develop a system using the knowledge we gained from the course. I also acquired bunch of Pluralsight certificates for web development and Angular.",
      iconLink: "assets/logos/design/accenture_logo.png"
    },
    {
      id: 3,
      companyName: "Bulacan State University",
      position: "Tertiary Education",
      yearsOfStay: "2019 - 2023",
      description: "There's a wide variety of IT-related industry stuffs taught here, hardware, peopleware, and software, but I focused on what I think I could excel and enjoy, programming. My pivotal moment as developer was during capstone days, my team and I was just completely lacking knowledge and we got rejected over and over. I needed to study Laravel framework and tailwind for faster development, to keep up with the deadlines. It was an exhausting journey but was fulfilling when I got my Bachelor of Science in Information Technology degree as Cum Laude.",
      iconLink: "assets/logos/design/bulacan_state_university_logo.png"
    },
  ]
}

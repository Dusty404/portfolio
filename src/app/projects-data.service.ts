import { Injectable } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
@Injectable({
  providedIn: 'root'
})
export class ProjectsDataService {
  currentLang: 'de' | 'en' = 'de'; // Standard

  constructor(private translate: TranslateService) {
    // Beim Start festlegen
    const lang = (this.translate.currentLang || 'de') as 'de' | 'en';

    // Änderungen überwachen
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.currentLang = event.lang as 'de' | 'en';
    });
  }

 getProjects(lang: 'de' | 'en') {
  return this.projectsArray.map(project => ({
    ...project,
    title: typeof project.title === 'object' ? project.title[lang] : project.title,
    discription: typeof project.discription === 'object' ? project.discription[lang] : project.discription,
    implementationDetails: typeof project.implementationDetails === 'object' ? project.implementationDetails[lang] : project.implementationDetails,
    duration: typeof project.duration === 'object' ? project.duration[lang] : project.duration,
  }));
}


  js:string = "assets/img/icons-frontend/javascript.png";
  html:string = "assets/img/icons-frontend/html.png";
  css:string = "assets/img/icons-frontend/css.png";
  ts:string = "assets/img/icons-frontend/typescript.png";
  angular:string = "assets/img/icons-frontend/angular.png";
  firebase:string = "assets/img/icons-frontend/firebase.png";
  git:string = "assets/img/icons-frontend/git.png";
  api:string = "assets/img/icons-frontend/api.png";
  scrum:string = "assets/img/icons-frontend/scrum.png";
  materialDesign:string = "assets/img/icons-frontend/materialDesign.png";

  projectsArray = [
    {
      title: {
        de: "JOIN",
        en: "JOIN"
      },
      imgSrc: "../../assets/img/test-pattern-152459_640.png",
      discription: {
        de: "test",
        en: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories."
      },
      implementationDetails: {
        de: "test",
        en: "Short text that describes your role or the workflow for this specific project. Let a recruiter know more about your knowledge and ability to work independently or collaboratively in a structured way."
      },
      duration: {
        de: "5 Wochen",
        en: "5 weeks"
      },
      usedTechnologies: [
        {
          technologieName: "HTML",
          technologieIcon:  this.html,
        },
        {
          technologieName: "CSS",
          technologieIcon:  this.css,
        },
        {
          technologieName: "TypeScript",
          technologieIcon:  this.ts,
        },
        {
          technologieName: "GitHub",
          technologieIcon:  this.git,
        },
        {
          technologieName: "Firebase",
          technologieIcon:  this.firebase,
        },
        {
          technologieName: "Angular",
          technologieIcon:  this.angular,
        },
        {
          technologieName: "MaterialDesign",
          technologieIcon:  this.materialDesign,
        },
      ]
    },
    {
      title: {
        de: "El Polo Loco",
        en: "El Polo Loco"
      },
      imgSrc: "../../assets/img/projects-section/pollo.png",
      discription: {
        de: "Plattformspiel mit Lauf-, Sprung- und Wurfmechaniken auf Basis objektorientierter Programmierung. Ziel ist es, mit der Spielfigur Pepe sammelbare Objekte wie Münzen und Tabasco-Salsa zu finden, um im Kampf gegen eine Gegnerin - die verrückte Henne - zu bestehen.",
        en: "Platformer featuring running, jumping, and throwing mechanics, developed using an object-oriented programming approach. The player controls Pepe to collect items such as coins and tabasco salsa in order to face an enemy - the crazy hen.",
      },
      implementationDetails: {
        de: "Bei diesem Projekt lag der Schwerpunkt auf dem Einsatz von JavaScript-Klassen. Das gesamte Spiel - von der Objektstruktur über die Spiellogik bis hin zu den Animationen - entstand in einem klar strukturierten, objektorientierten Workflow, den ich eigenständig geplant und umgesetzt habe.",
        en: "This project focused on the use of JavaScript classes. The entire game - from the object structure and game logic to the animations - was developed following a clearly structured, object-oriented workflow that I independently planned and implemented."
      },
      duration: {
        de: "3 Wochen",
        en: "3 weeks"
      },
      usedTechnologies: [
        {
          technologieName: "HTML",
          technologieIcon:  this.html,
        },
        {
          technologieName: "CSS",
          technologieIcon:  this.css,
        },
        {
          technologieName: "JavaScript",
          technologieIcon:  this.js,
        },
      ]
    },
    {
      title: {
        de: "Pokedex",
        en: "pokedex"
      },
      imgSrc: "../../assets/img/projects-section/pokedex.png",
      discription: {
        de: "Eine interaktive Webanwendung, die wie ein digitaler Pokédex funktioniert. Über die PokéAPI werden Daten zu verschiedenen Pokémon abgerufen. Nutzer können gezielt nach Pokémon suchen und sich Detailinformationen wie Statuswerte, Fähigkeiten und erlernbare Attacken anzeigen lassen.",
        en: "An interactive web app designed to function like a digital Pokédex. It uses the PokéAPI to retrieve data on various Pokémon. Users can search for specific Pokémon and view detailed information such as stats, abilities, and available moves.",
      },
      implementationDetails: {
        de: "Ich habe dieses Projekt eigenständig umgesetzt, mit dem Fokus auf der Anbindung externer APIs und der dynamischen Darstellung von Inhalten. Die Anwendung demonstriert meine Fähigkeiten im Umgang mit RESTful APIs, im State-Management sowie in der strukturierten Darstellung komplexer Daten.",
        en: "I developed this project independently, focusing on integrating external APIs and dynamically displaying content. The app demonstrates my ability to work with RESTful APIs, manage state, and present complex data in a clear and structured way."
      },
      duration: {
        de: "2 Wochen",
        en: "2 weeks"
      },
      usedTechnologies: [
        {
          technologieName: "HTML",
          technologieIcon:  this.html,
        },
        {
          technologieName: "CSS",
          technologieIcon:  this.css,
        },
        {
          technologieName: "JavaScript",
          technologieIcon:  this.js,
        },
        {
          technologieName: "Rest-API",
          technologieIcon:  this.api,
        }
      ]
    },
  ]
}

import { Injectable } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
@Injectable({
  providedIn: 'root'
})
export class ProjectsDataService {
  currentLang: 'de' | 'en' = 'de';

  constructor(private translate: TranslateService) {
    const lang = (this.translate.currentLang || 'de') as 'de' | 'en';

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
      imgSrc: "../../assets/img/projects-section/join.png",
      discription: {
        de: "Auf dem Kanban-System basierender Aufgabenmanager. Erstellen und organisieren Sie Aufgaben per Drag-and-Drop, weisen Sie Benutzern und Kategorien zu.",
        en: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories."
      },
      implementationDetails: {
        de: "In diesem Projekt lag der Schwerpunkt auf teamorientierter Zusammenarbeit. Über GitHub wurde mit mehreren Teammitgliedern parallel an unterschiedlichen Bereichen der Anwendung gearbeitet. Mein Verantwortungsbereich umfasste die Gestaltung und Umsetzung des Kontaktbereichs sowie die Integration des Firebase-Backends",
        en: "This project focused on collaborative teamwork. Together with several team members, we worked simultaneously on different parts of the application using GitHub. I was responsible for designing and implementing the contact section, as well as integrating the Firebase backend."
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
          technologieName: "MaterialDesign",
          technologieIcon:  this.materialDesign,
        },
      ],
      gitLink: "https://github.com/Dusty404/Join.git",
      liveTestLink : "http://join.justin-koll.de/"
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
        de: "Bei diesem Projekt lag der Schwerpunkt auf dem Einsatz von JavaScript-Klassen. Das gesamte Spiel - von der Objektstruktur über die Spiellogik bis hin zu den Animationen - entstand in einem klar strukturierten, objektorientierten Workflow.",
        en: "This project focused on the use of JavaScript classes. The entire game - from the object structure and game logic to the animations - was developed following a clearly structured, object-oriented workflow."
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
      ],
      gitLink: "https://github.com/Dusty404/El_Pollo_Loco.git",
      liveTestLink : "http://el-pollo-loco.justin-koll.de/"
    },
    {
      title: {
        de: "Pokedex",
        en: "Pokedex"
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
      ],
      gitLink: "https://github.com/Dusty404/Pokedex.git",
      liveTestLink : "http://pokedex.justin-koll.de/"
    },
  ]
}

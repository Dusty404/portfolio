import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsDataService {

  constructor() { }


  js:string = "assets/img/icons-frontend/javascript.png";
  html:string = "assets/img/icons-frontend/html.png";
  css:string = "assets/img/icons-frontend/css.png";
  ts:string = "assets/img/icons-frontend/typescript.png";
  angular:string = "assets/img/icons-frontend/angular.png";
  firebase:string = "assets/img/icons-frontend/firebase.png";
  git:string = "assets/img/icons-frontend/git.png";
  rest:string = "assets/img/icons-frontend/api.png";
  scrum:string = "assets/img/icons-frontend/scrum.png";
  materialDesign:string = "assets/img/icons-frontend/materialDesign.png";

  projectsArray = [
    {
      title: "JOIN",
      imgSrc: "../../assets/img/test-pattern-152459_640.png",
      discription: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
      implementationDetails: "Short text that describes your role or the workflow for this specific project. Let a recruiter know more about your knowledge and ability to work independently or collaboratively in a structured way.",
      duration: "5 weeks",
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
          technologieName: "GitHub",
          technologieIcon:  this.git,
        },
        {
          technologieName: "Firebase",
          technologieIcon:  this.firebase,
        }
      ]
    },
    {
      title: "El Pollo Loco",
      imgSrc: "../../assets/img/projects-section/pollo.png",
      discription: "Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.",
      implementationDetails: "Short text that describes your role or the workflow for this specific project. Let a recruiter know more about your knowledge and ability to work independently or collaboratively in a structured way.",
      duration: "3 weeks",
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
      title: "Pokedex 1",
      imgSrc: "../../assets/img/test-pattern-152459_640.png",
      discription:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
    },
    {
      title: "Pokedex 2",
      imgSrc: "../../assets/img/test-pattern-152459_640.png",
      discription:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
    },
    {
      title: "Pokedex 3",
      imgSrc: "../../assets/img/test-pattern-152459_640.png",
      discription:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
    }
  ]
}

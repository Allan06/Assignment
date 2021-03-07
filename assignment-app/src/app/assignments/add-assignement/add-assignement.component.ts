import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AssignmentsService } from 'src/app/shared/assignments.service';
import { Assignment } from '../assignment.model';

@Component({
  selector: 'app-add-assignement',
  templateUrl: './add-assignement.component.html',
  styleUrls: ['./add-assignement.component.css']
})
export class AddAssignementComponent implements OnInit {

  nom:string;
  matiere:string;
  auteur:string;
  note:number;
  remarques:string;
  dateRendu:Date;

  constructor(private assignmentsService:AssignmentsService,
              private router:Router) { }

  ngOnInit(): void {}

  onSubmit() {
    console.log("onSubmit")
    const newAssignment = new Assignment();

    newAssignment.nom = this.nom;
    newAssignment.matiere = this.matiere;
    newAssignment.auteur = this.auteur;
    newAssignment.note = this.note;
    newAssignment.remarques = this.remarques;
    newAssignment.dateDeRendu = this.dateRendu;
    newAssignment.rendu = false;
    newAssignment.id = Math.ceil(Math.random()*100000);

    this.assignmentsService.addAssignment(newAssignment)
    .subscribe(message => {
      console.log(message);
      this.router.navigate(["/home"]);
    })
  }
}

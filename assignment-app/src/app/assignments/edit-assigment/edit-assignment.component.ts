import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AssignmentsService } from 'src/app/shared/assignments.service';
import { Assignment } from '../assignment.model';

@Component({
  selector: 'app-edit-assignment',
  templateUrl: './edit-assignment.component.html',
  styleUrls: ['./edit-assignment.component.css'],
})
export class EditAssignmentComponent implements OnInit {
  assignment: Assignment;
  nom: string;
  matiere:string;
  auteur:string;
  note:number;
  remarques:string;
  dateDeRendu: Date;

  constructor(
    private assignmentsService: AssignmentsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAssignment();

    console.log('Query Params : ');
    console.log(this.route.snapshot.queryParams);
    console.log('fragment : ' + this.route.snapshot.fragment);
  }

  getAssignment() {

    const id = +this.route.snapshot.params.id;
    this.assignmentsService.getAssignment(id).subscribe((assignment) => {
      this.assignment = assignment;
      this.nom = assignment.nom;
      this.matiere = assignment.matiere;
      this.auteur = assignment.auteur;
      this.note = assignment.note;
      this.remarques = assignment.remarques;
      this.dateDeRendu = assignment.dateDeRendu;
    });
  }

  onSaveAssignment() {
    if (this.nom) {
      this.assignment.nom = this.nom;
    }

    if (this.dateDeRendu) {
      this.assignment.dateDeRendu = this.dateDeRendu;
    }
    this.assignmentsService
      .updateAssignment(this.assignment)
      .subscribe((message) => {
        console.log(message);
        this.router.navigate(['/home']);
      });
  }
}

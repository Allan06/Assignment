import { Component, OnInit /*, AfterViewInit, ViewChild */} from '@angular/core';
import { AssignmentsService } from '../shared/assignments.service';
import { Assignment } from './assignment.model';
/*import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';*/

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit /*, AfterViewInit*/ {

  titre = "Mon application sur les Assignments 2 !"
  formVisible = false;
  assignments:Assignment[];
  assignmentSelectionne:Assignment;
  dataSource:Assignment[];
  displayedColumns: string[] = ['Nom', 'Matiere', 'Auteur', 'Note', 'Date De Rendu', 'Remarques']
  buffer = 20;
  //dataSource = new MatTableDataSource();

  constructor(private assignmentsService:AssignmentsService) { }

  /*
  @ViewChild(MatPaginator, {static: false})
  set paginator(value: MatPaginator) {
    if (this.dataSource){
      this.dataSource.paginator = value;
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }*/

  ngOnInit(): void {

    this.assignmentsService.getAssignments()
      .subscribe(assignments => {
        // exécuté que quand les données sont réellement disponible
        this.assignments = assignments;
        this.dataSource = assignments.slice(0, this.buffer);
      });
  }

  assignmentClique(assignment) {
    this.assignmentSelectionne = assignment;
  }

  onTableScroll(e) {
    const tableViewHeight = e.target.offsetHeight
    const tableScrollHeight = e.target.scrollHeight
    const scrollLocation = e.target.scrollTop;

    const limit = tableScrollHeight - tableViewHeight - this.buffer;
    if (scrollLocation > limit) {
      this.dataSource = this.dataSource.concat(this.assignments.slice(this.buffer, this.buffer + this.buffer));
    }
  }
}

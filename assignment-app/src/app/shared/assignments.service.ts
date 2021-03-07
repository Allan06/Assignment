import { Injectable } from '@angular/core';
import { Assignment } from '../assignments/assignment.model';
import { Observable, of } from 'rxjs';
import { LoggingService } from './logging.service';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AssignmentsService {

  constructor(
    private loggingService: LoggingService,
    private http: HttpClient,
    private router: Router
  ) {}


  uri = 'http://localhost:8010/api/assignments';

  getAssignments(): Observable<Assignment[]> {

    return this.http.get<Assignment[]>(this.uri)
      .pipe(
        catchError(this.handleError<any>("getAssignments"))
      )
  }

  // Version avec promesse
  getAssignmentsPromise(): Promise<Assignment[]> {

    return this.http.get<Assignment[]>(this.uri).toPromise();
  }

  getAssignment(id: number): Observable<Assignment> {

    return this.http.get<Assignment>(this.uri + '/' + id)
    .pipe(
      map(a => {
        a.nom;
        return a;
      }),
      tap(a => {
        console.log("Dans le tap");
        console.log(a);
      }),
      catchError(this.handleError<Assignment>(`getAssignment(id=${id})`))
    );
  }

  private handleError<T>(operation:any, result?:T) {
    return(error:any) : Observable<T> => {
      console.log(error); // pour afficher dans la console
      console.log(operation + " a échoué " + error.message);

      return of(result as T);
    }
  }

  addAssignment(assignment: Assignment): Observable<any> {
    this.loggingService.log(assignment, 'ajouté');

    return this.http.post(this.uri, assignment);
  }

  updateAssignment(assignment: Assignment): Observable<any> {
    this.loggingService.log(assignment, 'modifié');

    return this.http.put<Assignment>(this.uri, assignment);
  }

  deleteAssignment(assignment: Assignment): Observable<any> {
    this.loggingService.log(assignment, 'supprimé');

    return this.http.delete(this.uri + '/' + assignment._id);
  }

  navigateTo(row: any) {
    this.router.navigate(['/assignment/'+row.id]);
  }
}

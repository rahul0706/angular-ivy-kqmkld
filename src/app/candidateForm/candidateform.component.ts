import { Component, EventEmitter, Output } from '@angular/core';
import { CandidateInfo } from '../candidateForm/candidateinfo';

@Component({
  selector: 'candidateform',
  templateUrl: './candidateform.component.html',
  styleUrls: ['./candidateform.component.css']
})
export class CandidateFormComponent {
  @Output() candidateDetails = new EventEmitter<CandidateInfo>();
  candidateInfo: CandidateInfo[];
  constructor() {
    this.candidateInfo = [
      {
        id: 1,
        first_name: 'Jeanette',
        last_name: 'Penddreth',
        email: 'jpenddreth0@census.gov',
        gender: 'Female'
      },
      {
        id: 2,
        first_name: 'Giavani',
        last_name: 'Frediani',
        email: 'gfrediani1@senate.gov',
        gender: 'Male'
      },
      {
        id: 3,
        first_name: 'Noell',
        last_name: 'Bea',
        email: 'nbea2@imageshack.us',
        gender: 'Female'
      },
      {
        id: 4,
        first_name: 'Willard',
        last_name: 'Valek',
        email: 'wvalek3@vk.com',
        gender: 'Male'
      }
    ];
  }

  addCandidateInfo() {
    debugger;
    this.candidateDetails.emit();
  }
}

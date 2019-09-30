import { Component, OnInit } from '@angular/core';
import { People } from '../../models/people';
import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
  providers: [PeopleService]
})
export class PeopleComponent implements OnInit {

  private page_title: string;
  public people: People;
  public result;

  constructor(
    private _peolpleService: PeopleService
  ) {
    this.page_title = 'People';
    this.people = new People('','');
   }

  ngOnInit() {
    
  }

  onSubmit() {
    this._peolpleService.getPeople(this.people).subscribe(
      response => {
        this.result = response.results;
        console.log(this.result);
      },
      error =>{
        console.log(error);
      }
    );
  }

}

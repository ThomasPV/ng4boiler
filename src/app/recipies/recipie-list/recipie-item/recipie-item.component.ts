import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipie } from '../../recipie.model';
import { RecipieService } from "../../recipie.service";
@Component({
  selector: 'app-recipie-item',
  templateUrl: './recipie-item.component.html',
  styleUrls: ['./recipie-item.component.css']
})
export class RecipieItemComponent implements OnInit {
@Input() recipieItem:Recipie;
@Input() index:number=0;

  constructor(private recipieService: RecipieService) { }

  ngOnInit() {


  }
    recipieDetail(){
        
       this.recipieService.recipieSelected.emit(this.recipieItem);

    }

}

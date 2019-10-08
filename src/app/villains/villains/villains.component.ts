import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { Villain } from '../../core';
import { VillainService } from '../villain.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-villains',
  templateUrl: './villains.component.html',
  styleUrls: ['./villains.component.scss']
})
export class VillainsComponent implements OnInit {
  selected: Villain;
  villains$: Observable<Villain[]>;
  loading$: Observable<boolean>;

  constructor(private villainService: VillainService) {
    this.villains$ = villainService.entities$;
    this.loading$ = villainService.loading$;
  }

  ngOnInit() {
    this.getVillains();
  }

  add(villain: Villain) {
    this.villainService.add(villain);
  }

  close() {
    this.selected = null;
  }

  delete(villain: Villain) {
    this.villainService.delete(villain);
    this.close();
  }

  enableAddMode() {
    this.selected = null;
  }

  getVillains() {
    this.villainService.getAll();
    console.log('Getting the villains');
    this.close();
  }

  select(villain: Villain) {
    this.selected = <any>{};
  }

  update(villain: Villain) {
    this.villainService.update(villain);
  }
}

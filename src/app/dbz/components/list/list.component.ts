import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Character } from '../../interfaces/character.interface';


@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {


  //Decorador sobre la propiedad @Input()
  //La clase ListComponent puede recibir una propiedad characterList
  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }]

  // @Output()
  // public onDelete: EventEmitter<number> = new EventEmitter();
  //onDelete Evento a implementar. Emitir
  //onDelete = IndexValue: number

  // onDeleteCharacter(index: number): void {
  //   this.onDelete.emit(index)
  // }

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string): void{

    if( !id ) return;

    this.onDelete.emit(id)
  }

}

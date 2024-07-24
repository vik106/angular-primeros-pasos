import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  // Objeto tipo EventEmitter - Importacion de librería /core
  //Emite string, numeros, objetos, arreglos, etc. Generico <T>
  // Para que me escuchen por fuera debo decorar con @Output
  //Nombre de la propiedad: TipoEventEmiter<Lo que quiero que sea> = new (creo instancia)
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character:Character = {
    name: '',
    power: 0
  }

  emitCharacter(): void {

    //console.log(this.character)

    //Validacion
    if (this.character.name.length === 0) return;

    //Llamar el eventEmiter
    //[ En js todo pasa por referencia. crear el objeto y hacer el spread?] -> Angular se encarga de eso
    this.onNewCharacter.emit(this.character);

    this.character = {name: '', power:  0}

  }

}

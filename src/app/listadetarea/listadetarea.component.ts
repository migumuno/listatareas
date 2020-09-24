import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-listadetarea',
  templateUrl: './listadetarea.component.html',
  styles: [`
  :host ::ng-deep .p-button {
      margin: 0 .5rem 0 0;
      min-width: 10rem;
      background-color: cornflowerblue;
  }

  p {
      margin: 0;
  }

  .confirmation-content {
      display: flex;
      align-items: center;
      justify-content: center;
  }

  :host ::ng-deep .p-dialog .p-button {
      min-width: 6rem;
      margin-top: 1rem;
  }
`]
})

export class ListadetareaComponent implements OnInit {

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  displayBasic2: boolean;
  displayPosition: boolean;
  position: string;

  showBasicDialog2() {
    this.displayBasic2 = true;
}
    showPositionDialog(position: string) {
      this.position = position;
      this.displayPosition = true;
  }
}

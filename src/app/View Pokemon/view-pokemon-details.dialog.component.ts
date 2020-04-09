import { Component } from '@angular/core';
import { Pokemon } from '../pokemon.model';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { ViewPokemonImagesComponent } from '../View Images/view-pokemon-images.dialog.component';

@Component({
  selector: 'view-poke-details',
  templateUrl: './view-pokemon-details.dialog.html'
})

export class ViewPokemonDetailsComponent {
 data:Pokemon;

    constructor(private dialogRef: MatDialogRef<ViewPokemonDetailsComponent>, public dialog:MatDialog) {
    }

    /**
    Method to view different images of pokemon */
    viewImages(){
         const dialogRef = this.dialog.open(ViewPokemonImagesComponent);
         dialogRef.componentInstance.data = this.data;
    }
}
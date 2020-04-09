import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon.model';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'view-poke-images',
  templateUrl: './view-pokemon-images.dialog.html'
})

export class ViewPokemonImagesComponent implements OnInit {
    
    data:Pokemon;
    srcOfImage:any;
    srcArray:any;
    currentImageIndex:number;
    
    constructor(private dialogRef: MatDialogRef<ViewPokemonImagesComponent>) {
        this.srcArray=new Array<any>();
    }
    
    ngOnInit() {
    this.currentImageIndex=0;

    // add different images to list    
    if(this.data.poke.sprites.back_default !==null)
        this.srcArray.push(this.data.poke.sprites.back_default);
    
    if(this.data.poke.sprites.back_female !==null)
        this.srcArray.push(this.data.poke.sprites.back_female);
    
    if(this.data.poke.sprites.back_shiny !==null)
        this.srcArray.push(this.data.poke.sprites.back_shiny);

    if(this.data.poke.sprites.back_shiny_female !==null)
        this.srcArray.push(this.data.poke.sprites.back_shiny_female);
        
    if(this.data.poke.sprites.front_default !==null)
        this.srcArray.push(this.data.poke.sprites.front_default);
        
    if(this.data.poke.sprites.front_female !==null)
        this.srcArray.push(this.data.poke.sprites.front_female);
        
    if(this.data.poke.sprites.front_shiny !==null)
        this.srcArray.push(this.data.poke.sprites.front_shiny);
        
    if(this.data.poke.sprites.front_shiny_female !==null)
        this.srcArray.push(this.data.poke.sprites.front_shiny_female);
        
    }
    
    /**
    Method to move to next image
    */
    next() {
        if(this.currentImageIndex < this.srcArray.length-1){
            this.currentImageIndex++;
        }
    }
    
    /**
    Method to move to previous image
    */
    previous() {
        if(this.currentImageIndex>0){
            this.currentImageIndex--;
        }
    }
}
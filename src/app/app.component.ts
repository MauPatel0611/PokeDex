import { Component, OnInit, ViewChild } from '@angular/core';
import { PokedexService } from './app.service';
import { Pokemon } from './pokemon.model';
import { MatPaginator } from '@angular/material/paginator';
import{ MatTableDataSource } from '@angular/material/table';
import{ ViewPokemonDetailsComponent } from './View Pokemon/view-pokemon-details.dialog.component'
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {

  pokemon: Pokemon[] = [];
  dataSource: MatTableDataSource<Pokemon>;
  _paginator: MatPaginator;
  displayedColumns: string[] = ['id', 'name'];

  @ViewChild(MatPaginator, { static: true }) set paginator(paginator: MatPaginator) {
        this._paginator = paginator;
    }
    pageNumber: number;

  constructor(private service: PokedexService,public dialog: MatDialog) {
    this.pageNumber=1;

  }

  ngOnInit() {  
      this.pageNumber=1;
      this.getPokeList();
  }

  getPokeList() {
    this.service.getPokemon()
      .subscribe(res =>{ 
        this.pokemon = res; 
          this.dataSource = new MatTableDataSource<Pokemon>(this.pokemon);
            this.dataSource.paginator = this._paginator;
      });
  }

  getSinglePoke(pokemon:Pokemon) {
    this.dialog.closeAll();
    
    this.service.getPoke(pokemon.id)
      .subscribe(res => {
        pokemon.poke=res;
        pokemon.showData=true;
         const dialogRef = this.dialog.open(ViewPokemonDetailsComponent, { disableClose: true, hasBackdrop: true });
         dialogRef.componentInstance.data=pokemon;
      }
    );
  }
}

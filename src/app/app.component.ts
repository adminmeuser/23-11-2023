import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';


// interface UserData {
//   id: number;
//   name: string;
//   age: number;
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fe-angular';

//   showTable: boolean = false;

//   tableData: UserData[] = [];
//   selectedColumn: string = '';
//   highlightColumns: boolean[] = [false, false, false];

//   constructor() {
//     this.generateDynamicData();
//   }


// toggleTable() {
//   this.showTable = !this.showTable;
// }


// selectColumn(column: string) {
//   this.selectedColumn = column;
// }

// toggleColumnHighlight(index: number) {
//   this.highlightColumns[index] = !this.highlightColumns[index];
// }

// generateDynamicData() {
 
//   for (let i = 1; i <= 10; i++) {
//     this.tableData.push({
//       id: i,  
//       name: `User ${i}`,
//       age: Math.floor(Math.random() * 50) + 20 
//     });
//   }
// }
constructor(private router:Router){
}

viewAuthorDetails() {
  this.router.navigate(['/author']);
}
}

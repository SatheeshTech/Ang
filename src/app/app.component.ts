import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-material';
  selectedDate: Date = new Date();

  //Filter
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];

  filteredOptions: Observable<string[]>;

  constructor() {
  
    //Filter
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  ngOnInit() {

  }
  //Filter
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  //Filter Get select value
  onOptionSelected(event: any) {
    alert(event.option.value);
    
    
  }
  GetValue()
  {
    alert(this.selectedDate);
    alert(this.myControl);
  }


}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SampleDataService {
  getDataList() {
    return [
      { id: 1, name: 'Anjali' },
      { id: 2, name: 'Dhyey' },
      { id: 3, name: 'Sudha' },
      { id: 4, name: 'Dudu' }
    ];
  }
}

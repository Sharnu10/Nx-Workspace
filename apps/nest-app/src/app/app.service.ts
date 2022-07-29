import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  demoData = [
    { make: 'Tata', model: 'Celica', price: 35000 },
    { make: 'Tata', model: 'Mondeo', price: 32000 },
    { make: 'Tata', model: 'Boxster', price: 72000 }
];
  getData() {
    return this.demoData;
  }
}

import { Injectable } from '@angular/core';

@Injectable()
export class CustomerService {
  
    getCustomers(criteria: CustomerSearchCriteria): Customer[] {
        return this._mockCustomers.sort((a,b) => {
          if(criteria.sortDirection === 'desc'){
            return a[criteria.sortColumn] - b[criteria.sortColumn];
          }
          else {
            return a[criteria.sortColumn] - b[criteria.sortColumn];
          }
        });
    }
    
    private _mockCustomers = [
      { id: '1234', firstname: 'Hanna', lastname: 'Shmidt' },
      { id: '3245', firstname: 'Roberto', lastname: 'Kugar' },
      { id: '6776', firstname: 'Anggel', lastname: 'Solo' },
      { id: '3246', firstname: 'Erstads', lastname: 'Laks' },
      { id: '6758', firstname: 'Sam', lastname: 'Tarrow' }
    ];

}

export class Customer {
  id: string;
  firstname: string;
  lastname: string;
}

export class CustomerSearchCriteria {
  sortColumn: string;
  sortDirection: string;
}
import { HeaderDirective } from './../../components/layout/header/header.directive';
import { ListComponent } from './../../components/list/list/list.component';
import { SearchInputComponent } from './../../components/custom-form-inputs/search/search.component';
import { DatePipe } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Component, inject } from '@angular/core';
import { ListMetaData } from 'src/app/components/list/const';
import { SortEvt } from 'src/app/components/sort/const';
import { SearchDirective } from 'src/app/components/custom-form-inputs/search/search-filter.directive';
import { SearchPipe } from 'src/app/components/custom-form-inputs/search/search-filter.pipe';
import { SearchInputModule } from 'src/app/components/custom-form-inputs/search/search.module';

export interface BaseUser {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  userType: number;
  phone: string;
  isActive: boolean;
  isPendingActivation: boolean;
  emailConfirmed: true,
  lastLoginTime: number;
  isLocked: boolean;
  createdAt: number;
}

export interface BaseTenancy {
  id: number;
  name: string;
  country: string;
  status: string;
  createdAt: Date;
  active: boolean;
}

@Component({
  selector: 'kbm-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [DatePipe],
  imports: [SearchInputModule, HeaderDirective, ReactiveFormsModule, ListComponent]
})
export class DashboardComponent {
  searchUsersControl: FormControl = new FormControl();
  searchTenantsControl: FormControl = new FormControl();

  datePipe = inject(DatePipe);

  constructor() {
  }
  public users: BaseUser[] = [
    {
      id: 1,
      firstName: 'Ciprian',
      lastName: 'Iuga',
      username: 'ciprian.iuga',
      email: 'ciprian.iuga@gamil.com',
      userType: 2,
      phone: '+306988582965',
      isActive: true,
      isPendingActivation: false,
      emailConfirmed: true,
      lastLoginTime: new Date().getTime(),
      isLocked: false,
      createdAt: 432432432
    },
    {
      id: 2,
      firstName: 'First Name 2',
      lastName: 'Last Name 2',
      username: 'Username 2',
      email: 'Email 2',
      userType: 1,
      phone: '+306988582965',
      isActive: true,
      isPendingActivation: false,
      emailConfirmed: true,
      lastLoginTime: new Date().getTime(),
      isLocked: false,
      createdAt: 432432432
    },
  ];
  filteredUsers: BaseUser[] = [];

  public tenancies: BaseTenancy[] = [
    {
      id: 1,
      name: 'Tenancy 1',
      country: 'Country 1',
      status: 'Status 1',
      createdAt: new Date,
      active: true
    },
    {
      id: 2,
      name: 'Tenancy 2',
      country: 'Country 2',
      status: 'Status 2',
      createdAt: new Date,
      active: true
    },
    {
      id: 3,
      name: 'Tenancy 3',
      country: 'Country 3',
      status: 'Status 3',
      createdAt: new Date,
      active: true
    },
    {
      id: 4,
      name: 'Tenancy 4',
      country: 'Country 4',
      status: 'Status 4',
      createdAt: new Date,
      active: true
    }
  ]
  filteredTenancies: BaseTenancy[] = []

  usersFieldsMetadata: Array<ListMetaData<BaseUser>> = [
    {
      field: 'name',
      header: 'Name',
      sortable: 'name',
      formatter: (data, context) => `${context.firstName} ${context.lastName}`
    },
    { field: 'email', header: 'Email', sortable: 'email' },
    { field: 'username', header: 'Username', sortable: 'username' },
    {
      field: 'lastLoginTime',
      header: 'Last Login',
      sortable: 'login',
      formatter: (data) => {
        return this.datePipe.transform(data as number, 'medium');
      }
    },
    {
      field: 'emailConfirmed',
      header: 'Email Confirmed',
      sortable: 'emailConfirmed',
      formatter: data => data === true ? 'Yes' : 'No'
    }
  ];
  tenanciesFieldsMetadata: Array<ListMetaData<BaseTenancy>> = [
    {
      field: 'name',
      header: 'Name',
      sortable: 'name'
    },
    {
      field: 'active',
      header: 'Active',
      sortable: 'active',
      formatter: data => data === true ? 'Yes' : 'No'
    }
  ];
  sortData!: SortEvt;

  usersSearchFields: string[] = [];
  tenanciesSearchFields: string[] = [];

  ngOnInit() {
    this.filteredUsers = this.users
    this.usersSearchFields = [
      'firstName',
      'email'
    ]
    this.filteredTenancies = this.tenancies
    this.tenanciesSearchFields = [
      'name',
    ]
  }

  filterUsers = (users: any) => {
    this.filteredUsers = users;
  }

  filterTenancies = (tenancies: any) => {
    this.filteredTenancies = tenancies;
  }

  sort($event: any) {
    console.log($event)
  }
}

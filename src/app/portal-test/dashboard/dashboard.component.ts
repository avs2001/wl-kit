import { HeaderDirective } from './../../components/layout/header/header.directive';
import { ListComponent } from './../../components/list/list/list.component';
import { DatePipe } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Component, inject } from '@angular/core';
import { ListMetaData } from 'src/app/components/list/const';
import { SearchInputModule } from 'src/app/components/custom-form-inputs/search/search.module';
import { sort, SortTableEvt } from 'src/app/components/sort/sort.utils';

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
      lastLoginTime: new Date(1, 3, 2022).getTime(),
      isLocked: false,
      createdAt: 432432432
    },
    {
      id: 2,
      firstName: 'First Name 2',
      lastName: 'Last Name 3',
      username: 'Username 3',
      email: 'Email 3',
      userType: 1,
      phone: '+306988582965',
      isActive: true,
      isPendingActivation: false,
      emailConfirmed: true,
      lastLoginTime: new Date().getTime(),
      isLocked: false,
      createdAt: 432432432
    }
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
      sortableKeys: [
        'firstName',
        {
          name: 'lastName',
          reverse: true
        }
      ],
      formatter: (data, context) => `${context.firstName} ${context.lastName}`
    },
    {
      field: 'email',
      header: 'Email',
    },
    {
      field: 'username',
      header: 'Username',
      sortableKeys: ['username']
    },
    {
      field: 'lastLoginTime',
      header: 'Last Login',
      formatter: (data) => {
        return this.datePipe.transform(data as number, 'medium');
      },
      sortableKeys: ['lastLoginTime']
    },
    {
      field: 'emailConfirmed',
      header: 'Email Confirmed',
      sortableKeys: ['emailConfirmed'],
      formatter: data => data === true ? 'Yes' : 'No'
    }
  ];
  tenanciesFieldsMetadata: Array<ListMetaData<BaseTenancy>> = [
    {
      field: 'name',
      header: 'Name',
      sortableKeys: ['name']
    },
    {
      field: 'active',
      header: 'Active',
      sortableKeys: ['active'],
      formatter: data => data === true ? 'Yes' : 'No'
    }
  ];

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

  sortUsersData(event: any) {
    this.filteredUsers = [...sort(this.filteredUsers, event.attr, event.dir)];
  }

  sortTenanciesData(event: any) {
    console.log(event)
    this.filteredTenancies = [...sort(this.filteredTenancies, event.attr, event.dir)];
  }
}

import {Component, inject} from '@angular/core';
import {ListMetaData} from "./components/list/const";
import {DatePipe} from "@angular/common";
import {SortEvt} from "./components/sort/const";

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

@Component({
  selector: 'kbm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DatePipe]
})
export class AppComponent {
  title = 'wl-kit';

  datePipe = inject(DatePipe);

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

  fieldsMetadata: Array<ListMetaData<BaseUser>> = [
    {
      field: 'name',
      header: 'Name',
      sortable: 'name',
      formatter: (data, context) => `${context.firstName} ${context.lastName}`
    },
    {field: 'email', header: 'Email', sortable: 'email'},
    {field: 'username', header: 'Username', sortable: 'username'},
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
  sortData!: SortEvt;

  sort($event: any) {
    console.log($event)
  }
}

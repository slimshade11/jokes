import { MenuItem } from 'primeng/api';

export const MenuLinks: MenuItem[] = [
  {
    label: 'Żarty',
    routerLink: '/',
    routerLinkActiveOptions: { exact: true },
  },
  {
    label: 'Moje żarty',
    routerLink: '/my-jokes',
  },
];

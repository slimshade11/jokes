import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { MenuLinks } from '@common/constants/menu-links';

type MenuPosition = 'start' | 'end';

const NavbarImports: Array<any> = [CommonModule, MenubarModule];

@Component({
  selector: 'jokes-navbar',
  standalone: true,
  imports: NavbarImports,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  public menuLinks: MenuItem[] = MenuLinks;
}

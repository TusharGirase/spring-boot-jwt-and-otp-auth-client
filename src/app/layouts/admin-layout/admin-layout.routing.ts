import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { Role } from 'src/app/_models/role';
import { AuthGuard } from 'src/app/_helpers/auth.guard';
import { UnauthorizedComponent } from 'src/app/pages/unauthorized/unauthorized.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard], data: { roles: [Role.Admin, Role.User], title: 'Dashboard', icon: 'ni-tv-2 text-primary', class: '', path: '/dashboard' } },
    { path: 'user-profile', component: UserProfileComponent, canActivate: [AuthGuard], data: { roles: [Role.Admin, Role.User], title: 'User profile', icon: 'ni-single-02 text-yellow', class: '', path: '/user-profile' } },
    { path: 'tables', component: TablesComponent, canActivate: [AuthGuard], data: { roles: [Role.Admin], title: 'Tables', icon: 'ni-bullet-list-67 text-red', class: '', path: '/tables' } },
    { path: 'icons', component: IconsComponent, canActivate: [AuthGuard], data: { roles: [Role.Admin, Role.User], title: 'Icons', icon: 'ni-planet text-blue', class: '', path: '/icons' } },
    { path: 'maps', component: MapsComponent, canActivate: [AuthGuard], data: { roles: [Role.Admin], title: 'Maps', icon: 'ni-pin-3 text-orange', class: '', path: '/maps' } },
    { path: 'unauthorized', component: UnauthorizedComponent, data: { roles: [], title: 'Unauthorized', icon: '', class: '', path: '/unauthorized' } }
];

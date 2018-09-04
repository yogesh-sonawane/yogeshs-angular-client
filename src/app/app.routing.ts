import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {AuthGuard} from './shared/guard/auth.guard';

const appRoutes : Routes = [
    {
        path: '',
        loadChildren: './user-activities/user-activities.module#UserActivitiesModule',
        // canActivate: [AuthGuard]
    }, {
        path: 'project-workspace',
        loadChildren: './project-workspace/project-workspace.module#ProjectWorkspaceModule',
        // canActivate: [AuthGuard]
    }, {
        path: 'project-master',
        loadChildren: './project-workspace/project-workspace.module#ProjectWorkspaceModule',
        // canActivate: [AuthGuard]
    }, {
        path: 'form-validations',
        loadChildren: './form-validations/form-validations.module#FormValidationsModule',
        // canActivate: [AuthGuard]
    }
];

export const Routing = RouterModule.forRoot(appRoutes/* , {enableTracing: true} */);
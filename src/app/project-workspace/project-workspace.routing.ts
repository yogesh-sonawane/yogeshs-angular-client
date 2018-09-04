import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProjectMasterComponent} from './project-master/project-master.component';
import {ProjectWorkspaceComponent} from './project-workspace.component';
import {ObjectExplorerComponent} from './object-explorer/object-explorer.component';
import {KeywordSearchComponent} from './keyword-search/keyword-search.component';
import {UploadProjectComponent} from './upload-project/upload-project.component';
const appRoutes : Routes = [
    {
        path: '',
        component: ProjectMasterComponent
    }, {
        path: 'project-workspace',
        component: ProjectWorkspaceComponent
    }, {
        path: 'project-master',
        component: ProjectMasterComponent
    }, {
        path: 'object-explorer',
        component: ObjectExplorerComponent
    }, {
        path: 'keyword-search',
        component: KeywordSearchComponent
    }, {
        path: 'upload-project',
        component: UploadProjectComponent
    }
];
@NgModule({
    imports: [RouterModule.forChild(appRoutes)],
    exports: [RouterModule]
})
export class ProjectWorkspaceRoutingModule {}
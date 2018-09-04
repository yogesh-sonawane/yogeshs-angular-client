import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProjectWorkspaceRoutingModule} from './project-workspace.routing';
import {ProjectWorkspaceComponent} from './project-workspace.component';
import {ProjectMasterComponent} from './project-master/project-master.component';
import {NavbarHeaderTemplateComponent} from '../components/header/navbar-header-template.component';
import {LeftMenuTemplateComponent} from '../components/left-menu/left-menu-template.component';
import {ObjectExplorerComponent} from './object-explorer/object-explorer.component';
import {KeywordSearchComponent} from './keyword-search/keyword-search.component';
import {PageFooterTemplateComponent} from '../components/footer/page-footer-template.component';
import {UploadProjectComponent} from './upload-project/upload-project.component';
import {AngularFileUploaderModule} from "angular-file-uploader";
import {UploadDocumentsComponent} from '../components/upload-documents/upload-documents.component';
import {MessageService} from '../app-services/log-message/message.service';
import {SearchTextComponent} from '../components/search-text/search-text.component';
import {MindFusionDiagramComponent} from '../components/mf-diagram/mind-fusion-diagram.component';
import {GraphUtility} from '../components/mf-diagram/graph-utility';
import {FormsModule} from '@angular/forms';
import {ObjectExplorerService} from '../app-services/object-explorer/object-explorer-service';

@NgModule({
    imports: [
        CommonModule, ProjectWorkspaceRoutingModule, AngularFileUploaderModule, FormsModule
    ],
    declarations: [
        ProjectWorkspaceComponent,
        ProjectMasterComponent,
        ObjectExplorerComponent,
        KeywordSearchComponent,
        NavbarHeaderTemplateComponent,
        LeftMenuTemplateComponent,
        PageFooterTemplateComponent,
        UploadProjectComponent,
        UploadDocumentsComponent,
        SearchTextComponent,
        MindFusionDiagramComponent
    ],
    providers: [MessageService, GraphUtility, ObjectExplorerService, SearchTextComponent]
})
export class ProjectWorkspaceModule {}
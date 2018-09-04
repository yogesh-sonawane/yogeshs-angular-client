import {Component, OnInit} from '@angular/core';
import {SearchTextComponent} from '../../components/search-text/search-text.component';
import {MindFusionDiagramComponent} from '../../components/mf-diagram/mind-fusion-diagram.component';

@Component({templateUrl: './project-master.html', selector: 'project-master'})
export class ProjectMasterComponent implements OnInit {
    searchTextConfig = {
        id: "seachTextControl"
    }
    preTextConfig = {
        id: "preTextControl"
    }
    mindFusionConfig = {
        id: "canvas-diagram"
    }
    constructor() {}
    ngOnInit() {}
}
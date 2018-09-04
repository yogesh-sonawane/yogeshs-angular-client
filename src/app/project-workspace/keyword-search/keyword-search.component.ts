import {Component, AfterViewInit} from '@angular/core';
import {NavbarHeaderTemplateComponent} from '../../components/header/navbar-header-template.component';
import {NgForm} from '@angular/forms';
declare var $ : any;
@Component({selector: 'keyword-search', templateUrl: './keyword-search.html', styleUrls: ['./keyword-search.css']})
export class KeywordSearchComponent implements AfterViewInit {
    constructor() {}
    public searchOptions = [
        {
            name: "Free(FullText) Search",
            value: 0
        }, {
            name: "Exclude Comments",
            value: 1
        }
    ];
    public searchInput : any = {
        searchScope: {
            tags: true,
            workflowStatements: true,
            workflowNames: true,
            objectStatements: true,
            objectName: true
        },
        selectedProjects: "1"
    };
    public objectTypes = [
        "Select Object",
        "Program",
        "JCL",
        "Entity",
        "Include",
        "Subroutine",
        "I-Descriptor"
    ];
    public selectedObject = "Program";
    public projects = [
        {
            name: "Select Project",
            value: 0
        }, {
            name: "Universe-Basic-CT",
            value: 1
        }, {
            name: "CCSES-20180815",
            value: 2
        }, {
            name: "DC-Universe",
            value: 3
        }
    ];
    public selectedProject = 0;
    ngAfterViewInit() {
        function toggleIcon(e) {
            $(e.target)
                .prev('.panel-heading')
                .find("i")
                .toggleClass('glyphicon-plus glyphicon-minus');
        }
        $('.panel-group').on('hidden.bs.collapse', toggleIcon);
        $('.panel-group').on('shown.bs.collapse', toggleIcon);
    };
    onSubmit(form : NgForm) {
        console.log(form);
    };
    onObjectSelected($event) {};
}
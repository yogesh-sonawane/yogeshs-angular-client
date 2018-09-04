import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({selector: 'app-project-workspace', templateUrl: './project-workspace.component.html', styleUrls: ['./project-workspace.component.css']})
export class ProjectWorkspaceComponent implements OnInit {
  constructor(private route : ActivatedRoute) {}
  searchTextConfig : {
    id: "seachTextControl"
  }
  ngOnInit() {
    // Reading query string parameters...
    const pid = this.route.snapshot.queryParams["pid"];
    const sid = this.route.snapshot.queryParams["sid"];
    alert(`Project-Id: ${pid} and Solution-Id: ${sid}`);
  }
}

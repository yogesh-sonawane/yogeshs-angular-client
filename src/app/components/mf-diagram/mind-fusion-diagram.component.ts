import {Component, OnInit, AfterViewInit, Input} from '@angular/core';
import {GraphUtility} from './graph-utility';
import DiagramUtility from './mind-fusion-diagram';
import {MindFusionDirective} from './mind-fusion.directive';
import {HttpClient} from '@angular/common/http';

@Component({selector: 'mind-fusion-diagram', templateUrl: './mind-fusion-diagram.html', styleUrls: ['./mind-fusion.diagram.css']})
export class MindFusionDiagramComponent implements OnInit,
AfterViewInit {
    @Input()mindFusionConfig : {
        id: string
    }
    diagramUtility : DiagramUtility
    constructor(private httpClient : HttpClient, private graphUtility : GraphUtility) {}
    ngAfterViewInit() : void {
        /*
        this.httpClient.get<FlowChart>("https://127.0.0.1:8888/api/WorkSpaceFlowChart/GetMethodFlowChart?fileId=10&state" +
                "mentId=354").subscribe(flowChart => {
            this.diagramUtility = new DiagramUtility(`#${this.mindFusionConfig.id}`, {
                width: 5000,
                height: 360,
                backBrush: "#FFFFFF",
                gridLines: true,
                nodes: flowChart.Nodes,
                links: flowChart.Links,
                fileName: "canvas-diagram.graphml",
                legends: [
                    {
                        title: "Starting Point",
                        bgColor: "#ffcc00"
                    }, {
                        title: "Object",
                        bgColor: "#a4361a"
                    }, {
                        title: "Decision",
                        bgColor: "#ff6600"
                    }, {
                        title: "All Statements",
                        bgColor: "#00ffff"
                    }
                ]
            });
        });
*/
    }
    ngOnInit() : void {}
}

export class FlowChart {
    Nodes : any[];
    Links : any[];
}
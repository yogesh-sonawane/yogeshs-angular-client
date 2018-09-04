import {Component, OnInit, Input, ComponentFactoryResolver, AfterViewInit} from '@angular/core';
import {Hilitor} from './text-hilitor';
import {SearchTextDirective} from './search-text.directive';
declare var $ : any;

@Component({selector: 'search-text', templateUrl: './search-text.html', styleUrls: ['./search-text.css']})
export class SearchTextComponent implements OnInit,
AfterViewInit {
    @Input()public searchTextConfig : {
        id: string
    };
    public hilitor : Hilitor;
    public targetControl : HTMLElement;
    public self : SearchTextComponent;
    constructor(private componentFactoryResolver : ComponentFactoryResolver) {};
    get getTargetControl() : HTMLElement {
        return document.getElementById(this.searchTextConfig.id);
    }
    ngAfterViewInit() {
        this.hilitor = new Hilitor(this.searchTextConfig.id, "span"); //  super.initialize(this.searchTextConfig.id);
        this.hilitor.id = this.searchTextConfig.id;
        this.targetControl = this.getTargetControl;
        this.initialize();
    }
    ngOnInit() : void {};
    previous = () => {
        this
            .hilitor
            .prevHit();
    };
    next = () => {
        this
            .hilitor
            .nextHit();
    };
    search = (e, keywords) => {
        var input = $(this.getTargetControl)
            .children()
            .find("input:text");
        var keyword = keywords || $(input).val();
        this
            .hilitor
            .setMatchType("left");
        var allWords = keyword
            .split(",")
            .sort(function (a, b) {
                return b.length - a.length;
            });
        this
            .hilitor
            .remove();
        var hitCount = 0;
        $.each(allWords, (k, word) => {
            this
                .hilitor
                .apply(word);
            hitCount += this.hilitor.hitCount;
        });
        var msgCtrl = $(this.getTargetControl)
            .children()
            .find(".src-msg");
        if (hitCount === 0) {
            msgCtrl.text("No matches found!");
            msgCtrl.css("color", "red");
        } else {
            msgCtrl.text(hitCount + (hitCount === 1
                ? " match"
                : " match(es)"));
            msgCtrl.css("color", "green");
        }
    };
    initialize = () => {
        var events = [this.search, this.previous, this.next];
        $(this.targetControl)
            .children()
            .find(".btn-info")
            .each(function (i) {
                $(this).on("click", events[i]);
            });
        $(this.targetControl)
            .children()
            .find("input:text")
            .bind({
                keypress: (e) => {
                    if (e.keyCode === 13) {
                        this.search(e, e.target.value);
                    }
                }
            });
    };
    setText = (text) => {
        $(this.getTargetControl)
            .find("pre")
            .html(text);
    };
}

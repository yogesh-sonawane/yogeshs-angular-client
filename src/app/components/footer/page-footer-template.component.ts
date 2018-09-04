import {Component, AfterViewInit} from '@angular/core';
declare var $ : any;

@Component({selector: 'page-footer', templateUrl: './page-footer-template.html'})
export class PageFooterTemplateComponent implements AfterViewInit {
  constructor() {}
  ngAfterViewInit() {
    $('#mainnav-menu').metisMenu();
    $('#userName').html('Yogesh Sonawane'); // Logged in username will appear here...

    var pageBreadCrumb : any = {};
    pageBreadCrumb.import = {};
    pageBreadCrumb = document.querySelector('link[data-name="bread-crumb"]');
    var path = window.location.pathname;
    var fileName = path
      .split('/')
      .pop()
      .split('#')
      .shift();
    var nameOnly = fileName
      .split('.')
      .shift();
    var breadCrumbs = pageBreadCrumb
      .import
      .querySelector('#' + nameOnly);
    var elements = $(breadCrumbs.innerHTML);
    $('#page-bread-crumb').html(elements);

    $('#aLogout').click(function () {
      window.top.location.href = '';
    });
  }
}

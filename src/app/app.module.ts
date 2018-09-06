import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {Routing} from './app.routing';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {AdminRootComponent} from './admin-root/admin-root.component';
import {ClientAdminComponent} from './client-admin/client-admin.component';
import {AuthGuard} from './shared';
import {MindFusionDirective} from './components/mf-diagram/mind-fusion.directive';
import {SearchTextDirective} from './components/search-text/search-text.directive';
import {UploadDocumentsDirective} from './components/upload-documents/upload-documents.directive';

export const createTranslateLoader = (http : HttpClient) => {
    /* for development
    return new TranslateHttpLoader(
        http,
        '/start-angular/SB-Admin-BS4-Angular-6/master/dist/assets/i18n/',
        '.json'
    ); */
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
};

@NgModule({
    declarations: [
        AppComponent,
        AdminRootComponent,
        ClientAdminComponent,
        MindFusionDirective,
        UploadDocumentsDirective,
        SearchTextDirective        
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        FormsModule,
        Routing,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
            }
        })
    ],
    providers: [AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule {}
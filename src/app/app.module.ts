import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SharesComponent } from './shares/shares.component';
import { ShareComponent } from './share/share.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DataService } from './data.service';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { BaseUrlInterceptor } from './base-url-int';

@NgModule({
  declarations: [
    AppComponent,
    SharesComponent,
    ShareComponent,
    UserComponent,
    UserListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataService,  {
    provide: HTTP_INTERCEPTORS,
    useClass: BaseUrlInterceptor,
    multi: true,
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }

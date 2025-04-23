import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent.component';
import { ChildComponent } from './child.component';
import { PureUppercasePipe } from './pure-uppercase.pipe';

@NgModule({
  declarations: [AppComponent, ParentComponent, ChildComponent, PureUppercasePipe],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule {}

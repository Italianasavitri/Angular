import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewComponentComponent } from './new-component/new-component.component';
import { InterpolasiComponent } from './interpolasi/interpolasi.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { ClassbindingComponent } from './classbinding/classbinding.component';
import { StylebindingComponent } from './stylebinding/stylebinding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TemplateReferencesVariableComponent } from './template-references-variable/template-references-variable.component';

@NgModule({
  declarations: [
    AppComponent,
    NewComponentComponent,
    InterpolasiComponent,
    PropertybindingComponent,
    ClassbindingComponent,
    StylebindingComponent,
    EventBindingComponent,
    TemplateReferencesVariableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

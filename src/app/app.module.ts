import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AddItemformComponent } from './additemform/additemform.component';
import { BudgetitemComponent } from './budgetitemlist/budgetitem/budgetitem.component';
import { BudgetitemlistComponent } from './budgetitemlist/budgetitemlist.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
  
    AddItemformComponent,
    BudgetitemComponent,
    BudgetitemlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

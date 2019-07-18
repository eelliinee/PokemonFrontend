import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HelpComponent } from './help/help.component';
import { ChooseComponent } from './choose/choose.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TownComponent } from './town/town.component';
import { RivalBattleComponent } from './rival-battle/rival-battle.component';

const appRoutes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'help', component: HelpComponent},
  {path: 'choose', component: ChooseComponent},
  {path: 'town', component: TownComponent},
  {path: 'rival-battle', component: RivalBattleComponent},

  {path: '**', component: PageNotFoundComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PageNotFoundComponent,
    HelpComponent,
    ChooseComponent,
    HeaderComponent,
    FooterComponent,
    TownComponent,
    RivalBattleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

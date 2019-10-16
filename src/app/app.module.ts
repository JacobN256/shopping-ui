import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeModule } from './modules/home/home.module';
import { ItemDetailModule } from './modules/item-detail/item-detail.module';
import { HeaderBarModule } from './components/header-bar/header-bar.module';
import { CartModule } from './modules/cart/cart.module';
import { environment } from 'src/environments/environment';

import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './store/reducers/app.reducers';
import { ItemEffects } from './store/effects/item.effect';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CartModule,
    CommonModule,
    HeaderBarModule,
    HomeModule,
    HttpClientModule,
    ItemDetailModule,
    FlexLayoutModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([ItemEffects]),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

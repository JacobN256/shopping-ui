import { HeaderBarComponent } from './header-bar.component';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [FlexLayoutModule, MatButtonModule, MatIconModule, MatToolbarModule, RouterModule],
  declarations: [
    HeaderBarComponent
  ],
  exports: [
    HeaderBarComponent
  ]
})
export class HeaderBarModule { }

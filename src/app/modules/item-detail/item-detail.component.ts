import { Component, OnInit, OnDestroy } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Item } from 'src/app/interfaces/item.interface';
import { IAppState } from 'src/app/store/state/app.state';
import { Store, select } from '@ngrx/store';
import { selectSelectedItem } from 'src/app/store/selectors/item.selector';
import { GetItem } from 'src/app/store/actions/item.actions';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {
  item$ = this.store.pipe(select(selectSelectedItem));

  constructor(private route: ActivatedRoute, private store: Store<IAppState>) { }

  async ngOnInit() {
    this.store.dispatch(new GetItem(this.route.snapshot.params.id));
  }
}

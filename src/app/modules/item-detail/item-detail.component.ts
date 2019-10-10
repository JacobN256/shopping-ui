import { Component, OnInit, OnDestroy } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Item } from 'src/app/interfaces/item.interface';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit, OnDestroy {
  private routeSub: Subscription;
  item: Item = null;

  constructor(private route: ActivatedRoute, private itemService: ItemService) { }

  async ngOnInit() {
    this.routeSub = this.route.params.subscribe(async (params) => {
      if (params['id']) {
        this.item = await this.itemService.getById(params['id']).toPromise();
      }
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

}

import { Component, OnInit } from '@angular/core';
import { CollectionInterface } from '../collection.model';
import { ActivatedRoute } from '@angular/router';
import { CollectionService } from 'src/services/collection.service';

@Component({
	selector: 'app-collection-detail',
	templateUrl: './collection-detail.page.html',
	styleUrls: ['./collection-detail.page.scss']
})
export class CollectionDetailPage implements OnInit {
  
	public loadedDetail: CollectionInterface;

	constructor(
		private _activatedRoute: ActivatedRoute,
		private _collectionService: CollectionService
	) {}

	ngOnInit() {
		this._activatedRoute.paramMap.subscribe(paramMap => {
			const idCustom = paramMap.get('customId');
			this.loadedDetail = this._collectionService.fGetCustom(idCustom);
		});
	}
}

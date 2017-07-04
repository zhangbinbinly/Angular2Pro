import { Component, OnInit } from '@angular/core';

import { Sss } from './shared/sss.model';
import { SssService } from './shared/sss.service';

@Component({
	selector: 'sss',
	templateUrl: 'sss.component.html',
	providers: [SssService]
})

export class SssComponent implements OnInit {
	sss: Sss[] = [];

	constructor(private sssService: SssService) { }

	ngOnInit() {
		this.sssService.getList().subscribe((res) => {
			this.sss = res;
		});
	}
}
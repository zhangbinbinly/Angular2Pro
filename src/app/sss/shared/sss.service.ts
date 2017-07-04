import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Sss } from './sss.model';

@Injectable()
export class SssService {

	constructor(private http: Http) { }

	getList(): Observable<Sss[]> {
		return this.http.get('/api/list').map(res => res.json() as Sss[]);
	}
}
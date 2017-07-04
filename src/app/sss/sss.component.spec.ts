import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { SssComponent } from './sss.component';
import { SssService } from './shared/sss.service';
import { Sss } from './shared/sss.model';

describe('a sss component', () => {
	let component: SssComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpModule],
			providers: [
				{ provide: SssService, useClass: MockSssService },
				SssComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([SssComponent], (SssComponent) => {
		component = SssComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});

// Mock of the original sss service
class MockSssService extends SssService {
	getList(): Observable<any> {
		return Observable.from([ { id: 1, name: 'One'}, { id: 2, name: 'Two'} ]);
	}
}

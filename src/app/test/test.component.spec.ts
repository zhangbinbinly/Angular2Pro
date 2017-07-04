import { TestBed, inject } from '@angular/core/testing';

import { TestComponent } from './test.component';

describe('a test component', () => {
	let component: TestComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				TestComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([TestComponent], (TestComponent) => {
		component = TestComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});
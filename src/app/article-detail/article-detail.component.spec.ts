import { TestBed, inject } from '@angular/core/testing';

import { ArticleDetailComponent } from './article-detail.component';

describe('a article-detail component', () => {
	let component: ArticleDetailComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				ArticleDetailComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([ArticleDetailComponent], (ArticleDetailComponent) => {
		component = ArticleDetailComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});
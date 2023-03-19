import { TestBed } from '@angular/core/testing';

import { CourseResolverResolver } from './course-resolver.resolver';

describe('CourseResolverResolver', () => {
  let resolver: CourseResolverResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CourseResolverResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});

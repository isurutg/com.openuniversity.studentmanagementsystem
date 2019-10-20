import { FakeBackendInterceptor } from './fake-backend';

describe('FakeBackend', () => {
  it('should create an instance', () => {
    expect(new FakeBackendInterceptor()).toBeTruthy();
  });
});

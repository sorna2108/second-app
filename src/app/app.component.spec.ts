import { LoggerService } from 'my-logger';
import { AppComponent } from './app.component';

describe('AppComponent',() => {
  let fixture : AppComponent;

  beforeEach(() => {
    fixture = new AppComponent(new LoggerService);
  })

  it('should have a title ',() => {
    expect(fixture.title).toEqual('routing-demo');
  })
})
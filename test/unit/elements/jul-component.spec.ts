import {StageComponent} from 'aurelia-testing';
import {bootstrap} from 'aurelia-bootstrapper';

describe('hello-world element', () => {
  let component;

  afterEach(() => {
    if (component) {
      component.dispose();
      component = null;
    }
  });

  it('says hello world with message', done => {
    let model = {message: 'from me'};

    component = StageComponent
      .withResources('resources/elements/jul-component')
      .inView('<jul-component message.bind="message"></jul-component>')
      .boundTo(model);

    component.create(bootstrap).then(() => {
      const view = component.element;
      expect(view.textContent.trim()).toBe('Hello world from me');
      done();
    }).catch(e => {
      fail(e);
      done();
    });
  });
});

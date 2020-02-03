import {bindable} from 'aurelia-framework';

//TODO: Parser for JSON UI language component.
export class JulComponent {
  @bindable value;
    @bindable public message: string = '';

  valueChanged(newValue, oldValue) {
    //
  }
}

export class App {
  public message: string = 'from Aurelia!';
    public jul;

    constructor() {
	this.jul = [
	    {
		type: "control"
	    },
	    {
		type: "input"
	    },
	    {
		type: "control"
	    },
	    {
		type: "control"
	    }
	];
    }

  clicked() {
    // eslint-disable-next-line no-alert
    alert('A primary button click or a touch');
  }
}

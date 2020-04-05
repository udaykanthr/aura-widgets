export class App {
  public message: string = 'from Aurelia!';
    public julLoginForm;

    constructor() {
	this.julLoginForm = [
	    {
		type: "input",
		col: "col-sm-12",
		elementType: "text",
		elementValue: "",
		displayLabel: "Username",
		placeHolder: "user name",
		class: "btn btn-watning"
	    },
	    {
		type: "input",
		col: "col-sm-12",
		elementType: "password",
		elementValue: "",
		displayLabel: "password",
		placeHolder: "user name",
		class: "btn btn-watning"
	    },
	    {
		type: "input",
		col: "col-sm-12",
		elementType: "button",
		elementValue: "Login",
		class: "btn btn-primary",
		action: "onclick",
		eventListener: this.clicked
	    }
	];
    }

  clicked(data) {
    // eslint-disable-next-line no-alert
      console.log("data", data);
    alert('A primary button click or a touch');
  }
}

import {bindable} from 'aurelia-framework';

//TODO: Parser for JSON UI language component.
export class JulComponent {
    @bindable public jobj;
    private julData; 


    jobjChanged(newValue, oldValue) {
	//
	if (newValue) {
	    this.parseJUL(newValue);	    
	}
    }

    parseJUL(data) {
	//TODO: parse the json data here.
	if (typeof data == "string") {
	    try {
		data = JSON.parse(data);
	    } catch(e) {

		//TODO: report an error here.
		return;
	    }
	}

	if (data && data.length) {
	    this.julData = data;
	} else {
	    //TODO: Report data parse eerror.
	}

	
    }
}

# Example code to reproduce issue with angular2-google-maps

If the map is hidden on start, it will not work correctly and the area stays gray. I toke the get-started-example from https://angular-maps.com and added a ishidden property:

ishidden: boolean = true;

and a button to switch: 

switch(){
	  this.ishidden = !this.ishidden;
	  }

The property is bound to sebm-google-map:
<sebm-google-map [hidden]="ishidden" [latitude]="lat" [longitude]="lng">
…

If the initial value of ishidden is false, all works well and switching between visible and hidden works well
If the initial value of ishidden is true (as above) the map stays gray.

I found the issue with ionic 2. The map will stay gray after navigation with nav.setRoot().


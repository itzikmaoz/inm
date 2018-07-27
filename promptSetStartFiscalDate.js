
//
define( function() {

"use strict";

function promptSetDate(){};

 promptSetDate.prototype.initialize = function(oControlHost,fnDoneInitializing )

{ //alert('test');
  try{
  var o = oControlHost.configuration;
  var controlName=o["Control name"];
  var customContrlName=o["Custom control name"];
  var p_sel=oControlHost.page.getControlByName(controlName);
  var oControl = oControlHost.page.getControlByName( customContrlName );
  //alert (JSON.stringify(p_sel.getValues()));
  var dtToday = new Date(); 
  //Check today's date to determine current fiscal year
  var FYear;
  //alert (dtToday.getFullYear());
  if (dtToday.getMonth()>5)
  {FYear=dtToday.getFullYear()}
   else
  {FYear=dtToday.getFullYear()-1}
  //alert (FYear);
  var dt=FYear+'-06-01';
  var oValues=[{"use":dt}];
 p_sel.setValues( oValues );
 p_sel=oControlHost.page.getControlByName(controlName);
 fnDoneInitializing();
 }
  catch(err) {
	
	oControlHost.finish();}
  
};

return promptSetDate;
});
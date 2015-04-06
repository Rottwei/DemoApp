/*
* Configuration file for the application.
* 
* Include this file in your HTML. After UI5 boot strapper.
*
*/

//Register Application module path
jQuery.sap.registerModulePath("robert.bosh.ui", "robert/bosh/ui");

//Declaration of the module. Will ensure that the containing namespace exists.
jQuery.sap.declare("robert.bosh.ui.config"); 

//create the 'main' object of the module
robert.bosh.ui.config = function() {
	
};

robert.bosh.ui.config.applicationMode =  (function() {
    // if url contains parameter 'useTestData=true' or useTestData=x or useTestData=X,
    // applicationMode will
    // set to false, the data will not be fetched from backend but locally
    var sUrl = window.location.href;

    var results = new RegExp('[\\?&]' + 'useTestData' + '=([^&#]*)').exec(sUrl);
    if (results == null) {
        return true;
    } else {
        return !(results[1] == 'true' || results[1] == 'x' || results[1] == 'X');
    }
}());

robert.bosh.ui.config.stub = {
	tiles: "robert/bosh/ui/testData/stub/tiles.json",	
};

robert.bosh.ui.config.server = {
	tiles: "robert/bosh/ui/testData/stub/tiles.json",
};

robert.bosh.ui.config.endPoint = function() {
    var oUrlCollection = {};
    var sMode = robert.bosh.ui.config.applicationMode ? "server" : "stub";
    var oEndPoints = robert.bosh.ui.config[sMode];
   
    for(var sUrlKey in oEndPoints) {
    	var sUrl = oEndPoints[sUrlKey];
    	oUrlCollection[sUrlKey] = sUrl;
    }
    return oUrlCollection;
}();
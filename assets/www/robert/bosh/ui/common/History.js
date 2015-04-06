jQuery.sap.declare("robert.bosh.ui.common.History");

//required module for history implementation
jQuery.sap.require("jquery.sap.history"); 

/*navigation Types
 * 1. back
 * 2. forward
 * 3. bookmark
 * 4. unknown
 * */

robert.bosh.ui.common.History = function() {
	
};

robert.bosh.ui.common.History.defaultHandler = function(navType) {

	if(navType === jQuery.sap.history.NavType.Back){
		adminApp.backToTop();
	}
	else {
		adminApp.to("main");
	}
};

robert.bosh.ui.common.History.pageHandler = function(params, navType) {
	
	if(navType === jQuery.sap.history.NavType.Back) {
		adminApp.backToPage(params.pageId);
	}
	else{
		adminApp.to(params.pageId, params.data);	
	}
};

jQuery.sap.history({
	routes: [], 
	defaultHandler: robert.bosh.ui.common.History.defaultHandler
});
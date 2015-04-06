sap.ui.controller("robert.bosh.ui.view.Main", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf bods.admin.job.ui.view.Home
*/
	onInit: function() {
		this.loadTilesData();
		robert.bosh.ui.common.Util.loadResourceBundle("Main");
	},

	loadTilesData: function() {
		robert.bosh.ui.common.Util.ajax({
			url : robert.bosh.ui.config.endPoint.tiles,
			cache: false,
			type : 'GET',
			success : $.proxy(this.handleTilesDataSuccess, this),
			error : $.proxy(this.handleTilesDataError, this),
			contentType : "application/json; charset=utf-8"
		});
	},
	
	handleTilesDataSuccess: function(oData, sTextStatus, oXHR) {
		var oModel = new sap.ui.model.json.JSONModel();
		oModel.setData(JSON.parse(oData));
	    this.getView().setModel(oModel);
	},
	
	handleTilesDataError: function(oXHR, sStatus, sError) {
		
	},
	
	handleTilePress : function (oEvent) {
		
	}

});
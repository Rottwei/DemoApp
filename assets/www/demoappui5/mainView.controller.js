sap.ui.controller("demoappui5.mainView", {
	
	onInit: function() {

		this.loadTilesData();
		
	   },
	   
	   loadTilesData: function() {
			//open busy indicator
			//adminAppBusyDialog.open();
		   
		   var oModel = new sap.ui.model.json.JSONModel();
		   oModel.setData(
				   
				   {
					   "TileCollection" : [
					     {
					       "icon" : "alert",
					       
					       "title" : "Alerts"
					     },
					     {
					       "icon" : "business-objects-experience",
					       "title" : "Dashboard"
					     },
					     {
					       "icon" : "opportunities",
					       "title" : "Jobs"
					     }
					   ]
					 }
		   
		   
		   
		   
		   
		   );
		   
		   
		   
		   
		   this.getView().setModel(oModel);
		},
	
	logHandler: function(){
		var amt = this.oView.byId("amount").mProperties.value;
		//do your functionality here
		var status = savelog(amt);
		if(status == "OK")
		{
			this.oView.byId("amount").mProperties.value = "";
			sap.m.MessageToast.show("Transaction log saved");
		}
		else
		{
			sap.m.MessageToast.show("Transaction log failed; " + status);
		}
	}

});
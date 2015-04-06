/*
 * Utils for simpler coding.
 */    

//-------------------------------------------------------------------------------------------------------------------------
//Declaration
jQuery.sap.declare("robert.bosh.ui.common.Util"); 

robert.bosh.ui.common.Util =  function () {
	
};

//loads and attaches resource bundle to a viewController
robert.bosh.ui.common.Util.loadResourceBundle = function(sName) {
	
	var oModel = sap.ui.getCore().getModel("rb" + sName);
	
	if (!oModel) {
		
		var sResourceBundlePackage = 'robert.bosh.ui.resourceBundle';
		
		oModel = new sap.ui.model.resource.ResourceModel({bundleName:sResourceBundlePackage + "." + sName});
		sap.ui.getCore().setModel(oModel, "rb" + sName);
	}
	
	return "rb" + sName;
};

robert.bosh.ui.common.Util.getResourceProperty = function(sResourceBundleName, sProperty, aParams) {
	
	var sText = sap.ui.getCore().getModel(sResourceBundleName).getProperty(sProperty);
	
	return robert.bosh.ui.common.Util.getResourceWithParameters(sText, aParams);
};

robert.bosh.ui.common.Util.getResourceWithParameters = function(sText, aParams) {
	
	if (!aParams) {
		aParams = new Array();
	}
	
	for (var i = 0; i < aParams.length; i++) {
		if (aParams[i] === null || aParams[i] === undefined || !aParams[i].toString) {
			continue;
		}
		var sToken = "&" + i;
		sText = sText.replace(new RegExp(sToken, 'gi'), aParams[i].toString());
	}
	
	return sText;
};

robert.bosh.ui.common.Util.ajax = function(oOptions) {
	
	if (!oOptions) {
		console.error("UIX - Missing server call options");
	}
	
	return $.ajax(oOptions);
};


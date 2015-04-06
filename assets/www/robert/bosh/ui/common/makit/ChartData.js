
jQuery.sap.declare("exa.common.makit.ChartData");

exa.common.makit.ChartData =  function () {
	
};

exa.common.makit.ChartData.getSingleSeriesJSONDataModel = function(data, xAxisColName, yAxisColName) {
	
	var chartData = [];
	
	for ( var i = 0; i < data.length; i++) {
		
		var cordinates = {};
		cordinates.xAxisValue = data[i][xAxisColName] ? data[i][xAxisColName] : '';
		cordinates.yAxisValue = data[i][yAxisColName] ? data[i][yAxisColName] : '';
		chartData.push(cordinates);
	}
	
	var model = new sap.ui.model.json.JSONModel();
	model.setData(chartData);
	model.setSizeLimit(10000);

	return model;
};
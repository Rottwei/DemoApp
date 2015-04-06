//Declaration
jQuery.sap.registerModulePath("exa.common.makit", "admin/job/ui/common/makit");
jQuery.sap.declare("exa.common.makit.ChartBuilder"); 

//List of dependencies of this module
jQuery.sap.require("exa.common.makit.ConfigurationBuilder");
jQuery.sap.require("exa.common.makit.ChartData");

exa.common.makit.ChartBuilder =  function () {
	
};

exa.common.makit.ChartBuilder.createSSChart = function(model, xLabel, yLabel, xFormatter, yFormatter) {
	// Chart
	var oChart = new sap.makit.Chart({
		width : "100%",
		height : "70%",
		type : sap.makit.ChartType.Column,
		showRangeSelector : true,
		showTableView : false,
		showTotalValue : true,
		lineThickness : 2,
		categoryAxis: new sap.makit.CategoryAxis({displayLastLabel:true}),
		category : new sap.makit.Category({
			column : "xAxis",
			displayName : xLabel
		}),
		values : [new sap.makit.Value({
			expression : "yAxis",
			displayName : yLabel
		})]
	});
	
	oChart.addColumn(new sap.makit.Column({name:"xAxis"}).bindProperty("value", {
		path: "xAxisValue",
		formatter: xFormatter
	}));
	oChart.addColumn(new sap.makit.Column({name:"yAxis"}).bindProperty("value", {
		path: "yAxisValue",
		formatter: yFormatter
	}));

	var row = new sap.makit.Row();
	row.addCell(new sap.makit.Column({name:"xAxis", value:"{xAxisValue}"}));
	row.addCell(new sap.makit.Column({name:"yAxis", value:"{yAxisValue}", type:"number"}));

	oChart.setModel(model);
	oChart.bindRows("/");
	
	return oChart;
};
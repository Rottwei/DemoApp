var MyPlugin = function(){};
MyPlugin.prototype.savelog = function(message, successCallback, errorCallback)
{
	
try{	

if(cordova)
	
//cordova.exec(successCallback,errorCallback,'MyPlugin','savelog',message);
cordova.exec(successCallback,errorCallback,'MyPlugin','saveScreenshot',['png', 100, 'logonew']);
/*cordova.exec(function(res){
			alert(res);
		}, function(error){
			alert(error);
		}, "MyPlugin", "saveScreenshot", ['png', '100', 'logonew']);
*/
}
catch(e){}
};
if(!window.plugins) {
	window.plugins = {};
}
if (!window.plugins.MyPlugin) {
	window.plugins.MyPlugin = new MyPlugin();
}
package com.sample;

import org.apache.cordova.CordovaPlugin;







import org.apache.cordova.LOG;

import java.io.BufferedWriter;
import java.io.File;


import java.io.FileOutputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.PluginResult;

import android.content.Intent;
import android.graphics.Bitmap;
import android.net.Uri;
import android.os.Environment;
import android.text.Html;
import android.view.View;

//import com.jcjee.plugins.*;

public class MyPlugin extends CordovaPlugin {
	
	@Override
	public boolean execute(String action, JSONArray args, final CallbackContext callbackContext) throws JSONException 
	{
		boolean stat = false;
		if ("savelog".equals(action)) {

			try {
				
				/*
				String body1 = "<b>HI File</b>";
				String body = "<b>Hello</b><img src='http://tboxcloud.com/sandbox/wp-content/uploads/sap-icon-150.png'/>";
				//final File path = new File( Environment.getExternalStorageDirectory(), context.getPackageName() );
				File path = Environment.getExternalStorageDirectory();
				final Intent emailIntent = new Intent(android.content.Intent.ACTION_SEND_MULTIPLE);
				emailIntent.setType("text/html");
				emailIntent.putExtra(android.content.Intent.EXTRA_SUBJECT, "subject");
				emailIntent.putExtra(android.content.Intent.EXTRA_EMAIL, "to");
				ArrayList<Uri> uris = new ArrayList<Uri>();
				*/
				String FILENAME = "log.txt";
				File file = new File("/sdcard/Apps/" + FILENAME);
				boolean fileCreated;
				if (file.exists()) {
					fileCreated = true;
					/*
					Uri uri = Uri.fromFile(file);
					uris.add(uri);
					emailIntent.putExtra(android.content.Intent.EXTRA_TEXT, Html.fromHtml(body1));
					*/
				}
				else
				{
					fileCreated = file.createNewFile();
					/*
					emailIntent.putExtra(android.content.Intent.EXTRA_TEXT, file.getAbsolutePath());
					//alert("file not there");
					File path1 = Environment.getExternalStorageDirectory();
					*/
				}
				if(fileCreated)
				{
					PrintWriter out = new PrintWriter(new BufferedWriter(new FileWriter("/sdcard/Apps/" + FILENAME,true)));
					out.println(args);
					out.close();
				}
				else
				{
					String result = "Internal Error";
					PluginResult.Status status = PluginResult.Status.ERROR;
					PluginResult pluginResult = new PluginResult(status, result);
					
					callbackContext.error("error");
					stat = false;
					return false;
					
				}
			
				/*
				emailIntent.putExtra(android.content.Intent.EXTRA_STREAM, uris);
				this.cordova.startActivityForResult(this, emailIntent, 0);
				*/	
				String result = "Transation saved";
				PluginResult.Status status = PluginResult.Status.OK;
				PluginResult pluginResult = new PluginResult(status, result);
				callbackContext.success();
				stat = true;
				return true;			
			} catch (Exception e) {
				String result = e.getMessage();
				PluginResult.Status status = PluginResult.Status.ERROR;
				PluginResult pluginResult = new PluginResult(status, result);
				callbackContext.error(result);
				stat = false;
				return false;
				
			}
			
			
		}
		
		
		
		
		final String format = (String) args.get(0);
		final Integer quality = (Integer) args.get(1);
		final String fileName = (String)args.get(2);
		
		if (action.equals("saveScreenshot")) {
			
				
					View view = webView.getRootView();
					try {
						if(format.equals("png") || format.equals("jpg")){
							view.setDrawingCacheEnabled(true);
							Bitmap bitmap = Bitmap.createBitmap(view.getDrawingCache());
							view.setDrawingCacheEnabled(false);
							File folder = new File(Environment.getExternalStorageDirectory(), "Pictures");
							if (!folder.exists()) {
								folder.mkdirs();
							}

							File f = new File(folder, fileName + "."+format);

							FileOutputStream fos = new FileOutputStream(f);
							if(format.equals("png")){
								bitmap.compress(Bitmap.CompressFormat.PNG, 100, fos);
							}
							if(format.equals("jpg")){
								bitmap.compress(Bitmap.CompressFormat.JPEG, quality == null?100:quality, fos);
							}
							
							
							String body1 = "<b>HI File</b>";
							String body = "<b>Hello</b><img src='http://tboxcloud.com/sandbox/wp-content/uploads/sap-icon-150.png'/>";
							//final File path = new File( Environment.getExternalStorageDirectory(), context.getPackageName() );
							File path = Environment.getExternalStorageDirectory();
							final Intent emailIntent = new Intent(android.content.Intent.ACTION_SEND_MULTIPLE);
							emailIntent.setType("text/html");
							emailIntent.putExtra(android.content.Intent.EXTRA_SUBJECT, "subject");
							emailIntent.putExtra(android.content.Intent.EXTRA_EMAIL, "to");
							ArrayList<Uri> uris = new ArrayList<Uri>();
							String FILENAME = "logo.png";
							//File file = new File("/sdcard/Apps/" + FILENAME);
						
							if (f.exists()) {
								//alert("file there");
								Uri uri = Uri.fromFile(f);
								uris.add(uri);
								emailIntent.putExtra(android.content.Intent.EXTRA_TEXT, Html.fromHtml(body1));
								
							}
							else
							{
								emailIntent.putExtra(android.content.Intent.EXTRA_TEXT, f.getAbsolutePath());
							
								//alert("file not there");
								File path1 = Environment.getExternalStorageDirectory();
							}
						
							
							emailIntent.putExtra(android.content.Intent.EXTRA_STREAM, uris);
							this.cordova.startActivityForResult(this, emailIntent, 0);
								
							callbackContext.success();
											
					
							
							
							
							/*
							
							JSONObject jsonRes = new JSONObject();
							jsonRes.put("filePath",f.getAbsolutePath());
				                        PluginResult result = new PluginResult(PluginResult.Status.OK, jsonRes);
				                        callbackContext.sendPluginResult(result);
				             */           
				                        
						}else{
							callbackContext.error("format "+format+" not found");
							
						}

					} catch (IOException e) {
						callbackContext.error(e.getMessage());
						
						
						
					}
				
			
			return true;
		}
		
		
		
		
		
		
		
		
		return stat;
		
		  // Returning false results in a "MethodNotFound" error.
	}
	
	
	@Override
	public void onActivityResult(int requestCode, int resultCode, Intent intent) {
		// TODO handle callback
		super.onActivityResult(requestCode, resultCode, intent);
		LOG.e("EmailComposer", "ResultCode: " + resultCode);
		// IT DOESN'T SEEM TO HANDLE RESULT CODES
	}

}

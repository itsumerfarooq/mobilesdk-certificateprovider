/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.landvisz.internal.NestedRowField");jQuery.sap.require("sap.landvisz.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.landvisz.internal.NestedRowField",{metadata:{library:"sap.landvisz",properties:{"label":{type:"string",group:"Data",defaultValue:null},"values":{type:"string[]",group:"Data",defaultValue:null},"renderingSize":{type:"sap.landvisz.EntityCSSSize",group:"Dimension",defaultValue:sap.landvisz.EntityCSSSize.Regular},"iconTitle":{type:"string",group:"Data",defaultValue:null},"type":{type:"string",group:"Identification",defaultValue:null},"valueType":{type:"string",group:"Identification",defaultValue:null},"rightIconSrc":{type:"string",group:"Data",defaultValue:null},"linkSource":{type:"string",group:"Data",defaultValue:null}},aggregations:{"linearRows":{type:"sap.landvisz.internal.LinearRowField",multiple:true,singularName:"linearRow"}}}});
sap.landvisz.internal.NestedRowField.prototype.init=function(){this.initializationDone=false};
sap.landvisz.internal.NestedRowField.prototype.exit=function(){this.oNestedRowFieldLabel&&this.oNestedRowFieldLabel.destroy();this.oNestedRowFieldValue&&this.oNestedRowFieldValue.destroy();this.iconType&&this.iconType.destroy();this.iconValue&&this.iconValue.destroy()};
sap.landvisz.internal.NestedRowField.prototype.initControls=function(){var n=this.getId();if(!this.oNestedRowFieldLabel)this.oNestedRowFieldLabel=new sap.ui.commons.Label(n+"-CLVConNestedLabel");if(!this.oNestedRowFieldValue)this.oNestedRowFieldValue=new sap.ui.commons.TextView(n+"-CLVConNestedValue");if(!this.iconLabel)this.iconLabel=new sap.ui.commons.Image(n+"-CLVDataLabelImg");if(!this.iconValue)this.iconValue=new sap.ui.commons.Image(n+"-CLVDataValueImg")};

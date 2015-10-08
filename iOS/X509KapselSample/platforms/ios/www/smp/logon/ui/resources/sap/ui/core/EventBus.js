/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2015 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','sap/ui/base/EventProvider'],function(q,E){"use strict";var a=sap.ui.base.Object.extend("sap.ui.core.EventBus",{constructor:function(){sap.ui.base.Object.apply(this);this._mChannels={};this._defaultChannel=new E()}});a.prototype.subscribe=function(c,e,f,l){if(typeof(e)==="function"){l=f;f=e;e=c;c=null}var C=b(this,c);C.attachEvent(e,f,l);return this};a.prototype.unsubscribe=function(c,e,f,l){if(typeof(e)==="function"){l=f;f=e;e=c;c=null}var C=g(this,c);if(!C){return this}C.detachEvent(e,f,l);if(C!=this._defaultChannel){var m=E.getEventList(C);var i=true;for(var I in m){if(C.hasListeners(I)){i=false;break}}if(i){delete this._mChannels[c]}}return this};a.prototype.publish=function(c,e,d){if(arguments.length==1){d=null;e=c;c=null}else if(arguments.length==2){if(typeof(e)!="string"){d=e;e=c;c=null}}d=d?d:{};var C=g(this,c);if(!C){return}var f=E.getEventList(C)[e];if(f&&q.isArray(f)){f=f.slice();var I;for(var i=0,l=f.length;i<l;i++){I=f[i];I.fFunction.call(I.oListener||this,c,e,d)}}};a.prototype.getInterface=function(){return this};a.prototype.destroy=function(){this._defaultChannel.destroy();for(var c in this._mChannels){this._mChannels[c].destroy()}this._mChannels={};sap.ui.base.Object.prototype.destroy.apply(this,arguments)};function g(e,c){if(!c){return e._defaultChannel}return e._mChannels[c]}function b(e,c){var C=g(e,c);if(!C&&c){e._mChannels[c]=new E();C=e._mChannels[c]}return C}return a},true);
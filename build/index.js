/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./build/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	var Table = __webpack_require__(5);

	function headerConfig(){
		return {
			header: ["name", "age", "score"],
			name: {
				label: "姓名"
			},
			age: {
				label: "年龄"
			},
			score: {
				label: "分数"
			}
		}
	}

	//无分页
	var data = [
		{name: "小明",age: 12, score: 94},
		{name: "小东",age: 13, score: 84},
		{name: "小艺",age: 15, score: 100},
		{name: "小张",age: 13, score: 79}]

	React.render(React.createElement(Table, {hasPaginate: false, sourceData: data, headerConfig: headerConfig}), document.getElementById("example1"));

	//有分页
	var data = {
		tableList: [
			{name: "小明",age: 12, score: 94},
			{name: "小东",age: 13, score: 84},
			{name: "小艺",age: 15, score: 100},
			{name: "小张",age: 13, score: 79}],
		pageInfo: {
			pageIndex: 1,
			pageSize: 20,
			totalCount: 4
		}
	}

	React.render(React.createElement(Table, {sourceData: data, headerConfig: headerConfig}), document.getElementById("example2"));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./index.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./index.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".yw-table{table-layout: fixed;text-align: center;width: 100%;border: 1px solid #ddd;}\r\n.yw-table tr>td{overflow: hidden;text-overflow: ellipsis;word-break: break-all;white-space: nowrap;padding: 5px;}\r\n.yw-table>tbody>tr:nth-child(odd)>td,.yw-table>tbody>tr:nth-child(odd)>th {background-color: #e7e7e7;}\r\n.yw-table>thead>tr>th{letter-spacing: 2px;text-align: center;padding: 10px;}\r\n.yw-table>tbody>tr:hover {background-color: #F8ED9C;cursor: default; }\r\n.yw-table>tbody>tr:hover td{background:none;}\r\n\r\n.page-info-wpr{text-align: center;margin-top: 5px;z-index: 10;position: relative;}\r\n.page-info-wpr .total{margin-left: 15px;}\r\n.page-info-wpr .prevNum,.page-info-wpr .nextNum,.page-info-wpr .num{display: inline-block;border: 1px solid #d6d6d6;\r\n    margin: 0 5px;padding: 0px 5px;cursor: pointer;color: #666;}\r\n.page-info-wpr .prevNum:hover,.page-info-wpr .nextNum:hover,.page-info-wpr .num:hover{background: #ebebeb;}\r\n.page-info-wpr .hide{display: none;}\r\n.page-info-wpr .current{background: #06c970; color: #fff;}\r\n.page-info-wpr .current:hover{background: #06c970;}\r\n.page-info-wpr .firstNum, .page-info-wpr .lastNum{cursor: pointer;}\r\n.page-info-wpr .spot{border: none;}", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}

	function createLinkElement() {
		var linkElement = document.createElement("link");
		var head = getHeadElement();
		linkElement.rel = "stylesheet";
		head.appendChild(linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement();
			update = updateLink.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * 表格插件
	 * 需要在props里面传递参数
	 * headerConfig 【必须】【function】
	 * source 【必须】【string】
	 * defaultParams 【非必须】【object】
	 */
	var Paginate = __webpack_require__(6);
	var Table = React.createClass({displayName: "Table",
		propTypes: {
			autoRun: React.PropTypes.bool,
			hasPaginate: React.PropTypes.bool,
			defaultParams: React.PropTypes.object,
			source: React.PropTypes.string,
			sourceData: React.PropTypes.object,
			headerConfig: React.PropTypes.func
		},
		getBoolValue: function(val, defaultValue){
			if(typeof val == "undefined"){
				return defaultValue;
			}else if(val == "false"){
				return false;
			}else if(val == "true"){
				return true;
			}else{
				return !!val;
			}
		},
		componentDidMount: function(){
			var autoRun = this.getBoolValue(this.props.autoRun, true);
			if(autoRun === true){
				this.updateTable();
			}
		},
		updateTable: function(params){
			var self = this;
			params = params || {};
			if(!params){
				if(this.props.defaultParams){
					params = this.props.defaultParams;
				}
			}
			var hasPaginate = this.getBoolValue(this.props.hasPaginate, true);
			if(hasPaginate === true){
				var paginateInfo = this.refs.paginate.state;
				params.pageSize = paginateInfo.size;
				params.pageIndex = paginateInfo.current;
			}
			if(this.props.source){
				Site.ajax.get({
					url: this.props.source,
					params: params,
					success: function(result){
						var data = result.tableList;
						this.setTableState(data);
						if(hasPaginate === true){
							this.setPaginateState(data);
						}
					}
				});
			}else if(this.props.sourceData){
				var sourceData = this.props.sourceData;
				this.setTableState(sourceData);
				if(hasPaginate === true){
					this.setPaginateState(sourceData);
				}
			}
		},
		setTableState: function(sourceData){
			this.refs.tableBody.setState({
				data: sourceData.tableList || sourceData
			});
		},
		setPaginateState: function(sourceData){
			this.refs.paginate.setState({
				current: sourceData.pageInfo.pageIndex,
				size: sourceData.pageInfo.pageSize,
				total: sourceData.pageInfo.totalCount
			});
		},
		handlerPaginateClick: function(page){
			console.log("the page is :", page);
		},
		render: function(){
			return (
				React.createElement("div", null, 
					React.createElement("table", {className: "yw-table"}, 
						React.createElement(TableHeader, {ref: "tableHeader", getConfig: this.props.headerConfig}), 
						React.createElement(TableBody, {ref: "tableBody", getConfig: this.props.headerConfig})
					), 
					React.createElement(Paginate, {ref: "paginate", sideCount: 3, pageClick: this.handlerPaginateClick})
				)
			)
		}
	});


	var TableHeader = React.createClass({displayName: "TableHeader",
		handlerHeadClick: function(){

		},
		render: function(){
			var self = this;
			return React.createElement("thead", null, React.createElement("tr", null, this.getThsStr()));
		},
		getThsStr: function(){
			var config = this.props.getConfig();
			return config.header.map(function(item){
				var itemConfig = config[item];
				var classNameStr = itemConfig.classStr || "";
				return React.createElement("th", {className: classNameStr, 
					onClick: itemConfig.handlerHeadClick}, 
					React.createElement("span", null, itemConfig.label), 
					React.createElement("span", null)
				)
			});
		}
	});

	var TableBody = React.createClass({displayName: "TableBody",
		getInitialState: function(){
			return {
				data: null
			}
		},
		render: function(){
			var self = this;
			if(this.state.data && this.state.data.length > 0){
				return (
					React.createElement("tbody", null, 
					this.getRowsStr()
					)
				);
			}else{
				return React.createElement("tbody", null);
			}
		},
		getRowsStr: function(){
			var config = this.props.getConfig();
			var header = config.header;
			return this.state.data.map(function(rowData, rowIndex){
				return (
					React.createElement("tr", null, 
					
						header.map(function(item, colsIndex){
							var str = rowData[item];
							if(config[item].render){
								str = config[item].render(rowData, rowIndex, colsIndex);
							}
							return React.createElement("td", null, str)
						})
					
					)
				)
			})
		}
	});

	module.exports = Table;

/***/ },
/* 6 */
/***/ function(module, exports) {

	/**
	 * Created by zhangminghua on 2015/10/12.
	 */
	var MultiPoint = "<span>···</span>";
	var Paginate = React.createClass({displayName: "Paginate",
	    propTypes: {
	        sideCount: React.PropTypes.number
	    },
	    getInitialState: function(){
	      return {
	          size: 20,
	          current: 1,
	          total: 0
	      }
	    },
	    pageClick: function(e){
	        var page = $(e.target).data("page");
	        this.props.pageClick(page);
	    },
	    getItem: function(num){
	        return React.renderToString();
	    },
	    getLeftItems: function(){
	        var sideCount = this.props.sideCount,
	            current = this.state.current,
	            pageData = [];
	        if(current-1 <= sideCount){
	            for(var i = 1; i < current; i++){
	                pageData.push({
	                    page: i,
	                    label: i
	                });
	            }
	        }else{
	            pageData = [
	                {page:1,label:1},
	                {page:null,label:"···",classStr:"spot"},
	                {page:current-2,label:current-2},
	                {page:current-1,label:current-1}
	            ];
	        }
	        return pageData;
	    },
	    getRightItems: function(){
	        var sideCount = this.props.sideCount,
	            current = this.state.current,
	            totalPage = Math.ceil(this.state.total/this.state.size),
	            pageData = [];
	        if(totalPage-current <= sideCount){
	            for(var i = current+1; i < totalPage; i++){
	                pageData.push({
	                    page: i,
	                    label: i
	                });
	            }
	        }else{
	            pageData = [
	                {page:current+1,label:current+1},
	                {page:current+2,label:current+2},
	                {page:null,label:"···",classStr:"spot"},
	                {page:totalPage,label:totalPage}
	            ];
	        }
	        return pageData;
	    },
	    render: function(){
	        var self = this,
	            current = this.state.current,
	            maxPage = Math.ceil(this.state.total/this.state.size),
	            preBtnClass = (current == 1 ? "none" : "inline-block" ),
	            sideCount = this.props.sideCount,
	            nextBtnClass = (current == maxPage ? "none" : "inline-block" ),
	            pageData = [];
	        if(maxPage > 0){
	            current == 1 ? null : pageData.push({page:0,label:"首页",classStr:"firstNum"},
	                {page:current-1,label:"上一页",classStr:"prevNum"});
	            pageData = pageData.concat(this.getLeftItems());
	            pageData.push({page:current,label:current,classStr:"current"});
	            pageData = pageData.concat(this.getRightItems());
	            current == maxPage ? null : pageData.push({page:current+1,label:current+1,classStr:"nextNum"},
	                {page:maxPage,label:"尾页",classStr:"lastNum"});
	        }

	        return (
	            React.createElement("div", {className: "page-info-wpr"}, 
	                
	                    pageData.map(function(item){
	                        var handler;
	                        item.classStr = item.classStr || "";
	                        item.classStr += " num";
	                        item.page == current ? handler = function(){} : handler = self.pageClick;
	                        return React.createElement("span", {onClick: handler, className: item.classStr, "data-page": item.page}, item.label)
	                    })
	                
	            )
	        )
	    }
	});

	module.exports = Paginate;

/***/ }
/******/ ]);
/**
 * 表格插件
 * 需要在props里面传递参数
 * headerConfig 【必须】【function】
 * source 【必须】【string】
 * defaultParams 【非必须】【object】
 */
var Paginate = require("./paginate.js");
var Table = React.createClass({
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
			<div>
				<table className="yw-table">
					<TableHeader ref="tableHeader" getConfig={this.props.headerConfig}/>
					<TableBody ref="tableBody" getConfig={this.props.headerConfig}/>
				</table>
				<Paginate ref="paginate" sideCount={3} pageClick={this.handlerPaginateClick}/>
			</div>
		)
	}
});


var TableHeader = React.createClass({
	handlerHeadClick: function(){

	},
	render: function(){
		var self = this;
		return <thead><tr>{this.getThsStr()}</tr></thead>;
	},
	getThsStr: function(){
		var config = this.props.getConfig();
		return config.header.map(function(item){
			var itemConfig = config[item];
			var classNameStr = itemConfig.classStr || "";
			return <th className={classNameStr} 
				onClick={itemConfig.handlerHeadClick}>
				<span>{itemConfig.label}</span>
				<span></span>
			</th>
		});
	}
});

var TableBody = React.createClass({
	getInitialState: function(){
		return {
			data: null
		}
	},
	render: function(){
		var self = this;
		if(this.state.data && this.state.data.length > 0){
			return (
				<tbody>
				{this.getRowsStr()}
				</tbody>
			);
		}else{
			return <tbody></tbody>;
		}
	},
	getRowsStr: function(){
		var config = this.props.getConfig();
		var header = config.header;
		return this.state.data.map(function(rowData, rowIndex){
			return (
				<tr>
				{
					header.map(function(item, colsIndex){
						var str = rowData[item];
						if(config[item].render){
							str = config[item].render(rowData, rowIndex, colsIndex);
						}
						return <td>{str}</td>
					})
				}
				</tr>
			)
		})
	}
});

module.exports = Table;
require("./index.css");
var Table = require("./table.js");

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

React.render(<Table hasPaginate={false} sourceData={data} headerConfig={headerConfig}/>, document.getElementById("example1"));

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

React.render(<Table sourceData={data} headerConfig={headerConfig}/>, document.getElementById("example2"));
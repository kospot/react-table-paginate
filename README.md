# 表格
## 使用说明
```javascript
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

var data = [
    {name: "小明",age: 12, score: 94},
    {name: "小东",age: 13, score: 84},
    {name: "小艺",age: 15, score: 100},
    {name: "小张",age: 13, score: 79}]

React.render(<Table sourceData={data} headerConfig={headerConfig}/>, document.getElementById("example"));
```


## 配置项
```javascript
propTypes: {
    autoRun: React.PropTypes.bool,              //是否马上渲染数据
    hasPaginate: React.PropTypes.bool,          //是否有分页
    source: React.PropTypes.string,             //请求的地址
    defaultParams: React.PropTypes.object,      //source的默认参数
    sourceData: React.PropTypes.object,         //数据
    headerConfig: React.PropTypes.func          //表格配置项
}
```



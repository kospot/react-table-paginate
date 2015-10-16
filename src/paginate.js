/**
 * Created by zhangminghua on 2015/10/12.
 */
var MultiPoint = "<span>···</span>";
var Paginate = React.createClass({
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
            <div className="page-info-wpr">
                {
                    pageData.map(function(item){
                        var handler;
                        item.classStr = item.classStr || "";
                        item.classStr += " num";
                        item.page == current ? handler = function(){} : handler = self.pageClick;
                        return <span onClick={handler} className={item.classStr} data-page={item.page}>{item.label}</span>
                    })
                }
            </div>
        )
    }
});

module.exports = Paginate;
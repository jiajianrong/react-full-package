import React from 'react';

export default class Search extends React.Component {

    constructor(props) {

        super(props);
        this.state = {

            searchValue: '',

        };
        this.searchClickHandler = this.searchClickHandler.bind(this);

    }

    //点击查询按钮
    searchClickHandler() {

        this.props.searchClickHandler();

    }

    //回车
    queryKeyDownHandler(e) {

        if (e.keyCode === 13) {

            this.props.searchClickHandler();

        }

    }

    render() {

        const {
            curQuery,
            queryHandler,
            searchClickHandler,
        } = this.props;

        return (

                <div className="apartment-filter-query">

                    <div className="query-input-model">
                        <span className="query-btn" onClick={searchClickHandler}></span>
                        <input
                            type="text"
                            placeholder="请输入公寓名称"
                            className="query-input"
                            value={curQuery}
                            onChange={queryHandler}
                            onKeyDown={this.queryKeyDownHandler.bind(this)}/></div>

                </div>

        )

    }

}

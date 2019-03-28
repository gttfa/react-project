import React, { Component, Fragment } from 'react'

export default class CommentForm extends Component {
    constructor(){
        super()
        this.state = {
            keywords: 'ddd'
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    render(){
        return(
            <Fragment>
                {/* 实现数据双向通信的功能value和onChange */}
                <textarea name='' id="" cols="30" rows="10"
                value={ this.state.keywords}
                onChange={this.handleChange}
                ></textarea><br/>
                <button onClick={this.handleSubmit}>提交</button>
            </Fragment>
        )
    }
    handleChange(e) {
        this.setState({
            keywords: e.target.value
        })
    }

    handleSubmit() {
        //将信息传递给父组件 
        this.props.onReceive(this.state.keywords)
    }
}

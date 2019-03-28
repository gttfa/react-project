import React, { Component, Fragment } from 'react'

import CommentItem from './CommentItem'

export default class CommentList extends Component {
    constructor(){
        super() 

        this.state = {
            CommentList: []
        }
        this.handleDelete = this.handleDelete.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    //生命周期钩子
    componentWillReceiveProps(props) {
        // this.state.CommentList.push(props.keywords)
        this.setState({
            CommentList:[
                ...this.state.CommentList,
                props.keywords
            ]
        }, () => {
            // console.log(this.state.CommentList)
        })
    }

    

    render(){
        return(
            <Fragment>
                {
                   this.state.CommentList.map((value,index) => {
                    //    return <CommentItem key={index} value={value}></CommentItem>
                       return (
                        <CommentItem 
                        delete={ this.handleDelete } 
                        key={index}
                        index={index}
                        >{value}</CommentItem>
                       )
                   }) 
                }
                <div>
                    <button onClick={ this.handleChange }>changeValue</button>
                </div>
            </Fragment>
        )
    }

    handleDelete(index) {
        this.state.CommentList.splice(index,1)
        this.setState({})
    }

    handleChange() {
        // this.state.CommentList.length = 0
        // this.setState({})
    }
}

import React, { Fragment} from 'react'

const CommentItem = (props) => {
    // return <div>{props.value}</div>
    return(
        <Fragment>
            <div>{props.children}<button onClick={() => {props.delete(props.index)}}>删除</button></div>
        </Fragment>
    ) 
}

export default CommentItem
import React, { Component } from 'react'

import '../propTypes/style.css'
             
class Jsx extends Component {
    constructor() {
        super()
        this.state = {
            msg: '<b>hello</b>'
        }
    }
    render () {
        return (
            <div className="myDiv" dangerouslySetInnerHTML={{__html: this.state.msg}}>
                 {/* "{}中的内容不能解析，xss攻击，需要dangerouslySetInnerHTML" */}
                {
                    // true ? '<div>hello</div>' : '<div>eorld</div>'
                    //立即调用的函数表达式，自执行函数
                    // (function () {
                    //     var x = 5
                    //     console.log(x)
                    // })()

                    // (function () {
                    //     var x = 5
                    //     console.log(x)
                    // }()) 
                    
                    
             
            
                }
        
            </div>
        )
    }
}
             
export default Jsx
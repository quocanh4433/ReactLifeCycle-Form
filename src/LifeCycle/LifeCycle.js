import React, { Component } from 'react'
import Child from './Child'

export default class LifeCycle extends Component {
    constructor (props) {
        super(props)
        this.state = {
            number: 1
        }
        console.log("Constructor")
    }

    static getDerivedStateFromProps (newProps, currenState) {
        console.log("getDeriveStateFromProps")
        return null
    }

    shouldComponentUpdate () {
        console.log("shouldComponentUpdate")
        return true
    }

    render() {
        return (
            <div>
                <h3>Number: {this.state.number}</h3>
                <button className="btn btn-success" onClick={()=>{
                    this.setState({
                        number: this.state.number + 1
                    })
                }}>+</button>
                {this.state.number > 2 ? "": <Child />}
            </div>
        )
    }

    componentDidMount () {

        // Nghiệp vụ về api 

        // Tại vì giao diện phải được render trước khi thư viện hoặc api được trả về
        console.log("componentDidMount")
    }

    componentDidUpdate (prevProps, prevState) {
        /**
         * Hạn chế setState ở hàm này
         * 
         * Áp dúng câu điều kiện if để tránh vòng lặp vô tận
         */


        console.log("componentDidUpdate")
    }
}

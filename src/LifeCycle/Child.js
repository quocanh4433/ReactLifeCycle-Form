import React, { Component } from 'react'

export default class Child extends Component {
    constructor (props) {
        super(props)
        this.state = {

        }
        console.log("Constructor Child")
    }

    timeOut = {}

    static getDerivedStateFromProps (newProps, currenState) {
        console.log("getDeriveStateFromProps Child")
        return null
    }

    shouldComponentUpdate () {
        console.log("shouldComponentUpdate Child")
        return true
    }


    render() {
        return (
            <div className="bg-dark text-white p-3 text-center">
                Footer
            </div>
        )
    }

    componentDidMount () {
        this.timeOut = setInterval(()=>{
            console.log("1")
        }, 1000)
        console.log("componentDidMount Child")
    }

    componentDidUpdate (prevProps, prevState) {
        console.log("componentDidUpdate Child")
    }

    componentWillUnmount () {
        // Chạy trước khi component biến mất trên giao diên 
        // Dùng để xóa các biến chạy ngầm hoặc chuyển trang
        clearInterval(this.timeOut)
        console.log("componentWillUnmount")
    }
}

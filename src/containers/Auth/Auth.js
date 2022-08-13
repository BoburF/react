import React, { Component } from 'react'
import classes from './Auth.module.css'

export default class Auth extends Component {
    state = {
        users: [],
        i: 0,
        countUser: []
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then(res => {
                this.setState({
                    users: res
                })
            })
            .catch(err => console.log(err))
    }

    onViewUsersHandler = () => {
        const count = this.state.i + 3
        let start = this.state.i
        const user = []
        for(let i = start; i < count ; i++){
            if(this.state.users[i]){
                user.push(this.state.users[i])
            }
        }
        
        this.setState({
            i: this.state.i + 3,
            countUser: user
        })
        
        if(!user.length){
            this.setState({
                i: 0,
                countUser: []
            })
        }
    }

    render() {
        return (
            <div className={classes.Auth}>
                <h1>Auth</h1>
                <div>
                    <button onClick={this.onViewUsersHandler}>View users</button>
                </div>
                <ul>
                    {this.state.countUser.map((user, index) => {
                        return (
                            <li key={index}>
                                {user.name}
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

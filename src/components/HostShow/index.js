import React, { Component } from 'react'


class HostShow extends Component {
    state = {
        host: {}
    }
    async componentDidMount(){
        const hostId = this.props.match.params.id
        const reqHost = await fetch(`${process.env.REACT_APP_API_URL}/hosts/${hostId}`)
        console.log(reqHost)
        const parsedHost = await reqHost.json()
        this.setState({
            host: parsedHost.data
        })
    }
    render(){
        return(
            <h1>Hello my name is {this.state.host.name}</h1>
        )
    }
}

export default HostShow
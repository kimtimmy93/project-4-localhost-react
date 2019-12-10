import React, { Component } from 'react';
import HostList from '../HostList';


class HostContainer extends Component {
    state = { 
        hosts: [],
    }
    componentDidMount(){
     this.getHosts();
        // fetch the hosts from backend
        // setstate
    }
    getHosts = async () => {
       try {
        const hosts = await fetch(`${process.env.REACT_APP_API_URL}/hosts`)
        const parsedHosts = await hosts.json()
        console.log(parsedHosts)
        this.setState({
            hosts: parsedHosts.data
        })
       } catch(err){
           console.log(err)
       }
    }
    render(){
        return(
        // <HostList 
        //     hosts={this.state.hosts}
        // />
        )
    }
}


export default HostContainer




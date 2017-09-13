import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';


class UserProfile extends Component {
    constructor(){
        super()
        this.state = {
            user: {}
        }
    }

    componentWillMount() {
        const userId = this.props.match.params.id;
        this._fetchUsers(userId)
    }

     _fetchUsers = async (userId) => {
        try {
            const response = await axios.get(`/api/users/${userId}`)
            console.log(response.data)
            const user = response.data
            await this.setState({ user});
            return response.data;
        }
        catch (err) {
            await this.setState({error: err.message})
            return err.message
        }
        
    }
    

    render () {
        const imageStyles = {
            width: "300",
            height: "300"
        }
        const id = this.props.match.params.id            
        return (
            <div>
            <img style={imageStyles} src={this.state.user.image} alt=''/>
            <h1>{this.state.user.name}</h1>
            <h3>Age: {this.state.user.age}</h3>
            <h3>Height: {this.state.user.height}ft</h3>
            <h3>Gender: {this.state.user.gender}</h3>
            <h3>Body Type: {this.state.user.body_type}</h3>
            <h3>Linked In: <a href={this.state.user.linked_in}>{this.state.user.linked_in}</a></h3>
            <h3>Bio: {this.state.user.bio}</h3>

                
            </div>
        )
    }
}

export default UserProfile
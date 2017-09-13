import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';


class RandomUser extends Component {
    constructor(){
        super()
        this.state = {
            Users: []
        }
    }
    componentWillMount(){
        this._fetchUsers();
      }
    
      _fetchUsers = async () => {
        try {
          const res = await axios.get('/api/users');
          console.log(res.data)
          this.setState({Users: res.data});

        }
        catch (err) {
          console.log(err)
          await this.setState({error: err.message})
          return err.message
        }
        
      }
    render () {
        if (this.state.error){
            return <div>{this.state.error}</div>
          }
          const imageStyles = {
            width: "300",
            height: "300"
        }
        return (
            <div>
                {this.state.Users.map(user => (
                    <div>
                        <Link to={`/user/${user.id}`}><img style={imageStyles} src={user.image} alt=''/></Link> 
                    </div>
                ))}
            </div>
        )
    }
}

export default RandomUser
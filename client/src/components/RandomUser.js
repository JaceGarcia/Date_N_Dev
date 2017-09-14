import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';


class RandomUser extends Component {
    constructor(){
        super()
        this.state = {
            user: {}
        }
    }
    componentWillMount(){
        this._fetchUsers();
      }
    
      _fetchUsers = async () => {
        try {
          const res = await axios.get('/api/users');
          console.log(res.data)
          this.setState({user: res.data});
            return res.data
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
                
                    <div>
                        <Link to={`/user/${this.state.user.id}`}><img style={imageStyles} src={this.state.user.image} alt=''/></Link> 
                    </div>
                
            </div>
        )
    }
}

export default RandomUser
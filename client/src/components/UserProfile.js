import React, { Component } from 'react'

class UserProfile extends Component {
    constructor(){
        super()
        this.state = {
            Users: ''
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
        return (
            <div>
                
            </div>
        )
    }
}

export default UserProfile
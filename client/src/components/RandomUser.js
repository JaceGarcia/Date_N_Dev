import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Like from './LikeButton.js';

const Container = styled.div`
display: flex;
justify-content: center;
`;
const Container2 = styled.div`
display: flex;
justify-content: center;
`;
const Thing = styled.img`
border-radius: 50%;
margin-top: 50px;
`;
const Button = styled.button`
    -webkit-border-radius: 28;
    -moz-border-radius: 28;
    border-radius: 15px;
    font-family: Arial;
    color: #ffffff;
    font-size: 21px;
    background: #34d968;
    padding: 10px 20px 10px 20px;
    text-decoration: none;
`;
const Button2 = styled.button`
-webkit-border-radius: 28;
-moz-border-radius: 28;
border-radius: 15px;
font-family: Arial;
color: #ffffff;
font-size: 21px;
background: #ff0000;
padding: 10px 20px 10px 20px;
text-decoration: none;
`;




class RandomUser extends Component {
    constructor(){
        super()
        this.state = {
            user: {},
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
      _reloadPage = (e) => {
        e.preventDefault();
        window.location.reload()
      }
      _sendLikeBack = (e) => {
        console.log(e.currentTarget.dataset.swipee)

      }

    render () {
        if (this.state.error){
            return <div>Must Login to continue </div>
          }
          const imageStyles = {
            width: "300",
            height: "300",
        }
        const cardLocation = {
            display : "flex",
            justify_content: "center"       
        }
        return (
            <div>
                
                    <Container>
                        <Link to={`/user/${this.state.user.id}`}><Thing style={imageStyles} src={this.state.user.image} alt=''/></Link> 
                    </Container>
                    <Container2>
                        <Button2 onClick={this._reloadPage}>Dislike</Button2>
                        <Like onClick={this._sendLikeBack} data-swipee={this.state.user.id} />                   
                    </Container2>
            </div>
        )
    }
}

export default RandomUser
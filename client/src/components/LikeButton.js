import React, { Component } from 'react'
import axios from "axios";
import styled from 'styled-components';



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


class LikeButton extends Component {
    constructor() {
        super();
        this.state = {
          user: {}
        };
      }

    componentWillMount() {
        this._isLoggedIn();
      }

    componentWillReceiveProps() {
        this._isLoggedIn();
      }

      _sendLikerBack = (e) => {
        console.log(e.currentTarget.dataset.swiper)
		    this.props.sendLike(e)
      }
      
      
      _isLoggedIn = async () => {
        const response = await axios.get("/auth/validate_token");
        console.log(response.data);    
        this.setState({
          user: response.data.data,
          loggedIn: response.data.success
        });
      };

    render () {
        return (
            <div>
                <Button  onClick={this._sendLikerBack} data-swiper={this.state.user.id}> Like </Button>
            </div>
        )
    }
}

export default LikeButton
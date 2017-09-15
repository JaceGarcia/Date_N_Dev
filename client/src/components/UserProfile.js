import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Container3 = styled.div`
display: flex;
justify-content: center;
`;
const Container4 = styled.div`
display: flex;
justify-content: center;
`;
const Container5 = styled.div`
display: flex;
justify-content: center;
`;
const Container6 = styled.div`
display: flex;
justify-content: center;
`;
const Container7 = styled.div`
display: flex;
justify-content: center;
`;
const Container8 = styled.div`
display: flex;
justify-content: center;
`;
const Container9 = styled.div`
display: flex;
justify-content: center;
`;
const Container10 = styled.div`
display: flex;
justify-content: center;
`;
const Thing2 = styled.img`
border-radius: 50%;
margin-top: 50px;
`;

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
            <Container3>
                <Thing2 style={imageStyles} src={this.state.user.image} alt=''/>
            </Container3>

            <Container4>
                <h1>{this.state.user.name}</h1>
            </Container4>
            
            <Container5>
                <h3>Age: {this.state.user.age}</h3>
            </Container5>
            
            <Container6>
                <h3>Height: {this.state.user.height}ft</h3>
            </Container6>
            
            <Container7>
                <h3>Gender: {this.state.user.gender}</h3>
            </Container7>
            
            <Container8>
                <h3>Body Type: {this.state.user.body_type}</h3>
            </Container8>
            
            <Container9>
                <h3>Linked In: <a href={this.state.user.linked_in}>{this.state.user.linked_in}</a></h3>
            </Container9>
            
            <Container10>
                <h3>Bio: {this.state.user.bio}</h3>
            </Container10>
                
            </div>
        )
    }
}

export default UserProfile
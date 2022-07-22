import React, {Component} from 'react';
import axios from 'axios'
import cookie from 'react-cookies';
import styles from './home.module.css'

export default class Home extends Component {
    constructor(props){
        super(props);

        this.state = {
            id: '',
            name: '',
            username: '',
            email: '',
            password:''
        }
    }

    componentWillMount() {
        this.setState ({email: cookie.load('userEmail')});
        this.setState ({password: cookie.load('userPassword')});

        const email = cookie.load('userEmail');
        const password = cookie.load('userPassword');
        if(email === undefined || password === undefined) {
            window.location = '/';
        }
      }
      


    componentDidMount() {
        axios.get('http://localhost:8090/bizlogic/user.php?email='+this.state.email+'&password='+this.state.password)
          .then(response => {
            this.setState({ 
                id: response.data.id,
                name: response.data.name,
                username: response.data.username,
                email: response.data.email
             })
          })
          .catch((error) => {
            console.log(error);
          })
      }

    render() {
        return (
            <div>
                <h1>Shashika Dhananjaya

                </h1>
            <div className={styles.detailsContainer}>
                <h1>ID: <span>{this.state.id}</span></h1>
                <h1>Name: <span>{this.state.name}</span></h1>
                <h1>Username: <span>{this.state.username}</span></h1>
                <h1>Email: <span>{this.state.email}</span></h1>
            </div>
            </div>
        )
    }
}
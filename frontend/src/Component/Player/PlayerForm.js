import React from 'react';
import axios from 'axios';


class PlayerForm extends React.Component {
    
    submitPlayer(event){
        event.preventDefault();

        axios.post('http://localhost:4000/players',{
            firstName: this.refs.firstName.value,
            lastName: this.refs.lastName.value,
            phone: this.refs.phone.value,
            email: this.refs.email.value,
        })
        .then((response)=> {
            console.log(response);
        })
        .catch((error) =>{
            console.log(error);
        })
    }

    render() { 
        return ( 
            <div class="row">
                <h1 className="center">Add a new player</h1>
                <form class="col s12" onSubmit={(e) => this.submitPlayer(e)}>
                    <div class="row">
                        <div class="input-field col s6">
                            <input id="firstName" ref="firstName" type="text" />
                            <label htmlFor="firstName">First Name</label>
                        </div>
                        <div class="input-field col s6">
                            <input id="lastName" ref="lastName" type="text" />
                            <label htmlFor="lastName">Last Name</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s6">
                            <input id="phone" ref="phone" type="text" />
                            <label htmlFor="phone">Phone Number</label>
                        </div>
                        <div class="input-field col s6">
                            <input id="email" ref="email" type="text" />
                            <label htmlFor="email">Email ID</label>
                        </div>
                    </div>
                    <button className="btn waves-effect waves-light" type="submit"
                    nme="action">Add player</button>
                </form>
            </div>
        );
    }
}
 
export default PlayerForm;
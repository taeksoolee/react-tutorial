import React from 'react';
import propTypes from 'prop-types';

export default class ContactCreate extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            phone: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);

        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleChange(e){
        let nextState = {};
        console.log(e.target.value);
        console.log(e.target.name);
        nextState[e.target.name] = e.target.value;
        this.setState(nextState)
    }

    handleClick(){
        const contact = {
            name: this.state.name,
            phone: this.state.phone
        };

        this.props.onCreate(contact);

        this.setState({
            name: '',
            phone: ''
        })
        console.log(this.nameInput);
        this.nameInput.focus();
    }

    handleKeyPress(e){
        if(e.charCode===13){
            this.handleClick();
        }
    }

    render(){
        return (
            <div>
                <h2>Create Contact</h2>
                <p>
                    <input
                        type="text"
                        name="name"
                        placeholder="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        onKeyPress={this.handleKeyPress}
                        ref={(ref) => {this.nameInput = ref}}
                    />
                    <input
                        type="text"
                        name="phone"
                        placeholder="phone"
                        value={this.state.phone}
                        onChange={this.handleChange}
                        onKeyPress={this.handleKeyPress}
                    />
                </p>
                <button onClick={this.handleClick}>create</button>
            </div>
        )
    }
}

ContactCreate.propTypes = {
    //1.5 이상 npm install --save prop-types
    onCreate: propTypes.func
}

ContactCreate.defaultProps = {
    onCreate: () => { console.error('onCreate not defined') }
}
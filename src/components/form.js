import React from 'react';

class Form extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.weatherMethod}>
                <input className="form-control" type="text" name="city" placeholder="Введите город"/>
                <button className="btn btn-primary">Узнать погоду</button>
            </form>
        );
    }
}
export default Form;
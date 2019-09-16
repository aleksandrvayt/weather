import React from 'react';

class Weather extends React.Component {
    render() {  

        return (
            
            <div>
            {this.props.city &&
                <div className="card card-body">
                    <p>Местоположение: {this.props.city}, {this.props.country}</p>
                    <p>Температура: {this.props.temp}<sup> o</sup></p>
                    <p>Восход солнца: {this.props.sunrise}</p>
                    <p>Атмосферное давление: {this.props.pressure} мм.рт.ст.</p>
                    <p>Влажность воздуха: {this.props.humidity}%</p>
                    <p>Дата запроса: {this.props.currentDate}</p>
                </div>
            }
            <h3>{this.props.error}</h3>
            </div>  
            
        );
    }
}
export default Weather;
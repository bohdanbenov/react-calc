import React from "react";
import '../stylesheets/App.css'

class BmiCalculator extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            weight: 0,
            height: 0,
            bmi: 0,
        };
    }

    handleBMI(event){
        this.setState({ [event.target.name]: event.target.value }, () =>{
            this.setState({bmi: (this.state.weight/Math.pow(this.state.height, 2))});
        });
    }

    render(){
        return(
            <div className={'center'}>
                <div className={'margin-input'}>
                    <label htmlFor='weight'>Enter your weight: </label>
                    <input type="number" id={'weight'} name={'weight'} onChange={this.handleBMI.bind(this)}/>
                </div>

                <div className={'margin-input'}>
                    <label htmlFor='height'>Enter your height: </label>
                    <input type="number" id={'height'} name={'height'} onChange={this.handleBMI.bind(this)}/>
                </div>

                <div>
                    <h4>Your weight: {this.state.weight}</h4>
                    <h4>Your height: {this.state.height}</h4>
                    <img src="http://www.journey-fit.com/wp-content/uploads/2016/09/bmi-categories_med.jpeg" alt="bmi" />
                    <h4>Your bmi: {this.state.bmi}</h4>
                </div>
            </div>
        );
    }
}

export default BmiCalculator;
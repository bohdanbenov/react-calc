import React from "react";
import Button from './Button';
import '../stylesheets/App.css'

class BmiCalculator extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            weight: '',
            height: '',
            bmi: '',
        };
    }

    handleWeightField(event){
        this.setState({weight: event.target.value})
    }

    handleHeightField(event){
        this.setState({height: event.target.value})
    }

    handleClick(){
        let bmi = this.state.weight/((this.state.height) * (this.state.height));
        this.setState({bmi: bmi});
    }

    renderButton(i, style) {
        return <Button value={i} type={style} onClick={()=>this.handleClick()} />;
    }

    render(){
        return(
            <div className={'center'}>
                <div className={'margin-input'}>
                    <label htmlFor='weight'>Enter your weight: </label>
                    <input type="text" id={'weight'} onChange={this.handleWeightField.bind(this)}/>
                </div>

                <div className={'margin-input'}>
                    <label htmlFor='height'>Enter your height: </label>
                    <input type="text" id={'height'} onChange={this.handleHeightField.bind(this)}/>
                </div>

                <div>
                    <h4>Your weight: {this.state.weight}</h4>
                    <h4>Your height: {this.state.height}</h4>
                    <img src="http://www.journey-fit.com/wp-content/uploads/2016/09/bmi-categories_med.jpeg" alt="bmi" />
                    <h4>Your bmi: {this.state.bmi}</h4>
                </div>

                <div>
                    {this.renderButton('BMI', 'success')}
                </div>
            </div>
        );
    }
}

export default BmiCalculator;
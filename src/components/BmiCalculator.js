import React from "react";

class BmiCalculator extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            weight: '',
            height: '',
        };
    }

    handleWeightField(event){
        this.setState({weight: event.target.value})
    }

    handleHeightField(event){
        this.setState({height: event.target.value})
    }

    render(){
        return(
            <div>
                <div className={'board-row'}>
                    <input type="text" onChange={this.handleWeightField.bind(this)}/>
                </div>

                <div className={'board-row'}>
                    <input type="text" onChange={this.handleHeightField.bind(this)}/>
                </div>

                <h2>Your weight: {this.state.weight}</h2>
                <h2>Your height: {this.state.height}</h2>
            </div>
        );
    }
}

export default BmiCalculator;
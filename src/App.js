import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import ButtonCalc from './ButtonCalc';

class FormCalculator extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            my_arr: '',
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(i){
        let tmp = this.state.my_arr;
        tmp += i;
        this.setState({my_arr: tmp});

        if(i === "clear") {
            let empty_string = "";
            this.setState({my_arr: empty_string});
        }

        if(i === "="){
            let result = eval(this.state.my_arr);
            console.log(result);
            this.setState({my_arr: result.toString()});
        }
    }

    renderButtonCalc(i) {
        return <ButtonCalc value={i} onClick={()=>this.handleClick(i)} />;
    }

    render(){
        return(
            <div>
                <div>
                    <div className="board-row">
                        <input readOnly type="text" className="input-field" value={this.state.my_arr} />
                    </div>
                    <div className="board-row">
                        {this.renderButtonCalc('clear')}
                        {this.renderButtonCalc('/')}
                    </div>
                    <div className="board-row">
                        {this.renderButtonCalc(7)}
                        {this.renderButtonCalc(8)}
                        {this.renderButtonCalc(9)}
                        {this.renderButtonCalc('*')}
                    </div>
                    <div className="board-row">
                        {this.renderButtonCalc(4)}
                        {this.renderButtonCalc(5)}
                        {this.renderButtonCalc(6)}
                        {this.renderButtonCalc('-')}
                    </div>
                    <div className="board-row">
                        {this.renderButtonCalc(1)}
                        {this.renderButtonCalc(2)}
                        {this.renderButtonCalc(3)}
                        {this.renderButtonCalc('+')}
                    </div>
                    <div className="board-row">
                        {this.renderButtonCalc('=')}
                        {this.renderButtonCalc(0)}
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <FormCalculator />,
    document.getElementById('root')
);


export default Form;

import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class ButtonCalc extends React.Component {
    render() {
        return (
            <button className={this.getTypeOfButton()} onClick={()=>this.props.onClick()}>
                {this.props.value}
            </button>
        );
    }

    getTypeOfButton(){
        if(this.props.value === "+" || this.props.value === "-" || this.props.value === "*" || this.props.value === "/")
            return "arithmetic-buttons";
        else if(this.props.value === "=")
            return "equal-button";
        else if(this.props.value === "clear")
            return "clear-button";
        else
            return "square";
    }
}

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
            /*
            if(this.state.my_arr.includes("+")){
                let args = this.state.my_arr.split("+");
                let tmp = parseFloat(args[0]) + parseFloat(args[1]);
                this.setState({my_arr: tmp.toString()});
            }
            else if(this.state.my_arr.includes("-")){
                let args = this.state.my_arr.split("-");
                let tmp = parseFloat(args[0]) - parseFloat(args[1]);
                this.setState({my_arr: tmp.toString()});
            }

            else if(this.state.my_arr.includes("*")){
                let args = this.state.my_arr.split("*");
                let tmp = parseFloat(args[0]) * parseFloat(args[1]);
                this.setState({my_arr: tmp.toString()});
            }

            else if(this.state.my_arr.includes("/")){
                let args = this.state.my_arr.split("/");
                let tmp = parseFloat(args[0]) / parseFloat(args[1]);
                this.setState({my_arr: tmp.toString()});
            }
            */
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
                        <input type="text" className="input-field" value={this.state.my_arr} />
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

export default FormCalculator;

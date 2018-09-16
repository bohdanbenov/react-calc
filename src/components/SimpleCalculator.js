import React from "react";
import Button from './Button';
import InputField from './InputField'

class SimpleCalculator extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            math_expression: '',
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(i){
        let tmp = this.state.math_expression;
        tmp += i;
        this.setState({math_expression: tmp});

        if(i === "clear") {
            this.setState({math_expression: ""});
        }

        if(i === "="){
            try {
                let result = eval(this.state.math_expression);
                this.setState({math_expression: result.toString()});
            } catch(e){
                alert("Your math expression are wrong!!!");
                this.setState({math_expression: ""});
            }
        }
    }

    renderButton(i, style) {
        return <Button value={i} type={style} onClick={()=>this.handleClick(i)} />;
    }

    renderInputField(i) {
        return <InputField value={i}/>;
    }

    render(){
        return(
            <div>
                <div>
                    <div className="board-row">
                        {this.renderInputField(this.state.math_expression)}
                    </div>
                    <div className="board-row">
                        {this.renderButton('clear', 'danger')}
                        {this.renderButton('/', 'primary')}
                    </div>
                    <div className="board-row">
                        {this.renderButton(7, 'basic')}
                        {this.renderButton(8, 'basic')}
                        {this.renderButton(9, 'basic')}
                        {this.renderButton('*', 'primary')}
                    </div>
                    <div className="board-row">
                        {this.renderButton(4, 'basic')}
                        {this.renderButton(5, 'basic')}
                        {this.renderButton(6, 'basic')}
                        {this.renderButton('-', 'primary')}
                    </div>
                    <div className="board-row">
                        {this.renderButton(1, 'basic')}
                        {this.renderButton(2, 'basic')}
                        {this.renderButton(3, 'basic')}
                        {this.renderButton('+', 'primary')}
                    </div>
                    <div className="board-row">
                        {this.renderButton('=', 'success')}
                        {this.renderButton(0, 'basic')}
                    </div>
                </div>
            </div>
        );
    }
}

export default SimpleCalculator;
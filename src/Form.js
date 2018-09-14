import React from "react";
import Button from './Button';

class Form extends React.Component{
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
            let empty_string = "";
            this.setState({math_expression: empty_string});
        }

        if(i === "="){
            try {
                let result = eval(this.state.math_expression);
                this.setState({math_expression: result.toString()});
            } catch(e){
                alert("Your math expression are wrong!!!");
                console.log('Something went wrong!!!!');
                this.setState({math_expression: ""});
            }
        }
    }

    renderButton(i) {
        return <Button value={i} onClick={()=>this.handleClick(i)} />;
    }

    render(){
        return(
            <div>
                <div>
                    <div className="board-row">
                        <input readOnly type="text" className="input-field" value={this.state.math_expression} />
                    </div>
                    <div className="board-row">
                        {this.renderButton('clear')}
                        {this.renderButton('/')}
                    </div>
                    <div className="board-row">
                        {this.renderButton(7)}
                        {this.renderButton(8)}
                        {this.renderButton(9)}
                        {this.renderButton('*')}
                    </div>
                    <div className="board-row">
                        {this.renderButton(4)}
                        {this.renderButton(5)}
                        {this.renderButton(6)}
                        {this.renderButton('-')}
                    </div>
                    <div className="board-row">
                        {this.renderButton(1)}
                        {this.renderButton(2)}
                        {this.renderButton(3)}
                        {this.renderButton('+')}
                    </div>
                    <div className="board-row">
                        {this.renderButton('=')}
                        {this.renderButton(0)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Form;
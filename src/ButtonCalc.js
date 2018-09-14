import React from "react";

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

export default ButtonCalc;
import './Button.css';
import React from "react";

class ButtonCalc extends React.Component {
    render() {
        return (
            <button className={this.getClass(this.props.type)} onClick={()=>this.props.onClick()}>
                {this.props.value}
            </button>
        );
    }

    getClass(type){
        switch (type) {
            case 'basic':
                return 'basic';
                break;
            case 'primary':
                return 'primary';
                break;
            case 'success':
                return 'success';
                break;
            case 'danger':
                return 'danger';
                break;
        }
    }

    // getTypeOfButton(){
    //     if(this.props.value === "+" || this.props.value === "-" || this.props.value === "*" || this.props.value === "/")
    //         return "arithmetic-buttons";
    //     else if(this.props.value === "=")
    //         return "equal-button";
    //     else if(this.props.value === "clear")
    //         return "clear-button";
    //     else
    //         return "square";
    // }
}

export default ButtonCalc;
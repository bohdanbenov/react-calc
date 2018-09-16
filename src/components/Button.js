import '../stylesheets/Button.css';
import React from "react";

class Button extends React.Component {
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
}

export default Button;
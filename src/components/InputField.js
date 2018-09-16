import '../stylesheets/InputField.css';
import React from "react";

class InputField extends React.Component {
    render() {
        return (
            <input readOnly type="text" className="input-field" value={this.props.value}/>
        );
    }
}

export default InputField;
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class SmallButtonCalc extends React.Component {
    render() {
        return (
            <button className="square" onClick={()=>this.props.onClick}>
                {this.props.value}
            </button>
        );
    }
}

class BigButtonCalc extends React.Component {
    render() {
        return (
            <button className="big-square">
                {this.props.value}
            </button>
        );
    }
}

class FormCalculator extends React.Component{
    constructor(props){
        super(props);
        // this.handleClick = this.handleClick.bind(this);
    }

    handleClick(i){
        alert('Hello from button: ' + i);
    }

    renderSmallButtonCalc(i) {
        return <SmallButtonCalc value={i} onClick={()=>this.handleClick} />;
    }

    renderBigButtonCalc(i) {
        return <BigButtonCalc value={i} />;
    }
    render(){
        return(
            <form onClick={this.handleClick}>
                <div>
                    <div className="board-row">
                        <input type="text" className="input-field" />
                    </div>
                    <div className="board-row">
                        {this.renderBigButtonCalc('clear')}
                        {this.renderSmallButtonCalc('/')}
                    </div>
                    <div className="board-row">
                        {this.renderSmallButtonCalc(7)}
                        {this.renderSmallButtonCalc(8)}
                        {this.renderSmallButtonCalc(9)}
                        {this.renderSmallButtonCalc('*')}
                    </div>
                    <div className="board-row">
                        {this.renderSmallButtonCalc(4)}
                        {this.renderSmallButtonCalc(5)}
                        {this.renderSmallButtonCalc(6)}
                        {this.renderSmallButtonCalc('-')}
                    </div>
                    <div className="board-row">
                        {this.renderSmallButtonCalc(1)}
                        {this.renderSmallButtonCalc(2)}
                        {this.renderSmallButtonCalc(3)}
                        {this.renderSmallButtonCalc('+')}
                    </div>
                    <div className="board-row">
                        <input type="submit" value="=" className="big-square" />
                        {this.renderSmallButtonCalc(0)}
                    </div>
                </div>
            </form>
        );
    }
}

ReactDOM.render(
    <FormCalculator />,
    document.getElementById('root')
);

export default FormCalculator;

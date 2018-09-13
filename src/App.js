import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class SmallButtonCalc extends React.Component {
    render() {
        return (
            <button className="square">
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
        this.state = {value: ''};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    renderSmallButtonCalc(i) {
        return <SmallButtonCalc value={i} />;
    }

    renderBigButtonCalc(i) {
        return <BigButtonCalc value={i} />;
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
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

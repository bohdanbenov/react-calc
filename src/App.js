import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class SmallButtonCalc extends React.Component {
    render() {
        return (
            <button className="square" onClick={()=>this.props.onClick()}>
                {this.props.value}
            </button>
        );
    }
}

class BigButtonCalc extends React.Component {
    render() {
        return (
            <button className="big-square" onClick={()=>this.props.onClick()}>
                {this.props.value}
            </button>
        );
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
        // my_arr.push(i);
        let tmp = this.state.my_arr;
        tmp += i;
        this.setState({my_arr: tmp});
    }

    handleBigClick(i){
        // alert('Now my array is: ' + my_arr.toString());
        if(i === "clear") {
            let empty_string = "";
            this.setState({my_arr: empty_string});
        }

        if(i === "="){
            
        }
    }

    renderSmallButtonCalc(i) {
        return <SmallButtonCalc value={i} onClick={()=>this.handleClick(i)} />;
    }

    renderBigButtonCalc(i) {
        return <BigButtonCalc value={i} onClick={()=>this.handleBigClick(i)} />;
    }
    render(){
        return(
            <div>
                <div>
                    <div className="board-row">
                        <input type="text" className="input-field" value={this.state.my_arr} />
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
            </div>
        );
    }
}

ReactDOM.render(
    <FormCalculator />,
    document.getElementById('root')
);

export default FormCalculator;

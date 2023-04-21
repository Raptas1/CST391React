import React from "react";

class FormInput extends React.Component {
    componentDidMount() {
        this.handleLoadData(this.props.onLoad);
    }
    state = {
        inputData: ""
    }

    handleChangeData = (e) => {
        this.setState({inputData : e.target.value });
        this.props.onChange(this.state.inputData)
    }

    handleLoadData = (data) => {
        this.setState({inputData: data});
    }
    render() {
        return (
            <div>
                <label htmlFor={this.props.id}>{this.props.text}</label>
                <input onChange={this.handleChangeData} onBlur={this.handleChangeData} onLoad={this.handleLoadData} value={this.state.inputData} type='text' className="form-control" id={this.props.id} placeholder={this.props.placeholder}/>
            </div>
        )
    }
}

export default FormInput;
import React from "react";
import FormInput from "./FormInput";
import axios from 'axios';
import {createBrowserHistory} from 'history';
const history = createBrowserHistory();

class AddCar extends React.Component {

    state = {
        make: "",
        model: "",
        year: -1,
        color: "",
        price: ""
    }

    updateMake = (d) => {
        this.setState({make: d})
    }
    updateModel = (d) => {
        this.setState({model: d})
    }
    updateYear = (d) => {
        this.setState({year: d})
    }
    updateColor = (d) => {
        this.setState({color: d})
    }
    updatePrice = (d) => {
        this.setState({price: d})
    }

    handleFormSubmit = async (e) => {
        e.preventDefault();
       await axios.post("http://localhost:3000/create", this.state);
       window.location.replace("/")
    }
    render() {
        return (
            <div className="container">
                <div className="col">
                    <form onSubmit={this.handleFormSubmit}>
                        <div className="form-group">
                            <h1>Add a new Car</h1>
                            <FormInput id="carMake" title="Make" placeholder="Enter Car Make" onChange={this.updateMake}/>
                            <FormInput id="carModel" title="Model" placeholder="Enter Car Model" onChange={this.updateModel}/>
                            <FormInput id="carYear" title="Year" placeholder="Enter Car Year" onChange={this.updateYear}/>
                            <FormInput id="carColor" title="Color" placeholder="Enter Car Color" onChange={this.updateColor}/>
                            <FormInput id="carPrice" title="Price" placeholder="Enter Car Price" onChange={this.updatePrice}/>
                        </div>
                        <button type="submit" className="btn btn-light">Cancel</button>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default AddCar;
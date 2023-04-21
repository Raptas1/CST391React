import React from "react";
import FormInput from "./FormInput";
import axios from 'axios';

class EditCar extends React.Component {
    state = {
        id: this.props.car.id,
        make: this.props.car.make,
        model: this.props.car.model,
        year: this.props.car.year,
        color: this.props.car.color,
        price: this.props.car.price
    }

    updateMake = (d) => {
        console.log(d);
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
        console.log(this.state);
        e.preventDefault();
       await axios.put("http://localhost:3000/edit", this.state).then((result) => {
        console.log(result);
       });
       window.location.replace("/")
    }
    render() {
        return (
            <div className="container">
                <div className="col">
                    <form onSubmit={this.handleFormSubmit}>
                        <div className="form-group">
                            <h1>Edit a Car</h1>
                            <FormInput id="carMake" title="Make" placeholder="Enter Car Make" onLoad={this.state.make} onChange={this.updateMake}/>
                            <FormInput id="carModel" title="Model" placeholder="Enter Car Model" onLoad={this.state.model} onChange={this.updateModel}/>
                            <FormInput id="carYear" title="Year" placeholder="Enter Car Year" onLoad={this.state.year} onChange={this.updateYear}/>
                            <FormInput id="carColor" title="Color" placeholder="Enter Car Color" onLoad={this.state.color} onChange={this.updateColor}/>
                            <FormInput id="carPrice" title="Price" placeholder="Enter Car Price" onLoad={this.state.price} onChange={this.updatePrice}/>
                        </div>
                        <button type="submit" className="btn btn-light">Cancel</button>
                        <button type="submit" className="btn btn-warning">Edit</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default EditCar;
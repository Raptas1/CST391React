import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import axios from "axios";
import Navbar from './Navbar'
import AddCar from "./AddCar";
import CarList from "./CarList";
import EditCar from "./EditCar";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();
class App extends React.Component {

    componentDidMount() {
        this.loadCars();
    }

    state = {
        cars: [],
        selectedListing: -1
    }

    loadCars = async () => {
        const response = await axios.get("http://localhost:3000/getCars");
        this.setState({cars: response.data});
    }
    handleDelete = async (id) => {
        await axios.delete("http://localhost:3000/delete/" + id);
        this.loadCars();
    }

    handleEdit = (id) => {
        let indexnumber = -1;
        for(let i = 0; i < this.state.cars.length; i++) {
            if(this.state.cars[i].id === id) {
                indexnumber = i;
            }
        }
        history.push("/edit/" + id)
        this.setState({selectedListing: indexnumber});
        this.loadCars();
    }
    render() {
        return (
            <div>
                    <BrowserRouter>
                        <Navbar/>
                        <Routes>
                            <Route exact path="/" element =  {
                                    <div>
                                        <CarList cars={this.state.cars} onDelete={this.handleDelete} onEdit={this.handleEdit}/>
                                    </div>
                            }/>
                            <Route path="/new" Component={AddCar}/>

                            <Route exact path="/edit/:id" element = {
                                <div>
                                    <EditCar car={this.state.cars[this.state.selectedListing]}/>
                                </div>
                            }/>
                        </Routes> 
                    </BrowserRouter>
            </div>
        )
    }
}

export default App;
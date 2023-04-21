import React from "react";
import TableRow from "./TableRow";
class CarList extends React.Component {

    handleDelete = (id) => {
        this.props.onDelete(id);
    }

    handleEdit = (id) => {
        this.props.onEdit(id);
    }

    render() {
        const cars = this.props.cars.map(
            car => {
                return (
                    <TableRow key={car.id}
                    id={car.id} 
                    make={car.make}
                    model={car.model}
                    year={car.year}
                    color={car.color}
                    price={car.price}
                    onDelete={this.handleDelete}
                    onEdit={this.handleEdit}/>
                )

            }
        )
        return (
            <div className="container">
                <table className="table table-striped text-center">
                    <thead>
                        <tr>
                        <th scope="col">Year</th>
                        <th scope="col">Make</th>
                        <th scope="col">Model</th>
                        <th scope="col">Color</th>
                        <th scope="col">Price</th>
                        <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cars}
                    </tbody>
                </table>
            </div>
        )
    }

}

export default CarList;
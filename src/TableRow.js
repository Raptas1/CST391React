import React from "react"

class TableRow extends React.Component {


    handleCarDelete = (event) => {
        this.props.onDelete(this.props.id);
    }

    handleCarEdit = () => {
        this.props.onEdit(this.props.id);
    }
    render() {
        return (
            <tr>
                <td>{this.props.year}</td>
                <td>{this.props.make}</td>
                <td>{this.props.model}</td>
                <td>{this.props.color}</td>
                <td>${this.props.price}</td>
                <td>
                    <a href="#" onClick={this.handleCarEdit} className="btn btn-success">Edit</a>
                    <a href="#" onClick={this.handleCarDelete} className="btn btn-danger">Delete</a>
                </td>
            </tr>
        )
    }
}

export default TableRow;

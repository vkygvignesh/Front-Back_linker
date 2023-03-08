import React, { Component } from "react";
import axios from "axios";
import "./Neww.css";
import "./tbl.css";

class Formm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:"",
            Brand: "",
            Type: "",
            Color: "",
            Mileage: "",
            fuelData: [], // Array to store fuel data fetched from the server
        };
    }

    componentDidMount() {
        // Fetch fuel data from server when component mounts
        axios.get("http://localhost:2021/api/cars/show").then((response) => {
            this.setState({ fuelData: response.data });
        });
    }
    handleidChange = (event) => {
        this.setState({ id: event.target.value });
    };
    handleBrandChange = (event) => {
        this.setState({ Brand: event.target.value });
    };
    handleType = (event) => {
        this.setState({ Type: event.target.value });
    };
    handleColor = (event) => {
        this.setState({ Color: event.target.value });
    };
    handleMileage = (event) => {
        this.setState({ Mileage: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            id:this.state.id,
            Brand: this.state.Brand,
            Type: this.state.Type,
            Color: this.state.Color,
            Mileage: this.state.Mileage,
        };
        console.log(data);
        axios.post("http://localhost:2021/api/cars/add", data).then((response) => {
            // Add new fuel data to the state and clear the form
            this.setState({
                fuelData: [...this.state.fuelData, response.data],
                id:"",
                Brand: "",
                Type: "",
                Color: "",
                Mileage: "",
            });
        });
    };

    handleUpdate = (id, data) => {
        // Send PUT request to update fuel data with the given ID
        axios.put(`http://localhost:2021/api/cars/update/${id}`, data).then((response) => {
            // Update the state to reflect the updated fuel data
            const updatedFuelData = this.state.fuelData.map((cars) => {
                if (cars.id === response.data.id) {
                    return response.data;
                } else {
                    return cars;
                }
            });
            this.setState({ fuelData: updatedFuelData });
        });
    };

    handleDelete = (id) => {
        // Send DELETE request to remove fuel data with the given ID
        axios.delete(`http://localhost:2021/api/cars/delete/${id}`).then((response) => {
            // Update the state to remove the deleted fuel data
            const updatedFuelData = this.state.fuelData.filter(
                (cars) => cars.id !== id
            );
            this.setState({ fuelData: updatedFuelData });
        });
    };

    handleEdit = (data) => {
        this.setState({
            id: data.id,
            Brand: data.Brand,
            Type: data.Type,
            Color: data.Color,
            Mileage: data.Mileage,
            isEdit: true,
        });
        console.log(this.state.id);
    };

    handleInputChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value,
        });
    };


    handleUpdate = (event) => {
        event.preventDefault();
        const data = {
            id: this.state.id,
            Brand: this.state.Brand,
            Type: this.state.Type,
            Color: this.state.Color,
            Mileage: this.state.Mileage,
        };
        const id = this.state.id;
        axios
            .put(`http://localhost:2021/api/cars/update/${id}`, data)
            .then((res) => {
                console.log(res.data);
                this.setState({
                    id:"",
                    Brand: "",
                    Type: "",
                    Color: "",
                    Mileage: "",
                });
                // this.props.history.push("/");
            })
            .catch((err) => console.log(err));
    };






    render() {
        return (

            <div>
                <form onSubmit={this.handleSubmit} className="fuel">
                    <label className="login-label">id</label>
                    <input
                        className="fuel"
                        type="number"
                        value={this.state.id}
                        onChange={this.handleidChange}
                    />
                    <br /><br />
                    <label className="login-label">Brand</label>
                    <input
                        className="fuel"
                        type="text"
                        value={this.state.Brand}
                        onChange={this.handleBrand}
                    />
                    <br /><br />

                    <label className="login-label">Type</label>
                    <input
                        className="fuel"
                        type="text"
                        value={this.state.Type}
                        onChange={this.handleType}
                    />
                    <br /><br />

                    <label className="login-label">Color</label>
                    <input
                        className="fuel"
                        type="text"
                        value={this.state.Color}
                        onChange={this.handleColor}
                    />
                    <br /><br />

                    <label className="login-label">Mileage</label>
                    <input
                        className="fuel"
                        type="number"
                        value={this.state.Mileage}
                        onChange={this.handleMileage}
                    />
                    <br /><br />

                    <button className="submitt" type="submit" id="asd">
                        Submit
                    </button>
                    <br /><br />
                </form>

                <table className="output">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Brand</th>
                            <th>Type</th>
                            <th>Color</th>
                            <th>Mileage</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.fuelData.map((data) => (
                            <tr key={data.id}>
                                <td>{data.id}</td>
                                <td>{data.brand}</td>
                                <td>{data.type}</td>
                                <td>{data.color}</td>
                                <td>{data.mileage}</td>
                                <td>
                                    <button onClick={() => this.handleEdit(data)}>Edit</button>
                                </td>

                                <td>
                                    <button
                                        onClick={() => this.handleDelete(data.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <br></br><br></br><br></br><br></br>
                <form onSubmit={this.handleUpdate}>
                    <input type="hidden" name="id" value={this.state.id} />
                    <label>id:</label>
                    <input
                        type="number"
                        name="id"
                        value={this.state.id}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <label>Brand:</label>
                    <input
                        type="text"
                        name="Brand"
                        value={this.state.Brand}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <label>Type:</label>
                    <input
                        type="text"
                        name="Type"
                        value={this.state.Type}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <label>Color</label>
                    <input
                        type="text"
                        name="Color"
                        value={this.state.Color}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <label>Mileage:</label>
                    <input
                        type="number"
                        name="Mileage"
                        value={this.state.Mileage}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <button type="submit">Save</button>
                    <button onClick={this.handleCancel}>Cancel</button>
                </form>        </div>

        );
    }
}
export default Formm;
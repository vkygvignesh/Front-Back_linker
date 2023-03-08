// import React, { Component } from "react";
// import axios from "axios";

// class vel extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             id: "",
//             brand: "",
//             type: "",
//             mileage: "",
//             colour: "",
//             caarData:[], // Array to store fuel data fetched from the server
//         };
//     }

//     componentDidMount(){
//         axios.get('http://localhost:8080/api/cars/')
//         .then(response =>{
//             this.setState({
//                 data:response.data
                
//             });
//             console.log(response)
//         })
//         .catch(error =>{
//             console.log(error);
//         });
//     }

//     handleidChange = (event) => {
//         this.setState({ id: event.target.value });
//     };
//     handlebrandType = (event) => {
//         this.setState({ brand: event.target.value });
//     };
//     handletypeConsumption = (event) => {
//         this.setState({ type: event.target.value });
//     };
//     handlemileagePrice = (event) => {
//         this.setState({ mileage: event.target.value });
//     };
//     handlecolourAmount = (event) => {
//         this.setState({ colour: event.target.value });
//     };

//     handleSubmit = (event) => {
//         event.preventDefault();
//         const data = {
//             id: this.state.id,
//             brand: this.state.brand ,
//             type: this.state.type,
//             mileage: this.state.mileage,
//             colour: this.state.colour,
//         };
//         console.log(data);
//         axios.post("http://localhost:8080/cars/", data).then((response) => {
//             // Add new fuel data to the state and clear the form
//             this.setState({
//                 id: "",
//                 brand: "",
//                 type: "",
//                 mileage: "",
//                 colour: "",
//             });
//         });
//     };

//     handleUpdate = (id, data) => {
//         // Send PUT request to update fuel data with the given ID
//         axios.put(`http://localhost:8080/cars/${id}`, data).then((response) => {
//             // Update the state to reflect the updated fuel data
//             const updatedcaarData = this.state.caarData.map((caar) => {
//                 if (caar.id === response.data.id) {
//                     return response.data;
//                 } else {
//                     return caar;
//                 }
//             });
//             this.setState({ mileage: updatedcaarData });
//         });
//     };

//     handleDelete = (id) => {
//         // Send DELETE request to remove fuel data with the given ID
//         axios.delete(`http://localhost:8080/cars/${id}`).then((response) => {
//             // Update the state to remove the deleted fuel data
//             const updatedcaarData = this.state.caarData.filter(
//                 (caar) => caar.id !== id
//             );
//             this.setState({ caarData: updatedcaarData });
//         });
//     };

//     handleEdit = (data) => { 
//         this.setState({
//             id: data.id,
//             brand:data.brand,
//             type: data.type,
//             mileage: data.mileage,
//             colour: data.colour,
//             isEdit: true,
//         });
//         console.log(this.state.id);
//     };

//     handleInputChange = (event) => {
//         const target = event.target;
//         const name = target.name;
//         const value = target.value;
//         this.setState({
//             [name]: value,
//         });
//     };


//     handleUpdate = (event) => {
//         event.preventDefault();
//         const data = {
//             brand: this.state.brand,
//             type: this.state.type,
//             mileage: this.state.mileage,
//             colour: this.state.colour,
//         };
//         const id = this.state.id;
//         axios
//             .put(`http://localhost:8080/cars/${id}`, data)
//             .then((res) => {    
//                 console.log(res.data);
//                 this.setState({
//                     brand: "",
//                     type: "",
//                     mileage: "",
//                     colour: "",
//                 });
//                 this.props.history.push("/");
//             })
//             .catch((err) => console.log(err));
//     };


//  render() {
//         return (

//             <div>
//                 <form onSubmit={this.handleSubmit} className="fuel">
//                     <label className="login-label">brand</label>
//                     <input
//                         className="fuel"
//                         type="brand"
//                         value={this.setState.brand}
//                         onChange={this.handlebrandType}
//                     />
//                     <br /><br />
//                     <label className="login-label">type</label>
//                     <input
//                         className="fuel"
//                         type="type"
//                         value={this.state.type}
//                         onChange={this.handletypeConsumption}
//                     />
//                     <br /><br />

//                     <label className="login-label">mileage</label>
//                     <input
//                         className="fuel"
//                         type="mileage"
//                         value={this.state.mileage}
//                         onChange={this.handlemileagePrice}
//                     />
//                     <br /><br />

//                     <label className="login-label">colour</label>
//                     <input
//                         className="fuel"
//                         type="colour"
//                         value={this.state.colour}
//                         onChange={this.handlecolourAmount   }
//                     />
//                     <br /><br />
//                     <br /><br />

//                     <button className="submitt" type="submit" id="asd">
//                         Submit
//                     </button>
//                     <br /><br />
//                 </form>

//                 <table className="output">
//                     <thead>
//                         <tr>
//                             <th>id</th>
//                             <th>brand</th>
//                             <th>type</th>
//                             <th>mileage</th>
//                             <th>colour</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {this.state.caarData.map((data) => (
//                             <tr key={data.id}>
//                                 <td>{data.brand}</td>
//                                 <td>{data.type}</td>
//                                 <td>{data.mileage}</td>
//                                 <td>{data.colour}</td>
//                                 <td>
//                                     <button onClick={() => this.handleEdit(data)}>Edit</button>
//                                 </td>

//                                 <td>
//                                     <button
//                                         onClick={() => this.handleDelete(data.id)}
//                                     >
//                                         Delete
//                                     </button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//                 <br></br><br></br><br></br><br></br>
//                 <form onSubmit={this.handleUpdate}>
//                     <input type="hidden" name="id" value={this.state.id} />
//                     <label>brand:</label>
//                     <input
//                         type="text"
//                         name="brand"
//                         value={this.state.brand}
//                         onChange={this.handleInputChange}
//                     />
//                     <br />
//                     <label>type:</label>
//                     <input
//                         type="text"
//                         name="type"
//                         value={this.state.type}
//                         onChange={this.handleInputChange}
//                     />
//                     <br />
//                     <label>mileage:</label>
//                     <input
//                         type="number"
//                         name="mileage"
//                         value={this.state.mileage}
//                         onChange={this.handleInputChange}
//                     />
//                     <br />
//                     <label>colour:</label>
//                     <input
//                         type="number"
//                         name="colour"
//                         value={this.state.colour}
//                         onChange={this.handleInputChange}
//                     />
//                     <br />
//                     <br />
//                     <button type="submit">Save</button>
//                     <button onClick={this.handleCancel}>Cancel</button>
//                 </form>        </div>

//         );
//     }
// }
// export default vel;


import React, { Component } from "react";
import axios from "axios";
//import "./Table1.css";

class Nennw extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Brand: "",
            type: "",
            mileage: "",
            colour: "",
            fuelAmount: "",
            dateee: "",
            fuelData: [], // Array to store fuel data fetched from the server
        };
    }

    componentDidMount() {
        // Fetch fuel data from server when component mounts
        axios.get("http://localhost:8080/cars").then((response) => {
            this.setState({ fuelData: response.data });
        });
    }

    handleBrandChange = (event) => {
        this.setState({ Brand: event.target.value });
    };
    handletype = (event) => {
        this.setState({ type: event.target.value });
    };
    handlemileage = (event) => {
        this.setState({ mileage: event.target.value });
    };
    handlecolour = (event) => {
        this.setState({ colour: event.target.value });
    };
    handlefuelAmount = (event) => {
        this.setState({ fuelAmount: event.target.value });
    };
    handledateee = (event) => {
        this.setState({ dateee: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            Brand: this.state.Brand,
            type: this.state.type,
            mileage: this.state.mileage,
            colour: this.state.colour,
            fuelAmount: this.state.fuelAmount,
            dateee: this.state.dateee,
        };
        console.log(data);
        axios.post("http://localhost:8080/cars", data).then((response) => {
            // Add new fuel data to the state and clear the form
            this.setState({
                fuelData: [...this.state.fuelData, response.data],
                Brand: "",
                type: "",
                mileage: "",
                colour: "",
                fuelAmount: "",
                dateee: "",
            });
        });
    };

    handleUpdate = (id, data) => {
        // Send PUT request to update fuel data with the given ID
        axios.put(`http://localhost:8080/cars/${id}`, data).then((response) => {
            // Update the state to reflect the updated fuel data
            const updatedFuelData = this.state.fuelData.map((fuel) => {
                if (fuel.id === response.data.id) {
                    return response.data;
                } else {
                    return fuel;
                }
            });
            this.setState({ fuelData: updatedFuelData });
        });
    };

    handleDelete = (id) => {
        // Send DELETE request to remove fuel data with the given ID
        axios.delete(`http://localhost:8080/cars/${id}`).then((response) => {
            // Update the state to remove the deleted fuel data
            const updatedFuelData = this.state.fuelData.filter(
                (fuel) => fuel.id !== id
            );
            this.setState({ fuelData: updatedFuelData });
        });
    };

    handleEdit = (data) => {
        this.setState({
            id: data.id,
            Brand: data.Brand,
            type: data.type,
            mileage: data.mileage,
            colour: data.colour,
            fuelAmount: data.fuelAmount,
            dateee: data.dateee,
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
            Brand: this.state.Brand,
            type: this.state.type,
            mileage: this.state.mileage,
            colour: this.state.colour,
        };
        const id = this.state.id;
        axios
            .put(`http://localhost:8080/cars/${id}`, data)
            .then((res) => {
                console.log(res.data);
                this.setState({
                    Brand: "",
                    type: "",
                    mileage: "",
                    colour: "",
                });
                this.props.history.push("/");
            })
            .catch((err) => console.log(err));
    };






    render() {
        return (

            <div>
                <form onSubmit={this.handleSubmit} className="fuel">
                    <label className="login-label">Vehicle Name</label>
                    <input
                        className="fuel"
                        type="text"
                        value={this.state.Brand}
                        onChange={this.handleBrandChange}
                    />
                    <br /><br />
                    <label className="login-label">Fuel Type</label>
                    <input
                        className="fuel"
                        type="text"
                        value={this.state.type}
                        onChange={this.handletype}
                    />
                    <br /><br />

                    <label className="login-label">Fuel Consumption</label>
                    <input
                        className="fuel"
                        type="number"
                        value={this.state.mileage}
                        onChange={this.handlemileage}
                    />
                    <br /><br />

                    <label className="login-label">Fuel Price</label>
                    <input
                        className="fuel"
                        type="number"
                        value={this.state.colour}
                        onChange={this.handlecolour}
                    />
                    <br /><br />

                    <label className="login-label">Fuel Amount</label>
                    <input
                        className="fuel"
                        type="number"
                        value={this.state.fuelAmount}
                        onChange={this.handlefuelAmount}
                    />
                    <br /><br />

                    <label className="login-label">Datee</label>
                    <input
                        className="fuel"
                        type="date"
                        value={this.state.dateee}
                        onChange={this.handledateee}
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
                            <th>Vehicle Name</th>
                            <th>Fuel Type</th>
                            <th>Fuel Consumption</th>
                            <th>Fuel Price</th>
                            <th>Fuel Amount</th>
                            <th>Datee</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.fuelData.map((data) => (
                            <tr key={data.id}>
                                <td>{data.Brand}</td>
                                <td>{data.type}</td>
                                <td>{data.mileage}</td>
                                <td>{data.colour}</td>
                                <td>{data.fuelAmount}</td>
                                <td>{data.dateee}</td>
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
                    <label>Vehicle Name:</label>
                    <input
                        type="text"
                        name="Brand"
                        value={this.state.Brand}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <label>Fuel Type:</label>
                    <input
                        type="text"
                        name="type"
                        value={this.state.type}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <label>Fuel Consumption:</label>
                    <input
                        type="number"
                        name="mileage"
                        value={this.state.mileage}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <label>Fuel Price:</label>
                    <input
                        type="number"
                        name="colour"
                        value={this.state.colour}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <label>Fuel Amount:</label>
                    <input
                        type="number"
                        name="fuelAmount"
                        value={this.state.fuelAmount}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <label>Date:</label>
                    <input
                        type="date"
                        name="dateee"
                        value={this.state.dateee}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <button type="submit">Save</button>
                    <button onClick={this.handleCancel}>Cancel</button>
                </form>        </div>

        );
    }
}
export default Nennw;
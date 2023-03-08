import axios from "axios";
import React,{Component} from "react";

class Table1 extends Component{
    state = {
        data:[]
    }

    componentDidMount(){
        axios.get('http://localhost:8080/api/cars/')
        .then(response =>{
            this.setState({
                data:response.data
                
            });
            console.log(response)
        })
        .catch(error =>{
            console.log(error);
        });
    }

    render(){
        return(
            <table border={1} bgcolor={"white"}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Brand</th>
                        <th>Type</th>
                        <th>Mileage</th>
                        <th>Color</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.data.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.brand}</td>
                            <td>{user.type}</td>
                            <td>{user.mileage}</td>
                            <td>{user.colour}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}

export default Table1;
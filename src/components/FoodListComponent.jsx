import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import FoodService from '../services/FoodService';
import '../App.css';

class FoodListComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            foods: []
        }
        this.createFood = this.createFood.bind(this);
    }

    componentDidMount() {
        FoodService.getFoods().then((res) => {
            this.setState({foods: res.data});
        });
    }

    createFood() {
        this.props.history.push('/create-food');
    }


    render() {
        return (
            <div>
                <h2 className="text-center" style={{paddingTop: 70}}>Food List</h2>
                <div className="row" style={{width: 100}}>
                    <button className="btn btn-primary" onClick={this.createFood}>Add Food</button>
                </div>

                <div className="row">

                    <table className="table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th>Food Name</th>
                                <th>Protein</th>
                                <th>Fats</th>
                                <th>Carbs</th>
                                <th>Size</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.foods.map(
                                    food =>
                                        <tr key={food.id}>
                                            <td> {food.foodName} </td>
                                            <td> {food.protein} </td>
                                            <td> {food.fats} </td>
                                            <td> {food.carbs} </td>
                                            <td> {food.size} </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>

                </div>

            </div>
        )
    }
}

export default FoodListComponent
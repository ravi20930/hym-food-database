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
        this.addFood = this.addFood.bind(this);
        this.editFood = this.editFood.bind(this);
        this.deleteFood = this.deleteFood.bind(this);
    }

    editFood(id) {
        this.props.history.push(`/create-food/${id}`);
    }

    deleteFood(id) {
        if (window.confirm('Are you sure you want to delete?')) {
            FoodService.deleteFood(id).then(res => {
                this.setState({ foods: this.state.foods.filter(food => food.id !== id) });
            });
        } else {
            return;
        }


    }

    componentDidMount() {
        FoodService.getFoods().then((res) => {
            this.setState({ foods: res.data });
        });
    }

    addFood() {
        this.props.history.push('/create-food/add')
    }

    setSearchValue() {
      }

    render() {
        return (
            <div>
                <div style={{ paddingTop: 90, paddingBottom: 20, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <h2>Food Database</h2>

                    <div class="input-group rounded" style={{ maxWidth: 400 }}>
                        <input id='foodSearchInput' type="search" class="form-control rounded" placeholder="Search for any Food Item" aria-label="Search"
                            aria-describedby="search-addon" onkeyup={this.setSearchValue} />
                    </div>

                    <div className='float-left'>
                        <button className="btn btn-primary" onClick={this.addFood}><i class="bi bi-plus-circle"></i>&nbsp;Add Food</button>
                    </div>
                </div>

                <div className="row" style={{ width: 100 }}>
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
                        <tbody id='foodTable'>
                            {
                                this.state.foods.map(
                                    food =>
                                        <tr key={food.id}>
                                            <td> {food.foodName} </td>
                                            <td> {food.protein} </td>
                                            <td> {food.fats} </td>
                                            <td> {food.carbs} </td>
                                            <td> {food.size} </td>
                                            <td>
                                                <button onClick={() => this.editFood(food.id)} className='btn btn-primary'><i class="bi bi-pencil-square"></i></button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.deleteFood(food.id)} className='btn btn-danger'><i class="bi bi-trash"></i></button>
                                            </td>
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
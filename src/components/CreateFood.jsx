import React, { Component } from 'react';
import FoodService from '../services/FoodService';

class CreateFood extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            foodName: '',
            protein: '',
            fats: '',
            carbs: '',
            size: ''
        }

        this.changeFoodNameHandler = this.changeFoodNameHandler.bind(this);
        this.changeCarbsHandler = this.changeCarbsHandler.bind(this);
        this.changeProteinHandler = this.changeProteinHandler.bind(this);
        this.changeFatsHandler = this.changeFatsHandler.bind(this);
        this.changeSizeHandler = this.changeSizeHandler.bind(this);

        this.saveOrUpdateFood = this.saveOrUpdateFood.bind(this);
    }

    componentDidMount() {
        if (this.state.id === 'add') {
            return
        } else {
            FoodService.getFoodById(this.state.id).then((res) => {
                let food = res.data;
                this.setState({foodName: food.foodName, protein: food.protein, fats: food.fats, carbs: food.carbs, size: food.size});
            });
        }
    }

    saveOrUpdateFood = (e) => {
        e.preventDefault();
        let food = {
            foodName: this.state.foodName, protein: this.state.protein, fats: this.state.fats
            , carbs: this.state.carbs, size: this.state.size
        }
        console.log('food =>' + JSON.stringify(food));

        if (this.state.id === 'add') {
            FoodService.createFood(food).then(res => {
                this.props.history.push('/foods')
            });
        } else {
            FoodService.updateFood(food, this.state.id).then( res => {
                this.props.history.push('/foods');
            });
        }

        
    }

    cancel() {
        this.props.history.push('/foods')
    }

    changeFoodNameHandler = (event) => {
        this.setState({ foodName: event.target.value });
    }

    changeProteinHandler = (event) => {
        this.setState({ protein: event.target.value });
    }

    changeFatsHandler = (event) => {
        this.setState({ fats: event.target.value });
    }

    changeCarbsHandler = (event) => {
        this.setState({ carbs: event.target.value });
    }

    changeSizeHandler = (event) => {
        this.setState({ size: event.target.value });
    }

    getFormTitle() {
        if (this.state.id === 'add') {
            return <h3 className='text-center'>Add Food</h3>
        } else {
            return <h3 className='text-center'>Update Food</h3>
        }
    }

    render() {
        return (
            <div className='container' style={{ marginTop: 100, marginBottom: 100 }}>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3'>
                        {this.getFormTitle()}
                        <div className='card-body'>
                            <form>
                                <div className='form-group'>
                                    <label>Food Name</label>
                                    <input placeholder='Food Name' name='foodName' className='form-control'
                                        value={this.state.foodName} onChange={this.changeFoodNameHandler}>
                                    </input>
                                </div>
                                <div className='form-group'>
                                    <label>Protein</label>
                                    <input placeholder='Protein' name='protein' className='form-control'
                                        value={this.state.protein} onChange={this.changeProteinHandler}>
                                    </input>
                                </div>
                                <div className='form-group'>
                                    <label>Fats</label>
                                    <input placeholder='Fats' name='fats' className='form-control'
                                        value={this.state.fats} onChange={this.changeFatsHandler}>
                                    </input>
                                </div>
                                <div className='form-group'>
                                    <label>Carbs</label>
                                    <input placeholder='Carbs' name='carbs' className='form-control'
                                        value={this.state.carbs} onChange={this.changeCarbsHandler}>
                                    </input>
                                </div>
                                <div className='form-group'>
                                    <label>Size</label>
                                    <input placeholder='Size' name='size' className='form-control'
                                        value={this.state.size} onChange={this.changeSizeHandler}>
                                    </input>
                                </div>
                                <button className='btn btn-success' onClick={this.saveOrUpdateFood} style={{ margin: "10px" }}>Save</button>
                                <button className='btn btn-danger' onClick={this.cancel.bind(this)} style={{ margin: "10px" }}>Cancel</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateFood;
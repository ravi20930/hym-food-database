import axios from 'axios'

const FOODS_API_BASE_URL = "http://localhost:8080/api/v1/foods";

class FoodService {

    getFoods() {
        return axios.get(FOODS_API_BASE_URL);
    }

    createFood(food) {
        return axios.post(FOODS_API_BASE_URL, food);
    }

    getFoodById(foodId) {
        return axios.get(FOODS_API_BASE_URL + '/' + foodId);
    }

    updateFood(food, foodId) {
        return axios.put(FOODS_API_BASE_URL+'/'+foodId, food);
    }

    deleteFood(foodId) {
        return axios.delete(FOODS_API_BASE_URL+'/'+foodId);
    }

}
export default new FoodService()
import Api from "../config/api"
const productService = {
    getProduct() {
        return Api.get('/product')
    }
}

export default productService
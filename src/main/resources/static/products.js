var products = [];

function findProduct(productId) {
    return products[findProductKey(productId)];
}


function findProductKey(productId) {
    for (var key = 0; key < products.length; key++) {
        if (products[key].id == productId) {
            return key;
        }
    }
}

var productService = {
    findAll(fn) {
        axios
            .get('/api/v1/products')
            .then(response => fn(response))
            .catch(error => console.log(error))
    },

    findById(id, fn) {
        axios
            .get('/api/v1/products/' + id)
            .then(response => fn(response))
            .catch(error => console.log(error))
    },

    create(product, fn) {
        axios
            .post('/api/v1/products', product)
            .then(response => fn(response))
            .catch(error => console.log(error))
    },

    update(id, product, fn) {
        axios
            .put('/api/v1/products/' + id, product)
            .then(response => fn(response))
            .catch(error => console.log(error))
    },

    deleteProduct(id, fn) {
        axios
            .delete('/api/v1/products/' + id)
            .then(response => fn(response))
            .catch(error => console.log(error))
    }
};

var List = Vue.extend({
    template: '#product-list',
    data: function () {
        return {products: [], searchKey: ''};
    },
    computed: {
        filteredProducts() {
            return this.products.filter((product) => {
                return product.name.indexOf(this.searchKey) > -1
                    || product.description.indexOf(this.searchKey) > -1
                    || product.price.toString().indexOf(this.searchKey) > -1
            })
        }
    },
    mounted() {
        productService.findAll(r => {
            this.products = r.data;
            products = r.data
        })
    }
});

var Product = Vue.extend({
    template: '#product',
    data: function () {
        return {product: findProduct(this.$route.params.product_id)};
    }
});
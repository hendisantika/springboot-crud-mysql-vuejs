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
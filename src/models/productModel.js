class ProductModel {
    constructor(name, price, description) {
        this.name = name;
        this.price = price;
        this.description = description;
    }

    static validate(product) {
        const errors = [];
        if (!product.name || typeof product.name !== 'string' || product.name.trim() === '') {
            errors.push('Product name is required and must be a non-empty string.');
        }
        if (typeof product.price !== 'number' || product.price <= 0) {
            errors.push('Product price is required and must be a positive number.');
        }
        if (product.description && typeof product.description !== 'string') {
            errors.push('Product description must be a string if provided.');
        }
        return errors.length > 0 ? errors : null;
    }
}

module.exports = ProductModel;
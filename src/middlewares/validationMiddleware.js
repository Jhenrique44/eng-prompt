const { body, validationResult } = require('express-validator');

const validateProductCreation = [
    body('name').isString().notEmpty().withMessage('Name is required and must be a string.'),
    body('price').isNumeric().withMessage('Price is required and must be a number.'),
    body('description').optional().isString().withMessage('Description must be a string.'),
    body('category').optional().isString().withMessage('Category must be a string.'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

const validateProductEditing = [
    body('name').optional().isString().withMessage('Name must be a string.'),
    body('price').optional().isNumeric().withMessage('Price must be a number.'),
    body('description').optional().isString().withMessage('Description must be a string.'),
    body('category').optional().isString().withMessage('Category must be a string.'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

module.exports = {
    validateProductCreation,
    validateProductEditing
};
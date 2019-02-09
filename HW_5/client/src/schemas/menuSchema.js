import { schema } from 'normalizr';

const categorySchema = new schema.Entity('categories');

const menuItemsSchema = new schema.Entity('menuItems', {
    category: categorySchema,
});

export default menuItemsSchema;
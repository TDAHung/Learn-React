import { v4 as uuidv4 } from 'uuid'
import { faker } from '@faker-js/faker'

const generateProducts = numberOfItems => {
    return Array.from({ length: numberOfItems }, () => {
        return {
            id: uuidv4(),
            name: faker.commerce.productName(),
            price: faker.commerce.price(),
            adjective: faker.commerce.productAdjective(),
            description: faker.commerce.productDescription(),
            material: faker.commerce.productMaterial(),
            imgURL: faker.image.imageUrl()
        };
    });
}

export default generateProducts;
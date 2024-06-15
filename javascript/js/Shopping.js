const groceries = [
    { item: 'Apples', quantity: 4 },
    { item: 'Bananas', quantity: 6 },
    { item: 'Carrots', quantity: 5 },
    { item: 'Orange', quantity: 3 }
];

const shoppingList = (groceries) => {
    
    const formattedItems = groceries.map(({ item, quantity }) => {
        return `${item}: ${quantity}`;
    });


    return formattedItems.join('\n');
}

const result = shoppingList(groceries);

console.log(result);

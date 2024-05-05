breakfastOptions = ['Granola', 'Yogurt', 'a Breakfast Burrito', 'Banana Bread', 'Pancakes', 'Waffles', 'Cereal'];
lunchOptions = ['a Sandwich', 'a Salad', 'Chicken Salad', 'Tacos', 'Chicken and Rice', 'Fried Chicken', 'Tuna'];
dinnerOptions = ['Mac and Cheese', 'Pasta', 'Spagehtti', 'Shrimp', 'Asian Noodles', 'Steak', 'Pizza'];

const breakfastDecider = array => {
    randomNum = Math.floor(Math.random() * array.length);
    meal = array[randomNum];
    return meal;
};

const lunchDecider = array => {
    randomNum = Math.floor(Math.random() * array.length);
    meal = array[randomNum];
    return meal;
};

const dinnerDecider = array => {
    randomNum = Math.floor(Math.random() * array.length);
    meal = array[randomNum];
    return meal;
};

breakfast = breakfastDecider(breakfastOptions);
lunch = lunchDecider(lunchOptions);
dinner = dinnerDecider(dinnerOptions);

console.log('What should I eat today?')
console.log(`For breakfast, I am going to have ${breakfast}.`);
console.log(`I'm going with ${lunch} for my lunch.`);
console.log(`I will try ${dinner} for dinner.`);
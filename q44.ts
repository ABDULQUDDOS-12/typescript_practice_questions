/*Write a function that stores information about a car in a Object. The
function should always receive a manufacturer and a model name. It should then
accept an arbitrary number of keyword arguments. Call the function with the
required information and two other name-value pairs, such as a color or an
optional feature. Print the Object that’s returned to make sure all the information
was stored correctly.*/
function carInfo(manufacturer: string, modelName: string, ...options: [string, any][]): {[key: string]: any} {
    const car: {[key: string]: any} = {
      manufacturer,
      modelName
    };
    
    options.forEach(([key, value]) => {
      car[key] = value;
    });
  
    return car;
  }
  
  // Example usage
  const myCar = carInfo("Toyota", "Corolla","color", "red", "year", 2022);
  console.log(myCar); // { manufacturer: "Toyota", modelName: "Corolla", color: "red", year: 2022 }
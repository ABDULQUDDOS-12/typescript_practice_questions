//Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var vehicles = ["Honda motorcycle", "Yamaha YBR", "Kawasaki motorcycle"];
for (var _i = 0, vehicles_1 = vehicles; _i < vehicles_1.length; _i++) {
    var vehicle = vehicles_1[_i];
    console.log("I would like to own a ".concat(vehicle, "."));
}

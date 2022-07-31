class person {
    constructor(drivername, age, sex, travel_distance_kms, cost_per_km) {
        this.drivername = drivername;
        this.age = age;
        this.sex = sex;
        this.travel_distance_kms = travel_distance_kms;
        this.cost_per_km = cost_per_km;
    }
}
var mov = new person("Ravi", 23, "male", 150, 12);
var total_cost = mov.travel_distance_kms * mov.cost_per_km;
console.log(`total cost for tavel is ${total_cost}`)


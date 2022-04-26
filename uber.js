class UberPrice{
constructor(basic,km,rsperkm,prevDue){
    this.basicFare=basic;
    this.distance=km;
    this.costPerKm=rsperkm;
    this.previousDue=prevDue;
};
getCost(){
    var cost = this.basicFare+(this.distance*this.costPerKm)+this.previousDue;
    return cost;
};
};
var trip1 = new UberPrice(30,5,20,250);
console.log(trip1.getCost());
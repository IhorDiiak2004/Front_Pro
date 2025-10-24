
// ДЗ 9.1

let ladder = {
  ourstep: 0,

  up: function() {
    this.ourstep++;
    return this; 
  },

  down: function() {
    this.ourstep--;
    return this; 
  },

  showStep: function() {
    console.log(this. ourstep);
    return this; 
  }
};

ladder.up().up().down().showStep(); 
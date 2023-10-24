const student = {
  name: "Abcd",
  age: 22,

  greet() {
    console.log("Hi, this is", this.name);
  },
};

student.greet();

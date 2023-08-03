const server = {
    people: [
      {
        name: "Odin",
        age: 20,
      },
      {
        name: "Thor",
        age: 35,
      },
      {
        name: "Freyja",
        age: 29,
      },
    ],
    
    getPeople(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this.people
            }, 2000);
        })
    }
}
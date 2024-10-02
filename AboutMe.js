const customerData = {
    name: "Emma",
    age: 38,
    bornLocation: "Brighton",
    currentLocation: "Stockholm",
    hobbies: [
        hobby1 = "cosplay crafting",
        hobby2 = "painting",
        hobby3 = "gaming"
    ]
};

// function to "generate" name

function generateName(generateAge) {
    console.log("Hi, my name is " + customerData.name + ".");
    setTimeout(() => {
        generateAge();
    }, 2000);
};

// function to "generate" age

function generateAge(generateLocations) {
    console.log("I am " + customerData.age + " years old.");
    setTimeout(() => {
        generateLocations();
    }, 3000);
};

// function to "generate" place of birth and where i live now

function generateLocations(generateHobbies) {
    console.log("I was born in " + customerData.bornLocation + ", and I now live in " + customerData.currentLocation + ".");
    setTimeout(() => {
        generateHobbies();
    }, 4000);
};

// function to "generate" hobbies

function generateHobbies() {
    let hobbiesString = "";

    for (let i = 0; i < customerData.hobbies.length; i++) {
        hobbiesString += customerData.hobbies[i];
        
        if (i != customerData.hobbies.length - 1) {
            hobbiesString += ", ";
        } else {
            hobbiesString += ".";
        }
    }

    console.log("My hobbies include: " + hobbiesString);
    return hobbiesString;
};

generateName(() => {
    generateAge(() => {
        generateLocations(() => {
            generateHobbies();
        });
    });
});
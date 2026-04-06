const today = new Date();
const year = today.getFullYear();

document.getElementById("currentyear").innerHTML = year;
document.getElementById("lastModified").innerHTML = document.lastModified;


//create pet card
const pets = [
    {
        type: "dog",
        breed: "Chihuahua",
        age: "baby",
        gender: "Male",
        cost: "¥78,000",
        image: "images/chihuahua.jpg",
    },
    {
        type: "cat",
        breed: "American Shorthair",
        age: "adult",
        gender: "female",
        cost: "¥65,000",
        image: "images/american-shorthair.jpg",
    },
    {
        type: "dog",
        breed: "Husky",
        age: "baby",
        gender: "female",
        cost: "¥121,000",
        image: "images/husky.jpg",
    },
    {
        type: "dog",
        breed: "Husky",
        age: "adult",
        gender: "male",
        cost: "¥93,000",
        image: "images/husky-adult.jpg",
    },
    {
        type: "dog",
        breed: "Pomeranian",
        age: "adult",
        gender: "female",
        cost: "¥99,000",
        image: "images/pomeranian.jpg",
    },
    {
        type: "cat",
        breed: "Ragdoll",
        age: "adult",
        gender: "male",
        cost: "¥68,000",
        image: "images/ragdoll.jpg",
    },
    {
        type: "cat",
        breed: "Ragdoll",
        age: "baby",
        gender: "female",
        cost: "¥100,000",
        image: "images/ragdoll-kitty.jpg",
    },
    {
        type: "cat",
        breed: "Scottish Fold",
        age: "adult",
        gender: "female",
        cost: "¥82,000",
        image: "images/scottish-fold.jpg",
    },
    {
        type: "cat",
        breed: "Scottish Fold",
        age: "baby",
        gender: "male",
        cost: "¥11,000",
        image: "images/s-f-c.jpg",
    },
    {
        type: "dog",
        breed: "Toy Poodle",
        age: "adult",
        gender: "male",
        cost: "¥79,000",
        image: "images/toypoodle.jpg",
    }
];

function displayPets(petList) {
    const container = document.getElementById("petContainer");
    container.innerHTML = "";

    petList.forEach(pet => {
        container.innerHTML += `
        <div class="pet">
            <img src = "${pet.image}" alt="${pet.breed}">
            <h2>${pet.breed}</h2>
            <p>Gender: ${pet.gender}</p>
            <p>Age: ${pet.age}</p>
            <p>Price: ${pet.cost}</p>
        </div>
        `;
    });
}

displayPets(pets);


//add interaction
document.querySelector("#home").addEventListener("click", () => {
    displayPets(pets);
});

document.querySelector("#dog").addEventListener("click", () => {
    const dogs = pets.filter(pet => pet.type === "dog");
    displayPets(dogs);
});

document.querySelector("#cat").addEventListener("click", () => {
    const cats = pets.filter(pet => pet.type === "cat");
    displayPets(cats);
});

document.querySelector("#baby").addEventListener("click", () => {
    const babys = pets.filter(pet => pet.age === "baby");
    displayPets(babys);
});

document.querySelector("#adult").addEventListener("click", () => {
    const adults = pets.filter(pet => pet.age === "adult");
    displayPets(adults);
});
const today = new Date();
const year = today.getFullYear();

document.getElementById("currentyear").innerHTML = year;
document.getElementById("lastModified").innerHTML = document.lastModified;


const menuButton = document.querySelector(`#menu`);
const nav = document.querySelector(`nav ul`);
const title = document.querySelector("header h1")

menuButton.addEventListener("click", () => {
    nav.classList.toggle("open");
    title.classList.toggle("hide");

    if (menuButton.textContent === "≣") {
        menuButton.textContent = "X"
    }
    else {
        menuButton.textContent = "≣"
    }
});


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

function displayPets(petList, filterName) {
    localStorage.setItem("filter", filterName);

    const container = document.getElementById("petContainer");
    

    let html = "";

    petList.forEach(pet => {
        html += `
        <div class="pet">
            <img src = "${pet.image}" alt="${pet.breed}" loading="lazy">
            <h2>${pet.breed}</h2>
            <p>Gender: ${pet.gender}</p>
            <p>Age: ${pet.age}</p>
            <p>Price: ${pet.cost}</p>
        </div>
        `;
    });

    container.innerHTML = html;
}




const saved = localStorage.getItem("filter");

if (saved === "dog") {
    displayPets(pets.filter(p => p.type === "dog"), "dog");
}
else if (saved === "cat") {
    displayPets(pets.filter(p => p.type === "cat"), "cat");
}
else if (saved === "baby") {
    displayPets(pets.filter(p => p.age === "baby"), "baby");
}
else if (saved === "adult") {
    displayPets(pets.filter(p => p.age === "adult"), "adult");
}
else {
    displayPets(pets, "home");
}


//add interaction
document.querySelector("#home").addEventListener("click", (e) => {
    e.preventDefault();
    displayPets(pets, "home");
});

document.querySelector("#dog").addEventListener("click", (e) => {
    e.preventDefault();
    const dogs = pets.filter(pet => pet.type === "dog");
    displayPets(dogs, "dog");
});

document.querySelector("#cat").addEventListener("click", (e) => {
    e.preventDefault();
    const cats = pets.filter(pet => pet.type === "cat");
    displayPets(cats, "cat");
});

document.querySelector("#baby").addEventListener("click", (e) => {
    e.preventDefault();
    const babys = pets.filter(pet => pet.age === "baby");
    displayPets(babys, "baby");
});

document.querySelector("#adult").addEventListener("click", (e) => {
    e.preventDefault();
    const adults = pets.filter(pet => pet.age === "adult");
    displayPets(adults, "adult");
});



/*contact*/
const contactLink = document.getElementById("contact");

contactLink.addEventListener("click", (e) => {
    e.preventDefault();

    const container = document.getElementById("petContainer");

    container.innerHTML = `
    <div class="cf">
        <h2>Contact Us</h2>
        <form id="contactForm">
            <fieldset>
                <label for="name">Your Name: </label>
                <input type="text" id="name" name="name" required>
            </fieldset>

            <fieldset>
                <label for="petType">Preferred Pet: </label>
                <select name="petType" id="petType" required>
                    <option value="" disabled selected>Select...</option>
                    <option>Dog</option>
                    <option>Cat</option>
                    <option>Baby</option>
                    <option>Adult</option>
                </select>
            </fieldset>

            <fieldset>
                <button type="submit">Contact</button>
            </fieldset>
        </form>
    </div>
    `;

    /*local Storage*/
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const petType = document.getElementById("petType").value;

        localStorage.setItem("name", name);
        localStorage.setItem("petType", petType);

        container.innerHTML = `
        <p>Thank you, ${name}! Your application has been submitted.</p>
        `;
    });
});
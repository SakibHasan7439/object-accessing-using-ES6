const people = [
    {
      id: 1,
      name: "John Doe",
      age: 28,
      occupation: "Software Engineer",
      contact: {
        phone: "123-456-7890",
        email: "john.doe@example.com"
      },
      address: {
        street: "123 Main St",
        city: "New York",
        state: "NY",
        country: "USA"
      },
      socialMedia: {
        Facebook: "@johndoe",
      },
      hobbies: ["Photography", "coding", "playing"],
    },

    {
      id: 2,
      name: "Jane Smith",
      age: 32,
      occupation: "Graphic Designer",
      contact: {
        phone: "987-654-3210",
        email: "jane.smith@example.com"
      },
      hobbies: ["coding", "traveling"]
    },

    {
      id: 3,
      name: "Sakib Hasan",
      age: 21,
      occupation: "Web Developer",
      contact: {
        phone: "555-123-4567",
        email: "sakib.hasan@example.com"
      },
      address: {
        street: "789 Elm St",
        city: "Dhaka",
        state: "Dhaka",
        country: "Bangladesh"
      },
      socialMedia: {
        Facebook: "Sakib Hasan",
      },
      hobbies: ["Gaming", "Photography", "Coding"],
    }
  ];


  const peopleList = document.getElementById("people-list");
  const personInfo = document.getElementById("person-info");

  const selection = document.getElementById("no-selection");

  const renderPeopleList = (people) =>{
    people.map((person)=>{
        const item = document.createElement("li");
        item.classList.add("text-blue-500", "cursor-pointer");
        item.textContent = person.name;

        item.addEventListener("click", ()=>{
            displayInfo(person.id);
        });
        peopleList.appendChild(item);
    })
  }

  renderPeopleList(people);

  const showPersonInfo = (person) =>{
    personInfo.classList.remove("hidden");
    selection.classList.add("hidden");
    personInfo.innerHTML = `
        <h2 class="text-2xl font-semibold mb-4">${person.occupation}</h2>
        <p>City : ${person?.address?.city || "N/A"}</p>
        <p>${person?.socialMedia?.Facebook || "N/A"}</p>
        <p>${person?.hobbies.map((hobby)=> hobby)}</p>
    `
  }

  const displayInfo = (id) =>{
    let result = people.find((p) => p.id == id);
    showPersonInfo(result);
  }
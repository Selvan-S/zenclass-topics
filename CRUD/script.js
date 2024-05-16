const API = "https://6604dddc2ca9478ea17ea3c6.mockapi.io/users";

// API Request Handlers to Handle CRUD OPERATION

// GET - (READ)
async function getAllUsers() {
  const res = await fetch(API, { method: "GET" });

  const data = await res.json();
  renderAllCards(data);
  console.log(data);
}

getAllUsers();

// POST - (CREATE)
async function addNewUser(newData) {
  const res = await fetch(API, {
    method: "POST",
    body: JSON.stringify(newData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();
  console.log(data);
}

const data = {
  name: "codys",
  batch: "batch8",
  contact: 4548455842,
};

// addNewUser(data);
// getAllUsers();

// DELETE - (DELETE)

async function updateUser(id, updateData) {
  const res = await fetch(`${API}/${id}`, {
    method: "PUT",
    body: JSON.stringify(updateData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  console.log(data);
}

// updateUser(10, { name: "Cody", batch: "BS57WD" });
// getAllUsers();

// DELETE - (DELETE)

async function deleteUser(id) {
  const res = await fetch(`${API}/${id}`, {
    method: "DELETE",
  });
  const data = await res.json();
  console.log(data);
}

// deleteUser(11);
// deleteUser(12);
// getAllUsers();
const result = document.querySelector("#result");
function renderAllCards(data) {
  data.map((val) => {
    result.innerHTML += `      <div class="card" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title">${val.name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">ID: ${val.id}</h6>
          <p class="card-text">batch: ${val.batch}</p>
          <p class="card-text">contact: ${val.contact}</p>
          <a href="#" class="card-link">LinkedIn</a>
          <a href="#" class="card-link">GitHub</a>
        </div>
      </div>`;
  });
}

let originalProducts = [];
let currentProducts = [];

async function loadProducts() {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    originalProducts = data.products.slice(0, 30);
    currentProducts = [...originalProducts];
    renderTable(currentProducts);
    attachControls();
  } catch (e) {
    console.error("Błąd podczas pobierania danych:", e);
  }
}

function attachControls() {
  const filterInput = document.getElementById("filterInput");
  const sortSelect = document.getElementById("sortSelect");

  const apply = () => {
    const phrase = filterInput.value.trim().toLowerCase();

    const filtered = originalProducts.filter((p) => {
      const info = (p.title + " " + p.description).toLowerCase();
      return info.includes(phrase);
    });

    let result = [...filtered];
    if (sortSelect.value === "asc") {
      result.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortSelect.value === "desc") {
      result.sort((a, b) => b.title.localeCompare(a.title));
    }

    currentProducts = result;
    renderTable(currentProducts);
  };

  filterInput.addEventListener("input", apply);
  sortSelect.addEventListener("change", apply);
}

function renderTable(products) {
  const tbody = document.querySelector("#productsTable tbody");
  tbody.innerHTML = "";
  products.forEach((product) => {
    const tr = document.createElement("tr");

    const tdImg = document.createElement("td");
    const img = document.createElement("img");
    img.src = product.thumbnail;
    img.alt = product.title;
    img.width = 60;
    tdImg.appendChild(img);

    const tdTitle = document.createElement("td");
    tdTitle.textContent = product.title;

    const tdDesc = document.createElement("td");
    tdDesc.textContent = product.description;

    tr.appendChild(tdImg);
    tr.appendChild(tdTitle);
    tr.appendChild(tdDesc);
    tbody.appendChild(tr);
  });
}

document.addEventListener("DOMContentLoaded", loadProducts);

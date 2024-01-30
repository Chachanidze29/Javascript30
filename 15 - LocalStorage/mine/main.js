const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
const items = JSON.parse(localStorage.getItem("items")) || [];

const handleDelete = (i) => {
  items.splice(i, 1);
  populateList(items);
  localStorage.setItem("items", JSON.stringify(items));
};

const populateList = (items = []) => {
  itemsList.innerHTML = items
    .map((item, i) => {
      return `
		<li>
		<input type="checkbox" data-index=${i} id="item${i}" ${
        item.done ? "checked" : ""
      } />
			<label for="item${i}">${item.name}</label>
      <button onclick="handleDelete(${i})">Delete</button>
		</li>
	`;
    })
    .join("");
};

addItems.addEventListener("submit", (e) => {
  e.preventDefault();
  const item = document.getElementById("name");

  items.push({
    name: item.value,
    done: false,
  });

  item.value = "";

  populateList(items);
  localStorage.setItem("items", JSON.stringify(items));
});

itemsList.addEventListener("click", (e) => {
  if (!e.target.matches("input")) return;
  const el = e.target;
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, itemsList);
});

populateList(items);

const data = [
  {
    name: "French Toasts",
    image:
      "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=449&q=80",
    price: 244.99,
    time: 20,
    rating: 4.7,
    category: ["French", "Toast", "Breakfast", "Fast Food", "Blueberry"],
  },
  {
    name: "German Vegan Cheese Spaetzle",
    image:
      "https://biancazapatka.com/wp-content/uploads/2020/02/kaese-spaetzle-vegan-mac-and-cheese-pasta.jpg",
    price: 499,
    time: 30,
    rating: 4.7,
    category: ["German", "Pasta", "Lunch", "Fast Food", "Cheese"],
  },
  {
    name: "French Toasts",
    image:
      "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=449&q=80",
    price: 244.99,
    time: 20,
    rating: 4.7,
    category: ["French", "Toast", "Breakfast", "Fast Food", "Blueberry"],
  },
];

const listElements = (data, ID) => {
  let element = "";
  const topush = [];
  data.forEach((ele, index) => {
    console.log(index, ele);
    const categories = ele.category.join(" | ");
    element += `
    <div class="listings-grid-element">
        <div class="image">
        <img
            src="${ele.image}"
            alt="Listing pic"
        />    
        </div>
        <div class="text">
        <div class="text-title">
            <h3>${ele.name}</h3>
            <div class="info">
            <span>Rs ${ele.price} + delivery fee | ${ele.time}-${
      ele.time + 10
    } MINS |</span>
            </div>
        </div>
        <div class="rating">
            <span class="circle">${ele.rating}</span>
        </div>
        </div>
        <div class="text-lower">
            <span class="smallText"
                >${categories}</span
            >
        </div>
    </div>
    `;
    if (index % 3 == 2) {
      const toadd = `<div class="listings-col">` + element + `</div>`;
      element = "";
      topush.push(toadd);
    }
  });

  topush.forEach((element) =>
    document.getElementById(ID).insertAdjacentHTML("beforeend", element)
  );
};

listElements(data, "recommendations");
listElements(data, "popular");
listElements(data, "special");

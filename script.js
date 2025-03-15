const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  // Get all price elements
  const prices = document.querySelectorAll(".price");
  let total = 0;

  // Calculate the sum of prices
  prices.forEach(price => {
    total += parseInt(price.textContent);
  });

  // Create a new row for the total price
  const table = document.querySelector("table");
  const newRow = document.createElement("tr");
  const newCell = document.createElement("td");

  newCell.setAttribute("colspan", "2"); // Span across both columns
  newCell.textContent = `Total Price: Rs ${total}`;

  newRow.appendChild(newCell);
  table.appendChild(newRow);

  // Disable button after adding total to prevent duplication
  getSumBtn.disabled = true;
};

getSumBtn.addEventListener("click", getSum);



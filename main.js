const cart = document.querySelector(".cart");
const items = cart.querySelectorAll(".item");

// Listen for clicks on the plus and minus buttons.
for (const item of items) {
  item.querySelector(".plus").addEventListener("click", () => {
    const quantityInput = item.querySelector(".quantity input");
    quantityInput.value++;
  });

  item.querySelector(".minus").addEventListener("click", () => {
    const quantityInput = item.querySelector(".quantity input");
    quantityInput.value--;
  });
}

// Listen for clicks on the delete buttons.
cart.querySelectorAll(".delete").forEach((button) => {
  button.addEventListener("click", () => {
    button.parentElement.remove();
  });
});

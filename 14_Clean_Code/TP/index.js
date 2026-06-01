// Pisahkan concern: fetching, rendering, dan event setup menjadi fungsi terpisah

async function fetchOrderDetails(orderId, token) {
  try {
    const order = await getOrder(orderId, token);
    showOrderModal(order, token);
  } catch (error) {
    console.error("Gagal memuat detail pesanan:", error);
  }
}

async function getOrder(orderId, token) {
  const response = await fetch(`https://example.com/api/order/${orderId}`, {
    headers: { Authorization: token },
  });

  if (!response.ok) {
    throw new Error("Gagal mengambil detail pesanan");
  }

  return response.json();
}

function showOrderModal(order, token) {
  const modal = document.getElementById("orderModal");

  renderOrderDetails(modal, order);
  setupCloseButton(modal);
  setupConfirmButton(modal, order, token);

  modal.style.display = "block";
}

function renderOrderDetails(modal, { id, status }) {
  const detailsDiv = modal.querySelector("#orderDetails");
  detailsDiv.innerHTML = "";

  const header = document.createElement("h3");
  header.textContent = `Order ID: ${id}`;

  const statusEl = document.createElement("p");
  statusEl.textContent = `Status: ${status}`;

  detailsDiv.append(header, statusEl);
}

function setupCloseButton(modal) {
  const closeBtn = modal.querySelector(".close");
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
}

function setupConfirmButton(modal, { id, status }, token) {
  const confirmBtn = modal.querySelector("#confirmOrderBtn");
  const isDelivered = status === "Delivered";

  if (isDelivered) {
    confirmBtn.style.display = "none";
    return;
  }

  confirmBtn.addEventListener("click", () => confirmOrder(id, token));
}
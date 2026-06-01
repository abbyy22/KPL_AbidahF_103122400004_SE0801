# Tugas Pedahuluan 13: Design_Pattern_Implementation

Nama : Abidah F

Kelas : SE08-01

NIM : 103122400004

**Soal**

Kode ini tampak baik dan bagus, tetapi menyalahi beberapa prinsip kode bersih. Bisakah kamu melakukan refaktorisasi? Dimodifikasi dari amrrwael/Delivery-website-Hits.

Sebagai konteks, fungsi di bawah ini menampilkan rincian pesanan di modal dan jika klik konfirmasi, sistem apa menyimpannya.

function fetchOrderDetails(orderId, token) {
    fetch(`https://example.com/api/order/${orderId}`, {
        headers: {
            'Authorization': token
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to fetch order details');
        }
        return response.json();
    })
    .then(order => {
        // Display order info
        const modal = document.getElementById('orderModal');
        const detailsDiv = modal.querySelector('#orderDetails');
        detailsDiv.innerHTML = '';

        const header = document.createElement('h3');
        header.textContent = `Order ID: ${order.id}`;
        detailsDiv.appendChild(header);

        const status = document.createElement('p');
        status.textContent = `Status: ${order.status}`;
        detailsDiv.appendChild(status);

        // Show modal
        modal.style.display = 'block';

        // Setup close button
        const closeBtn = modal.querySelector('.close');
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        // Setup confirm button
        const confirmBtn = modal.querySelector('#confirmOrderBtn');
        if (order.status === 'Delivered') {
            confirmBtn.style.display = 'none';
        } else {
            confirmBtn.addEventListener('click', () => {
                confirmOrder(order.id, token);
            });
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

**Penjelasan**

Pada proses refactoring, fungsi fetchOrderDetails yang sebelumnya menangani beberapa tugas sekaligus dipisahkan menjadi beberapa fungsi dengan tanggung jawab yang lebih spesifik. Pemisahan ini dilakukan agar kode lebih mudah dipahami, dikelola, dan dikembangkan di kemudian hari.

Selain itu, penggunaan async/await menggantikan pola .then() yang bertingkat sehingga alur eksekusi program menjadi lebih jelas dan mudah dibaca. Teknik destructuring parameter juga diterapkan pada beberapa fungsi, seperti renderOrderDetails dan setupConfirmButton, untuk menyederhanakan akses terhadap data yang digunakan.

Komentar-komentar yang sifatnya menjelaskan hal yang sudah jelas dari nama fungsi dihilangkan guna menjaga kebersihan kode. Di sisi lain, penggunaan nama variabel yang lebih deskriptif, seperti isDelivered, membuat tujuan dan logika program lebih mudah dipahami tanpa perlu melihat detail kondisi yang digunakan.
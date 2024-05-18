document.addEventListener("DOMContentLoaded", function () {
    const apiUrl = "https://raw.githubusercontent.com/a22609/proyecto-mayo/main/clientes.json"; // Reemplaza esto con la URL de la API

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const clientesContainer = document.getElementById('clientes-container');
            data.forEach((cliente, index) => {
                const clienteCard = document.createElement('div');
                clienteCard.classList.add('col-md-4', 'cliente-card');
                clienteCard.innerHTML = `
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Cliente ${index + 1}</h5>
                            <p class="card-text">Nombre: ${cliente.nombre}</p>
                            <p class="card-text">Email: ${cliente.email}</p>
                            <p class="card-text">Teléfono: ${cliente.telefono}</p>
                        </div>
                    </div>
                `;
                clientesContainer.appendChild(clienteCard);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});

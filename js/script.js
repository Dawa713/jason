document.addEventListener("DOMContentLoaded", function () {
    const apiUrl = 'https://raw.githubusercontent.com/a22609/proyecto-mayo/main/coches.json'; // Reemplaza esto con la URL de tu archivo JSON

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const cochesContainer = document.getElementById('coches-container');
            cochesContainer.innerHTML = '';

            data.forEach(coche => {
                const cocheDiv = document.createElement('div');
                cocheDiv.classList.add('col-md-4', 'coche-card');
                cocheDiv.innerHTML = `
                    <div class="card">
                        ${coche.imgSrc ? `<img src="${coche.imgSrc}" class="card-img-top" alt="Imagen de coche">` : ''}
                        <div class="card-body">
                            <h5 class="card-title">${coche.marca} ${coche.modelo}</h5>
                            <p class="card-text">${coche.detalles}</p>
                        </div>
                    </div>
                `;
                cochesContainer.appendChild(cocheDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});

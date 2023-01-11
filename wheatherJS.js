async function getWeather() {
    let url = 'https://api.weatherbit.io/v2.0/current?lang=es&lat=-34.829544&lon=-57.949411&key=7993abaeb9a0423f931813215ee14f2a';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}
async function renderUsers() {

    let users = await getWeather();
    let html = '';
    console.log("aca estoy JS");
    /* users.forEach(data => 
    Array.from(users.data).forEach(data =>   {
            let htmlSegment = `<div class="user">
                            <ul>
                            <h2>${data.city_name} </h2>
                            <h2>${users.sunrise} ${users.sunset}</h2>
                            <div class="email"><a href="email:${users.ind_cdir_full}">${users.ob_time}</a></div>
                        </div>`;

            html += htmlSegment;
        }); */
        
        users.data.forEach(x => {
            let htmlSegment = `<div class="user">
                                <h3> ${new Date(x.ts *1000).toLocaleString()} </h3>
                                <ul>
                                    <li><h2>Ciudad: ${x.city_name}</h2></li>
                                    <li><h2>Direccion del Viento: ${x.wind_cdir_full}</h2></li>
                                    <li><h2>Velocidad del viento: ${(x.wind_spd * 3.6).toFixed(1)}</h2></li>
                                    <li><h2>Presion (mb): ${x.pres}</h2></li>
                                    <li><h2>Temperatura: ${x.temp}</h2></li>
                                    <li><h2>Sensacion termica: ${x.app_temp}</h2></li>
                                    <li><h2>Humedad: ${(x.rh).toFixed(0)}</h2></li>
                                    <li><h2>Indice UV: ${x.uv}</h2></li>
                                    <li><h2>Amanecer: ${String(x.sunrise)}</h2></li>
                                    <li><h2>Anochecer: ${x.sunset}</h2></li>
                                    <li><h2>Nubosidad: ${x.clouds} %</h2></li>
                                    <li><img src="https://www.weatherbit.io/static/img/icons/${x.weather.icon}.png"></h2></li>
                                    <li><h2>El cielo se encuentra ${x.weather.description}</h2></li>
                                </ul>
    
                                </div>`;
    
    
    
            html += htmlSegment;
    
        });
    let container = document.querySelector('.container');
    container.innerHTML = html;
    
}

renderUsers();
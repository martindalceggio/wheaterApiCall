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
                                <ul>
                                    <li><h2>${x.city_name}</h2></li>
                                    <li><h2>${x.ob_time}</h2></li>
                                    <li><h2>${x.wind_cdir_full}</h2></li>
                                    <li><h2>${x.wind_spd}</h2></li>
                                    <li><h2>${x.pres}</h2></li>
                                    <li><h2>${x.temp}</h2></li>
                                    <li><h2>${x.app_temp}</h2></li>
                                    <li><h2>${x.rh}</h2></li>
                                    <li><h2>${x.uv}</h2></li>
                                    <li><h2>${x.sunrise}</h2></li>
                                    <li><h2>${x.sunset}</h2></li>
                                    <li><h2>${x.clouds}</h2></li>
                                    <li><h2>${x.sunset}</h2></li>
                                    <li><img src="https://www.weatherbit.io/static/img/icons/${x.weather.icon}.png"></h2></li>
                                    <li><h2>${x.weather.description}</h2></li>
                                </ul>
    
                                </div>`;
    
    
    
            html += htmlSegment;
    
        });
    let container = document.querySelector('.container');
    container.innerHTML = html;
    
}

renderUsers();
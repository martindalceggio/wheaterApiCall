async function getWeather() {
    let url = 'https://api.weatherbit.io/v2.0/current?lat=-34.829544&lon=-57.949411&key=7993abaeb9a0423f931813215ee14f2a';
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
    users.forEach(res => {
        let htmlSegment = `<div class="user">
                            <img src="${res.city_name}" >
                            <h2>${res.sunrise} ${res.sunset}</h2>
                            <div class="email"><a href="email:${res.ind_cdir_full}">${res.ob_time}</a></div>
                        </div>`;

        html += htmlSegment;
    });

    let container = document.querySelector('.container');
    container.innerHTML = html;
}

renderUsers();
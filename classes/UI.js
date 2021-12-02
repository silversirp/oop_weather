class UI {
    constructor() {
        this.description = document.querySelector('#description')
        this.temp = document.querySelector('#temp')
        this.city = document.querySelector('#location')
    }

    drawWeather(data){
        let celsius = Math.round(parseFloat(data.main.temp)-273.15);
        let description = data.weather[0].description;
        // let description = 'rain';

        this.description.innerHTML = description;
        this.temp.innerHTML = celsius + '&deg;';
        this.city.innerHTML = data.name;

        if(celsius < 0 && description.includes('snow')) {
            $('body').flurry({
                character: '❄❅❆*',
                height: 240,
                speed: 1400,
                wind: 200,
                windVariance: 220,
                frequency: 10,
                large: 40,
                small: 4
            });
        }
    }
}
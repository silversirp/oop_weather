class Weather{
    constructor(city) {
        this.city = city
        this.key = 'ee91cb438af3ec838d3c334f3d56c61c'
    }

    async getWeather(){
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.key}`)
        const responseData = await response.json()
        return responseData
    }

    changeCity(city){
        this.city = city
    }
}
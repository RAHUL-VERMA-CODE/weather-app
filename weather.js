const apikey="0aeae5b1d655f1bfbf1bd39fb86a86c0";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weathericon");

async function checkweather(city){
    const response=await fetch(apiurl+ city +`&appid=${apikey}`);
    
    
    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }else{
       
    let data=await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity +"%";
    document.querySelector(".wind").innerHTML=data.wind.speed + " km/h";

    if(data.weather[0].main=="clouds"){
        weatherIcon.src="./image/clouds.png";
    }
    else if(data.weather[0].main=="Clear"){
        weatherIcon.src="./image/clear.png";
    }
    else if(data.weather[0].main=="Rain"){
        weatherIccon.src="./image/rain.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="./image/drizzle.png";
    }
    else if(data.weather[0].main=="Mist"){
        weatherIcon.src="./image/mist.png";
    }
    else if(data.weather[0].main=="Snow"){
        weatherIcon.src="./image/snow.png";
    }
    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";
    }

   
    
}
searchbtn.addEventListener("click",()=>{
    checkweather(searchbox.value);
});


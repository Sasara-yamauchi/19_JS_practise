const codeNums = [
    { 愛知県: 230000 },
    { 岐阜県: 210000 },
    { 三重県: 240000 },
    { 静岡県: 220000 },
    { 沖縄本島地方: 471000 },
];
const weekUrl = `https://www.jma.go.jp/bosai/forecast/data/forecast/${codeNums[4]["沖縄本島地方"]}.json`;
const url = `https://www.jma.go.jp/bosai/forecast/data/overview_forecast/${codeNums[4]["沖縄本島地方"]}.json`;
const cat = document.querySelector(".cat")
const weather = document.querySelector(".weather")
const datebg = document.querySelector(".datebg")
const today = new Date();
const time = document.querySelector(".time")
const bg = document.querySelector(".bg")
fetch(weekUrl)
    .then(function (response) {
        if (response.status !== 200) {
            console.log("問題がありました。ステータスコード:" + response.status);
            return;
        }
        response.json().then(function (data) {
            console.log(data);

            //愛知県西部の天気予報をwest、日付をweatherDateに代入します。
            const west = data[0].timeSeries[0].areas[0];
            const weatherDate = data[0].timeSeries[0].timeDefines;
            console.log(west["weathers"][0])
            console.log(weatherDate)
            const code = data[0].timeSeries[0].areas[0].weatherCodes;

            let hundredsPlace = code[0].charAt(0);
            const imageArea = document.querySelector("main");
            console.log(hundredsPlace)
            time.innerHTML = today.getMonth() + 1 + "月" + today.getDate() + "日";
            if (hundredsPlace === "1") {
                console.log("晴れ");
                imageArea.style.backgroundImage = "url(./img/sunnybg.png)"
                cat.innerHTML = `<img src = "./img/sunnycat.png">`
                weather.innerHTML = `<img src="./img/weathersunny.png">`





            } else if (hundredsPlace === "2") {
                console.log("曇り");
                imageArea.style.backgroundImage = "url(./img/cloudybg.png)"
                cat.innerHTML = `<img src = "./img/cat.PNG">`
                weather.innerHTML = `<img src="./img/weathercloudy.png">`
            } else if (hundredsPlace === "3") {
                console.log("雨");
                imageArea.style.backgroundImage = "url(./img/rainbg.png)"
                cat.innerHTML = `<img src = "./img/raincat.png">`
                weather.innerHTML = `<img src="./img/weatherrain.png">`

            } else {
                console.log("その他");
            }




        });
    });

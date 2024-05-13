const codeNums = [
    { 愛知県: 230000 },
    { 岐阜県: 210000 },
    { 三重県: 240000 },
    { 静岡県: 220000 }
];
const weekUrl = `https://www.jma.go.jp/bosai/forecast/data/forecast/${codeNums[0]["愛知県"]}.json`;
const url = `https://www.jma.go.jp/bosai/forecast/data/overview_forecast/${codeNums[0]["愛知県"]}.json`;

const imageArea = document.querySelector(".forecast");

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
            console.log(hundredsPlace)
            if (hundredsPlace === "1") {
                console.log("晴れ");
                imageArea.innerHTML = `<img src="./img/">`
            } else if (hundredsPlace === "2") {
                console.log("曇り");
                imageArea.innerHTML = `<img src="./img/">`
            } else if (hundredsPlace === "3") {
                console.log("雨");
                imageArea.innerHTML = `<img src="./img/rain.jpg">`

            } else {
                console.log("その他");
            }




        });
    });

//エクスポートしたclass.jsをインポートしたい
import { Chiikawa } from "./class.js";

//複数なので配列を準備２
// story:話, title:題名, image:サムネイル名, id:YouTube動画id
const chiikawas = [
    {
        story: 1,
        title: 'かためのプリン／ホットケーキ',
        image: 'chiikawa-001.webp',
        id: 'pbQQAwSQUX4',
    },
    {
        story: 2,
        title: 'スフィンクス／ほんものだ',
        image: 'chiikawa-002.webp',
        id: 'i6d3K6ln-d4',
    },
    {
        story: 3,
        title: 'イカ／パイシチュー',
        image: 'chiikawa-003.webp',
        id: 'a7cwqxmn7rY',
    },
    {
        story: 4,
        title: 'ブロッコリー／ピザまん',
        image: 'chiikawa-004.webp',
        id: 'l9IAr7WY-Xk',
    },
    {
        story: 5,
        title: 'チャリメラ／チャルメラ',
        image: 'chiikawa-005.webp',
        id: 'cE8wVmwY7VY',
    },
];

//⑦ 挿入するエリア
const container = document.querySelector(".contents");


//インスタンス化１
// ①const box = new Chiikawa(5, 'チャリメラ/チャルメラ', 'chiikawa-005.webp', 'cE8wVmwY7VY')
// ②chiikawaContents.push(new Chiikawa(5, 'チャリメラ/チャルメラ', 'chiikawa-005.webp', 'cE8wVmwY7VY'))


//配列の順番を表す数字を「添え字」または「index」
const chiikawaContents = [];
//④
for (let i = 0; i < chiikawas.length; i++) {
    chiikawaContents.push(new Chiikawa(chiikawas[i].story, chiikawas[i].title, chiikawas[i].image, chiikawas[i].id));

    //⑥メソッドのよびだし
    // console.log(chiikawaContents[i].createMarkup());//dldtdd
    //⑧
    container.insertAdjacentHTML("beforeend", chiikawaContents[i].createMarkup());

}


//③ chiikawaContents.push(new Chiikawa(chiikawas[4].story, chiikawas[4].title, chiikawas[4].image, chiikawas[4].id)) console.log(chiikawasContents)

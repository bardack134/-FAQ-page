
document.addEventListener("DOMContentLoaded", function () {
    
    // この関数は、特定の質問番号に対して表示/非表示の切り替えを処理します
    function toggleVisibility(questionNumber) {
        // この行は、特定の質問番号に対応する「表示/非表示」ボタンを取得します
        const positiveButton = document.getElementById(`positive${questionNumber}`);
        const negativeButton = document.getElementById(`negative${questionNumber}`);
        const answer = document.getElementById(`answer${questionNumber}`);//この行は、特定の質問番号に対応する回答部分を取得します。
        
        
        positiveButton.onclick = function () {
            console.log(`Button ${questionNumber} clicked: show`);
            // unshowクラスを追加します
            positiveButton.classList.add("unshow");
            answer.classList.remove("unshow");
            negativeButton.classList.remove("unshow");
        };
        
        negativeButton.onclick = function () {
            console.log(`Button ${questionNumber} clicked: unshow`);
            positiveButton.classList.remove("unshow");
            answer.classList.add("unshow");
            negativeButton.classList.add("unshow");
        };
    }

    // 質問の数だけループ
    for (let i = 1; i <= 3; i++) {
        console.log(i);
        
        toggleVisibility(i);
        
    }
});

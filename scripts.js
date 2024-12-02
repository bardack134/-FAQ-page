// このコードは、ページの読み込みが完了したときに、特定のボタンがクリックされた場合に特定の要素の表示/非表示を切り替えるためのスクリプトです。具体的には、
// 「よくある質問」の各質問に対応するボタンをクリックすると、回答部分が表示または非表示になります。
document.addEventListener("DOMContentLoaded", function () {
     // 質問1------------------------------------------------
     document.getElementById("positive1").onclick = show1; // 関数の参照を代入
     document.getElementById("negative1").onclick = unshow1;
     
     function show1() {
         console.log("Button clicked");
         document.getElementById("positive1").classList.add("unshow");
         document.getElementById("answer1").classList.remove("unshow");
         document.getElementById("negative1").classList.remove("unshow");
     };
 
     function unshow1() {
         console.log("Button clicked");
         document.getElementById("positive1").classList.remove("unshow");
         document.getElementById("answer1").classList.add("unshow");
         document.getElementById("negative1").classList.add("unshow");
     };

    // 質問２------------------------------------------------
    document.getElementById("positive2").onclick = show2; // 関数の参照を代入
    document.getElementById("negative2").onclick = unshow2;
    
    function show2() {
        console.log("Button clicked");
        document.getElementById("positive2").classList.add("unshow");
        document.getElementById("answer2").classList.remove("unshow");
        document.getElementById("negative2").classList.remove("unshow");
    };

    function unshow2() {
        console.log("Button clicked");
        document.getElementById("positive2").classList.remove("unshow");
        document.getElementById("answer2").classList.add("unshow");
        document.getElementById("negative2").classList.add("unshow");
    };

    // 質問３------------------------------------------------
    document.getElementById("positive3").onclick = show3; // 関数の参照を代入
    document.getElementById("negative3").onclick = unshow3;
    
    function show3() {
        console.log("Button clicked");
        document.getElementById("positive3").classList.add("unshow");
        document.getElementById("answer3").classList.remove("unshow");
        document.getElementById("negative3").classList.remove("unshow");
    };

    function unshow3() {
        console.log("Button clicked");
        document.getElementById("positive3").classList.remove("unshow");
        document.getElementById("answer3").classList.add("unshow");
        document.getElementById("negative3").classList.add("unshow");
    };
});

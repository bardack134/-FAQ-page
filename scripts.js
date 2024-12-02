document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("positive").onclick = show; // 関数の参照を代入
    document.getElementById("negative").onclick = unshow;
    
    function show() {
        console.log("Button clicked");
        document.getElementById("positive").classList.add("unshow");
        document.getElementById("answer").classList.remove("unshow");
        document.getElementById("negative").classList.remove("unshow");
    };

    function unshow() {
        console.log("Button clicked");
        document.getElementById("positive").classList.remove("unshow");
        document.getElementById("answer").classList.add("unshow");
        document.getElementById("negative").classList.add("unshow");
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

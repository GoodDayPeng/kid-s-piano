//回调函数：function () {...} 和 function(event) {...} 是回调函数，它们是在事件触发时被调用的。
//高阶函数：addEventListener 是高阶函数，因为它接收一个函数作为参数，并在特定事件触发时调用这个函数。

//为页面上的每个按钮元素添加点击事件
//传入了一个匿名函数作为回调函数。当点击 .note 元素时，
// 这个回调函数会被触发，执行 makeSound 和 buttonAnimation。
var numberOfNotes = document.querySelectorAll(".note").length;
for (var i=0; i < numberOfNotes; i++) {
    document.querySelectorAll(".note")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}


//全局的键盘事件监听器，监听整个文档上的 keydown 事件.
document.addEventListener("keydown", function (event){
    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound(key) {
    switch (key) {
        case "d":
            var s1 = new Audio("./7sounds/1.mp3");
            s1.play();
            break;
        case "r":
            var s2 = new Audio("./7sounds/2.mp3");
            s2.play();
            break;
        case "m":
            var s3 = new Audio("./7sounds/3.mp3");
            s3.play();
            break;
        case "f":
            var s4 = new Audio("./7sounds/4.mp3");
            s4.play();
            break;
        case "s":
            var s5 = new Audio("./7sounds/5.mp3");
            s5.play();
            break;
        case "l":
            var s6 = new Audio("./7sounds/6.mp3");
            s6.play();
            break;
        case "t":
            var s7 = new Audio("./7sounds/7.mp3");
            s7.play();
            break;
        default:
            console.log(key);
    }
}

function buttonAnimation(key) {
    var activateButton = document.querySelector("." + key);
    activateButton.classList.add("pressed");
    setTimeout(function () {
        activateButton.classList.remove("pressed");   
    }, 100);
}

// 自动随机触发弹奏
function playRandomSound() {
    var keys = ["d", "r", "m", "f", "s", "l", "t"];
    var randomKey = keys[Math.floor(Math.random() * keys.length)];
    makeSound(randomKey);
    buttonAnimation(randomKey);
}
setInterval(playRandomSound, 150);
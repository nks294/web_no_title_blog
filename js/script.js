
function test() {
    var text = document.querySelector('#login').innerText;
    console.log(text);
}

function popup() {
    window.open('login.html', '로그인', 'width=200', 'height=200');
}

function checkLogin() {
    let isLogin = false;

    if (isLogin) {
        console.log("로그인 된 상태")
    } else {
        console.log("로그인이 필요합니다.")
    }
}

checkLogin();
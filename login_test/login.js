$(function () {
  $("#login-form-link").click(function (e) {
    $("#login-form").delay(100).fadeIn(100);
    $("#register-form").fadeOut(100);
    $("#register-form-link").removeClass("active");
    $(this).addClass("active");
    e.preventDefault();
  });
  $("#register-form-link").click(function (e) {
    $("#register-form").delay(100).fadeIn(100);
    $("#login-form").fadeOut(100);
    $("#login-form-link").removeClass("active");
    $(this).addClass("active");
    e.preventDefault();
  });
});

// 회원가입하기

// 1. 회원가입 버튼 함수 만들기
function register() {
  // 내용 체크 하기

  const checkResult = checkJoinFields();

  if (!checkResult) {
    // 함수 앞에 !를 붙여서 true가 아닐 경우에 실행하게 함
    return;
  }

  // 회원가입 진행
  const usernameElement = document.getElementById("username");
  const emailElement = document.getElementById("email");
  const passwordElement = document.getElementById("password");

  const newUser = {
    username: usernameElement.value,
    email: emailElement.value,
    password: passwordElement.value,
  }

  //   console.log(newUser);
  if (localStorage.getItem("userList") == null) {
    localStorage.setItem("userList", JSON.stringify([]));
  }

  const userList = JSON.parse(localStorage.getItem("userList"));

  userList.push(newUser);

  localStorage.setItem("userList", JSON.stringify(userList));

  // 회원가입 완료 메시지
  alert("Register Sucess!");
  // 페이지 이동
  // window.location.href = "이동페이지";
}

// 2. 회원가입 내용 체크 함수 만들기
function checkJoinFields() {
  // id
  // username
  // email
  // password
  // confirm-password

  const usernameElement = document.getElementById("username");
  const emailElement = document.getElementById("email");
  const passwordElement = document.getElementById("password");
  const confirmPasswordElement = document.getElementById("confirm-password");

  // username이 없으면 안됨
  if (usernameElement.value == "") {
    alert("username을 입력해주세요.");
    usernameElement.focus();
    return false;
  }
  // email이 없으면 안됨
  if (emailElement.value == "") {
    alert("email을 입력해주세요");
    emailElement.focus();
    return false;
  }
  // password가 없으면 안됨
  if (passwordElement.value == "") {
    alert("password를 입력해주세요");
    passwordElement.focus();
    return false;
  }
  // confirm-password가 없으면 안됨
  if (confirmPasswordElement.value == "") {
    alert("confirmPassword를 입력해주세요");
    confirmPasswordElement.focus();
    return false;
  }
  // password와 confirm-password가 동일해야함
  if (passwordElement.value != confirmPasswordElement.value) {
    alert("password와 confirmPassword가 다릅니다.");
    confirmPasswordElement.focus();
    return false;
  }

  // 모두 통과함
  return true;
}

// 로그인하기

// 1. 로그인 버튼 함수 만들기
function login() {
  const checkResult = checkLoginFields();

  if (!checkResult) {
    return;
  }

  const data = localStorage.getItem("userList");
  const usernameElement = document.getElementById("loginUsername");
  const passwordElement = document.getElementById("loginPassword");

  if (
    data.includes(usernameElement.value) &&
    data.includes(passwordElement.value)
  ) {
    alert("Login Sucess!");
    // window.location.href("#");
    return true;
  }
  if (!data.includes(usernameElement.value)) {
    alert("Wrong username!");
    usernameElement.focus();
    return;
  }
  if (!data.includes(passwordElement.value)) {
    alert("Wrong password!");
    passwordElement.focus();
    return;
  }
}
// 2. 로그인 내용 체크 함수 만들기
function checkLoginFields() {
  const usernameElement = document.getElementById("loginUsername");
  const passwordElement = document.getElementById("loginPassword");
  // username이 비어있으면 안됨
  if (usernameElement.value == "") {
    alert("username을 입력해주세요.");
    usernameElement.focus();
    return false;
  }
  // password가 비어있으면 안됨
  if (passwordElement.value == "") {
    alert("password를 입력해주세요.");
    passwordElement.focus();
    return false;
  }

  return true;
}
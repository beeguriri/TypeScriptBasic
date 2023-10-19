// @ts-check
// js doc과 ts-check로 typescript 효과 줄 수 있음

// api url
var url = 'https://jsonplaceholder.typicode.com/users';

// dom
var username = document.querySelector('#username');
var email = document.querySelector('#email');
var address = document.querySelector('#address');

// user data
var user = {};

/**
 * 속성과 속성의 타입까지 제공 됨
 * 실행 전에 vsCode 상에서 에러 확인 가능 함
 * (기존에는 console.log로 확인 했음)
 * @typedef {object} Address
 * @property {string} street
 * @property {string} address
 */
/**
 * @typedef {object} User
 * @property {string} name
 * @property {string} email
 * @property {Address} address
 */

/**
 * @returns {Promise<User>}
 */

function fetchUser() {
  return axios.get(url);
}

fetchUser().then(function (response) {
  response.address.address;
});

function startApp() {
  // axios
  //   .get(url)
  fetchUser()
    .then(function (response) {
    //   console.log(response);
      user = response.data;
      // TODO: 이름, 이메일, 주소 표시하기
      console.log(user);
      username.innerHTML = user[0].name;
      email.innerHTML = user[0].email;
      address.innerHTML = user[0].address.street;  
    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();
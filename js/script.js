//필요한 요소들 가져오기
const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");

inputBox.onkeyup = () => {
    let userData = inputBox.value; //사용자 입력값
    if (userData.trim() != 0) { //값이 공백이 아닐 때
        addBtn.classList.add("active"); // 버튼 활성화 = 클래스에 액티브 추가
    } else {
        addBtn.classList.remove("active"); // 내용이 공백일땐 class액티브 꺼짐
    }
}

// 사용자가 버튼을 클릭한 경우
addBtn.onClick = () => {
    let userData = inputBox.value; //사용자 입력값 **** 마지막에 추가 
    let getLocalStorage = localStorage.getItem("New To do"); //로컬 저장소 가져오기
    if (getLocalStorage == null) { //로컬스토리지가 null 이면
        listArr = []; // 빈 배열 만듦
    } else {
        listArr = JSON.parse(getLocalStorage); // json 문자열을 js 개체로 변환
    }
    listArr.push(userData); // 사용자 데이터 추가 : "도리월드!"--> userData로 변경
    localStorage.setItem("New To do", JSON.stringify(listArr)); // js 개체를 json 문자열로 변환
    showTasks(); //콜 showTasks 함수
}

function showTasks() {
    let getLocalStorage = localStorage.getItem("New Todo"); // 로컬저장소 가져오기
    if (getLocalStorage == null) { //로컬스토리지가 null 이면
        listArr = []; // 빈 배열 만듦
    } else {
        listArr = JSON.parse(getLocalStorage); // json 문자열을 js 개체로 변환
    }
    let newLiTag = '';
    listArr.forEach((element, index) => {
        newLiTag = `<li> ${element} <span><img src="imgs/trash_icon.png" alt="삭제" /></span>
      </li>`;
    });
    todoList.innerHTML = newLiTag //추가 뉴 li태그 를 ul안에
}
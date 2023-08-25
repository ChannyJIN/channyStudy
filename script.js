document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("taskInput");
  const addTaskButton = document.getElementById("addTask");
  const removeAllButton = document.getElementById("removeTask");
  const taskList = document.getElementById("taskList");
  const menu = document.querySelector(".menu");
  let selectedItem = null; // 선택된 항목을 저장하는 변수

  // 할 일 목록을 클릭했을 때 메뉴 표시
  taskList.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
      selectedItem = e.target; // 선택된 항목 저장
      // 메뉴가 클릭된 리스트 아이템 위치에 나타나도록 위치 조절
      menu.style.display = "block";
      menu.style.left = e.clientX + "px";
      menu.style.top = e.clientY + "px";
    }
  });

  // 다른 곳을 클릭하면 메뉴를 숨김
  document.addEventListener("click", function (e) {
    if (!menu.contains(e.target) && e.target.tagName !== "LI") {
      menu.style.display = "none";
    }
  });

  // 메뉴 내부 버튼의 클릭 이벤트 처리
  document.getElementById("delete").addEventListener("click", function () {
    // 삭제 기능 구현
    if (selectedItem) {
      selectedItem.remove();
      selectedItem = null; // 선택 항목 초기화
      menu.style.display = "none"; // 메뉴 숨기기
    }
  });
  document.getElementById("complete").addEventListener("click", function () {
    // 완료 기능 구현
    menu.style.display = "none"; // 메뉴 숨기기
    if (selectedItem) {
      selectedItem.classList.toggle("completed"); // completed 클래스를 추가 또는 제거
      selectedItem = null; // 선택 항목 초기화
      menu.style.display = "none"; // 메뉴 닫기
    }
  });

  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      const taskItem = document.createElement("li");
      taskItem.textContent = taskText;
      taskList.appendChild(taskItem);
      taskInput.value = "";
    }
  }

  // Enter 키 입력 시 할 일 추가
  taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });

  // "추가" 버튼 클릭 시 할 일 추가
  addTaskButton.addEventListener("click", function () {
    addTask();
  });

  // "초기화" 버튼 클릭 시 모든 할 일 삭제
  removeAllButton.addEventListener("click", function () {
    taskList.innerHTML = ""; // 모든 자식 요소 삭제
  });
});

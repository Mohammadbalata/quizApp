let name = "";
    let qustionNumber = 0;
    let mark = 0;
    let namesAndMarkArr = [];
    let qustions = [
      {
        qustionBody: "What is the capital of France?",
        first: "London",
        second: "Paris",
        third: "Berlin",
        forth: "Madrid",
        correctAnswer: 1,
      },
      {
        qustionBody: "What is the capital of France?",
        first: "London",
        second: "Paris",
        third: "Berlin",
        forth: "Madrid",
        correctAnswer: 4,
      },
      {
        qustionBody: "What is the capital of France?",
        first: "London",
        second: "Paris",
        third: "Berlin",
        forth: "Madrid",
        correctAnswer: 4,
      },
      {
        qustionBody: "What is the capital of France?",
        first: "London",
        second: "Paris",
        third: "Berlin",
        forth: "Madrid",
        correctAnswer: 4,
      },
      {
        qustionBody: "What is the capital of France?",
        first: "London",
        second: "Paris",
        third: "Berlin",
        forth: "Madrid",
        correctAnswer: 4,
      },
      {
        qustionBody: "What is the capital of France?",
        first: "London",
        second: "Paris",
        third: "Berlin",
        forth: "Madrid",
        correctAnswer: 4,
      },
      {
        qustionBody: "What is the capital of France?",
        first: "London",
        second: "Paris",
        third: "Berlin",
        forth: "Madrid",
        correctAnswer: 4,
      },
      {
        qustionBody: "What is the capital of France?",
        first: "London",
        second: "Paris",
        third: "Berlin",
        forth: "Madrid",
        correctAnswer: 4,
      },
      {
        qustionBody: "What is the capital of France?",
        first: "London",
        second: "Paris",
        third: "Berlin",
        forth: "Madrid",
        correctAnswer: 4,
      },
      {
        qustionBody: "What is the capital of France?",
        first: "Lonssssssssdon",
        second: "Paris",
        third: "Berlin",
        forth: "Madrid",
        correctAnswer: 4,
      },
    ];
    
    getFromStorage();
    showHighestMark();

    function showQustionOnThePage(qus) {
      if (qus < qustions.length) {
        document.getElementById("question-area").innerHTML = "";

        let content = `

    <div id="mydiv" class="question-container" >
        <h2 class="question">${qustions[qus].qustionBody}</h2>
        <ul class="answer-options">
          <li class="answer-option">
            <input onclick="showNextBtn()" type="radio" id="answer-option-1" name="answer" value="A">
            <label for="answer-option-1">${qustions[qus].first}</label>
          </li>
          <li class="answer-option">
            <input onclick="showNextBtn()" type="radio" id="answer-option-2" name="answer" value="B">
            <label for="answer-option-2">${qustions[qus].second}</label>
          </li>
          <li class="answer-option">
            <input onclick="showNextBtn()" type="radio" id="answer-option-3" name="answer" value="C">
            <label for="answer-option-3">${qustions[qus].third}</label>
          </li>
          <li class="answer-option">
            <input onclick="showNextBtn()" type="radio" id="answer-option-4" name="answer" value="D">
            <label for="answer-option-4">${qustions[qus].forth}</label>
          </li>
        </ul>
        <input type="button" name="" id="next-btn" onclick="forNextbtn()" value="Next">
      </div>
    
    `;
        document.getElementById("question-area").innerHTML = content;
        document.getElementById("next-btn").style.visibility = "hidden";
        document.getElementById("question-num").innerHTML = `Qustion number ${
          qustionNumber + 1
        }`;
      }
    }

    function showHighestMark() {
      let high = namesAndMarkArr.sort(function (a, b) {
        return b[0] - a[0];
      })[0];
      if (high != undefined) {
        document.getElementById(
          "highest-mark"
        ).innerHTML = `highest mark is ${high[0]} for ${high[1]}`;
      }
    }

    document
      .getElementById("submit-btn")
      .addEventListener("click", function () {
        name = document.getElementById("name-input").value;
        if (name != "") {
          showQustionOnThePage(qustionNumber);
        }
      });

    function showNextBtn() {
      document.getElementById("next-btn").style.visibility = "";
    }

    function forNextbtn() {
      if (qustionNumber < qustions.length) {
        if (checkTheAnswer(qustions[qustionNumber].correctAnswer)) {
          mark++;
        }
        qustionNumber++;
        if (qustionNumber == 10) {
          document.getElementById(
            "result"
          ).innerHTML = `Your result is ${mark}`;
          namesAndMarkArr.push([mark, name]);
          updatLocalStorage();
          document.getElementById("try-again-btn").style.visibility = "";
          qustionNumber = 0;
          mark = 0;
        }
        showQustionOnThePage(qustionNumber);
      }
    }

    function checkTheAnswer(correct) {
      return document.getElementById(`answer-option-${correct}`).checked;
    }

    // =========== updating data in local storage =================
    function updatLocalStorage() {
      let namesAndMarkString = JSON.stringify(namesAndMarkArr);
      localStorage.setItem("namesAndMark", namesAndMarkString);
    }
    
    function getFromStorage() {
      namesAndMarkArr = JSON.parse(localStorage.getItem("namesAndMark")) ?? [];
    }
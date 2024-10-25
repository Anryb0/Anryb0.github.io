let answers = ['2','2','18','16','2','46','3','1','5','13'];
let nameLocalStorage = 'localStorageIvanovIvan';
function Check() {
    var correct = 0;
    var totalPoints = 10;
    var grade;
    for(let i=1;i<=answers.length;i++)
    {
        let q = document.getElementById('q' + i);
        let a = document.getElementById('a' + i);
        if (a.value == answers[i-1]) {
            q.style.border = '7px solid green ';
            q.style.borderRadius = "5px";
            correct++;
            var cells = q.getElementsByTagName('td');
            for (var s = 0; s < cells.length; i++) {
                cells[s].style.border = '3px solid green';
                cells[s].style.borderRadius = "5px";
            }
        }
        else {
            q.style.border = '7px solid red';
            q.style.borderRadius = "5px";
            var cells = q.getElementsByTagName('td');
            for (var s = 0; s < cells.length; i++) {
                cells[s].style.border = '3px solid red';
                cells[s].style.borderRadius = "5px";
            };  
        }
    }   
    if (correct >= 9) {
        grade = 5;
    } else if (correct >= 7) {
        grade = 4;
    } else if (correct >= 5) {
        grade = 3;
    } else {
        grade = 2;
    }
    var resultText = "Результат: " + correct + " из " + totalPoints + " баллов. Отметка: " + grade;
    var resultElement = document.getElementById("result");
    resultElement.innerText = resultText;
    resultElement.style.display = "block";
}
function Save() {
    if (typeof (Storage) !== "undefined") {
        console.log("Local Storage доступен.");
    } else {


        alert("Local Storage не поддерживается.")
        return;
    }


    //Создаем  объект в котором соберем ответы пользователя и сохраним время сохранения
    let object = {
        userAnswers: [],
        savedTime: null
    };
    //собирает текущие ответы
    for (let i = 0; i < answers.length; i++)
        //получаем ссылку на объект input с ответом пользователя
        object.userAnswers[i] = document.getElementById('a' + (i + 1)).value;


    //в свойство объекта savedTime сохраняем текущее время
    object.savedTime = new Date();
    console.log(object)
    //сохраняем объект в ввиде JSON строки в локальном хранилище браузера
    localStorage.setItem(nameLocalStorage, JSON.stringify(object));

}

function Load() {
    if (typeof (Storage) !== "undefined") {
        console.log("Local Storage доступен.");
    } else {


        alert("Local Storage не поддерживается.")
        return;
    }


    //получение JSON данных из хранилища браузера
    const temp = localStorage.getItem(nameLocalStorage);
    console.log(temp);
    //если в переменной temp null, это означает что в хранилище нет данных с таким ключом
    if (temp != null) {
        let object;
        try {
            object = JSON.parse(temp);
            console.log(object);
        }
        catch {
            console.error('Ошибка парсирования JSON');
            return;
        }
        for (let i = 0; i < object.userAnswers.length; i++) {
            document.getElementById('a' + (i + 1)).value = object.userAnswers[i];
        }
    }
    else alert('Нет сохранений с таким именем')
}
info = document.getElementById("info");
let i = 0;
function tick() {
    i++;
    console.log(i);
    if (i == 30) {
        Save();
        info.innerText="*сохранено*"
        i = 0;
    }
    if (i == 2) {
        info.innertext=""
    }
}
let si = setInterval(tick, 1000);

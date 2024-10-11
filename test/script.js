function Check() {
    let answers = ['2','2','18','16','2','46','3','1','5','13']
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

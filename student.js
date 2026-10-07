function calculateResult() {

    let name = document.getElementById("studentName").value;

    let python = Number(document.getElementById("python").value);
    let java = Number(document.getElementById("java").value);
    let dbms = Number(document.getElementById("dbms").value);
    let html = Number(document.getElementById("html").value);
    let css = Number(document.getElementById("css").value);

    if (name === "") {
        alert("Please enter student name");
        return;
    }

    let total = python + java + dbms + html + css;

    let percentage = (total / 500) * 100;

    let result;

    if (
        python >= 35 &&
        java >= 35 &&
        dbms >= 35 &&
        html >= 35 &&
        css >= 35
    ) {
        result = "PASS";
    } else {
        result = "FAIL";
    }

    let grade;

    if (percentage >= 90) {
        grade = "A+";
    } else if (percentage >= 80) {
        grade = "A";
    } else if (percentage >= 70) {
        grade = "B";
    } else if (percentage >= 60) {
        grade = "C";
    } else if (percentage >= 50) {
        grade = "D";
    } else {
        grade = "F";
    }

    document.getElementById("result").innerHTML = `
        <h2>Student Result</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Total Marks:</b> ${total} / 500</p>
        <p><b>Percentage:</b> ${percentage.toFixed(2)}%</p>
        <p><b>Grade:</b> ${grade}</p>
        <p><b>Result:</b> ${result}</p>
    `;
}
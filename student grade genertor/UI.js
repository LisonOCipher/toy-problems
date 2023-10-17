
const userInterfaceModule = (function () {

    const studentMarksInput = document.getElementById("studentMarks");
    const calculateButton = document.getElementById("calculateButton");
    const resultDiv = document.getElementById("result");

    calculateButton.addEventListener("click", () => {
        
        const studentMarks = parseFloat(studentMarksInput.value);
        
        const grade = gradesModule.calculateGrade(studentMarks);

        resultDiv.textContent = `Grade: ${grade}`;
    });
})();

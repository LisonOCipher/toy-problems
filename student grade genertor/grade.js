const gradesModule = (function () {
    
    function calculateGrade(studentMarks) {
        if (studentMarks > 79) {
            return "A";
        } else if (studentMarks >= 60) {
            return "B";
        } else if (studentMarks >= 50) {
            return "C";
        } else if (studentMarks >= 40) {
            return "D";
        } else {
            return "E";
        }
    }

    
    return {
        calculateGrade
    };
})();

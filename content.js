const calcTotalTip = (total, totalPercent ) => {
    const tip = total * totalPercent
    return total + tip;
} 

const studentNumber = (boys, girls) => {
    const totalStudent = boys + girls
    return boys + totalStudent;
}

module.exports = {calcTotalTip, studentNumber,};
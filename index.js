const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
]

function win(element, value, record){
    console.log(element['result'])
    return (element['result'] === 'W')
}


function superbowlWin(record) {
    const winYear = record.find(element => element['result'] ==='W')
    return winYear ? winYear['year'] : undefined 
}
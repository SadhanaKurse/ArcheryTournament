let countryList = [{
    name: "Gyrhuna",
    player1: {
        name:"János Diák",
        score:[]
        // score:["a","a","a","a","b"]
    },
    player2: {
        name:"Süsü",
        score:[]
        // score:["b","b","b","a","c"]
    },
    scoreList:[],
    score: 0
}, {
    name: "Achni",
    player1: {
        name:"Meilong",
        score:[]
        // score:["c","c","a","a","a"]
    },
    player2: {
        name:"Tianlong",
        score:[]
        // score:["d","d","d","a","b"]
    },
    scoreList:[],
    score: 0
}, {
    name: "Bathar",
    player1: {
        name:"Pakhangba",
        score:[]
        // score:["e","e","a","a","e"]
    },
    player2: {
        name:"Poubi Lai Paphal",
        score:[]
        // score:["f","f","a","a","f"]
    },
    scoreList:[],
    score: 0
}]

let round = 0, bonus = 2;
let circleList = {
    a: 5,
    b: 4,
    c: 3,
    d: 2,
    e: 1,
    f: 0
}



function generateRandomScore() {
    const max = Object.keys(circleList).length;
    return Object.keys(circleList)[Math.floor(Math.random() * max)]
}

function startRound(participants, roundScore) {
    for (let i = 0; i < participants.length; i++) {

        let score1 = circleList[generateRandomScore()]
        // let score1 = circleList[participants[i].player1.score[i]]
        participants[i].player1.score.push(score1)
        participants[i].score += score1

        let score2 = circleList[generateRandomScore()]
        // let score2 = circleList[participants[i].player2.score[i]]
        participants[i].player2.score.push(score2)
        participants[i].score += score2
        participants[i].score += (2 * roundScore)
        
        if (score1 === score2) {
            participants[i].score += bonus
        }
        
        participants[i].scoreList.push(participants[i].score)
        
    }
    return participants
}

function startGame() {

    while (!(countryList.filter((el) => el.score > 60).length)) {
        countryList = startRound(countryList, round);
        round++
    }
    return countryList.reduce(
        (prev, current) => {
            return prev.score > current.score ? prev : current
        }
    )
}

$( document ).ready(function() {
   let winner = startGame()
    let tableHeading = "", string = "",table2 = ""
    for(let i=0;i<countryList.length;i++){
        tableHeading = "<tr><th>Round</th>"
        string += '<tr>'
        string += "<th>" + countryList[i].name +"</th>"
        table2 += "<tr><th>" + countryList[i].name +"</th>"
        for(let j=0;j<countryList[i].player1.score.length;j++){
            
            tableHeading +=  " <th>" + (j+1)  +"</th>"
            string +=  " <td>" + countryList[i].scoreList[j]  +"</td>"
            table2 +=  " <td>" + countryList[i].player1.score[j]+", "+countryList[i].player2.score[j]  +"</td>"
        }
        string += "</tr>"
        table2+= "</tr>"
    }
    tableHeading += "</tr>"
    $('.heading').append(tableHeading)
    $('#tdContent').append(string)
    $('#tdContent2').append(table2)
    $('#mainDiv').append("And the winner is "+winner.name)
});

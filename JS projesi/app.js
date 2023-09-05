let teamOneScore = document.getElementById('score1')
let teamTwoScore = document.getElementById('score2')
let text = document.getElementById('text')
let oneScore = 0
let twoScore = 0

var i = 0;
var txt = ''; 
var speed = 50;

function typeWriter() {
    if (i === 0)
        document.getElementById("text").innerHTML = '';
    if (i < txt.length) {
        document.getElementById("text").innerHTML += txt.charAt(i);
        i++;

        setTimeout(typeWriter, speed);
    }
}


let mesaj1 = {
    mesaj: 'İyi akşamlar Ben Mehmet bu akşam sizlere Fener Cimbom maçını sunacagım'
}

let mesaj2 = {
    mesaj: 'Fener 2.golü ATTI'
}

let mesaj3 = {
    mesaj: 'Fener durmak bilmiyor... 3. gol geldi'
}
let mesaj4 = {
    mesaj: 'Galata 1 Gol ATTI'
}
let mesaj5 = {
    mesaj: 'Galatasarayın golüyla berabere oldular'
}
let mesaj6 = {
    mesaj: 'Fenerbahcenin goluyla berabere oldular'
}

function galata(){

    if(teamTwoScore.innerHTML<4){
        txt = mesaj4.mesaj
        i = 0;
        typeWriter(); 
    }
    if (teamOneScore.innerHTML == teamTwoScore.innerHTML) {
        txt = mesaj5.mesaj
        i = 0;
        typeWriter(); 
    }
    
}

function fener() {
    if (teamOneScore.innerHTML ==1) {
        txt = mesaj1.mesaj
        i = 0;
        typeWriter(); 
    }
  
    if (teamOneScore.innerHTML == 2) {
        txt = mesaj2.mesaj
        i = 0;
        typeWriter();
    }
    if (teamOneScore.innerHTML == 3) {
        txt = mesaj3.mesaj
        i = 0;
        typeWriter();
    }

}



function increase() {
    oneScore++
    teamOneScore.innerText = oneScore
    fener()
}
function decrease() {
    if (oneScore > 0)
        oneScore--
    teamOneScore.innerText = oneScore

}


// second team  score
function increasetwo() {
    twoScore++
    teamTwoScore.innerText = twoScore
    galata()
}
function decreasetwo() {
    if (twoScore > 0)
        twoScore--
    teamTwoScore.innerText = twoScore
}



function direkAtaOne() {
    let n = prompt('Bir sayı giriniz')
    n = Number(n)
    if (isNaN(n)) {
        alert('lütfen gecerli bir sayı giriniz')
        n = 0
    }
    oneScore = n
    teamOneScore.innerText = oneScore
}

function direkAtaTwo() {
    let n = prompt('Bir sayı giriniz')
    n = Number(n)
    if (isNaN(n)) {
        alert('lütfen gecerli bir sayı giriniz')
        n = 0
    }
    twoScore = n
    teamTwoScore.innerText = twoScore
}



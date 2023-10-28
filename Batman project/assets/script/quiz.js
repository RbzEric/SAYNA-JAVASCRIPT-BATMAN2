const quizData = [
  {
      number: 1,
      question: "Quel est l’autre nom de l’Homme-Mystère ?",
      a:"Le Sphinx",
      b:"Saphir",
      c:"Le Joker",
      correct: ['a','b','c'],
  },
  {
      number: 2,
      question: "Quelle est l’ancienne profession de Harley Quinn ?",
      a:"Infirmière",
      b:"Psychiatre",
      c:"Dentiste",
      correct: "b",
  },
  {
      number: 3,
      question: "Quel est l’objet fétiche de Double Face ?",
      a:"Une pièce",
      b:"Un livre",
      c:"Un couteau",
      correct: "a",
  },
  {
      number: 4,
      question: "Qui a realisé Batman en 1966 ?",
      a:"Stanley Kubrick ",
      b:"Andy Warhol",
      c:"Leslie Martinson",
      correct: "c",
  },
  {
    number: 5,
    question: "Batman c’est aussi le nom d’une ville en...",
    a:"Turquie",
    b:"Islande",
    c:"Allemagne",
    correct: "a",
},
{
  number: 6,
  question: "Quel vilain apparaît pour la première fois dans le Batman 232 ?",
  a:"Le Pingouin",
  b:"Ra’s al Ghul",
  c:"Poison Ivy",
  correct: "a",
},
{
  number: 7,
  question: "Quelle ville Batman défend-il ?",
  a:"Gotham City",
  b:"Starling City",
  c:"Hell’s Kitchen",
  correct: "none",
},
{
  number: 8,
  question: "Tim Burton a réalisé deux Batman, qui jouait Batman ?",
  a:"Georges Clooney",
  b:"Val Kilmer",
  c:"Mickael Keaton",
  correct: "a",
},
{
  number: 9,
  question: "Dans son premier Batman (1989) Jack Nicholson jouait :",
  a:"Le Pingouin",
  b:"L’Homme Mystère",
  c:"Le Joker",
  correct: "b",
},
{
  number: 10,
  question: "Qui est Jonathan Crane ? ",
  a:"L’Épouvantail",
  b:"Le Joker",
  c:"Hugo Strange",
  correct: "a",
},
{
  number: 11,
  question: "Qui est l’interprète de Catwoman dans le nouveau  Batman de Matt Reeves (2022) ?",
  a:"Emma Watson",
  b:"Gigi Hadid",
  c:"Lola Iolani Momoa",
  d:"Zoë Kravitz",
  correct: "a",
},
{
  number: 12,
  question: "Quel est le prénom des parents du jeune Bruce Wayne ?",
  a:"Thomas et Martha",
  b:"Elaine et Georges",
  c:"Martha et James",
  correct: "b",
},
{
  number: 13,
  question: "Qui interprète le Joker en 2008 ?",
  a:"Heath Legder",
  b:"Haeth Ledger",
  c:"Heath Ledger",
  correct: "c",
},
{
  number: 14,
  question: "En quelle année Robin fait il sa première apparition ?",
  a:"1940",
  b:"1939",
  c:"1941",
  correct: "a",
},
{
  number: 15,
  question: "Qui est la fille de Batman et Catwoman (Earth - 2) ?",
  a:"Oracle Huntress",
  b:"Black Canary",
  c:"L'Epouvantail",
  correct: "a",
},
];

const quiz = document.getElementById('quiz')
const number = document.getElementById('number')
const answerElements = document.querySelectorAll('.answer')
const questionElement = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){

  deselectAnswers()

  const currentQuizData = quizData[currentQuiz]
  number.innerHTML = `${currentQuizData.number} / ${quizData.length}`
  questionElement.innerText = currentQuizData.question
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
}

function deselectAnswers() {
  answerElements.forEach(answerElement => answerElement.checked = false)
}
function getSelected(){
  let answer
  answerElements.forEach(answerElement  => {
      if(answerElement.checked){
          answer = answerElement.id
      }
  })
  return answer
}

submitBtn.addEventListener('click', () => {
  const answer = getSelected()
  if(answer){
      if (answer === quizData[currentQuiz].correct) {
          score++
      } 

      currentQuiz++

      if(currentQuiz < quizData.length) {
          loadQuiz()
      } else{ if(score <= 5 ){
        quiz.innerHTML =` <h2 class="titre"> ${score}/${quizData.length} PAS TOUT A FAIT CA...</h2>
        <p class="texte">Oula!Heureusement que le Riddler est sous le verrous...il faut que
        vous vous repassiez les films,cette fois en enlevant peut-être le 
        masque qui vous a bloqué la vie ! Aller , rien n'est perdu !</p>
        <button class="reload" onclick="location.reload()">RECOMMENCER LE QUIZ</button>` 
      }
          else if (score > 5 && score <= 10 ){
            quiz.innerHTML =` <h2 class="titre"> ${score}/${quizData.length} PAS MAL!</h2> 
            <p class="texte">Encore un peu d'entrainement avec le Chevalier Noir vous serait 
            bénéfique, mais vous pouvez marcher la tête haute vos 
            connaissances sont là. A vous de les consolider, foncez Gotham est
            votre terrain de chasse !  </p>
            <button class="reload" onclick="location.reload()">RECOMMENCER LE QUIZ</button>` 
          }

          else if (score > 10 && score <= 15 ){
            quiz.innerHTML =` <h2 class="titre"> ${score}/${quizData.length} BRAVO!</h2>
            <p class="texte">Vous êtes véritablement un super fan de l'univers de Batman !
            Comics, films, rien ne vous échapper. Bruce wayne a de quoi être fier,
            Gotham est en paix et Batman peut prendre sa retraite, vous veillez 
            aux grains ! </p>
            <button class="reload" onclick="location.reload()">RECOMMENCER LE QUIZ</button>` 

          }  
          quiz.style.display = "block";
          quiz.style.border = "1px solid white";
          quiz.style.height ="300px"
          quiz.style.borderRadius ="10px"
          quiz.style.textAlign="center";
          quiz.style.backgroundImage = "linear-gradient(80deg,#838080,#a26c14)";
          quiz.style.padding="25px 0"
          let button = document.getElementById("submit");
          button.style.display="none"
          let reload = document.querySelector('.reload')
          reload.style.backgroundImage="linear-gradient(80deg,#838080,#a26c14)"
          reload.style.width = "200px"
          reload.style.padding = "10px 0"
          reload.style.color ="#ffffff"
          reload.style.margin= "50px 0"
          let texte = document.querySelector('.texte')
          texte.style.width="80%"
          texte.style.marginLeft="100px"
          let titre =document.querySelector('.titre')
          titre.style.textDecoration ="underline"

      }
  }
 
})

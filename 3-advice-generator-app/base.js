const adviceIdElement = document.querySelector('#advice-id');
const adviceContentElement = document.querySelector('#advice');

const adviceGeneratorButton =
document.querySelector ('#advice-generator-button');


generateAdvice();

adviceGeneratorButton.addEventListener('click', generateAdvice); 



function generateAdvice() {

}
fetch('https://api.adviceslip.com/advice').then(function(response) {
    return response.json();

}).then(function(advice) {
   
   console.log(advice);
   adviceIdElement,textcontent = advice.slip.id;
   adviceContentElement.textContent = advice.slip.id;

})

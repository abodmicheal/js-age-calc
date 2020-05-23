//geting click and refresh
let click = document.getElementById('buttonclick');
let refresh = document.getElementById('buttonrefresh');
//event listener for click and refresh
click.addEventListener('click' , clickevent);
refresh.addEventListener('click' , refreshevent);
//callback for events
//for click
function clickevent() {
  //collect user age
  let yearofbirth = prompt('Input Your Year Of Birth To Get Age or Input Age To Get Year Of Birth');
  console.log(yearofbirth);
  //calculate age
  let yourage = 2020 - yearofbirth;
  //create element
  let div = document.createElement('div');
  //add id
  div.id = 'agecontentc'
  console.log(div);
  //add and calculate age
  let ageresult = document.createTextNode('your age or year of birth is ' +yourage);
  //add the content you want to appens to for it to display in html
  let agecontent = document.getElementById('agecontent');
  //append the ageresult to your age content in html
  agecontent.appendChild(ageresult);

}
//for event
function refreshevent() {
//lets grad the id of the age
let agetoremove = document.getElementById('agecontent');
//change text content to empty string
agetoremove.textContent = ' ';
}

const text=document.getElementById("text");
const taskdaal=document.getElementById("taskdaal");
 function addtask(){
    if(text.value===""){
        alert("you must write something");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=text.value;
        li.classList.add("li");
        taskdaal.appendChild(li);

        let span=document.createElement("span");
        span.textContent='\u00d7';
        li.appendChild(span);
    }
    text.value="";
    saveData();
 }
 taskdaal.addEventListener("click",function(e){
  
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("incomplete"); 
        e.target.classList.toggle("il");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
 },false);

//  function saveData(){
//     localStorage.setItem("data",taskdaal.innerHTML);
//  }
//  function showTask(){
//     taskdaal.innerHTML=localStorage.getItem("data");
//  }
//  showTask();

let array1=[];
    
   function saveData(){
    array1 = []; 
    let elements  = taskdaal.querySelectorAll('li');
    console.log(elements);
    let reqd_array = Array.from(elements);
    console.log(reqd_array);
    
   Array.from(elements).forEach(function(value, index){
    console.log(value.innerText);
    console.log(value.className);
    array1.push({'content': value.innerText.replace('\u00d7' ,'').trim(), 'class': value.className})
    
   })
   localStorage.setItem('todo', JSON.stringify(array1));
  } 

  function getItem(){
    let existing_lis = JSON.parse(localStorage.getItem('todo'))||[];
    let html = '';
    existing_lis.forEach(function(value){
        html+=`<li class="${value.class}">${value.content} <span>\u00d7</span> </li>`;
    })
    return html;
    
  }

//   let html= getItem();
//   taskdaal.insertAdjacentHTML('beforeend', html);
window.onload = function () {
    const html = getItem();
   
 taskdaal.innerHTML= html; }
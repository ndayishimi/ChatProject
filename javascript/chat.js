const form = document.querySelector(".typing-area"),
inputField = form.querySelector(".input-field"),
sendBtn = form.querySelector("button");
chatBox = document.querySelector(".chat-box");

form.onsubmit = (e)=>{
    e.preventDefault(); //Preventing form from submitting
}

sendBtn.onclick = ()=>{
	let xhr = new XMLHttpRequest(); //Creating XML object
   xhr.open("POST", "php/insert-chat.php", true);
   xhr.onload = ()=>{
    if(xhr.readyState === XMLHttpRequest.DONE){
        if(xhr.status === 200){
                inputField.value = "";
                scrollToFottom();
        }
    }
   }
   //We have to send the form data through ajax to php
   let formData = new FormData(form); //creating new formData Object
   xhr.send(formData); //sending the form data to php
}

chatBox.onmouseenter = ()=>{
    chatBox.classList.add("active");
}
chatBox.onmouseleave = ()=>{
    chatBox.classList.remove("active");
}

setInterval(()=>{

	let xhr = new XMLHttpRequest(); //Creating XML object
   xhr.open("POST", "php/get-chat.php", true);
   xhr.onload = ()=>{
    if(xhr.readyState === XMLHttpRequest.DONE){
        if(xhr.status === 200){
            let data = xhr.response;
            chatBox.innerHTML = data;
            if(!chatBox.classList.contains("active")){
                scrollToFottom();
            }
        }
    }
   }
      //We have to send the form data through ajax to php
   let formData = new FormData(form); //creating new formData Object
   xhr.send(formData); //sending the form data to php

}, 500);

function scrollToFottom(){
    chatBox.scrollTop = chatBox.scrollHeight;
}
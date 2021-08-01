const form = document.querySelector(".signup form"),
continueBtn = form.querySelector(".button input");
errorText = form.querySelector(".error-txt");

form.onsubmit = (e)=>{
    e.preventDefault(); //Preventing form from submitting
}

continueBtn.onclick = ()=>{
   //Ajax
   let xhr = new XMLHttpRequest(); //Creating XML object
   xhr.open("POST", "php/signup.php", true);
   xhr.onload = ()=>{
    if(xhr.readyState === XMLHttpRequest.DONE){
        if(xhr.status === 200){
            let data = xhr.response;
            let status = xhr.status;
            if(data == "success"){
                location.href = "users.php"
                console.log(data)
               
            }else{
                console.log(status);
                console.log(xhr);
                errorText.textContent = data;
                errorText.style.display = "block";
                
            }
        }
    }
   }
   //We have to send the form data through ajax to php
   let formData = new FormData(form); //creating new formData Object
   xhr.send(formData); //sending the form data to php
}
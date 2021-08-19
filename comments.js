document.addEventListener("DOMContentLoaded", function(event){
    let name = localStorage.getItem("name");
    if (name != null){
        document.querySelector("#nameinput").value = name;
    }

    let avatar = localStorage.getItem("avatar");
    if (avatar != null){
        document.querySelector("#imageLink").value = avatar;
    }
})

function checkSpam(){
    let comment = document.querySelector("#comments_input").value;
    let clComment = comment.replace(/viagra/gi, "***");
    let clearComment = clComment.replace(/XXX/gi, "***");

    addComment(clearComment);
}

function addComment(clearComment){
    let name = document.querySelector("#nameinput").value;
    let divComment = document.querySelector("#comments_space");
    let imageLink = document.querySelector("#imageLink").value;
    
    divComment.innerHTML += `<p><img src = "${imageLink}" id = "avatar" width = "70px"> ${name} : ${clearComment}</p><br>`;

    setStorage();
    
    document.querySelector("#comments_input").value = "";
    document.querySelector("#nameinput").value = "";
    document.querySelector("#imageLink").value = "";
}

function setStorage(){
    localStorage.setItem("name", "");
    let author = document.querySelector('#nameinput').value;
    if (localStorage.getItem("name") == ""){
        localStorage.setItem("name", author);
    }

    localStorage.setItem("avatar", "");
    let avatar = document.querySelector('#imageLink').value;
    if (localStorage.getItem("avatar") == ""){
        localStorage.setItem("avatar", avatar);
    }
}

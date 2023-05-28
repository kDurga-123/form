
let button=document.querySelector(".button");
button.onclick=function(){
    let name1=document.querySelector(".name").value;
    let h1=document.createElement("h1");
    h1.append("name : "+ name1);
    h1.setAttribute("class","h1");
    let userName=document.querySelector(".userName").value;
    let h2=document.createElement("h1");
    h2.append("userName :  " + userName);
    let email=document.querySelector(".email").value;
    let h3=document.createElement("h1");
    h3.append( "email :"+ email);
    
    let password=document.querySelector(".password").value;
    let div=document.createElement("div");
    let h4=document.createElement("h1");
    h4.append("password :"+password);
    div.setAttribute("class","div");

    let root=document.querySelector(".root");
    let edit = document.createElement("button");
    edit.setAttribute("class","edit");
    edit.innerHTML="edit"

    let del= document.createElement("button");
    del.setAttribute("class","del");
    del.innerHTML="Delete";

    div.append(h1,h2,h3,h4, edit,del);
    root.append(div); 
    


}
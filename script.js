let pass=document.getElementById("pass");
let img=document.getElementById("img");
let btn = document.getElementsByTagName("img")[0];
img.addEventListener("click",()=>{
    if(pass.type=="password" && pass.value){
        pass.type="text";
        img.src="./img/view.png";
    }else{
        pass.type="password";
        img.src="./img/hide.png";
    };
});
btn.addEventListener("click",()=>{
    alert("This Site Created By Md. R@TUL !");
})


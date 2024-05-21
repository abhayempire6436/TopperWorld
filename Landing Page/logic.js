let i=0;

let hamburger = document.getElementById("hamburger");
hamburger.addEventListener("click", ()=>{
    if(i%2==0){
        document.getElementById('burger').style.display = "none";
        // hamburger.style
        document.getElementById("cross").style.display="block";
        // document.getElementsByTagName("ul").style.left = "0%";
        document.querySelector(".links").style.left = "0%";
    }
    else{
        document.getElementById('burger').style.display = "block";
        // hamburger.style
        document.getElementById("cross").style.display="none";
        document.querySelector(".links").style.left = "-100%";
    }

    i++;
    console.log("click")
})


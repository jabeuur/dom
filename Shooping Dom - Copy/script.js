var likes = document.getElementsByClassName("like")
console.log(likes);
for (let i = 0; i < likes.length; i++){
    let like = likes[i];

    like.addEventListener("click", function () {
       if (like.style.color == "red") {
        like.style.color = "black";
    }else{
        like.style.color = "red";
    }
    
       });
    }
    var deletes = document.getElementsByClassName("delete");
    for (let i =0; i < deletes.length; i++) {
        let dlt = deletes[i]; 
       dlt.addEventListener("click",function(){
           dlt.parentElement.remove();
           somme();
       });
    }
    var plus = document.getElementsByClassName("plus-btn");
    for (let i = 0;i<plus.length; i++) {
        let inc = plus[i];
        inc.addEventListener("click",function(){
            inc.previousElementSibling.value ++;
            somme();

        })
    }
    var minus=document.getElementsByClassName("minus-btn");
    for (let i = 0;i<minus.length; i++) {
        let dec= minus[i];
        dec.addEventListener("click",function(){
            if(dec.nextElementSibling.value>1){
                dec.nextElementSibling.value--;
                somme();
            }
        })


    }
    var items=document.getElementsByClassName("Item")
    var final= document.getElementById("finalPrice");
    function somme(){
        let sum=0;
        for (let i = 0;i<items.length; i++) {
            let item = items[i];
            sum = sum +
            item.querySelector(".price").innerText *item.querySelector(".Quant").value;

        }
        return final.value=sum;

    }
    somme();
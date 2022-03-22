const result=document.getElementById("result");
        const range=document.getElementById("length");
        const uppercase=document.getElementById("uppercase");
        const lowercase=document.getElementById("lowercase");
        const numbers=document.getElementById("numbers");
        const characters=document.getElementById("characters");
        const btn=document.getElementById("btn");
        const generate=document.getElementById("generate");

        const capital="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const small="abcdefghijklmnopqrstuvwxyz";
        const number="0123456789";
        const symbol="!@#$%^&*()_+~\`|}{[]:;?><,./-=";
        btn.addEventListener("click",function(){
            if(result.innerHTML==""){
                alert("please generate password first");
            }
            else{
            const copy=result.innerHTML;
            navigator.clipboard.writeText(copy).then(()=>{
                alert("text is copied");
            }).catch(()=>{
                alert("error");
            })}
        })
        generate.addEventListener("click",(e)=>{
            e.preventDefault();
            let character="";
            if(!lowercase.checked&&!uppercase.checked&&!numbers.checked&&!characters.checked){
                alert("please check at least one box");
            }
            if(lowercase.checked){
                character+=small;
            }
            if(uppercase.checked){
                character+=capital;
            }
            if(numbers.checked){
                character+=number;
            }
            if(characters.checked){
                character+=symbol;
            }
            let password="";
            for(var i=0;i<range.value;i++){
                password+=character.charAt(Math.floor(Math.random()*character.length))
            }
            result.innerHTML=password;
        })

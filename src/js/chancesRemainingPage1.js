document.addEventListener('DOMContentLoaded',() => {
    const letra1 = document.getElementById('letra1_disjuncao');
    const letra2 = document.getElementById('letra2_disjuncao');
    const letra3 = document.getElementById('letra3_disjuncao');
    const letra4 = document.getElementById('letra4_disjuncao');
    const letra5 = document.getElementById('letra5_disjuncao');
    const letra6 = document.getElementById('letra6_disjuncao');
    const letra7 = document.getElementById('letra7_disjuncao');
    const letra8 = document.getElementById('letra8_disjuncao');
    const letra9 = document.getElementById('letra9_disjuncao');
    const corrigir = document.getElementById('corrigir');
    
    const chancesRemaining = document.getElementById('chances');
    var chances = 5;

    corrigir.addEventListener('click', () => {
        
        if(chances >= 1){
            if(letra1 !== null && letra1 !== ""){
                if(letra1.value === "D" || letra1.value === "d"){
                    console.log(letra1.value);
                    //colocar mensagem de sucesso
                    setTimeout(() => {
                        //tirar mensagem de sucesso
                    }, 3000);
                }else{
                    chances -= 1;
                    chancesRemaining.textContent= chances;
                }
            }else{
                chances=chances;
                chancesRemaining.textContent= chances;
            }

            if(letra2 !== null && letra2 !== ""){
                if(letra2.value === "I" || letra2.value === "i"){
                    console.log(letra2.value);
                    //colocar mensagem de sucesso
                    setTimeout(() => {
                        //tirar mensagem de sucesso
                    }, 3000);
                }else{
                    chances = chances;
                    chancesRemaining.textContent= chances;    
                }
            }else{
                chances -= 1;
                chancesRemaining.textContent= chances;
            }

            if(letra3 !== null && letra3 !== ""){
                console.log(letra3.value);
                if(letra3.value === "S" || letra3.value === "s"){
                    //colocar mensagem de sucesso
                    setTimeout(() => {
                        //tirar mensagem de sucesso
                    }, 3000);
                }else{
                    chances = chances;
                    chancesRemaining.textContent= chances;
                }
            }else{
                chances -= 1;
                chancesRemaining.textContent= chances;
            }

            if(letra4 !== null && letra4 !== ""){
                if(letra4.value === "J" || letra4.value === "j"){
                    //colocar mensagem de sucesso
                    setTimeout(() => {
                        //tirar mensagem de sucesso
                    }, 3000);
                }else{
                    chances = chances;
                    chancesRemaining.textContent= chances;
                }
            }else{
                chances -= 1;
                chancesRemaining.textContent= chances;
            }

            if(letra5 !== null && letra5 !== ""){
                if(letra5.value === "U" || letra5.value === "u"){
                    //colocar mensagem de sucesso
                    setTimeout(() => {
                        //tirar mensagem de sucesso
                    }, 3000);
                }else{
                    chances = chances;
                    chancesRemaining.textContent= chances;
                }
            }else{
                chances -= 1;
                chancesRemaining.textContent= chances;
            }

            if(letra6 !== null && letra6 !== ""){
                if(letra6.value === "N" || letra6.value === "n"){
                    //colocar mensagem de sucesso
                    setTimeout(() => {
                        //tirar mensagem de sucesso
                    }, 3000);
                }else{
                    chances = chances;
                    chancesRemaining.textContent= chances;
                }
            }else{
                chances -= 1;
                chancesRemaining.textContent= chances;
            }

            if(letra7 !== null && letra7 !== ""){
                if(letra7.value === "Ç" || letra7.value === "ç"){
                    //colocar mensagem de sucesso
                    setTimeout(() => {
                        //tirar mensagem de sucesso
                    }, 3000);
                }else{
                    chances = chances;
                    chancesRemaining.textContent= chances;
                }
            }else{
                chances -= 1;
                chancesRemaining.textContent= chances;
            }

            if(letra8 !== null && letra8 !== ""){
                if(letra8.value === "Ã" || letra8.value === "ã"){
                    //colocar mensagem de sucesso
                    setTimeout(() => {
                        //tirar mensagem de sucesso
                    }, 3000);
                }else{
                    chances = chances;
                    chancesRemaining.textContent= chances;
                }
            }else{
                chances -= 1;
                chancesRemaining.textContent= chances;
            }

            if(letra9 !== null && letra9 !== ""){
                if(letra1.value === "O" || letra1.value === "o"){
                    //colocar mensagem de sucesso
                    setTimeout(() => {
                        //tirar mensagem de sucesso
                    }, 3000);
                }else{
                    chances = chances;
                    chancesRemaining.textContent= chances;
                }
            }else{
                chances -= 1;
                chancesRemaining.textContent= chances;
            }
        }else{
            window.location.href="error.html";
        }
       
        
    });
    chancesRemaining.textContent=chances;
});
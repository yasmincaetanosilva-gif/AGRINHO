const hero = document.querySelector(".hero"); 

function mudarClima(tipo){ 
    
    const mensagem = document.getElementById("mensagem-clima");
    
    if(tipo === "sol"){ 
        
        hero.style.background = 
        "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')";
        
        hero.style.backgroundSize = "cover"; 
        hero.style.backgroundPosition = "center"; 
        
        mensagem.innerHTML = 
        "☀️ Clima ensolarado: ótima condição para o crescimento agrícola.";
    
    } 
    
    else if(tipo === "chuva"){ 
        
        hero.style.background = 
        "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1515694346937-94d85e41e6f0')";
        
        hero.style.backgroundSize = "cover"; 
        hero.style.backgroundPosition = "center";
        
        mensagem.innerHTML = 
        "🌧️ Chuva detectada: economia natural de irrigação."; 
    
    } 
    
    else if(tipo === "seca"){ 
        
        hero.style.background = 
        "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1472396961693-142e6e269027')"; 
        
        hero.style.backgroundSize = "cover";
        hero.style.backgroundPosition = "center";

        mensagem.innerHTML = 
        "🔥 Alerta de seca: recomenda-se irrigação sustentável";

    }

}

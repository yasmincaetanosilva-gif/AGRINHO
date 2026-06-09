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
 function calcularIrrigacao(){
    
    const solo = 
    document.getElementById("solo").value;
    
    const area = 
    Number(document.getElementById("area").value);
    
    let consumo; 
    let sustentabilidade; 
    let recomendacao;
    
    if(solo === "arenoso"){
        
        consumo = area * 120; 
        
        sustentabilidade = "Média"; 
        
        recomendacao = "Utilize irrigação por gotejamento para evitar desperdícios.";
     } 
     
     else if(solo === "argiloso"){
        
        consumo = area * 80;
        
        sustentabilidade = "Alta";
        
        recomendacao = 
        "O solo retém mais água, reduzindo a necessidade de irrigação."; 
    
    } 
    
    else{ 
        
        consumo = area * 60;
        
        sustentabilidade = "Muito Alta"; 
        
        recomendacao = 
        "Excelente retenção hídrica e menor consumo de água.";
     } 
     
     document.getElementById("resultado").innerHTML =
     
     ` 
     <p>💧 Água necessária: ${consumo} litros/dia</p>
     
     <p>🌱 Sustentabilidade: ${sustentabilidade}</p>

     <p>✅ ${recomendação}</p>
     
     `;
    }
    
    const solo = 
    document.getElementById("solo").value;
    
    const area = 
    Number(document.getElementById("area").value);
    
    let consumo;
    
    if(solo === "arenoso"){ 
        consumo = area * 120;
     } 
     
     else if(solo === "argiloso"){
        consumo = area * 80; 
    } 
    
    else{
         consumo = area * 60;
         } 
         
         document.getElementById("resultado")
          .innerHTML =
           `💧 Necessidade estimada: ${consumo} litros de água por dia`;
        
        } 

const container = document.getElementById("container");

const button = document.getElementById("button");

const rainbow = document.getElementById("rainbow");

 button.addEventListener("click",function(){

    let size =  prompt("Digite o tamanho do grid: max 100");


    

    do{

        size =  prompt("lembre o tamanho máximo é 100");


    }
     while(size>100)

     

  modificarTamanho(size)

      

     

     
  })

reset.addEventListener("click",function(){

    location.reload();
   })

function modificarTamanho(tamanho){

     container.innerHTML = "";
    const tamanhoContainer = container.clientWidth / tamanho;

    
    for(i=1;i<= tamanho * tamanho;i++){

    const grid = document.createElement("div");
    grid.style.backgroundColor = "white";
    grid.style.border = "solid 1px grey";
    grid.classList = "grid";
    grid.style.width = `${tamanhoContainer}px`;
    grid.style.height = `${tamanhoContainer}px`;

    container.appendChild(grid);
  
    grid.addEventListener("mouseover",function(){

      grid.style.backgroundColor = "rgba(0, 0, 0, 0.719)";
    
     })
  
}

 

}

function criarGrid(tamanho){

    const tamanhoContainer = container.clientWidth / tamanho;

    
    for(i=1;i<= tamanho * tamanho;i++){

    const grid = document.createElement("div");
    grid.style.backgroundColor = "white";
    grid.style.border = "solid 1px grey";
    grid.classList = "grid";
    grid.style.width = `${tamanhoContainer}px`;
    grid.style.height = `${tamanhoContainer}px`;

    container.appendChild(grid);
 
    let opacidade = 0.1
    
    grid.addEventListener("mouseover",function(){

      
      grid.style.backgroundColor = `rgba(0, 0, 0, ${opacidade})`;
      
      opacidade += 0.10
    
     })


  }


  




}


rainbow.addEventListener("click",function(){

  tamanho = 16;


  container.innerHTML = "";
    const tamanhoContainer = container.clientWidth / tamanho;
    
    
    for(i=1;i<= tamanho * tamanho;i++){

    const grid = document.createElement("div");
    grid.style.backgroundColor = "white";
    grid.style.border = "solid 1px grey";
    grid.classList = "grid";
    grid.style.width = `${tamanhoContainer}px`;
    grid.style.height = `${tamanhoContainer}px`;

    container.appendChild(grid);
    
    grid.addEventListener("mouseover",function(){

      const randomNumber1 = Math.random() * 100;
      const randomNumber2 = Math.random() * 100;
      const randomNumber3 = Math.random() * 100;


    
    grid.style.backgroundColor = `rgb(${randomNumber1}, ${randomNumber2}, ${randomNumber3})`;
   

      
    
     })

    }

    })


criarGrid(16);
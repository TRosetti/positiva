class ProjectCard extends HTMLElement { // Esse código cria um class ProjectCard e fala que ele herda todos os comportamentos de um elemento hmtl
    constructor() {
        super(); // construtor do HTMLElement 

        const shadow = this.attachShadow({mode: "open"}); // Se o mode estiver closed não é possivel alterar código por fora, com o open sim
        shadow.appendChild(this.build());
        shadow.appendChild(this.style());
    }

    build() {

        const componentRoot = document.createElement("div"); 
        componentRoot.setAttribute("class", "card");

        const cardImage = document.createElement('img')
        cardImage.setAttribute('class', 'card-image')
        cardImage.src = this.getAttribute('image-link') || "../../images/quem-somos-1.png";
        cardImage.alt = 'Foto Projetos'

       
        

        const cardDescription = document.createElement("div");
        cardDescription.setAttribute("class", "card-description");

        
        const cardTitle = document.createElement('h2');
        cardTitle.setAttribute("class", 'title');
        cardTitle.innerHTML = this.getAttribute('title');

        const cardCategory = document.createElement('p');
        cardCategory.setAttribute("class", 'category');
        cardCategory.textContent = this.getAttribute('category');

        cardDescription.appendChild(cardTitle)
        cardDescription.appendChild(cardCategory)


        componentRoot.appendChild(cardImage)
        componentRoot.appendChild(cardDescription)
        
    
        return componentRoot
    }

    style() {
        const style = document.createElement("style");

        style.textContent = `

        *{
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }

        strong{
            font-weight: 900;
        }

        .card{
            height: 400px;
            width: 350px;
            background-color: #141c14;
            position: relative;
            color: white;
            
        }
        
        .card::before{
            content: "";
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 10px;
            background-color: #018D0B;
           
        }

        .card img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        
        .card-description{
            width: 60%;
            text-align: center;
            background-color: #04C011;
            position: absolute;
            bottom: -30px;
            left: 50%;
            transform: translate(-50%);
            padding: 10px;
            font-weight: 900;
        }

        .card-description h2{
            font-weight: 500;
            font-size: 22px
        }

        .category{
            font-weight: 300;
            font-size: 15px;
        }

        `


        return style;
    }
      
}  

customElements.define('project-card',ProjectCard); 
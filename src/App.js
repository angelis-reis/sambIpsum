
// lore ipsum generator

import React from "react"

import Hero from "./components/Hero"

import Footer from "./components/Footer"



import "./styles/geral-style.css"


class App extends React.Component {      

    constructor() {
        super()
        this.state = {
            copia: "Copiar",

            changeHero: "hero",
            
            numeroParagrafos : 1,

            

            paragrafos : [
              "\r\n    Quem me vê sempre parado, distante, garante que eu não sei sambar. Tou me guardando pra quando o carnaval chegar. Menino quando morre vira anjo, Mulher vira uma flor no céu, Malandro quando morre vira samba.\r\n",

              "\r\n    Eu faço samba e amor até mais tarde. E tenho muito sono de manhã. Eu faço samba e amor até mais tarde, E tenho muito mais o que fazer, Escuto a correria da cidade, que alarde, Será que é tão difícil amanhecer? \r\n",

              "\r\n    Vê como é que anda aquela vida atoa, e se puder me manda uma notícia boa! Quem não gosta de samba, bom sujeito não é, É ruim da cabeça, ou doente do pé. Descobri que te amo demais. Descobri em você minha paz. Descobri sem querer a vida, verdade!\r\n ",

              "\r\n    Dei um pulo na macumba, fui saber da quizumba bolei na demanda, cantei pra Calunga, baixei a muamba, saravei a banda, meu corpo fechei Iaiá, eu fiz tudo certinho deitei para o santo, raspei, catulei me deixa de lado, cão escomungado eu tô abençoado, eu tô dentro da lei, ô Iaiá.\r\n ",

              "\r\n    Deixa a vida me levar, vida leva eu. Eu quero ver o caldeirão ferver. Põe pimenta pra arder. Já mandei botar dendê. Confusão eu não arrumo, mas também não peço arrego.\r\n ",

              "\r\n    Se eu quiser fumar eu fumo, se eu quiser beber eu bebo, pago tudo que consumo com suor do meu emprego. O samba é pai do prazer, o samba é filho da dor. O livro é igual ao samba: pode até agonizar, mas não morre. Sambar é chorar de alegria, é sorrir de nostalgia dentro da melodia. Quem samba na areia do mar é sereia! \r\n",              

              "\r\n    Quem samba não nega que o samba carrega esse dom de curar. Brasil, essas nossas verdes matas, cachoeiras e cascatas de colorido sutil; e neste lindo céu de azul anil, emolduram a Aquarela do meu Brasil! Trabalha, de janeiro a janeiro, em fevereiro cai nas delícias da folia. Mestre-sala e porta-bandeira, riscam o chão de poesia.\r\n ",

              "\r\n    Há quem fale que a vida da gente é um nada no mundo, é uma gota, é um tempo que nem dá um segundo. Há os que vão pra mata, pra cachoeira ou pro mar. Mas eu que sou do samba, vou pro terreiro sambar. Eu faço samba e amor até mais tarde.\r\n ",

              "\r\n    A amizade, nem mesmo a força do tempo irá destruir. Somos verdade, nem mesmo este samba de amor pode nos resumir. Quem samba com molejo, samba diferente! O meu lugar é caminho de Ogum e Iansã, Lá tem samba até de manhã, Uma ginga em cada andar. \r\n ",

              "\r\n    O meu lugar é caminho de Ogum e Iansã, Lá tem samba até de manhã, Uma ginga em cada andar. O meu lugar, É cercado de luta e suor, Esperança num mundo melhor, E cerveja pra comemorar. O meu lugar, tem seus mitos e seres de luz, é bem perto de Osvaldo Cruz, Cascadura, Vaz Lobo e Irajá. O meu lugar, é sorriso é paz e prazer, o seu nome é doce dizer, Madureira, lá laiá, Madureira, lá laiá.\r\n "
            ],


            ipsum : "\r\n    Quem não gosta de samba, bom sujeito não é, é ruim da cabeça, ou doente do pé.\r\n "

        }

        this.addNumber = this.addNumber.bind(this)

        this.removeNumber = this.removeNumber.bind(this)

        this.gerarIpsum = this.gerarIpsum.bind(this)

        this.menor1 = this.menor1.bind(this)

        this.copyIpsum = this.copyIpsum.bind(this)
       
    }

   

    

    addNumber() {
        this.setState( 
            function(prevState){
                return(
                    {
                        numeroParagrafos : prevState.numeroParagrafos + 1
                    }
                    
                )

        } )
    }

    menor1(){

        
        this.state.numeroParagrafos > 1 ? 

            this.removeNumber()
        :
            console.log(this.state.numeroParagrafos)
            

        
        return(
            null

        )
    }

    removeNumber() {

        

        this.setState(
            function(prevState) {

                return(
                        
                    {
                        numeroParagrafos: prevState.numeroParagrafos - 1
                    }
                )
            }
        )
        
    }

    gerarIpsum() {
      this.setState(

          function(){

            function random(max) {
              const min = 0;
              max = Math.floor(max);
              return Math.floor(Math.random() * (max - min)) + min;
            }

            let randomNumbers = []                        
            for (var i = 0; i < this.state.numeroParagrafos; i++) {
              randomNumbers.push(random(this.state.paragrafos.length))              
            }            

            let imprimirParagrafos = []
            let textoFinal = ""
            for (var i = 0; i < this.state.numeroParagrafos; i++) {
              imprimirParagrafos.push(this.state.paragrafos[randomNumbers[i]])
              
              textoFinal = textoFinal + imprimirParagrafos[i] 
            }
            
            console.log("texto final: ",typeof(textoFinal), textoFinal)

            console.log("imprimir paragrafo: ",typeof(imprimirParagrafos), imprimirParagrafos)

            return(
                {
                    ipsum: textoFinal
                }
            )
          },

          function () {
            // console.log("qual hero? ", this.state.changeHero)

            if (this.state.changeHero === "hero"){

                // console.log("foi if ")

                this.state.changeHero = "hero2"
                
                
                
            }
            else{
                // console.log("foi else ")
                this.state.changeHero = "hero"

                

            }
          }
          
          
      )
    }

    componentDidMount1() {
        setTimeout(() => {
            this.setState(
                {
                   
                   copia: "Copiar" 
                }
            )
        }, 1200)
    }
    
    copyIpsum() {
      this.setState(

          function(){

            var textField = document.createElement('textarea')
            textField.innerHTML = this.state.ipsum
            document.body.appendChild(textField)
            textField.select()
            document.execCommand('copy')
            textField.remove()
            

              return(

                {
                    copia: "Copiado"
                }
              )
          }
      )        
    }

    changeHero() {
        this.setState(

            function(){
                // console.log("indo?")
                return(
                    null
                )
            }
        )
    }

    render() {

        if (this.state.copia === "Copiado"){
            this.componentDidMount1()
        }
    
        // console.log(this.state.copia)

        return(

            <div> 
                               
                <Hero changeHero = {this.state.changeHero} />

                <div className = "principal">

                    <div className="text">


                        <p className = "texto-paragrafo">
                            Parágrafo(s)  
                        </p>


                        <p className = "texto-numero-paragrafo">
                            {this.state.numeroParagrafos}  
                        </p>


                        <div className = "botoes-add-remove">

                            <div className="" style={{ textAlign: "center", marginTop: "5%" }}>

                                <button className="icon-btn add-btn" onClick = {this.addNumber}>
                                    <div className="add-icon"></div>
                                    <div className="btn-txt">Adicionar</div>
                                </button>

                                </div>

                                <div className="" style={{ textAlign: "center", marginTop: "0px" }}>

                                <button className="icon-btn add-btn" onClick = {this.menor1}>  
                                    <div className="btn-txt">Remover</div>
                                </button>

                            </div>
                            
                        </div>

                        <button className = "button-gerar" onClick = {this.gerarIpsum} >
                            <h2>
                                Gerar 
                            </h2> 
                        </button>
                       

                    </div>



                    <div className = "ipsum-containner">               

                        <p className ="ipsum-box">
                            {this.state.ipsum}
                        </p>
                        

                    </div>

                    <div className = "button-copy-space">

                        <button className = "button" onClick = {this.copyIpsum} >
                                <h2>{
                                this.state.copia
                                }</h2> 
                        </button>
                    </div>

                </div>
                
                <Footer />

            </div>
        )
    }
}




export default App




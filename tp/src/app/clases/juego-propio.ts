import { Juego } from '../clases/juego'


export class JuegoPropio extends Juego {

    public cartas: number[];   
    public valorUser : number;
    public numero : number;
    public resultado : any;

    constructor(nombre?: any, gano?: any, jugador?: any) {
        super("BlackJack", gano, jugador);

        this.cartas = new Array<number>();
        this.valorUser=0;
        this.numero = 0;
     

    }

    jugar()
    {
        this.cartas.push( Math.floor((Math.random() * 12) + 1));      
        
    }
    
    cortar()
    {
        this.valorUser = 0;
        for (var i = 0; i < this.cartas.length; i++)
         {      
            console.log(this.valorUser);
            this.valorUser = this.valorUser  + this.cartas[i];
            console.log(this.valorUser);
            console.log(this.cartas);
            console.log(this.cartas[i]);
        }  
            if(this.valorUser < 21)
            {
                this.numero = Math.floor((Math.random() * 12) + 1);
                if(this.valorUser + this.numero == 21)
                {
                    this.resultado = "Mal, hubieras ganado";
                     return this.resultado;
                   
                }
                else{
                    if(this.valorUser + this.numero > 21){
                        this.resultado = "Bien, hubieras perdido";
                        return this.resultado;
                      
                    }
                    else{
                        this.resultado = "Mal, podias seguir";
                        return this.resultado;
                        
                    }
                }
            }     
        
       
    }

    public verificarJuego() : string {
        this.valorUser = 0;
        for (var i = 0; i < this.cartas.length; i++) {       
            this.valorUser  += this.cartas[i];
            if(this.valorUser == 21)
            {
                this.resultado = "Ganó";
                return this.resultado;
            }
            if(this.valorUser > 21)
            {
                this.resultado = "Perdió";
                return this.resultado;
                
            }
        }     
        
        
        
       
         

          
    
    }

}
import { Juego } from '../clases/juego';

export class JuegoReaccionVisual extends Juego 
{
    
    public arrayDeColores : string[] = ["Rojo","Verde","Amarillo","Azul","Naranja","Violeta"];
    public arrayDeColoresHTML : string[] = ["red","green","yellow","blue","orange","violet"];
    public resultado : number = 0;
    public color : string;
    public colorHTML : string;
    //public cantJugados : number = 0;

    constructor(usuario ? : string, juego ? : string, gano ? : boolean)
    {
        super(usuario,"Reacción visual",gano);
    }

    public generarColor()
    {
        var numero = Math.floor((Math.random() * 5) + 1);
        this.color = this.arrayDeColores[numero];
        this.gano = false;

        return this.color;
    }

    public generarColorHTML()
    {
        var numero = Math.floor((Math.random() * 5) + 1);
        this.colorHTML = this.arrayDeColoresHTML[numero];
        this.gano = false;
  
        return this.colorHTML;
    }

    public retornarColoresHTML()
    {
        return this.arrayDeColoresHTML;
    }

    public jugar(colorBtn, colorQueToco)
    {
        switch (colorBtn) 
        {
            case "red":
                if(colorQueToco == "Rojo")
                {
                    this.resultado++;
                }
                break;
            case "green":
                if(colorQueToco == "Verde")
                {
                    this.resultado++;
                }
                break;
            case "yellow":
                if(colorQueToco == "Amarillo")
                {
                    this.resultado++;
                }
                break;
            case "blue":
                if(colorQueToco == "Azul")
                {
                    this.resultado++;
                }
                break;
            case "violet":
                if(colorQueToco == "Violeta")
                {
                    this.resultado++;
                }
                break;
            case "orange":
                if(colorQueToco == "Naranja")
                {
                    this.resultado++;
                }
                break;
            default:
                break;
        }
    }

    public verificarJuego()
    {
        return this.resultado;
    }
}

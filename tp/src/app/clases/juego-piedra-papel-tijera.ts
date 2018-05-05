import { Juego } from './juego';

export class JuegoPiedraPapelTijera extends Juego {
   public numeroSecreto: number = 0;
   public   numeroIngresado = 0;
   public    resultado: any;
    constructor(nombre?: string, gano?: any, jugador?: any) {
        super("Piedra Papel Tijera", gano, jugador);

        this.numeroSecreto = Math.floor((Math.random() * 3) + 1);

    }
    /**
     *  1 = piedra
     *  2 = papel 
     *  3 = tijeras 
     */
    jugar() {
        switch (this.numeroSecreto) {
            case 1:
                if (this.numeroIngresado == 2) {
                    this.resultado = "gano";
                }
                if (this.numeroIngresado == 3) {
                    this.resultado = "perdio";
                }
                if (this.numeroIngresado == 1) {
                    this.resultado = "empato";
                }
                break;
            case 2:
                if (this.numeroIngresado == 2) {
                    this.resultado = "empato";
                }
                if (this.numeroIngresado == 3) {
                    this.resultado = "gano";
                }
                if (this.numeroIngresado == 1) {
                    this.resultado = "perdio";
                }
                break;
            case 3:
                if (this.numeroIngresado == 2) {
                    this.resultado = "perdio";
                }
                if (this.numeroIngresado == 3) {
                    this.resultado = "empato";
                }
                if (this.numeroIngresado == 1) {
                    this.resultado = "gano";
                }
                break;
            default:
            this.resultado = "error";
                break;
        }
    }

    public verificarJuego() : any {
       this.jugar();
       return this.resultado;
       
    }
}

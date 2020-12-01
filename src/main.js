export default class App {
    convertir(pesos){
        if(pesos < 2000){
            return pesos * 20.5;
        }
        else if(pesos >= 2000){
            return pesos * 22.7;
        }
    }

    costoRenta(kilometros){
        if(kilometros < 50){
            return kilometros * 3;  
        }
        else if(kilometros >= 50 && kilometros < 100 ){
            return kilometros * 5;
        }
        else if(kilometros >=  100 && kilometros < 200){
            return kilometros * 6;
        }
        else if(kilometros >= 200){
            return kilometros * 6.5;
        }
    }

    puedeCircular(dia, terminacion){
       if(terminacion == 0 && dia == 1){
           return true;
       }
       else if(terminacion == 0 && dia !== 1){
           return false;
       }
       else if(terminacion == 1 && dia == 2){
           return true;
       }
       else if(terminacion == 1 && dia !== 2){
        return false;
    }
       else if(terminacion == 2 && dia == 3 || dia == 4){
           return true;
       }
       else if(terminacion > 2 && dia < 8){
           return true;
       }
       else{
           return false;
       }
       }
    }



let app = new App();

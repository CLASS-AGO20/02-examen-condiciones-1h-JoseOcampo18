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

}

let app = new App();

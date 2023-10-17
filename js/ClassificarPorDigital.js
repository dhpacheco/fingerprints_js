// JavaScript source code
function ClassificarPorDigital() {
    var selectDedo = document.querySelector("#selectDedo");
    var distancia = Math.sqrt(Math.pow((array[row][1]), 2) + Math.pow((array[row][2]), 2));
    if (selectDedo.value > 0 && selectDedo.value <= 5) {

        if (array[row][1] >= 0 && array[row][2] >= 0 && distancia >= Raio) {
            Cartesiano1 = "UDOR";
        }

        else if (array[row][1] >= 0 && array[row][2] >= 0 && distancia < Raio) {
            Cartesiano1 = "UDIR";
        }

        else if (array[row][1] < 0 && array[row][2] >= 0 && distancia >= Raio) {
            Cartesiano1 = "RDOR";
        }

        else if (array[row][1] < 0 && array[row][2] >= 0 && distancia < Raio) {
            Cartesiano1 = "RDIR";
        }

        else if (array[row][1] < 0 && array[row][2] < 0 && distancia >= Raio) {
            Cartesiano1 = "RPOR";
        }

        else if (array[row][1] < 0 && array[row][2] < 0 && distancia < Raio) {
            Cartesiano1 = "RPIR";
        }

        else if (array[row][1] >= 0 && array[row][2] < 0 && distancia >= Raio) {
            Cartesiano1 = "UPOR";
        }
        else if (array[row][1] >= 0 && array[row][2] < 0 && distancia < Raio) {
            Cartesiano1 = "UPIR";
        }
        else {
            Cartesiano1 = "Erro";
        }
    }
    else if (selectDedo.value > 5 && selectDedo.value <= 10) {

        if (array[row][1] >= 0 && array[row][2] >= 0 && distancia >= Raio) { 
            Cartesiano1 = "RDOL";
        }

        else if (array[row][1] >= 0 && array[row][2] >= 0 && distancia < Raio) {
            Cartesiano1 = "RDIL";
        }

        else if (array[row][1] < 0 && array[row][2] >= 0 && distancia >= Raio) {
            Cartesiano1 = "UDOL";
        }

        else if (array[row][1] < 0 && array[row][2] >= 0 && distancia < Raio) {
            Cartesiano1 = "UDIL";
        }

        else if (array[row][1] < 0 && array[row][2] < 0 && distancia >= Raio) {
            Cartesiano1 = "UPOL";
        }

        else if (array[row][1] < 0 && array[row][2] < 0 && distancia < Raio) {
            Cartesiano1 = "UPIL";
        }

        else if (array[row][1] >= 0 && array[row][2] < 0 && distancia >= Raio) {
            Cartesiano1 = "RPOL";
        }
        else if (array[row][1] >= 0 && array[row][2] < 0 && distancia < Raio) {
            Cartesiano1 = "RPIL";
        }
        else {
            Cartesiano1 = "Erro";
        }

    }
    else { Cartesiano1 = "Erro" }
}
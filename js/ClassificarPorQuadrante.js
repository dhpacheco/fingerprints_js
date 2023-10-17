// JavaScript source code
function ClassificarPorQuadrante() {
    var distancia = Math.sqrt(Math.pow((array[row][1] - 0), 2) + Math.pow((array[row][2] - 0), 2));

    if (array[row][1] >= 0 && array[row][2] >= 0 && distancia >= Raio) {
        Cartesiano = "1Q/R";
    }

    else if (array[row][1] >= 0 && array[row][2] >= 0 && distancia < Raio) {
        Cartesiano = "1Q/r";
    }

    else if (array[row][1] < 0 && array[row][2] >= 0 && distancia >= Raio) {
        Cartesiano = "2Q/R";
    }

    else if (array[row][1] < 0 && array[row][2] >= 0 && distancia < Raio) {
        Cartesiano = "2Q/r";
    }

    else if (array[row][1] < 0 && array[row][2] < 0 && distancia >= Raio) {
        Cartesiano = "3Q/R";
    }

    else if (array[row][1] < 0 && array[row][2] < 0 && distancia < Raio) {
        Cartesiano = "3Q/r";
    }

    else if (array[row][1] >= 0 && array[row][2] < 0 && distancia >= Raio) {
        Cartesiano = "4Q/R";
    }
    else if (array[row][1] >= 0 && array[row][2] < 0 && distancia < Raio) {
        Cartesiano = "4Q/r";
    }
    
    else {
        Cartesiano = "Error";
    }
    }
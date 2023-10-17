// JavaScript source code

function DesenharEixo(stage, formaEixo, group) {
    
    $("#eixo").prop("disabled", true);
    

    formaEixo.addEventListener("wheel", function (e) {
        if (e.deltaY <= 0) {
            raio++;
            formaEixo.radius(raio);
            return raio;
        }
        else {
            raio--;
            formaEixo.radius(raio);
            return raio;
        }
        inputRaioEixo.value = raio;
    })

    var line1 = new Konva.Line({
        x: 0,
        y: 0,
        points: [-256, 0, 256, 0],
        stroke: 'blue',
        strokeWidth: 2,
        tension: 0,
    });

    formaEixo.on("dragmove", updateLine);

    function updateLine() {
        line1.points([formaEixo.x() - 256, formaEixo.y(), formaEixo.x() + 256, formaEixo.y()]);
    }

    var line2 = new Konva.Line({
        x: 0,
        y: 0,
        points: [0, -256, 0, 256],
        stroke: 'blue',
        strokeWidth: 2,
        tension: 0,
    });

    formaEixo.on("dragmove", updateLine2);

    function updateLine2() {
        line2.points([formaEixo.x(), formaEixo.y() - 256, formaEixo.x(), formaEixo.y() + 256]);
    }


    group.add(formaEixo, line1, line2);
    layer1.add(group);
    stage.add(layer1);
    var inputCentroEixoX = document.querySelector("#inputCentroEixoX");
    var inputCentroEixoY = document.querySelector("#inputCentroEixoY");
    inputCentroEixoX.value = 0;
    inputCentroEixoY.value = 0;

    formaEixo.on('mouseout', function () {
        document.body.style.cursor = 'default';
        inputCentroEixoX.value = formaEixo.attrs.x;
        inputCentroEixoY.value = -(formaEixo.attrs.y);
        var centroCircuX = formaEixo.attrs.x;
        var centroCircuY = -(formaEixo.attrs.y);
        CentroCircuX = centroCircuX;
        CentroCircuY = centroCircuY;

    });
    var mostraEixo = document.querySelector("#botaoMostrarEixo");
    var ocultaEixo = document.querySelector("#botaoOcultarEixo");
    mostraEixo.addEventListener("click", function () {
        formaEixo.show();
        line1.show();
        line2.show();
        layer1.draw();
        ocultaEixo.classList.remove("hidden");
        mostraEixo.classList.add("hidden");
    })

    ocultaEixo.addEventListener("click", function () {
        formaEixo.hide();
        line1.hide();
        line2.hide();
        layer1.draw();
        mostraEixo.classList.remove("hidden");
        ocultaEixo.classList.add("hidden");

    });


    var botaoFixarCircunferencia = document.querySelector("#botaoFixarCircunferencia");

    botaoFixarCircunferencia.addEventListener("click", function () {
        formaEixo.off("wheel");
        var selectDedo = document.querySelector("#selectDedo");
        if (selectDedo.value == 0) {            
            alert(mensagem);
        }
        else {
            botaoFixarCircunferencia.classList.add("disabled", true);
            $(".btnPadrao").prop("disabled", false);

            formaEixo.draggable(false);
            line1.draggable(false);
            line2.draggable(false);
            inputRaioEixo.value = raio;
            Raio = raio;
            inputRaioEixo.value = Raio;
        }
    })
}
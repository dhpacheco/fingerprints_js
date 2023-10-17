// Desenhar Tabela


function DesenharTabela() {
    var tbody = document.querySelector("#tbody");


    var tr = document.createElement("tr");
    var tdmin = document.createElement("td");
    var tdposx = document.createElement("td");
    var tdposy = document.createElement("td");
    var tdCartesiano = document.createElement("td");
    var tdClassificacao = document.createElement("td");
    var tdId = document.createElement("td");


    var idrow = "id" + (array[row][3])._id;
    tr.setAttribute("id", idrow);
    tdmin.innerHTML = array[row][0];
    tdposx.innerHTML = array[row][1];
    tdposy.innerHTML = array[row][2];
    tdId.innerHTML = idrow;
    tdCartesiano.innerHTML = Cartesiano;
    tdClassificacao.innerHTML = Cartesiano1;

    tdmin.setAttribute("align", "center");
    tdposx.setAttribute("align", "center");
    tdposy.setAttribute("align", "center");
    tdCartesiano.setAttribute("align", "center");
    tdClassificacao.setAttribute("align", "center");
    tdId.setAttribute("align", "center");


    tr.appendChild(tdmin);
    tr.appendChild(tdposx);
    tr.appendChild(tdposy);
    tr.appendChild(tdCartesiano);
    tr.appendChild(tdClassificacao);
    tr.appendChild(tdId);

    row++;

    tbody.appendChild(tr);
    

    countMin++

    var thClass = document.querySelector("#inputQuantidadeMin");
    thClass.innerHTML = countMin;
}
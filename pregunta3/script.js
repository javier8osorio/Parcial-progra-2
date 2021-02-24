function newRow(){
    var tbl = document.getElementById("part2");
    var row = tbl.insertRow(1);
    var celda1 = row.insertCell(0);
    var name = document.getElementById("name").value;
    celda1.innerHTML = name;
    var celda2 = row.insertCell(1);
    var passw = document.getElementById("passw").value;
    celda2.innerHTML= passw;
    var celda3 = row.insertCell(2);
    var client = document.getElementById("cliente").value;
    celda3.innerHTML = client;
    var test = true;
    var celda4 = row.insertCell(3);
    for (var i = 0, length=tbl.rows.length; i<length ; i++){
        if ((tbl.rows[i].cells[0].innerHTML == name) && (tbl.rows[i].cells[1].innerHTML == passw)){
            test = false;
        }
    }
    if (test == true){
        celda4.innerHTML = "Nuevo";
    } else {
        celda4.innerHTML = "Existe";
    }
}


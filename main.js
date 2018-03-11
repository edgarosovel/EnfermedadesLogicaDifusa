function actualizarValorSlider(slider){
    document.getElementById("val"+slider.id).innerText = "Valor: "+ (Number(slider.value / 100));
} 

function start(){
    contenedor = document.getElementById('contenedor-sintomas');
    for (var sintoma of sintomas){
        celda = '<div class="sintomas"><h2 class="nombre-sintoma">'+sintoma.nombre+'</h2><span class="notification" id="val'+sintoma.nombre+'">Valor: 0</span><br>';
        celda += '<div class="range"><input type="range" min="0" max="100" value="0" class="range__input" onchange="actualizarValorSlider(this)" id="'+sintoma.nombre+'"></div>';
        celda += '<p class="izquierda">'+ sintoma.escala[0] + '</p><p class="derecha">' + sintoma.escala[1] + '</p></div>';
        contenedor.innerHTML += celda;
    }
}

function empezar(){
    document.getElementById('inicio').classList.add('inicio-oculto');
}

function evaluar(){
	inputs = document.getElementsByClassName('range__input');
	valores = Array();
    datos = Array();

    //Se obtienen los valores de los síntomas del usuario
	for (var input of inputs) {
		valores.push(
            { 
                "nombre" : input.id, 
                "valor" : Number(input.value/10)
            }
        );
    }
    
    for (var x =0; x < enfermedades.length; x++){
        suma = 0;
        for (var z=0; z< valores.length; z++){
            indice = valores[z].nombre;
            suma += (enfermedades[x].sintomas[indice] != undefined)? Math.min(enfermedades[x].sintomas[indice],valores[z].valor) : 0;
        }	
        ref = Number(enfermedades[x].sumatoria);

        if ( suma > (ref - 1) && suma < (ref + 1) ){
            element = {'nombre': enfermedades[x].nombre, 'descripcion': enfermedades[x].descripcion, 'recomendacion': enfermedades[x].recomendacion};
            datos.push(element);	
        }
    }
    datos = (datos.length > 0) ? datos:null;

    alert(datos[1].nombre);
}
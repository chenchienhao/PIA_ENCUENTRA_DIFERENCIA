
var aux_ojo_iz=false;
var aux_ojo_dr=false;
var aux_circulo_iz=false;
var aux_circulo_dr=false;
var aux_cola_iz=false;
var aux_cola_dr=false;
var aux_fuego_iz=false;
var aux_fuego_dr=false;

var punto=0;

function estrella (punto) {
	if(punto==0){
		$.estrella_1.backgroundImage="/imagen/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
		$.estrella_2.backgroundImage="/imagen/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
		$.estrella_3.backgroundImage="/imagen/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
		$.estrella_4.backgroundImage="/imagen/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
	}
	if(punto==1){
		$.estrella_1.backgroundImage="/imagen/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
		$.estrella_2.backgroundImage="/imagen/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
		$.estrella_3.backgroundImage="/imagen/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
		$.estrella_4.backgroundImage="/imagen/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
	}
	if(punto==2){
		$.estrella_1.backgroundImage="/imagen/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
		$.estrella_2.backgroundImage="/imagen/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
		$.estrella_3.backgroundImage="/imagen/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
		$.estrella_4.backgroundImage="/imagen/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
	}
	if(punto==3){
		$.estrella_1.backgroundImage="/imagen/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
		$.estrella_2.backgroundImage="/imagen/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
		$.estrella_3.backgroundImage="/imagen/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
		$.estrella_4.backgroundImage="/imagen/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
	}
	if(punto==4){
		$.estrella_1.backgroundImage="/imagen/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
		$.estrella_2.backgroundImage="/imagen/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
		$.estrella_3.backgroundImage="/imagen/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
		$.estrella_4.backgroundImage="/imagen/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
		alert("¡Felicitaciones!");
	}
}
$.ojo_iz.add.addEventListener('click',function(e){
	if(aux_ojo_iz==false){
		aux_ojo_iz=true;
		aux_ojo_dr=true;
		punto=punto+1;
		$.ojo_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.ojo_dr.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});
$.ojo_dr.add.addEventListener('click',function(e){
	if(aux_ojo_dr==false){
		aux_ojo_iz=true;
		aux_ojo_dr=true;
		punto=punto+1;
		$.ojo_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.ojo_dr.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});
$.circulo_iz.add.addEventListener('click',function(e){
	if(aux_circulo_iz==false){
		aux_circulo_iz=true;
		aux_circulo_dr=true;
		punto=punto+1;
		$.circulo_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.circulo_dr.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});
$.circulo_dr.add.addEventListener('click',function(e){
	if(aux_circulo_dr==false){
		aux_circulo_iz=true;
		aux_circulo_dr=true;
		punto=punto+1;
		$.circulo_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.circulo_dr.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});
$.cola_iz.add.addEventListener('click',function(e){
	if(aux_cola_iz==false){
		aux_cola_iz=true;
		aux_cola_dr=true;
		punto=punto+1;
		$.cola_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.cola_dr.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});
$.cola_dr.add.addEventListener('click',function(e){
	if(aux_cola_dr==false){
		aux_cola_iz=true;
		aux_cola_dr=true;
		punto=punto+1;
		$.cola_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.cola_dr.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});
$.fuego_iz.add.addEventListener('click',function(e){
	if(aux_fuego_iz==false){
		aux_fuego_iz=true;
		aux_fuego_dr=true;
		punto=punto+1;
		$.fuego_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.fuego_dr.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});
$.fuego_dr.add.addEventListener('click',function(e){
	if(aux_fuego_dr==false){
		aux_fuego_iz=true;
		aux_fuego_dr=true;
		punto=punto+1;
		$.fuego_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.fuego_dr.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});
$.label_AT.add.addEventListener('click',function(e){
});
$.anterior.add.addEventListener('click',function(e){

});
$.label_SG.add.addEventListener('click',function(e){
	if(punto==4){
		var nivel_2=Alloy.createController('nivel_2').getView();
		nivel_2.open();
	}
	else{
		alert("¡Todavía no terminas el juego!");
	}
});
$.siguiente.add.addEventListener('click',function(e){
	//if(punto==4){
		var nivel_2=Alloy.createController('nivel_2').getView();
		nivel_2.open();
	//}
	//else{
	//	alert("¡Todavía no terminas el juego!");
	//}
});
$.index.open();

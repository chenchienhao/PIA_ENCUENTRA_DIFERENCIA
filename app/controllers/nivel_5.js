
var aux_pelo_iz=false;
var aux_pelo_dr=false;
var aux_nariz_iz=false;
var aux_nariz_dr=false;
var aux_ropaarriba_iz=false;
var aux_ropaarriba_dr=false;
var aux_ropaabajo_iz=false;
var aux_ropaabajo_dr=false;
var aux_dedo_iz=false;
var aux_dedo_dr=false;
var aux_cinta_iz=false;
var aux_cinta_dr=false;

var punto=0;

function estrella (punto) {
	if(punto==0){
		$.estrella_1.backgroundImage="/imagen/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
		$.estrella_2.backgroundImage="/imagen/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
		$.estrella_3.backgroundImage="/imagen/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
		$.estrella_4.backgroundImage="/imagen/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
		$.estrella_5.backgroundImage="/imagen/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
		$.estrella_6.backgroundImage="/imagen/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
	}
	if(punto==1){
		$.estrella_1.backgroundImage="/imagen/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
		$.estrella_2.backgroundImage="/imagen/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
		$.estrella_3.backgroundImage="/imagen/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
		$.estrella_4.backgroundImage="/imagen/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
		$.estrella_5.backgroundImage="/imagen/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
		$.estrella_6.backgroundImage="/imagen/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
	}
	if(punto==2){
		$.estrella_1.backgroundImage="/imagen/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
		$.estrella_2.backgroundImage="/imagen/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
		$.estrella_3.backgroundImage="/imagen/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
		$.estrella_4.backgroundImage="/imagen/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
		$.estrella_5.backgroundImage="/imagen/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
		$.estrella_6.backgroundImage="/imagen/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
	}
	if(punto==3){
		$.estrella_1.backgroundImage="/imagen/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
		$.estrella_2.backgroundImage="/imagen/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
		$.estrella_3.backgroundImage="/imagen/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
		$.estrella_4.backgroundImage="/imagen/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
		$.estrella_5.backgroundImage="/imagen/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
		$.estrella_6.backgroundImage="/imagen/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
	}
	if(punto==4){
		$.estrella_1.backgroundImage="/imagen/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
		$.estrella_2.backgroundImage="/imagen/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
		$.estrella_3.backgroundImage="/imagen/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
		$.estrella_4.backgroundImage="/imagen/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
		$.estrella_5.backgroundImage="/imagen/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
		$.estrella_6.backgroundImage="/imagen/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
	}
	if(punto==5){
		$.estrella_1.backgroundImage="/imagen/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
		$.estrella_2.backgroundImage="/imagen/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
		$.estrella_3.backgroundImage="/imagen/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
		$.estrella_4.backgroundImage="/imagen/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
		$.estrella_5.backgroundImage="/imagen/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
		$.estrella_6.backgroundImage="/imagen/Tolerancia a la frustración/Diferencias/Estrella_vacio.png";
	}
	if(punto==6){
		$.estrella_1.backgroundImage="/imagen/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
		$.estrella_2.backgroundImage="/imagen/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
		$.estrella_3.backgroundImage="/imagen/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
		$.estrella_4.backgroundImage="/imagen/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
		$.estrella_5.backgroundImage="/imagen/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
		$.estrella_6.backgroundImage="/imagen/Tolerancia a la frustración/Diferencias/Estrella_amarilla.png";
		alert("¡Felicitaciones!");
	}
}
$.pelo_iz.add.addEventListener('click',function(e){
	if(aux_pelo_iz==false){
		aux_pelo_iz=true;
		aux_pelo_dr=true;
		punto=punto+1;
		$.pelo_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.pelo_dr.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});
$.pelo_dr.add.addEventListener('click',function(e){
	if(aux_pelo_dr==false){
		aux_pelo_iz=true;
		aux_pelo_dr=true;
		punto=punto+1;
		$.pelo_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.pelo_dr.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});
$.nariz_iz.add.addEventListener('click',function(e){
	if(aux_nariz_iz==false){
		aux_nariz_iz=true;
		aux_nariz_dr=true;
		punto=punto+1;
		$.nariz_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.nariz_dr.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});
$.nariz_dr.add.addEventListener('click',function(e){
	if(aux_nariz_dr==false){
		aux_nariz_iz=true;
		aux_nariz_dr=true;
		punto=punto+1;
		$.nariz_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.nariz_dr.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});
$.ropaarriba_iz.add.addEventListener('click',function(e){
	if(aux_ropaarriba_iz==false){
		aux_ropaarriba_iz=true;
		aux_ropaarriba_dr=true;
		punto=punto+1;
		$.ropaarriba_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.ropaarriba_dr.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});
$.ropaarriba_dr.add.addEventListener('click',function(e){
	if(aux_ropaarriba_dr==false){
		aux_ropaarriba_iz=true;
		aux_ropaarriba_dr=true;
		punto=punto+1;
		$.ropaarriba_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.ropaarriba_dr.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});
$.ropaabajo_iz.add.addEventListener('click',function(e){
	if(aux_ropaabajo_iz==false){
		aux_ropaabajo_iz=true;
		aux_ropaabajo_dr=true;
		punto=punto+1;
		$.ropaabajo_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.ropaabajo_dr.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});
$.ropaabajo_dr.add.addEventListener('click',function(e){
	if(aux_ropaabajo_dr==false){
		aux_ropaabajo_iz=true;
		aux_ropaabajo_dr=true;
		punto=punto+1;
		$.ropaabajo_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.ropaabajo_dr.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});

//
$.dedo_iz.add.addEventListener('click',function(e){
	if(aux_dedo_iz==false){
		aux_dedo_iz=true;
		aux_dedo_dr=true;
		punto=punto+1;
		$.dedo_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.dedo_dr.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});
$.dedo_dr.add.addEventListener('click',function(e){
	if(aux_dedo_dr==false){
		aux_dedo_iz=true;
		aux_dedo_dr=true;
		punto=punto+1;
		$.dedo_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.dedo_dr.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});
//
$.cinta_iz.add.addEventListener('click',function(e){
	if(aux_cinta_iz==false){
		aux_cinta_iz=true;
		aux_cinta_dr=true;
		punto=punto+1;
		$.cinta_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.cinta_dr.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});
$.cinta_dr.add.addEventListener('click',function(e){
	if(aux_cinta_dr==false){
		aux_cinta_iz=true;
		aux_cinta_dr=true;
		punto=punto+1;
		$.cinta_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.cinta_dr.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});

$.label_AT.add.addEventListener('click',function(e){
	$.win.close();
});
$.anterior.add.addEventListener('click',function(e){
	$.win.close();
});
$.label_SG.add.addEventListener('click',function(e){
	if(punto==6){
		var nivel_4=Alloy.createController('nivel_4').getView();
		nivel_4.open();
	}
	else{
		alert("¡Todavía no terminas el juego!");
	}
});
$.siguiente.add.addEventListener('click',function(e){
	//if(punto==5){
		var nivel_4=Alloy.createController('nivel_4').getView();
		nivel_4.open();
	//}
	//else{
	//	alert("¡Todavía no terminas el juego!");
	//}
});


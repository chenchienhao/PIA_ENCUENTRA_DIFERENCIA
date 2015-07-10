
var aux_cara_iz=false;
var aux_cara_dr=false;
var aux_nariz_iz=false;
var aux_nariz_dr=false;
var aux_diario_iz_1=false;
var aux_diario_dr_1=false;
var aux_diario_iz_2=false;
var aux_diario_dr_2=false;

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
$.cara_iz.add.addEventListener('click',function(e){
	if(aux_cara_iz==false){
		aux_cara_iz=true;
		aux_cara_dr=true;
		punto=punto+1;
		$.cara_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.cara_dr.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});
$.cara_dr.add.addEventListener('click',function(e){
	if(aux_cara_dr==false){
		aux_cara_iz=true;
		aux_cara_dr=true;
		punto=punto+1;
		$.cara_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.cara_dr.backgroundColor="rgba(255,0,0,0.5)";
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
$.diario_iz_1.add.addEventListener('click',function(e){
	if(aux_diario_iz_1==false){
		aux_diario_iz_1=true;
		aux_diario_dr_1=true;
		punto=punto+1;
		$.diario_iz_1.backgroundColor="rgba(255,0,0,0.5)";
		$.diario_dr_1.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});
$.diario_dr_1.add.addEventListener('click',function(e){
	if(aux_diario_dr_1==false){
		aux_diario_iz_1=true;
		aux_diario_dr_1=true;
		punto=punto+1;
		$.diario_iz_1.backgroundColor="rgba(255,0,0,0.5)";
		$.diario_dr_1.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});
$.diario_iz_2.add.addEventListener('click',function(e){
	if(aux_diario_iz_2==false){
		aux_diario_iz_2=true;
		aux_diario_dr_2=true;
		punto=punto+1;
		$.diario_iz_2.backgroundColor="rgba(255,0,0,0.5)";
		$.diario_dr_2.backgroundColor="rgba(255,0,0,0.5)";
		estrella (punto);
	}
});
$.diario_dr_2.add.addEventListener('click',function(e){
	if(aux_diario_dr_2==false){
		aux_diario_iz_2=true;
		aux_diario_dr_2=true;
		punto=punto+1;
		$.diario_iz_2.backgroundColor="rgba(255,0,0,0.5)";
		$.diario_dr_2.backgroundColor="rgba(255,0,0,0.5)";
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
		var nivel_3=Alloy.createController('nivel_3').getView();
		nivel_3.open();
	//}
	//else{
	//	alert("¡Todavía no terminas el juego!");
	//}
});


var aux_ojo_iz=false;
var aux_ojo_dr=false;
var aux_circulo_iz=false;
var aux_circulo_dr=false;
var aux_cola_iz=false;
var aux_cola_dr=false;
var aux_fuego_iz=false;
var aux_fuego_dr=false;

var punto=0;

function corazon (punto) {
	if(punto==0){
		$.corazon_1.backgroundImage="/imagen/corazon.png";
		$.corazon_2.backgroundImage="/imagen/corazon.png";
		$.corazon_3.backgroundImage="/imagen/corazon.png";
		$.corazon_4.backgroundImage="/imagen/corazon.png";
	}
	if(punto==1){
		$.corazon_1.backgroundImage="/imagen/corazon_negro.png";
		$.corazon_2.backgroundImage="/imagen/corazon.png";
		$.corazon_3.backgroundImage="/imagen/corazon.png";
		$.corazon_4.backgroundImage="/imagen/corazon.png";
	}
	if(punto==2){
		$.corazon_1.backgroundImage="/imagen/corazon_negro.png";
		$.corazon_2.backgroundImage="/imagen/corazon_negro.png";
		$.corazon_3.backgroundImage="/imagen/corazon.png";
		$.corazon_4.backgroundImage="/imagen/corazon.png";
	}
	if(punto==3){
		$.corazon_1.backgroundImage="/imagen/corazon_negro.png";
		$.corazon_2.backgroundImage="/imagen/corazon_negro.png";
		$.corazon_3.backgroundImage="/imagen/corazon_negro.png";
		$.corazon_4.backgroundImage="/imagen/corazon.png";
	}
	if(punto==4){
		$.corazon_1.backgroundImage="/imagen/corazon_negro.png";
		$.corazon_2.backgroundImage="/imagen/corazon_negro.png";
		$.corazon_3.backgroundImage="/imagen/corazon_negro.png";
		$.corazon_4.backgroundImage="/imagen/corazon_negro.png";
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
		corazon (punto);
	}
});
$.ojo_dr.add.addEventListener('click',function(e){
	if(aux_ojo_dr==false){
		aux_ojo_iz=true;
		aux_ojo_dr=true;
		punto=punto+1;
		$.ojo_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.ojo_dr.backgroundColor="rgba(255,0,0,0.5)";
		corazon (punto);
	}
});
$.circulo_iz.add.addEventListener('click',function(e){
	if(aux_circulo_iz==false){
		aux_circulo_iz=true;
		aux_circulo_dr=true;
		punto=punto+1;
		$.circulo_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.circulo_dr.backgroundColor="rgba(255,0,0,0.5)";
		corazon (punto);
	}
});
$.circulo_dr.add.addEventListener('click',function(e){
	if(aux_circulo_dr==false){
		aux_circulo_iz=true;
		aux_circulo_dr=true;
		punto=punto+1;
		$.circulo_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.circulo_dr.backgroundColor="rgba(255,0,0,0.5)";
		corazon (punto);
	}
});
$.cola_iz.add.addEventListener('click',function(e){
	if(aux_cola_iz==false){
		aux_cola_iz=true;
		aux_cola_dr=true;
		punto=punto+1;
		$.cola_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.cola_dr.backgroundColor="rgba(255,0,0,0.5)";
		corazon (punto);
	}
});
$.cola_dr.add.addEventListener('click',function(e){
	if(aux_cola_dr==false){
		aux_cola_iz=true;
		aux_cola_dr=true;
		punto=punto+1;
		$.cola_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.cola_dr.backgroundColor="rgba(255,0,0,0.5)";
		corazon (punto);
	}
});
$.fuego_iz.add.addEventListener('click',function(e){
	if(aux_fuego_iz==false){
		aux_fuego_iz=true;
		aux_fuego_dr=true;
		punto=punto+1;
		$.fuego_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.fuego_dr.backgroundColor="rgba(255,0,0,0.5)";
		corazon (punto);
	}
});
$.fuego_dr.add.addEventListener('click',function(e){
	if(aux_fuego_dr==false){
		aux_fuego_iz=true;
		aux_fuego_dr=true;
		punto=punto+1;
		$.fuego_iz.backgroundColor="rgba(255,0,0,0.5)";
		$.fuego_dr.backgroundColor="rgba(255,0,0,0.5)";
		corazon (punto);
	}
});
$.index.open();

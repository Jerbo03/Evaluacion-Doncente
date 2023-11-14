// Max es el valor máximo para evaluar el docente (1-5)
// Min es el valor mínimo para evaluar el docente (1-5)
// nPr es el array de preguntas por sección en la encuesta
function evaluarUCSM(max, min, nPr) {
  	if (max>5 || min>5 || max<1 || max<1) throw("Max o min fuera de rango");
	
	min--;
	for (let i=0; i<nPr.length; i++) {
		for (let j=0; j<nPr[i]; j++) {
			let r = Math.floor(Math.random() * (max - min) + min);
			let id = `MainContent_GridViewPreguntasGral_GridViewPreguntas_${i}_RadioButtonListOpciones_${j}_${r}_${j}`;
			let rad = document.getElementById(id);
	    rad.checked = true;
	}
	}

	document.getElementById('MainContent_btnGuardar').click(); // Pasar automáticamente al siguiente
}

// E.g. evaluarUCSM(5,4,[3,4,4,4,4,1]);

// max es el valor máximo para evaluar el docente (1-4)
// min es el valor mínimo para evaluar el docente (1-4)
// n es la cantidad de preguntas
function evaluar(max, min, n) {
  max = 4 - max;
	min = 5 - min;
	for (let i=1; i<=n; i++) {
		let rad = document.getElementsByName('radio'+i);
		let r = Math.floor(Math.random() * (max - min) + min);
		rad[r].checked = true;
	}
}

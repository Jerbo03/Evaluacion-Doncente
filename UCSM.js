function evaluarUCSM(max, min) {
    if (max > 5 || min > 5 || max < 1 || min < 1) throw ("Max o min fuera de rango");
    
    min--;
    let i = 0;
    let j = 0;

    while (true) {
        let r = Math.floor(Math.random() * (max - min) + min);
        let id = `MainContent_GridViewPreguntasGral_GridViewPreguntas_${i}_RadioButtonListOpciones_${j}_${r}_${j}`;
        let rad = document.getElementById(id);

        if (rad) {
            rad.checked = true;
            j++;
        } else {
            if (j > 0) {
                i++;
                j = 0;
            } else {
                break;
            }
        }
    }

    document.getElementById('MainContent_btnGuardar').click(); // Pasar automáticamente al siguiente
}

evaluarUCSM(5, 4);

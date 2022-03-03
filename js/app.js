function showIndex() { 
    $('#titulo').typeIt();
    setTimeout( () => { 
        $('#frases').typeIt({
            strings: [
                "Los ordenadores son inútiles. Sólo pueden darte respuestas",
                "Hardware: las partes de un ordenador que pueden ser pateadas",
                "Hay dos grandes productos que salieron de Berkeley: LSD y UNIX. No creemos que esto sea una coincidencia",
                "La web es como una dominatriz. En todos los sitios que voy me encuentro pequeños botones ordenándome que me someta",
                "Cualquier idiota puede usar un ordenador. De hecho, muchos lo hacen",
                "Java es, en muchos sentidos, C++",
                "El software es como el sexo: mejor si es libre y gratis",
                "El buen código es su mejor documentación",
                "¡No me importa si funciona en tu máquina! ¡No estamos vendiendo tu máquina!",
                "Codifica siempre como si la persona que finalmente mantendrá tu código fuera un psicópata violento que sabe dónde vive"
            ],
            speed: 100,
            breakLines: false
        });
    },8000);     
}

showIndex();
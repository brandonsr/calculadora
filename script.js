
            var elegir = prompt("Seleccione 1 si elige Marte, Presione 2 si desea Jupiter" ,1,2)
            var usuario = prompt ("Cual es tu peso")
            var peso = parseFloat(usuario);
            var g_tierra = 9.8;
            var g_marte = 3.7;
            var g_jupiter = 24.8;
            var peso_final;

            if(elegir == 1){
                peso_final = peso * g_marte / g_tierra;
                peso_final = parseFloat(peso_final);
                document.write("Tu peso en Marte es: <strong>" + peso_final + "Kg</strong>");
            }
            else if(elegir == 2)
            {
                peso_final = peso * g_jupiter / g_tierra;
                peso_final = parseFloat(peso_final);
                document.write("Tu peso en Jupiter es: <strong>" + peso_final + "Kg</strong>");
            }
            else{
                peso_final = 10000000
                document.write("Tu peso es Ridiculo: <strong>" + peso_final + "Kg</strong>");
            }

/*
 * <!--Autor: Felipe Manso Corhado
 * Fecha= $(DATE)
 * Licencia: gpl30
 * Version: 1.0
 * Descripción:
 * -->
 * Copyright (C) Daw2 2019
 *
 *
 *
 * This program is free software: you can redistribute it and/or modify
 *
 * it under the terms of the GNU General Public License as published by
 *
 * the Free Software Foundation, either version 3 of the License, or
 *
 * (at your option) any later version.
 *
 *
 *
 * This program is distributed in the hope that it will be useful,
 *
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 *
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *
 * GNU General Public License for more details.
 *
 *
 *
 * You should have received a copy of the GNU General Public License
 *
 * along with this program.  If not, see <http://www.gnu.org/licenses/>
 */
function activarCasilla() {
    let obligatorios = document.getElementsByName("obligatorio");
    let rellenos = true;
    for (let i = 0; i < obligatorios.length; i++) {
        if (obligatorios[i].value.length == 0) {
            rellenos = false;
            break;
        }
    }
    if (rellenos) {
        document.getElementById("terminos").disabled = false;
    }else {
        document.getElementById("terminos").disabled = true;
    }
}
function activarEnvio() {
    if (document.getElementById("terminos").checked) {
        document.getElementById("envio").disabled=false;
    }else{
        document.getElementById("envio").disabled=true;
    }
}

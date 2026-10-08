/* =========================================================
   GAMEZONE - CONEXIÓN CON API
   ========================================================= */

/*
 * Cuando tengas creada tu API Gateway, sustituye esta URL
 * por tu Invoke URL real.
 *
 * Ejemplo:
 *
 * const API_URL =
 * "https://4pi9nayy87.execute-api.us-east-1.amazonaws.com/dev/contact";
 */

const API_URL = "";


/* ---------------------------------------------------------
   FORMULARIO
   --------------------------------------------------------- */

const form = document.getElementById("contactForm");
const messageBox = document.getElementById("message");


form.addEventListener("submit", async function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    if (!name || !email) {
        showMessage(
            "Por favor, completa todos los campos.",
            "danger"
        );

        return;
    }

    /*
     * Mientras API_URL esté vacío, solamente mostramos
     * los datos en consola.
     *
     * Esto permite probar primero la interfaz.
     */

    if (!API_URL) {

        console.log("Datos del formulario:");
        console.log({
            name: name,
            email: email
        });

        showMessage(
            "Datos preparados correctamente. La API todavía no está conectada.",
            "info"
        );

        return;
    }


    /* -----------------------------------------------------
       PETICIÓN POST A API GATEWAY
       ----------------------------------------------------- */

    try {

        const response = await fetch(API_URL, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                name: name,
                email: email
            })
        });


        const data = await response.json().catch(() => ({}));


        if (!response.ok) {

            throw new Error(
                data.message || "Error al enviar la solicitud."
            );
        }


        showMessage(
            data.message || "Solicitud recibida correctamente.",
            "success"
        );

        form.reset();


    } catch (error) {

        console.error("Error:", error);

        showMessage(
            "No se ha podido enviar la solicitud.",
            "danger"
        );
    }
});


/* ---------------------------------------------------------
   MOSTRAR MENSAJES
   --------------------------------------------------------- */

function showMessage(text, type) {

    messageBox.textContent = text;

    messageBox.className = `alert alert-${type} mt-3`;

}

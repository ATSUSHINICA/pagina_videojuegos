# GameZone

Página web de temática de videojuegos creada para prácticas de DAM.

## Estructura

```text
videojuegos/
├── index.html
├── css/
│   └── videojuegos.css
└── js/
    └── api.js
```

## Datos del formulario

El formulario recoge:

- `name`
- `email`

Actualmente `api.js` deja `API_URL` vacío para poder probar primero la interfaz.

Cuando API Gateway esté preparado, cambiar:

```javascript
const API_URL = "";
```

por la URL del endpoint:

```javascript
const API_URL =
    "https://API_ID.execute-api.REGION.amazonaws.com/dev/contact";
```

Por ejemplo, si el endpoint es el que estás utilizando en la práctica:

```javascript
const API_URL =
    "https://4pi9nayy87.execute-api.us-east-1.amazonaws.com/dev/contact";
```

Después, al enviar el formulario, el navegador realizará:

```http
POST /contact
Content-Type: application/json
```

con:

```json
{
    "name": "María",
    "email": "maria@example.com"
}
```

## Publicación

La carpeta `videojuegos` se puede subir a GitHub y publicar mediante GitHub Pages.

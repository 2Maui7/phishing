# Guía para Subir a GitHub Pages

## Paso 1: Crear Repositorio en GitHub

1. Ve a https://github.com y haz login
2. Crea un nuevo repositorio (público)
3. Nómbralo como quieras (ej: `demo-phishing-educativa`)
4. **NO inicialices con README**

## Paso 2: Subir los Archivos

Abre PowerShell en la carpeta del proyecto y ejecuta:

```powershell
# Inicializar Git (si no está inicializado)
git init

# Agregar todos los archivos necesarios
git add index.html styles.css script.js README.md

# Hacer commit
git commit -m "Demo educativa de phishing"

# Conectar con tu repositorio (reemplaza TU_USUARIO y TU_REPO)
git remote add origin https://github.com/TU_USUARIO/TU_REPO.git

# Subir a GitHub
git branch -M main
git push -u origin main
```

## Paso 3: Activar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Click en **Settings** (Configuración)
3. En el menú lateral, busca **Pages**
4. En **Source**, selecciona **main** branch
5. Click en **Save**
6. Espera 1-2 minutos

## Paso 4: Obtener tu URL

Tu sitio estará disponible en:
```
https://TU_USUARIO.github.io/TU_REPO/
```

Por ejemplo: `https://usuario123.github.io/demo-phishing-educativa/`

## Archivos que se Suben

Solo necesitas estos archivos en GitHub Pages:
- ✅ `index.html`
- ✅ `styles.css`
- ✅ `script.js`
- ✅ `README.md`

**NO subas:**
- ❌ `server.js` (no es necesario)
- ❌ `package.json`
- ❌ `node_modules/`
- ❌ `datos_capturados.txt`

## ¿Cómo Funciona?

Una vez en GitHub Pages:
1. Cualquiera puede acceder a la URL
2. Cuando ingresen datos, se enviarán directamente a tu Telegram
3. No necesitas servidor Node.js
4. Todo funciona del lado del cliente (navegador)

## Seguridad del Token

⚠️ **IMPORTANTE**: Tu token de Telegram está visible en el código fuente. Para una demostración educativa esto está bien, pero considera:

- Cambiar el token después de la demostración
- Usar un bot específico solo para esta demo
- No usar este bot para cosas importantes

## Actualizar el Sitio

Si haces cambios locales, súbelos así:

```powershell
git add .
git commit -m "Descripción del cambio"
git push
```

Los cambios aparecerán en 1-2 minutos.

## URL de Ejemplo

Si tu usuario es `juan123` y el repo es `demo-instagram`:
```
https://juan123.github.io/demo-instagram/
```

## Para tu Curso

Comparte esta URL con tus estudiantes y cuando ingresen datos (de prueba), recibirás notificaciones instantáneas en tu Telegram mostrando:
- Usuario ingresado
- Contraseña
- Fecha y hora
- Información del navegador
- Sistema operativo

---

**¿Necesitas ayuda?** Revisa que:
- El repositorio sea público
- GitHub Pages esté activado
- Los archivos estén en la rama main
- La URL sea correcta (usuario.github.io/repo/)

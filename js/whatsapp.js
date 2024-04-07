function abrirChat() {
    var numero = '1125835984'; // Reemplaza esto con el número de WhatsApp al que deseas enviar el mensaje
    var mensaje = 'Hola, ¿cómo estás?'; // Puedes personalizar este mensaje si lo deseas
    var url = 'https://wa.me/' + numero + '?text=' + encodeURIComponent(mensaje);
    window.open(url, '_blank');
}
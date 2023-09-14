const EventEmitter = require('events');

// Crear un objeto EventEmitter
const miEmitter = new EventEmitter();

// Cambiar el número máximo de escuchadores permitidos
miEmitter.setMaxListeners(20); // Por ejemplo, aumentar a 20 escuchadores

// Ahora puedes se pueden agregar más escuchadores sin recibir una advertencia

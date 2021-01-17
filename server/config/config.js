///============================
///     Puerto
///============================
process.env.PORT = process.env.PORT || 3000;

///============================
///     Entorno
///============================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

///============================
///     Vencimiento del Token
///============================

process.env.CADUCIDAD_TOKEN = "48h";


///============================
///     SEED de autentificacion
///============================

process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;

///============================
///     Google Client ID
///============================

process.env.CLIENT_ID = process.env.CLIENT_ID || '82330644769-21b53pou95j27gbdf5us2l6s4l7dnef7.apps.googleusercontent.com';
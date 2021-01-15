///============================
///     Puerto
///============================
process.env.PORT = process.env.PORT || 3000;

///============================
///     Entorno
///============================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb+srv://lod23:PHkmaSEJK0Kl5P92@nodejsudemy.99gty.mongodb.net/cafe?retryWrites=true&w=majority';
}

process.env.URLDB = urlDB;
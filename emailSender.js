const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ton-email@gmail.com', // Remplace par ton email
    pass: 'ton-mot-de-pass',    // Remplace par ton mot de passe ou un mot de passe d'application
  },
});

// Contenu de l'e-mail
let mailOptions = {
  from: 'ton-email@gmail.com',     // L'adresse d'expéditeur
  to: 'ton-email@gmail.com',       // L'adresse destinataire
  subject: 'Test de Nodemailer',
  text: 'Salut, ceci est un test d\'email envoyé avec Nodemailer !',
};

// Envoi de l'e-mail
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('E-mail envoyé : ' + info.response);
});

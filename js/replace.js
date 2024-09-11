// replace.js
const fs = require('fs');
const path = require('path');

// Caminho do arquivo HTML que será modificado
const filePath = path.join(__dirname, 'index.html');

// Leia o arquivo HTML
let htmlContent = fs.readFileSync(filePath, 'utf-8');

// Substitua os placeholders com os valores dos secrets e variáveis de ambiente
htmlContent = htmlContent
    .replace('<!--SECRET_PLACEHOLDER-->', process.env.SECRET_VALUE)
    .replace('<!--VARIABLE_PLACEHOLDER-->', process.env.VARIABLE_VALUE);

// Escreva as mudanças no arquivo HTML
fs.writeFileSync(filePath, htmlContent);

console.log('Placeholders substituídos com sucesso!');

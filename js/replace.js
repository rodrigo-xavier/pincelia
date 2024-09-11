// js/replace.js
const fs = require('fs');
const path = require('path');

// Caminho do arquivo index.html na raiz do projeto
const indexPath = path.join(__dirname, '../index.html');

// Função para substituir os valores da secret e da variável
function replaceProfileName(secret, variable) {
  // Leitura do arquivo index.html
  fs.readFile(indexPath, 'utf-8', (err, data) => {
    if (err) {
      console.error('Erro ao ler o arquivo index.html:', err);
      return;
    }

    // Substituir <span id="profile-secret"></span> pela secret e <span id="profile-variable"></span> pela variável
    let updatedContent = data.replace(
      /<span id="profile-secret"><\/span>/g,
      secret
    ).replace(
      /<span id="profile-variable"><\/span>/g,
      variable
    );

    // Escrever as alterações de volta no index.html
    fs.writeFile(indexPath, updatedContent, 'utf-8', (err) => {
      if (err) {
        console.error('Erro ao escrever o arquivo index.html:', err);
        return;
      }
      console.log('Valores substituídos com sucesso no index.html');
    });
  });
}

// Captura as variáveis de ambiente passadas pelo GitHub Actions
const secret = process.env.PROFILE_NAME_SECRET;
const variable = process.env.PROFILE_NAME_VARIABLE;

// Executa a função de substituição
replaceProfileName(secret, variable);

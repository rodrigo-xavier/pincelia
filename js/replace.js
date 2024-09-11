const fs = require('fs');
const path = require('path');

// Caminho para o arquivo index.html
const filePath = path.join(__dirname, 'index.html');

// Substitua essas variáveis com os valores reais das suas secrets e variables
const profileNameSecret = process.env.PROFILE_NAME_SECRET; // valor da secret do GitHub
const profileNameVariable = process.env.PROFILE_NAME_VARIABLE; // valor da variável do GitHub

// Função para substituir o conteúdo das tags <span>
function replaceSpanContent(content, secretValue, variableValue) {
  // Substituir o conteúdo do span com id 'secret-placeholder'
  content = content.replace(
    /<span id="secret-placeholder">.*?<\/span>/g,
    `<span id="secret-placeholder">${secretValue}</span>`
  );

  // Substituir o conteúdo do span com id 'variable-placeholder'
  content = content.replace(
    /<span id="variable-placeholder">.*?<\/span>/g,
    `<span id="variable-placeholder">${variableValue}</span>`
  );

  return content;
}

// Ler o conteúdo do index.html
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Erro ao ler o arquivo:', err);
    return;
  }

  // Substituir o conteúdo dos spans
  const updatedContent = replaceSpanContent(data, profileNameSecret, profileNameVariable);

  // Escrever o conteúdo atualizado de volta para o index.html
  fs.writeFile(filePath, updatedContent, 'utf8', (err) => {
    if (err) {
      console.error('Erro ao escrever o arquivo:', err);
    } else {
      console.log('Arquivo index.html atualizado com sucesso!');
    }
  });
});

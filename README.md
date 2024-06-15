# Firestore Features

Este é um projeto simples que demonstra como inserir e listar objetos usando o Firestore, um banco de dados NoSQL em tempo real fornecido pelo Firebase. Este projeto é escrito em HTML, CSS e JavaScript e requer a configuração do Firebase para funcionar corretamente.

## Como Usar

- **Configure o Firebase:**

Crie um projeto no Firebase Console.
Obtenha suas credenciais de configuração (apiKey, authDomain, projectId, etc.).
Substitua os campos vazios no arquivo firebase-setup.js com suas credenciais.
Adicione seus Scripts:

- **Certifique-se de incluir os seguintes scripts no seu HTML:**

```html
<script type="module" src="firebase-setup.js"></script>
<script type="module" src="firestore-features.js"></script>
```

- **Estrutura do HTML:**

O arquivo index.html contém um formulário para inserir dados de alunos e um botão para listar esses dados.

- **Estilização:**

O CSS está no arquivo styles.css e fornece uma aparência básica ao formulário e aos botões.

- **Funcionalidades:**

Os dados inseridos no formulário são adicionados ao Firestore quando o botão "Inserir" é clicado.
Ao clicar no botão "Mostrar Lista", os documentos presentes na coleção "Alunos" são listados abaixo do formulário.

**Exemplo:**

O script firestore-features.js também adiciona alguns dados de exemplo para demonstração.

## Licença

Este projeto é distribuído sob a licença MIT. Consulte o arquivo LICENSE para obter mais detalhes.
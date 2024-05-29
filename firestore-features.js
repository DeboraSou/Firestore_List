import { collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Adiciona os documentos.
let fbAddDoc = async (fbDb, jsObj, strCollectionName, fbAddDocCbFn) => {
    try {
        const docRef = await addDoc(collection(fbDb, strCollectionName), jsObj);
        fbAddDocCbFn(docRef);
    } catch (error) {
        console.log("Erro ao adicionar o documento", error);
    }
}

// Lista os documentos.
let fbListDocs = async (fbDb, collectionName, fbListDocsCbFn) => {
    const querySnapshot = await getDocs(collection(fbDb, collectionName));
    querySnapshot.forEach((doc) => {
        fbListDocsCbFn(doc);
    });
}

// Callback para inserção do documento.
let fbAddDocCbFn = (docRef) => {
    console.log("Documento escrito com ID: ", docRef.id);
}

// Callback para listar os documentos.
let fbListDocsCbFn = (doc) => {
    let documentList = document.getElementById('document-list');
    let docDiv = document.createElement('div');
    docDiv.textContent = `ID: ${doc.id}, Dados: ${JSON.stringify(doc.data())}`;
    documentList.appendChild(docDiv);
}

// Captura os dados do formulário e os inseri no Firestore.
document.getElementById('data-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    let name = document.getElementById('name').value;
    let birthDate = new Date(document.getElementById('birthDate').value);
    let age = parseInt(document.getElementById('age').value);
    let ra = parseInt(document.getElementById('ra').value);

    let student = { name, birthDate, age, ra };

    await fbAddDoc(fbDb, student, "Alunos", fbAddDocCbFn);
});

// Lista os documentos ao clicar no botão.
document.getElementById('list-docs-button').addEventListener('click', async () => {
    document.getElementById('document-list').innerHTML = ''; // Limpa a listagem antes de atualizar.
    await fbListDocs(fbDb, "Alunos", fbListDocsCbFn);
});

// Adiciona os documentos de exemplo.
let ediney = { name: 'Ediney' };
let studentDebora = { name: 'Debora', birthDate: new Date(1990, 8, 18), age: 34, ra: 21116 };
let studentGabriel = { name: 'Gabriel', birthDate: new Date(2006, 6, 15), age: 17, ra: 23117 };
let studentGustavo = { name: 'Gustavo', birthDate: new Date(2006, 4, 17), age: 17, ra: 22115 };
let studentHenrique = { name: 'Henrique', birthDate: new Date(2007, 2, 16), age: 17, ra: 24118 };
let studentJoao = { name: 'João', birthDate: new Date(2006, 4, 14), age: 18, ra: 25119 };
let course = { name: 'Desenvolvimento de Sistemas', coordinator: ediney, students: [studentDebora, studentGabriel, studentGustavo, studentHenrique, studentJoao] };

fbAddDoc(fbDb, ediney, "Professores", fbAddDocCbFn);
fbAddDoc(fbDb, studentDebora, "Alunos", fbAddDocCbFn);
fbAddDoc(fbDb, studentGabriel, "Alunos", fbAddDocCbFn);
fbAddDoc(fbDb, studentGustavo, "Alunos", fbAddDocCbFn);
fbAddDoc(fbDb, studentHenrique, "Alunos", fbAddDocCbFn);
fbAddDoc(fbDb, studentJoao, "Alunos", fbAddDocCbFn);
fbAddDoc(fbDb, course, "Cursos", fbAddDocCbFn);
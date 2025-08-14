# Projeto React Desenvolvido para Gerenciamento e Controle de Portaria

Este projeto é um painel de cadastro e visualização de transportadoras utilizando **React** com integração com uma API backend para exibição e atualização de dados em tempo real.

---

## **Funcionalidades**

- Registro de Entrada e Saída de Transportadoras.
- Exibição de uma lista de transportadoras com detalhes como motorista, placa, data de entrada e saída.
- Atualização automática dos dados em períodos determinados.
- Integração com um banco de dados MongoDB via API utilizando `axios` e ultilizando a biblioteca `prisma`.

---

## **Tecnologias Utilizadas**

- **React** - Biblioteca para construção de interfaces.
- **Node.js** - Linguagem de programação da API.
- **Express** - Biblioteca para o backend.
- **Axios** - Cliente HTTP para conexão com o backend.
- **Moment.js** - Manipulação e formatação de datas.

---

## **Estrutura do Projeto**

```
/src
│
├── /components
│   └── cadastroForm.tsx   # Componente para registrar a entrada de transportadoras na empresa
|   └── navBar.tsx # Componente para acesso de outras paginas
│
├── /service
│   └── api.ts              # Configuração da conexão com a API
|
├── /views
|   └──
│
├── App.tsx                 # Componente raiz do projeto
│
└── index.tsx               # Ponto de entrada principal
```

---

## **Como Executar o Projeto**

### 1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
```

### 2. Instale as dependências:

```bash
cd nome-do-repositorio
npm install
```

### 3. Execute o projeto:

```bash
npm run dev
ou
yarn start
```

Acesse o projeto no navegador em `http://localhost:3000/`.

---

## **Configuração da API**

No arquivo `/service/api.ts`, configure o `baseURL` com o endereço do seu backend:

```js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000' // Substitua pelo seu endpoint
});

export default api;
```

---

Desenvolvido por [Lucas Laranjeira]


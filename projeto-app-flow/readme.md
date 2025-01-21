# Podcast Manager

## Descrição
Podcast Manager é um aplicativo inspirado no estilo Netflix, projetado para organizar e exibir podcasts em vídeo. O aplicativo permite a separação de episódios em categorias e oferece filtros para facilitar a navegação e descoberta de conteúdo.

---

## Principais Funcionalidades

- **Listagem de Podcasts por Categorias**: Organiza os episódios de podcasts em diferentes seções com base nas categorias.
  - Exemplos de categorias: "Saúde", "Bodybuilder", "Mentalidade", "Humor".
- **Filtragem por Nome do Podcast**: Permite ao usuário buscar episódios de um podcast específico por meio do nome.

---

## Implementação

A aplicação utiliza uma API REST para fornecer os dados necessários ao frontend. A API retorna informações estruturadas em JSON contendo detalhes sobre os podcasts, incluindo:

- Nome do podcast.
- Nome do episódio.
- URL da imagem de capa.
- Link para o episódio em vídeo.
- Categorias associadas.

### Exemplo de Retorno da API

**Rota: GET /episodios**

Retorna uma lista completa de episódios de podcasts.

```json
[
    {
        "podcastName": "flow",
        "epdisode": "CBUM - Flow #319",
        "videoId": "pQSuQmUfS30",
        "cover": "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
        "link": "https://www.youtube.com/watch?v=pQSuQmUfS30",
        "categories": ["saúde", "esporte", "bodybuilder"]
    },
    {
        "podcastName": "flow",
        "epdisode": "RUBENS BARRICHELLO - Flow #339",
        "videoId": "4KDGTdiOV4I",
        "cover": "https://i.ytimg.com/vi/4KDGTdiOV4I/maxresdefault.jpg",
        "link": "https://www.youtube.com/watch?v=4KDGTdiOV4I",
        "categories": ["esporte", "corrida"]
    }
]
```

**Rota: GET /episodios?nome=flow**

Retorna uma lista filtrada de episódios com base no nome do podcast especificado pelo cliente.

```json
[
    {
        "podcastName": "flow",
        "epdisode": "CBUM - Flow #319",
        "videoId": "pQSuQmUfS30",
        "cover": "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
        "link": "https://www.youtube.com/watch?v=pQSuQmUfS30",
        "categories": ["saúde", "esporte", "bodybuilder"]
    }
]
```

---

## Tecnologias Utilizadas

- **Backend**:
  - API REST (Node.js, Express ou outra tecnologia similar).
  - Banco de Dados para armazenamento de informações (ex.: MySQL ou MongoDB).

- **Frontend**:
  - Framework para aplicação web (React, Vue.js, etc.).

- **Hospedagem e Deploy**:
  - Servidores na nuvem para a API e o frontend (AWS, Heroku, Vercel, etc.).

---

## Como Contribuir

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/podcast-manager.git
   ```
2. Instale as dependências do projeto:
   ```bash
   npm install
   ```
3. Execute o ambiente de desenvolvimento:
   ```bash
   npm start
   ```
4. Envie Pull Requests para melhorias ou correções de bugs.

---cd

## Autor
Criado por [Fernando Almeida]. Entre em contato em [feralm38@hotmail.com].


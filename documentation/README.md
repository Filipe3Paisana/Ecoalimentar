# Ecoalimentar

## Descrição
Este projeto foi desenvolvido durante o 4º semestre do curso de Engenharia Informática. O objetivo principal é criar um website integrado com um servidor e uma base de dados para a empresa Ecoalimentar ([Ecoalimentar](https://ecoalimentar.pt/)).

## Pré-requisitos
Antes de iniciar, certifique-se de ter o Docker instalado em seu sistema. Visite [Docker](https://www.docker.com/get-started) para instruções de instalação.

## Configuração do Ambiente
### Variáveis de Ambiente
1. Crie um arquivo chamado `.env` na pasta raiz do projeto `Ecoalimentar`.
2. Copie o seguinte conteúdo para o arquivo `.env`:
    ```
    DATABASE_USER=
    DATABASE_PASSWORD=
    DATABASE_NAME=
    POSTGRES_USER=
    POSTGRES_PASSWORD=
    POSTGRES_DB=
    ```
3. Preencha cada campo com as informações adequadas para configurar o banco de dados.

### Configuração de Scripts de Banco de Dados
A pasta `scripts` contém todos os scripts SQL necessários para criar e configurar a base de dados inicial do projeto. Durante o processo de construção do container Docker com o `docker-compose`, estes scripts são automaticamente executados para configurar a base de dados conforme definido no arquivo `docker-compose.yml`.

## Como Executar
Para iniciar o projeto, execute o seguinte comando no terminal:
```bash
docker-compose up --build

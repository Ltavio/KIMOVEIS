# KImóveis

## Descrição:

Nesse projeto foi desenvolvido um serviço de back-end responsável por gerenciar uma imobiliária. Com cadastramento de usuários, criação de categoria de imóveis, cadastramento de um imóvel e agendamento de visita aos imóveis.

## Tecnologias utilizadas:

- NodeJS
- ExpressJS
- typeORM
- Typescript
- Docker
- Jest
- sqlite3
- bcrypt
- jsonwebtoken
- supertest
- uuid
- class-transformer
- ts-node-dev
- express-async-errors
- pg

## Diagrama da aplicação:

![DER-KImoveis](https://user-images.githubusercontent.com/96259892/201732543-9730d60e-69ba-4253-b5b2-a1b206ea2056.png)

## Endpoints do serviço:

<table>
    <thead>
        <tr>
            <th>Método</th>
            <th>Endpoint</th>
            <th>Responsabilidade</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>POST</td>
            <td>/users</td>
            <td>Criação de usuário</td>
        </tr>
        <tr>
            <td>GET</td>
            <td>/users</td>
            <td>Lista todos os usuários</td>
        </tr>
        <tr>
            <td>PATCH</td>
            <td>/users</td>
            <td>Atualiza um usuário</td>
        </tr>
        <tr>
            <td>DELETE</td>
            <td>/users/:id</td>
            <td>Realiza um soft delete no usuário</td>
        </tr>
        <tr>
            <td>POST</td>
            <td>/login</td>
            <td>Gera o token de autenticação</td>
        </tr>
        <tr>
            <td>POST</td>
            <td>/categories</td>
            <td>Criação de categoria</td>
        </tr>
        <tr>
            <td>GET</td>
            <td>/categories/:id/properties</td>
            <td>Lista todos imóveis que pertencem a uma categoria</td>
        </tr>
        <tr>
            <td>POST</td>
            <td>/properties</td>
            <td>Criação de um imóvel</td>
        </tr>
        <tr>
            <td>GET</td>
            <td>/properties</td>
            <td>Lista todos os imóveis</td>
        </tr>
        <tr>
            <td>POST</td>
            <td>/schedules</td>
            <td>Agenda uma visita a um imóvel</td>
        </tr>
        <tr>
            <td>GET</td>
            <td>/schedules/properties/:id</td>
            <td>lista todos os agendamentos de um imóvel</td>
        </tr>
    </tbody>
</table>

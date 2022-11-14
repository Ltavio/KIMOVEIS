# KImóveis

Nesse projeto foi desenvolvido um serviço de back-end responsável por gerenciar uma imobiliária. Com cadastramento de usuários, criação de categoria de imóveis, cadastramento de um imóvel e agendamento de visita aos imóveis.

##Diagrama da aplicação:

![DER-KImoveis](https://user-images.githubusercontent.com/96259892/201732543-9730d60e-69ba-4253-b5b2-a1b206ea2056.png)

##Endpoints do serviço:

Método	         Endpoint	           Responsabilidade </br>
POST	           /users	            Criação de usuário </br>
GET	             /users	            Lista todos os usuários </br>
PATCH	           /users	            Atualiza um usuário </br>
DELETE	         /users/<id>	      Realiza um soft delete no usuário </br>
POST	           /login	            Gera o token de autenticação </br>
POST	           /categories	      Criação de categoria </br>
GET	             /categories/<id>/properties	Lista todos imóveis que pertencem a uma categoria </br>
POST	           /properties	      Criação de um imóvel </br>
GET	             /properties	      Lista todos os imóveis </br>
POST	           /schedules	        Agenda uma visita a um imóvel </br>
GET	             /schedules/properties/<id>	  lista todos os agendamentos de um imóvel </br>

<table width="500" align="center" bgcolor="#eeff60">
    <caption>Produtos</caption>
    <thead>
        <tr>
            <th>Produto</th>
        </tr>
    </thead>
</table>

# KImóveis

Nesse projeto foi desenvolvido um serviço de back-end responsável por gerenciar uma imobiliária. Com cadastramento de usuários, criação de categoria de imóveis, cadastramento de um imóvel e agendamento de visita aos imóveis.

##Diagrama da aplicação:

![DER-KImoveis](https://user-images.githubusercontent.com/96259892/201732543-9730d60e-69ba-4253-b5b2-a1b206ea2056.png)

##Endpoints do serviço:

Método	         Endpoint	           Responsabilidade
POST	           /users	            Criação de usuário
GET	             /users	            Lista todos os usuários
PATCH	           /users	            Atualiza um usuário
DELETE	         /users/<id>	      Realiza um soft delete no usuário
POST	           /login	            Gera o token de autenticação
POST	           /categories	      Criação de categoria
GET	             /categories/<id>/properties	Lista todos imóveis que pertencem a uma categoria
POST	           /properties	      Criação de um imóvel
GET	             /properties	      Lista todos os imóveis
POST	           /schedules	        Agenda uma visita a um imóvel
GET	             /schedules/properties/<id>	  lista todos os agendamentos de um imóvel

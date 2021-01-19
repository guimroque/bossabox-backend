FORMAT: A1

# Tools API

Descrição da API para fornecer dados sobre ferramentas de desenvolvedores.


## Listar ferramentas [GET]

Listagem de todas as ferramentas cadastradas na API.
+ URL : `http://localstorage:${PORT}/api/get-all-tool`
+ Response 200 (application/json)
+ Resultado
        
        {
                "success": true,
                "data":[
                                {
                                        "_id":"6002e977f8cefa2df46f4145",
                                        "title":"Notion",
                                        "link":"https://notion.so",
                                        "description":"All in one tool to organize teams and ideas Write, plan, collaborate, and get organized.",
                                        "tags":[
                                                "nodejs",
                                                "java",
                                                "express"
                                                ]
                                        "__v":0
                                }
                        ]
        }

## Filtrando ferramentas pela TAG [GET]
Buscar ferramentas por uma tag especifica, retorna todas as ferramentas que possuem no campo tag o valor especificado.
+ URL : `http://localstorage:${PORT}/api/tools?tag=express`
+ No exemplo de URL acima, a tag buscada é "express"
+ Caso seja necessário adicionar mais de uma tag, basta escrever a URL seguindo o padrão: `http://localstorage:${PORT}/api/tools?tag=express&tag=node`
+ Response 200 (application/json)
+ Resultado

        {
                "success": true,
                "data":[
                                {
                                        "_id":"6002e977f8cefa2df46f4145",
                                        "title":"Notion",
                                        "link":"https://notion.so",
                                        "description":"All in one tool to organize teams and ideas Write, plan, collaborate, and get organized.",
                                        "tags":[
                                                "nodejs",
                                                "java",
                                                "express"
                                                ]
                                        "__v":0
                                }
                        ]
        }
        

## Adicionando ferramentas [POST]
Adicionar novar ferramentas a API
+ URL : `http://localstorage:${PORT}/api/add-tool`
+ Content-Type: application/json
+ No body da requisição devem ser passados os valores do objeto a ser adicionado
        
             
                {
                        "title":"fastify",
                        "link":"https://www.fastify.io/",
                        "description":"Extremely fast and simple, low-overhead web framework for NodeJS. Supports HTTP2.",
                        "tags": [
                                "web",
                                "framework",
                                "node",
                                "http2",
                                "https",
                                "localhost"
                                ]
                }
             
+ Response 201 (application/json)
+ Resultado

                {
                        "success": true,
                        "message": "Created"
                }
        



## Deletando ferramentas [DELETE]
Deleta ferramentas cadastradas na API pelo id
+ URL : `http://localstorage:${PORT}/api/tool/:id`

+ Na url da requisição deve ser passado o ID da ferramenta que deseja deletar
+ Response 204 (application/json)


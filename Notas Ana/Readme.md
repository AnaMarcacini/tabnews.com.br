# tabnews.com.br

## Instalação:

```
anahelena in GITs/AnaMarcacini/tabnews.com.br
➜  nvm ls
       v18.20.5
->      v19.9.0
        v22.3.0
         system
default -> 19 (-> v19.9.0)
iojs -> N/A (default)
unstable -> N/A (default)
node -> stable (-> v22.3.0) (default)
stable -> 22.3 (-> v22.3.0) (default)
lts/* -> lts/jod (-> N/A)
lts/argon -> v4.9.1 (-> N/A)
lts/boron -> v6.17.1 (-> N/A)
lts/carbon -> v8.17.0 (-> N/A)
lts/dubnium -> v10.24.1 (-> N/A)
lts/erbium -> v12.22.12 (-> N/A)
lts/fermium -> v14.21.3 (-> N/A)
lts/gallium -> v16.20.2 (-> N/A)
lts/hydrogen -> v18.20.5
lts/iron -> v20.18.1 (-> N/A)
lts/jod -> v22.12.0 (-> N/A)
```

Utilizaremos o `lts/hydrogen ` (lts = Long Term Support)

nvm install lts/hydrogen

nvm alias default lts/hydrogen

.nvmrc -> arquivo com os detalhes da versão do node

terminação rc -> Run Commands (ex bashrc)

Esse arquivo facilita as instalações da versão da aplicaação

```
➜  nvm install
Found '/home/anahelena/GITs/AnaMarcacini/tabnews.com.br/.nvmrc' with version <lts/hydrogen >
```

# Primeiros passos

npm init

Vantagem de usar o Next.js

       Cuida do Limite entre o servidor e a aplicação do usuário
       Possui uma das melhores integrações entre o framework e Web Host

Foi desenvolvido pela vercel que oferece hospedagens de sites

npm install next@13.1.6

"Next cria as paredes e a sustancia é criada pelo react"

npm install react@18.2.0

npm install react-dom@18.2.0

# Protocolos Web

HTTP - hypertext transfer protocol - contem referencia para outros documentos
FTP - tranferência de arquivos
SMTP - tranferência de emails

TCP X UDP

`WebSockets` -> Conexão Persistente

# Criando a estrutura do nosso app

toda pagina index.js torna o diretório que a contém vira uma rota publica
Arquivos com outro nome tipo ana.js vira uma rota pública a parte /ana

![alt text](src/image.png)

usando npm run dev no ambiente de desenvolvimento code spaces cria um link público só acessível pela sua conta do github

Para liberar o acesso

![alt text](src/image-1.png)

![alt text](src/image-2.png)

# Git

A cada commit o git guarda fotos do estado dos seus arquivos chamados
Blob: binary large object

Estados dos arquivos

- Untracked
- Modified
- Staged
- Commit

# Hospedagem

oferecer abrigo

inicialmente no proprio pc -> quando desligava acabava energia dava ruim

depois passou a fazer deploy via ftp em pcs com redundância de internet e energia para oferecer disponibilidade -> problema de versionamento

depois codava no proprio servidor via ssh -> problema de passar para o local

utilizar o git em tudo no servidor, no local e no remoto :
local envia para o CI (Continue Integration) e realiza testes para ver se está tudo certo
caso esteja vai para um terceiro local para buildar
e depois envia para o servidor

Habilitar o acesso da vercel
-> configurações do git -> applications -> vercel

![alt text](src/vercel.png)

# Baixando dependências só de desenvolvimento

--D
npm i prettier --D  
no package.json
"devDependencies": {
"prettier": "^3.4.2"
}
lint -> analise estática de código

add novo script de validação da formatação do código

"scripts": {
"dev": "next dev",
"lint:check": "prettier --check ."
},

agora quando rodo

npm run lint:check

> tabnews.com.br@1.0.0 lint:check
> prettier --check .

Checking formatting...
[warn] Notas Ana/Readme.md
[warn] package.json
[warn] pages/index.js
[warn] Code style issues found in 3 files. Run Prettier with --write to fix.

script para corrigir a formação
"lint:fix": "prettier --write ."

# DNS (Domain Name Service)

![alt text](src/DNS.png)

![alt text](src/RR.png)

TTL : Time to Live -> cache
![alt text](src/RR2.png)

registro.br -> cuida de todos os registros .br

![alt text](src/FluxoInicio.png)

![alt text](src/FluxoFim.png)

![alt text](src/DominioVercel.png)

![alt text](src/configurarServidorDNS.png)

![alt text](src/alterarServiDNS.png)

## Comando Dig

sudo apt install dnsutils

O comando dig (Domain Information Groper) é uma ferramenta de linha de comando usada para realizar **consultas ao DNS** (Domain Name System). Ele permite resolver nomes de domínio em endereços IP e vice-versa, além de obter informações detalhadas sobre registros DNS de um domínio.

**Resolver nomes de domínio:**

    dig google.com

**Obter registros DNS específicos:** Você pode consultar diferentes tipos de registros DNS, como:

    A (endereço IPv4)
    AAAA (endereço IPv6)
    MX (servidores de e-mail)
    NS (servidores de nomes)
    CNAME (nome canônico)
    TXT (informações em texto)

dig google.com MX

**Consultar um servidor DNS específico:** Você pode especificar qual servidor DNS usar para a consulta.
dig @8.8.8.8 google.com

**Mostrar apenas a resposta (modo simplificado):**

    dig +short google.com

dig google.com +trace

# Disponibilidade da Aplicação

SLA -> Service Level Agreement (Acordo de Nível de Serviço)

AWS status
Vercel status
etc
-> Ver dados do serviço e as vezes que o mesmo saiu do ar

    Status Pages
    Vercel: https://www.vercel-status.com/
    AWS: https://health.aws.amazon.com/health/status
    GitHub: https://www.githubstatus.com/

# Arquitetura e Engenharia de Software

- POC : Proof of Concept
  -> provas que o conceito vai funcionar --> não funcional
- MVP - Minimum Viable Product
  -> Realmente o produto finalizado e viável

![alt text](src/GráficoComplexidadeXtempo.png)

## Testes automatizados

![alt text](src/piramideDeTestes.png)

### test runners - testes de Unidade

Mocha - roda eles em serial
Ava - Roda eles em paralelo (deteinar certos criterios para que 2 testes nn usem o mesmo trecho de código simultaneamente)
PlayWrite - testes end to end (testes incluem a interface do usuário)
Jets

#### Jets

##### Instalação

npm install --save-dev jest@29.6.2 (save-dev -> dependência de desenvolvimento)

##### Execução

CUIDADO ELE RODA EM PARALELO OS TESTES

    "test": "jest", -> executa eles uma vez
    "test:watch": "jest --watch" -> fica executando e sempre que salva um arquivo (altera ele) reexecuta toda a bateria de testes criados (executa apenas os testes relacionado ao arquivo editado)
    "test:watchAll": "jest --watchAll" -> fica executando e sempre que salva um arquivo (altera ele) reexecuta toda a bateria de testes criados (reexecuta todos os testes)

os testes são uteis como documentação de sw mal documentados eles mostram as funções os parametros e o retorno esperado (como uma documentação faria).
Existe uma tecnica de fazer o inverso (primeiro atira a flexa e depois coloca o alvo se chama)
Ou seja elaborar primeiro os testes e depois implementar na função TDD -> Test Driven Development (desenvolvimento orientado a testes) (red -> green -> refactor -> red ..... )

Para executar os testes dentro da pasta migrations é só passar o migrations como regex

```bash
 npm run test:watch -- migrations
```

Para rodar apenas o arquivo tabnews.com.br/tests/integration/api/v1/migrations/post.test.js

```bash
npm run test:watch -- migrations/post

# OU

➜  npm run test:watch -- migrations.post # serve para qualquer SO Sist Operacional
```

Assim para ir qualquer pasta ou arquivo

```bash
 npm run test:watch -- path/to/folder
```

Se a pasta estiver em tests/migrations, você pode usar:

jest --testPathPattern=tests/migrations

###### direção

https://octopus.com/blog/database-rollbacks-pitfalls

https://nickcraver.com/blog/2016/05/03/stack-overflow-how-we-do-deployment-2016-edition/

https://calpaterson.com/against-database-teardown.html

https://news.ycombinator.com/item?id=29764792

- up -> cria as coisas na ordem ROLLFORWARD

  - ex : CREATE TABLE

- down -> desfaz as coisas inversamente ROLLBACK|| Mais raros -> quase nunca podem ser usados || Pessima pratica, mais dificil de testar menos usado etc

  - ex : DROP TABLE

## Padrões de Projeto

### MVC

Controller -> Model -> Controller -> View

# API (Application Programming Interface)

## Interface gráfica X Interface Programatica (API)

Interface Programática -> interface mais legível para programas (dados estruturados : json por exemplo)

- sem layout
- informação pura e organizada
- interface que o robô ou script lê mais fácil

Interface gráfica -> GUI Graphical User Interface
Text-based User Interface -> TUI

## debugar usando o curl Cliente URL

anahelena in tabnews.com.br on  main [✘!?]
➜ curl http://localhost:3000/api/status
{"chave":"valor"}%

```bash
anahelena in tabnews.com.br on  main [✘!?]
➜  curl http://localhost:3000/api/status -v
*   Trying 127.0.0.1:3000...
* Connected to localhost (127.0.0.1) port 3000 (#0)
> GET /api/status HTTP/1.1
> Host: localhost:3000
> User-Agent: curl/7.84.0
> Accept: */*
>
* Mark bundle as not supporting multiuse
< HTTP/1.1 200 OK
< Content-Type: application/json; charset=utf-8
< ETag: "r9fdtfjb3oh"
< Content-Length: 17
< Vary: Accept-Encoding
< Date: Wed, 22 Jan 2025 20:33:18 GMT
< Connection: keep-alive
< Keep-Alive: timeout=5
<
* Connection #0 to host localhost left intact
{"chave":"valor"}%
anahelena in tabnews.com.br on  main [✘!?]
➜  curl http://localhost:3000/api/status --verbose

# LINHAS DO QUE O CURL ESTÁ FAZENDO INTERNAMENTE
*   Trying 127.0.0.1:3000...
* Connected to localhost (127.0.0.1) port 3000 (#0)

# O QUE FOI ENVIADO PARA O SERVIDOR
> GET /api/status HTTP/1.1
> Host: localhost:3000
> User-Agent: curl/7.84.0
> Accept: */*
>
* Mark bundle as not supporting multiuse
# RESPOSTA DO SERVIDOR
< HTTP/1.1 200 OK
< Content-Type: application/json; charset=utf-8
< ETag: "r9fdtfjb3oh"
< Content-Length: 17
< Vary: Accept-Encoding
< Date: Wed, 22 Jan 2025 20:33:44 GMT
< Connection: keep-alive
< Keep-Alive: timeout=5
<
* Connection #0 to host localhost left intact
# CORPO DA REQUISIÇÃO
{"chave":"valor"}%
```

```BASH
anahelena in tabnews.com.br on  main [✘!?]
➜  curl http://localhost:3000
<!DOCTYPE html><html><head><style data-next-hide-fouc="true">body{display:none}</style><noscript data-next-hide-fouc="true"><style>body{display:block}</style></noscript><meta charSet="utf-8"/><meta name="viewport" content="width=device-width"/><meta name="next-head-count" content="2"/><noscript data-n-css=""></noscript><script defer="" nomodule="" src="/_next/static/chunks/polyfills.js?ts=1737578259097"></script><script src="/_next/static/chunks/webpack.js?ts=1737578259097" defer=""></script><script src="/_next/static/chunks/main.js?ts=1737578259097" defer=""></script><script src="/_next/static/chunks/pages/_app.js?ts=1737578259097" defer=""></script><script src="/_next/static/chunks/pages/index.js?ts=1737578259097" defer=""></script><script src="/_next/static/development/_buildManifest.js?ts=1737578259097" defer=""></script><script src="/_next/static/development/_ssgManifest.js?ts=1737578259097" defer=""></script><noscript id="__next_css__DO_NOT_USE__"></noscript></head><body><div id="__next"><h1>Testes</h1></div><script src="/_next/static/chunks/react-refresh.js?ts=1737578259097"></script><script id="__NEXT_DATA__" type="application/json">{"props":{"pageProps":{}},"page":"/","query":{},"buildId":"development","nextExport":true,"autoExport":true,"isFallback":false,"scriptLoader":[]}</script></body></html>%
```

Acessando o ip da vercel

```
anahelena in tabnews.com.br on  main [✘!?]
➜ curl http://76.76.21.21
Redirecting...
anahelena in tabnews.com.br on  main [✘!?]
➜ curl https://76.76.21.21
curl: (60) SSL: no alternative certificate subject name matches target host name '76.76.21.21'
More details here: https://curl.se/docs/sslcerts.html

curl failed to verify the legitimacy of the server and therefore could not
establish a secure connection to it. To learn more about this situation and
how to fix it, please visit the web page mentioned above.
anahelena in tabnews.com.br on  main [✘!?]
➜ curl http://76.76.21.21 --insecure # esse comando ignora caso o ip não tenha certificado https geralmente associado ao nome de dominio
Redirecting...
```

```
anahelena in tabnews.com.br on  main [✘!?]
➜  curl http://76.76.21.21 --insecure -v
*   Trying 76.76.21.21:80...
* Connected to 76.76.21.21 (76.76.21.21) port 80 (#0)
> GET / HTTP/1.1
> Host: 76.76.21.21
> User-Agent: curl/7.84.0
> Accept: */*
>
* Mark bundle as not supporting multiuse
< HTTP/1.1 308 Permanent Redirect
< Content-Type: text/plain
< Date: Wed, 22 Jan 2025 20:45:00 GMT
< Location: https://vercel.com/
< Refresh: 0;url=https://vercel.com/
< Server: Vercel
< X-Vercel-Id: gru1::x22lg-1737578700649-531331847b50
< Transfer-Encoding: chunked
<
Redirecting...
* Connection #0 to host 76.76.21.21 left intact
```

a resposta da vercel é um cabeçalho que pede para redirecionar para a pagina inicial dela teste no navegador

Caso vc queria redirecionar o host para um especifico é preciso redirecionar do cabeçalho
![alt text](src/redirecionandoParaODominioVercel.png)
![alt text](src/respostaVercel.png)

```bash
anahelena in ~
➜  curl https://76.76.21.21 --insecure -v --header "Host: anatabnews.vercel.app"
*   Trying 76.76.21.21:443...
* TCP_NODELAY set
* Connected to 76.76.21.21 (76.76.21.21) port 443 (#0)
* ALPN, offering h2
* ALPN, offering http/1.1
* successfully set certificate verify locations:
*   CAfile: /etc/ssl/certs/ca-certificates.crt
  CApath: /etc/ssl/certs
* TLSv1.3 (OUT), TLS handshake, Client hello (1):
* TLSv1.3 (IN), TLS handshake, Server hello (2):
* TLSv1.3 (IN), TLS handshake, Encrypted Extensions (8):
* TLSv1.3 (IN), TLS handshake, Certificate (11):
* TLSv1.3 (IN), TLS handshake, CERT verify (15):
* TLSv1.3 (IN), TLS handshake, Finished (20):
* TLSv1.3 (OUT), TLS change cipher, Change cipher spec (1):
* TLSv1.3 (OUT), TLS handshake, Finished (20):
* SSL connection using TLSv1.3 / TLS_AES_128_GCM_SHA256
* ALPN, server accepted to use h2
* Server certificate:
*  subject: CN=no-sni.vercel-infra.com
*  start date: Jan 16 16:15:00 2025 GMT
*  expire date: Apr 16 16:14:59 2025 GMT
*  issuer: C=US; O=Let's Encrypt; CN=R10
*  SSL certificate verify ok.
* Using HTTP2, server supports multi-use
* Connection state changed (HTTP/2 confirmed)
* Copying HTTP/2 data in stream buffer to connection buffer after upgrade: len=0
* Using Stream ID: 1 (easy handle 0x55af2907f650)
> GET / HTTP/2
> Host: anatabnews.vercel.app
> user-agent: curl/7.68.0
> accept: */*
>
* TLSv1.3 (IN), TLS handshake, Newsession Ticket (4):
* Connection state changed (MAX_CONCURRENT_STREAMS == 250)!
< HTTP/2 200
< accept-ranges: bytes
< access-control-allow-origin: *
< age: 967
< cache-control: public, max-age=0, must-revalidate
< content-disposition: inline
< content-type: text/html; charset=utf-8
< date: Wed, 22 Jan 2025 20:57:16 GMT
< etag: "e26aa6ece537a21023b3c9a5458dfff9"
< last-modified: Wed, 22 Jan 2025 20:41:09 GMT
< server: Vercel
< strict-transport-security: max-age=63072000; includeSubDomains; preload
< x-matched-path: /
< x-vercel-cache: HIT
< x-vercel-id: gru1::dqzsn-1737579436986-33ed627d4895
< content-length: 1135
<
<!DOCTYPE html><html><head><meta charSet="utf-8"/><meta name="viewport" content="width=device-width"/><meta name="next-head-count" content="2"/><noscript data-n-css=""></noscript><script defer="" nomodule="" src="/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js"></script><script src="/_next/static/chunks/webpack-8a59928dc61557b6.js" defer=""></script><script src="/_next/static/chunks/framework-7ee2c06c72ba8a91.js" defer=""></script><script src="/_next/static/chunks/main-a0dca5a2ff5035f1.js" defer=""></script><script src="/_next/static/chunks/pages/_app-df511a3677d160f6.js" defer=""></script><script src="/_next/static/chunks/pages/index-76ba89ae16e1ba47.js" defer=""></script><script src="/_next/static/BI9rU8YKlKeM3_tjWENMd/_buildManifest.js" defer=""></script><script src="/_next/static/BI9rU8YKlKeM3_tjWENMd/_ssgManifest.js" defer=""></script></head><body><div id="__next"><h1>Testes</h1></div><script id="__NEXT_DATA__" type="application/json">{"props":{"pageProps":{}},"page":"/","query":{},"buildId":"BI9rU8YK* Connection #0 to host 76.76.21.21 left intact lKeM3_tjWENMd","nextExport":true,"autoExport":true,"isFallback":false,"scriptLoader":[]}</script></body></html>%
```

## Versionamento da API

![alt text](src/VersionamentosApiTipos.png)

# Banco de Dados

- DBMS - Data Base Management System (sistema de gerenciamento de banco de dados (SGBD))
  - MySQL
  - PostgreSQL
  - Oracle Database
  - Microsoft SQL Server
  - MongoDB
  - .....
- Query - Consultar
  - ORM - Object-Relational Mapping
  - SQL - Na mão
  - CTE - Common Table Expression
- Migrations : como o git do banco de dados -> copia dos comandos e automações para o banco de dados

  - Arquivos de migração: Ordem das alterações e alterações
  - Framework de Migração: garante que os scripts sejam executados uma unica vez e sejam feitos na ordem

    TIPOS:

- Relacional SQL - > SQL Structured Query Language
- Não Relacional NoSQL
  - Armazenamento de Documentos
  - Armazenamento Chave:Valor
- Serie Temporal
- Espacial

Escolhas do projeto

- DBMS : PostgreSQL
- Query : SQL - Na mão utilizando o conector pg `➜  npm install pg@8.11.3`
- Migrations: node-pg-migrate ➜ `npm i node-pg-migrate@6.2.2` (exclusivo do postgres -> vantagem de ser bem especifico e não ter problemas de migrações em troca da flexibilidade de se poder usar para qualquer outro DBMS)

  "Why only Postgres? - By writing this migration tool specifically for postgres instead of accommodating many databases, we can actually provide a full featured tool that is much simpler to use and maintain. I was tired of using crippled database tools just in case one day we switch our database." - https://www.npmjs.com/package/node-pg-migrate

obs o sequelize v6 é uma solução boa ORM que tem incluso um sistema de migrations
--> criar migrações e executar elas

## Migrations

npm i node-pg-migrate@6.2.2

npm run migrations:create first migration test

cria arquivo TIMESTAMP_first-migration-test

para criar a pasta num diretorio especifico

"node-pg-migrate --migrations-dir infra/migrations create"

OUUU

"node-pg-migrate -m infra/migrations create"

### fundamentos

proibido alterações manuais
crie um arquivo de migração
up para fazer alterações exports.up = pgm => {}; // cria dados
down para desfazer alterações exports.down = pgm => {}; //volta dados

### Executar Migrations

conectar com o db
DATABASE_URL=postgres://postgres@localhost/database node-pg-migrate

https://salsita.github.io/node-pg-migrate/cli

ou

If a .env file exists, it will be loaded using dotenv (if installed) when running the node-pg-migrate binary. If the .env file is not on the same level where the command has been called, you can use the --envPath option to point to the location of your .env file.

npm install dotenv@16.4.4
"node-pg-migrate --migrations-dir infra/migrations --envPath .env.development up"
DATABASE_URL=postgres://local_user:local_password@localhost:5435/local_db

## Tipos de Querys

- sem parâmetro
- parâmetros fixos
- parâmetro dinâmicos -> Queries Parametrizadas-> CUIDADO SQL Injection

# Docker

docker compose up --detach -> subir sem preder o terminal = docker compose up -d
docker compose up -d --force-recreate

## Debug do docker do postgres

sudo apt install postgresql-client

```bash
anahelena in tabnews.com.br on  main [⇡!?]
➜  psql --host=localhost --username=postgres --port=5435
Senha para o usuário postgres:
psql (17.2 (Ubuntu 17.2-1.pgdg20.04+1), servidor 16.0)
Digite "help" para obter ajuda.

postgres=# Select 1 + 1;
 ?column?
----------
        2
(1 linha)

postgres=# \q
anahelena in tabnews.com.br on  main [⇡!?] took 18,2s
```

docker compose down

## Colocando o arquivo compose.yaml no dretório infra

agora com o arquivo fora da raiz é necessário especificar o file no comando
`docker compose -f infra/compose.yaml up -d`
`docker compose -f infra/compose.yaml down`

## automatizando subir o container

"npm run services:up && next dev", -> se o primeiro comando tiver status ok o segundo executa

# Aplicação

Interface
Aplicação
Persistência (memória)
![alt text](src/back-end-stateless.png)

# Variaveis de Ambiente

Adicionando manualmente
`POSTGRES_PASSWORD=local_password npm run dev` a variavel de ambiente está salva apenas nessa execução e pode ser acessada usando no código `process.env.POSTGRES_PASSWORD` . Ao executar `npm run dev` no mesmo terminal dá erro.
Outro problema desse metodo é que fica salvo o history !!! -> falta de segurança|| dados sensiveis
Melhor utilizar o arquivo .env

## Procedência das variaveis de Ambiente

process.env -> painel da vercel Maior
.env.development
.env Menor

# Fuzzy Search (busca difusa)

no vscode vc pode procurar um arquivo que se assemelha ao que foi escrito
wind+linux => ctrl+p
mac => cmd+p

nomeDoArquivo@conteudo-do-arquivo

# Acesso dos Logs da Vercel

![alt text](src/LogsVercel.png)
![alt text](src/VariaveisDeAmbienteVercel.png)
![alt text](src/VariaveisDeAmbienteVercel2.png)
para a criação das variaveis de ambiente se aplicarem à ultima versão é preciso fazer o redeploy
![alt text](src/Redeploy.png)
Disparar o redeploy sem usar a webgui da vercel, no seu git você pode rodar git commit --allow-empty -m "Trigger redeploy" e git push é uma forma de enviar um commit vazio para o git e disparar o redeploy automático.

# Neon

- autoscaling -> puxar mais capacidade de processamento e memória de maneira automática
- branching
- bottomless storage -> armazenamento sem fundo

  utiliza a connection string
  postgresql://user:password@hostname:port/database?param-value
  ou parameters only : variaveis diferentes como o .env

comunicação usando SSL

- Secure Sockets Layer
- error: connection is insecure (try using `sslmode=require`)

## Certificados

Self-signed certificate in certificate chain: certificado autoassinado na cadeia de certificados
É preciso baixar o certificado que mostra a chave da assinatura

Geralmente o backend pede uma compravação se o servidor e ele mesmo e o servidor manda ele assinado por uma autoridade responsável pela fiscalização
Porém essa certificação foi assinada pelo proprio servidor assim é preciso ter o certificado dele instalado para comparar com a realidade

![alt text](src/CertificadoServidor2.png)
![alt text](src/CertificadoServidor.png)

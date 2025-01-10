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
FTP - tranferencia de arquivos
SMTP - tranferencia de emails



TCP X UDP

# Criando a estrutura do nosso app

toda pagina index.js torna o diretório que a contém vira uma rota publica
Arquivos com outro nome tipo ana.js vira uma rota pública a parte /ana

![alt text](src/image.png)

usando  npm run dev no ambiente de desenvolvimento code spaces cria um link público só acessível pela sua conta do github

Para liberar o acesso

![alt text](src/image-1.png)

![alt text](src/image-2.png)



# Git

A cada commit o git guarda fotos do estado dos seus arquivos chamados 
Blob: binary large object


Estados dos arquivos

* Untracked
* Modified
* Staged
* Commit

# Projeto-Node

adicionar repositorio node:
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -

instalar node:
sudo apt-get install -y nodejs

verificar versão:
node -v

instalando yarn:
npm install --global yarn

iniciando uma aplicação:
yarn init -y

adicionando express:
yarn add express

adicionando nodemon: (inicializa o servidor automaticamento no desenvolvimento)
yarn add nodemon -D

adicionando typescript:

yarn add typescript -D

biblioteca de transformação de typescript para javascript
yarn add ts-node-dev -D

extensão do express
yarn add @types/express

iniciando a typescript na aplicação
tsc --init

importando lib de transformação
yarn add class-transformer


lib interceptação de erros
yarn add express-async-errors

lib de cryptografia
yarn add bcryptjs
yarn add @types/bcryptjs -D

lib token
yarn add jsonwebtoken
yarn add @types/jsonwebtoken -D

lib typeorm
yarn add typeorm@0.2.28

lib para anotetions
yarn add refelct-metadata

lib conexão com banco postgree
yarn add pg

criando o arquivo de configuração da conexão
ormconfig.json

criando migration:
yarn typeorm migration:create -n <nome da migration>

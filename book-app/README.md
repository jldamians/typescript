# install yarn
npm install --global yarn
o
npm install -g yarn

# crear archivo package.json
npm init --yes
o
npm init -y

# typescript
yarn add -D typescript
o 
yarn add --dev typescript

# ts-node: permite ejecutar tsc sin precompilar el archivo
yarn add -D ts-node
o
yarn add --dev ts-node

# crear archivo de configuración tsc
npx tsc --init

# descomentamos del archivo tsconfig.json, las siguientes líneas:
# - "outDir": "./dist",
# - "rootDir": "./src",


# ts config
https://prettier.io/docs/en/integrating-with-linters.html#use-tslint-to-run-prettier

# Usa imagem leve do Node
FROM node:18-alpine

# Diretório de trabalho no container
WORKDIR /app

# Copia arquivos de dependência e instala
COPY package*.json ./
RUN npm install

# Copia o restante do código
COPY . .

# Expõe a porta do Vite (ajustada conforme a config do Vite)
EXPOSE 3001

# Comando para iniciar o servidor Vite em modo dev
CMD ["npm", "run", "dev", "--", "--host", "--port", "3001"]

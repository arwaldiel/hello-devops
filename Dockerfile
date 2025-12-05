FROM node:18-alpine

# Munkakönyvtár a konténerben
WORKDIR /app

# package.json bemásolása és függőségek telepítése
COPY package*.json ./
RUN npm install --only=production

# Alkalmazás fájlok bemásolása
COPY . .

# App port
EXPOSE 8080

# Indítási parancs
CMD ["npm", "start"]
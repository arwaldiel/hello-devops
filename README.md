# Hello DevOps – Node.js + Express alkalmazás

Ez a projekt a DevOps tárgy beadandójához készült.  
A cél egy egyszerű „Hello world” alkalmazás létrehozása, buildelése, verziókövetése trunk-based módszerrel, valamint konténerizálása Dockerrel.

---

# 1. Alkalmazás

Az alkalmazás egy egyszerű Node.js + Express szerver, amely HTTP-n a következő címen érhető el:
http://localhost:8080


A gyökér végponton (`/`) egy egyszerű szöveges üzenetet ad vissza.

---

# 2. Futtatás lokálisan

	# 2.1. Függőségek telepítése
	npm install

	# 2.2. Alkalmazás indítása
	npm start

	Az alkalmazás ezután elérhető lesz a böngészőből:
	http://localhost:8080

# 3. Buildelés
A projekt buildelése és futtatása a következő parancsokkal végezhető el:

npm install
npm start

# 4. Dockerizálás
A projekt tartalmaz egy Dockerfile fájlt, amely segítségével a Node.js alkalmazás konténerizálható.

	# 4.1. Docker image build
	A projekt könyvtárában futtasd:
	docker build -t hello-devops:v1 .
	
	# 4.2. Docker konténer futtatása
	docker run -p 8080:8080 hello-devops:v1
	
	Az alkalmazás ekkor konténerből érhető el:
	http://localhost:8080
	
# 5. Git használata – trunk-based development
A projekt a trunk-based development módszert követi.
A repository felépítése:
	main branch → a fő fejlesztési ág (trunk)
	feature/update-message branch → egy rövid életű feature branch
	
# Workflow lépések
Új Git repository inicializálása:
	git init
	
Első commit a main ágon:
	git add .
	git commit -m "init: basic Node.js hello app"

Feature branch létrehozása:
	git checkout -b feature/update-message
	
A app.js üzenet módosítása és commitolása:
	git add app.js
	git commit -m "feat: update hello message"

Visszalépés a main ágra és merge:
	git checkout main
	git merge feature/update-message
	
# 6. Repository
A projekt kódja egy publikus Git repository-ban található.
A Neptunba feltöltött TXT fájl tartalmazza a linket.

---

# 7. Fejlesztés Dev Containerben (VS Code)
A projekt tartalmaz egy Dev Container konfigurációt, amely lehetővé teszi a fejlesztést konténerizált környezetben.

	# 7.1. Előfeltételek
	- Docker Desktop telepítve és fut
	- Visual Studio Code
	- Dev Containers bővítmény (alap követelmény, kiegészítő extensionök nélkül)

	# 7.2. Projekt indítása Dev Containerben
	1. Nyisd meg a projekt mappáját VS Code-ban.
	2. Kattints a bal alsó sarokban lévő zöld ikonra → **“Reopen in Container”**  
	   (vagy Command Palette: *Dev Containers: Reopen in Container*).
	3. A konténer létrejön, majd automatikusan lefut az `npm install`.
	4. A konténerben a VS Code terminálban futtasd:
	   npm start
	Az alkalmazás elérhető lesz:
	http://localhost:8080

	A DevContainer környezetben az alkalmazás ugyanúgy buildelhető és futtatható, mint lokálisan.
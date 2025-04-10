# ☕ API de Cafés

Aplicación construida con **Node.js** y **Express** para manejar una lista de cafés. Incluye endpoints REST y pruebas automatizadas con **Jest** y **Supertest**.

---

# 📦 Instalación

A. Clona este repositorio:

```bash
git clone https://github.com/yanez92-K/CafeteriaNanacao-testing.git
```

B. Instala las dependencias:

```bash
npm install
```

Este proyecto utiliza las siguientes librerías:

- express
- jest
- supertest
- faker
- @babel/preset-env (devDependency)

# 🧪 Testing

La app cuenta con pruebas unitarias y de integración para cubrir las operaciones principales del CRUD:

```
GET /cafes

GET /cafes/:id

POST /cafes

PUT /cafes/:id

DELETE /cafes/:id
```

Puedes ver el reporte ejecutando:

```bash
npm test
```

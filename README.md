# Harry-Potter-API

This Harry Potter API is a fun project made with Node.js and MongoDB.

![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)


## Features

- Get all characters information
- Get all potions and their incredients
- Get all awesome magical spells


## API Reference
 
### Characters

#### Get all characters information

```
  GET /api/characters
```

#### Get an individual character information

```
  GET /api/characters/:id
```

#### Create Character
```
  POST /api/characters
```

| Parameter    | Type     |
| :----------- | :------- |
| name         | `string` |
| gender       | `string` |
| job          | `string` |
| house        | `string` |
| wand         | `string` |
| patronus     | `string` |
| species      | `string` |
| blood_status | `string` | 
| hair_color   | `string` |
| eye_color    | `string` |
| loyalty      | `string` |
| Skills       | `string` |
| Birth        | `string` |
| Death        | `string` |

#### Delete a particular character
```
  DELETE /api/characters/:id
```

#### Update a particular character
```
  PATCH /api/characters/:id
```

| Parameter    | Type     |
| :----------- | :------- |
| name         | `string` |
| gender       | `string` |
| job          | `string` |
| house        | `string` |
| wand         | `string` |
| patronus     | `string` |
| species      | `string` |
| blood_status | `string` | 
| hair_color   | `string` |
| eye_color    | `string` |
| loyalty      | `string` |
| Skills       | `string` |
| Birth        | `string` |
| Death        | `string` |

### Potions

#### Get all Potions information

```
  GET /api/potions
```

#### Get an individual potion information

```
  GET /api/potions/:id
```

#### Create potions
```
  POST /api/potions
```

| Parameter                | Type     |
| :------------------------| :------- |
| name                     | `string` |
| known_incredients        | `string` |
| effect                   | `string` |
| characteristics          | `string` |
| difficulty_level         | `string` |

#### Delete a particular potion
```
  DELETE /api/potions/:id
```

#### Update a particular potion
```
  PATCH /api/potions/:id
```

| Parameter                | Type     |
| :------------------------| :------- |
| name                     | `string` |
| known_incredients        | `string` |
| effect                   | `string` |
| characteristics          | `string` |
| difficulty_level         | `string` |

### Spells

#### Get all spells information

```
  GET /api/spells
```

#### Get an individual spell information

```
  GET /api/spells/:id
```

#### Create spells
```
  POST /api/spells
```

| Parameter    | Type     |
| :----------- | :------- |
| name         | `string` |
| incantation  | `string` |
| type         | `string` |
| effect       | `string` |
| light        | `string` |

#### Delete a particular spell
```
  DELETE /api/spells/:id
```

#### Update a particular spell
```
  PATCH /api/spells/:id
```

| Parameter    | Type     |
| :----------- | :------- |
| name         | `string` |
| incantation  | `string` |
| type         | `string` |
| effect       | `string` |
| light        | `string` |

## Configuations

- you can go to `/src/database/db.js` and onfigure for database path


## Screenshots

![App Screenshot](https://raw.githubusercontent.com/Aadityansha/Harry-Potter-API/main/screenshot.png)


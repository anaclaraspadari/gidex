const { Elemento } = require("./src/models/elementos-model");
const { Personagem, colecao } = require("./src/models/personagens-model");
const { Arma } = require('./src/models/armas-model');
const { Nacao } = require('./src/models/nacoes-model');
const { Talento } = require('./src/models/talentos-model');
const { Estrela } = require("./src/models/estrelas-model");
const { Usuario, Personagens_Usuarios } = require('./src/models/usuarios-model');
const { sequelizeCon } = require("../config/db-config");


Personagem.belongsTo(Elemento);
Elemento.hasMany(Personagem, { onDelete: 'CASCADE' });

Estrela.belongsTo(Usuario);
Usuario.hasMany(Estrela, { onDelete: 'CASCADE' });

Personagens_Usuarios.belongsTo(Estrela);
Estrela.hasMany(Personagens_Usuarios, { onDelete: 'CASCADE' });

Personagem.belongsTo(Talento);
Talento.hasMany(Personagem, { onDelete: 'CASCADE' });

Personagem.belongsTo(Arma);
Arma.hasMany(Personagem, { onDelete: 'CASCADE' });

Personagem.belongsTo(Nacao);
Nacao.hasMany(Personagem, { onDelete: 'CASCADE' })

Personagem.belongsToMany(Usuario, { through: colecao }, { onDelete: 'CASCADE' });
Usuario.belongsToMany(Personagem, { through: colecao }, { onDelete: 'CASCADE' });

//sequelizeCon.sync();
const { Elemento } = require("./elementos-model");
const { Personagem } = require("./personagens-model");
const { Arma } = require('./armas-model');
const { Nacao } = require('./nacoes-model');
const { Talento } = require('./talentos-model');
const { Estrela } = require("./estrelas-model");
const { Usuario, Personagem_Usuario } = require('./usuarios-model');
const { sequelizeCon } = require("../config/db-config");


Personagem.belongsTo(Elemento);
Elemento.hasMany(Personagem, { onDelete: 'CASCADE' });

Estrela.belongsTo(Usuario);
Usuario.hasMany(Estrela, { onDelete: 'CASCADE' });

Personagem_Usuario.belongsTo(Estrela);
Estrela.hasMany(Personagem_Usuario, { onDelete: 'CASCADE' });

Personagem.belongsTo(Talento);
Talento.hasMany(Personagem, { onDelete: 'CASCADE' });

Personagem.belongsTo(Arma);
Arma.hasMany(Personagem, { onDelete: 'CASCADE' });

Personagem.belongsTo(Nacao);
Nacao.hasMany(Personagem, { onDelete: 'CASCADE' })

Personagem.belongsToMany(Usuario, { through: Personagem_Usuario }, { onDelete: 'CASCADE' });
Usuario.belongsToMany(Personagem, { through: Personagem_Usuario }, { onDelete: 'CASCADE' });

sequelizeCon.sync();
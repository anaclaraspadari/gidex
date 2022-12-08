const { Elemento } = require("./elementos-model");
const { Personagem } = require("./personagens-model");
const { Arma } = require('./armas-model');
const { Nacao } = require('./nacoes-model');
const { Talento } = require('./talentos-model');
const { Estrela } = require("./estrelas-model");
const { Usuario, Personagens_Usuarios } = require('./usuarios-model');
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

Personagem.belongsToMany(Usuario, { through: Personagens_Usuarios }, { onDelete: 'CASCADE' });
Usuario.belongsToMany(Personagem, { through: Personagens_Usuarios }, { onDelete: 'CASCADE' });

sequelizeCon.sync();
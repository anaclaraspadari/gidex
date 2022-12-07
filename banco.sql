DROP TABLE elementos;
DROP TABLE armas;
DROP TABLE talentos;
DROP TABLE nacao;
DROP TABLE personagens;
DROP TABLE usuarios;
DROP TABLE personagens_usuarios;
DROP TABLE estrelas;


CREATE TABLE elementos (
    id_ele serial primary key,
    nome text not null
);

INSERT INTO elementos (nome) VALUES
    ('Geo'),
    ('Dendro'),
    ('Cryo'),
    ('Pyro'),
    ('Hydro'),
    ('Eletro'),
    ('Anemo');


CREATE TABLE armas (
    id_arm serial primary key,
    nome text not null
);

INSERT INTO armas (nome) VALUES
    ('Espada'),
    ('Claymore'),
    ('Arco'),
    ('Lança'),
    ('Catalizador');


CREATE TABLE talentos (
    id_tal serial primary key,
    nome text not null
);

INSERT INTO talentos (nome) VALUES
    ('Liberdade'),
    ('Resistencia'),
    ('Balada'),
    ('Prosperidade'),
    ('Diligência'),
    ('Ouro'),
    ('Transitoriedade'),
    ('Elegância'),
    ('Luz'),
    ('Advertência'),
    ('Engenho'),
    ('Práxis');


CREATE TABLE nacao (
    id_nacao serial primary key,
    nome text not null
);

INSERT INTO nacao (nome) VALUES
    ('Mondstadt'),
    ('Liyue'),
    ('Inazuma'),
    ('Sumeru'),
    ('Fontaine'),
    ('Natlan'),
    ('Snezhnaya');

CREATE TABLE personagens (
    id_pers serial primary key,
    nome text not null,
    raridade varchar(1) CHECK (raridade='4' or raridade='5'),
    constelacao text not null,
    aniver text not null,Usuario.belongsToMany(Estrela, { through: Personagens_Usuarios }, { onDelete: 'CASCADE' });
Estrela.belongsToMany(Usuario, { through: Personagens_Usuarios }, { onDelete: 'CASCADE' });
    FOREIGN KEY (id_ele) REFERENCES elementos(id_ele),
    FOREIGN KEY (id_arm) REFERENCES armas(id_arm),
    FOREIGN KEY (id_tal) REFERENCES talentos(id_tal),
    FOREIGN KEY (id_nacao) REFERENCES nacao(id_nacao)
);

/*nao tem Candese, Cyno, Nilou, Layla, Aloy, Traveler, Dori, Nahida, scara, faruzan*/
INSERT INTO personagens (nome, raridade, constelacao, aniver, foto, id_ele, id_arm, id_tal, id_nacao) VALUES
    ('Albedo', '5', 'Princeps Cretaceus', '13/09', null, 1, 1, 3, 1),
    ('Amber', '4', 'Lepus', '10/08', null, 4, 3, 1, 1),
    ('Itto', '5', 'Taurus Iracundus', '01/06', null, 1, 2, 8, 3),
    ('Barbara', '4', 'Crater', '05/07', null, 5, 5, 1, 1),
    ('Beidou', '4', 'Victor Mare', '14/02', null, 6, 2, 6, 2),
    ('Bennett', '4', 'Rota Calamitas', '29/02', null, 4, 1, 2, 1),
    ('Chongyun', '4', 'Nubis Caesor', '07/09', null, 3, 2, 5, 2),
    ('Collei', '4', 'Leptailurus Cervarius', '08/05', null, 2, 3, 12, 4),
    ('Diluc', '5', 'Noctua', '30/04', null, 4, 2, 2, 1),
    ('Diona', '4', 'Feles', '18/01', null, 3, 3, 1, 1),
    ('Eula', '5', 'Aphros Delos', '25/10', null, 3, 2, 2, 1),
    ('Fischl', '4', 'Corvus', '27/05', null, 6, 3, 3, 1),
    ('Ganyu', '5', 'Sinae Unicornis', '02/12', null, 3, 3, 5, 2),
    ('Gorou', '4', 'Canis Bellatoris', '18/05', null, 1, 3, 9, 3),
    ('Hu Tao', '5', 'Papilio Charontis', '15/07', null, 4, 4, 5, 2),
    ('Jean', '5', 'Leo Minor', '14/03', null, 7, 1, 2, 1),
    ('Kazuha', '5', 'Acer', '29/10', null, 7, 1, 5, 3),
    ('Kaeya', '4', 'Pavo Ocellus', '30/11', null, 3, 1, 3, 1),
    ('Ayaka', '5', 'Grus Nivis', '28/09', null, 3, 1, 8, 3),
    ('Ayato', '5', 'Cypressus Custos', '26/03', null, 5, 1, 8, 3),
    ('Keqing', '5', 'Trulla Cementarii', '20/11', null, 6, 1, 4, 2),
    ('Klee', '5', 'Trifolium', '27/07', null, 4, 5, 1, 1),
    ('Sarah', '4', 'Flabelo', '14/07', null, 6, 3, 8, 3),
    ('Shinobu', '4', 'Tribulatio Demptio', '27/07', null, 6, 1, 8, 3),
    ('Lisa', '4', 'Tempus Fugit', '09/06', null, 6, 5, 3, 1),
    ('Mona', '5', 'Astrolabos', '31/08', null, 5, 5, 2, 1),
    ('Ningguang', '4', 'Opus Aequilibrium', '26/08', null, 1, 5, 4, 2),
    ('Noelle', '4', 'Parma Cordis', '21/03', null, 1, 2, 2, 1),
    ('Qiqi', '5', 'Pristina Nola', '03/03', null, 3, 1, 4, 2),
    ('Raiden', '5', 'Imperatrix Umbrosa', '26/06', null, 6, 4, 9, 3),
    ('Razor', '4', 'Lupus Minor', '09/09', null, 6, 2, 2, 1),
    ('Rosária', '4', 'Spinea Corona', '24/01', null, 3, 4, 3, 1),
    ('Kokomi', '5', 'Dracaena Somnolenta', '22/02', null, 5, 5, 7, 3),
    ('Sayu', '4', 'Nyctereutes Minor', '19/10', null, 7, 2, 9, 3),
    ('Shenhe', '5', 'Crista Doloris', '10/03', null, 3, 4, 4, 2),
    ('Sucrose', '4', 'Anpulla', '26/11', null, 7, 5, 1, 1),
    ('Heizou', '4', 'Cervus Minor', '24/07', null, 7, 5, 7, 3),
    ('Tartaglia', '5', 'Monoceros Caeli', '20/07', null, 5, 3, 1, 7),
    ('Thoma', '4', 'Rubeum Scutum', '09/01', null, 4, 4, 7, 3),
    ('Tighnari', '5', 'Vulpes Zerda', '29/12', null, 2, 3, 10, 4),
    ('Venti', '5', 'Carmen Dei', '16/06', null, 7, 3, 3, 1),
    ('Xiangling', '4', 'Trulla', '02/11', null, 4, 4, 5, 2),
    ('xiao', '5', 'Alatus Nemeseos', '17/04', null, 7, 4, 4, 2),
    ('Xingqiu', '4', 'Fabulae Textile', '09/10', null, 5, 1, 6, 2),
    ('Xinyan', '4', 'Fila Ignium', '16/10', null, 4, 2, 6, 2),
    ('Yae Miko', '5', 'Divina Vulpes', '27/06', null, 6, 5, 9, 3),
    ('Yanfei', '4', 'Bestia Iustitia', '28/07', null, 4, 5, 6, 2),
    ('Yelan', '5', 'Umbrabilis Orchis', '20/04', null, 5, 3, 4, 2),
    ('Yoimiya', '5', 'Carassius Auratus', '21/06', null, 4, 3, 7, 3),
    ('Yunjin', '4', 'Opera Grandis', '21/05', null, 1, 4, 5, 2),
    ('Zhongli', '5', 'Lapis Dei', '31/12', null, 1, 4, 6, 2);


CREATE TABLE usuarios (
    id_user serial primary key,
    nome text not null,
    email text not null,
    senha text not null,
    foto text
);

CREATE TABLE personagens_usuarios (
    id_peruser serial primary key,
    foto text not null,
    id_pers int not null,
    id_user int not null,
    FOREIGN KEY (id_pers) REFERENCES personagens(id_pers),
    FOREIGN KEY (id_user) REFERENCES usuarios(id_user)
);

CREATE TABLE estrelas (
    id_star serial primary key,
    id_peruser int not null,
    id_user int not null,
    FOREIGN KEY (id_peruser) REFERENCES personagens_usuarios(id_peruser),
    FOREIGN KEY (id_user) REFERENCES usuarios(id_user)
);


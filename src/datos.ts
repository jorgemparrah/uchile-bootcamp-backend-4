import { Categoria } from "./productos/entities/categoria";
import { Especie } from "./productos/entities/especie";
import { Producto } from "./productos/entities/producto";
import { Stock } from "./productos/entities/stock";
import { Subcategoria } from "./productos/entities/subcategoria";
import { SubcategoriaDos } from "./productos/entities/subcategoriaDos";
import { Tienda } from "./productos/entities/tienda";
import { Comuna } from "./ubicacion/entities/comuna";
import { Region } from "./ubicacion/entities/region";
import { Rol } from "./usuarios/entities/rol";
import { Usuario } from "./usuarios/entities/usuario";
import { v4 as uuidv4 } from 'uuid';

export const SOLICITUDES_CONTACTO = [];

export const REGIONES : Region[] = [
  new Region("AP", "Arica y Parinacota"),
  new Region("TA", "Tarapacá"),
  new Region("AN", "Antofagasta"),
  new Region("AT", "Atacama"),
  new Region("CO", "Coquimbo"),
  new Region("VA", "Valparaíso"),
  new Region("RM", "Metropolitana de Santiago"),
  new Region("LI", "Lib. Gral. Bernardo O'Higgins"),
  new Region("ML", "Maule"),
  new Region("NB", "Ñuble"),
  new Region("BI", "Biobío"),
  new Region("AR", "La Araucanía"),
  new Region("LR", "Los Ríos"),
  new Region("LL", "Los Lagos"),
  new Region("AI", "Aysén del General Carlos Ibáñez del Campo"),
  new Region("MA", "Magallanes y Antártica Chilena"),
]

export const COMUNAS : Comuna[] = [
  new Comuna("15101", "Arica", "AP"),
  new Comuna("15102", "Camarones", "AP"),
  new Comuna("15201", "Putre", "AP"),
  new Comuna("15202", "General Lagos", "AP"),
  new Comuna("01101", "Iquique", "TA"),
  new Comuna("01107", "Alto Hospicio", "TA"),
  new Comuna("01401", "Pozo Almonte", "TA"),
  new Comuna("01402", "Camiña", "TA"),
  new Comuna("01403", "Colchane", "TA"),
  new Comuna("01404", "Huara", "TA"),
  new Comuna("01405", "Pica", "TA"),
  new Comuna("02101", "Antofagasta", "AN"),
  new Comuna("02102", "Mejillones", "AN"),
  new Comuna("02103", "Sierra Gorda", "AN"),
  new Comuna("02104", "Taltal", "AN"),
  new Comuna("02201", "Calama", "AN"),
  new Comuna("02202", "Ollagüe", "AN"),
  new Comuna("02203", "San Pedro de Atacama", "AN"),
  new Comuna("02301", "Tocopilla", "AN"),
  new Comuna("02302", "María Elena", "AN"),
  new Comuna("03101", "Copiapó", "AT"),
  new Comuna("03102", "Caldera", "AT"),
  new Comuna("03103", "Tierra Amarilla", "AT"),
  new Comuna("03201", "Chañaral", "AT"),
  new Comuna("03202", "Diego de Almagro", "AT"),
  new Comuna("03301", "Vallenar", "AT"),
  new Comuna("03302", "Alto del Carmen", "AT"),
  new Comuna("03303", "Freirina", "AT"),
  new Comuna("03304", "Huasco", "AT"),
  new Comuna("04101", "La Serena", "CO"),
  new Comuna("04102", "Coquimbo", "CO"),
  new Comuna("04103", "Andacollo", "CO"),
  new Comuna("04104", "La Higuera", "CO"),
  new Comuna("04105", "Paihuano", "CO"),
  new Comuna("04106", "Vicuña", "CO"),
  new Comuna("04201", "Illapel", "CO"),
  new Comuna("04202", "Canela", "CO"),
  new Comuna("04203", "Los Vilos", "CO"),
  new Comuna("04204", "Salamanca", "CO"),
  new Comuna("04301", "Ovalle", "CO"),
  new Comuna("04302", "Combarbalá", "CO"),
  new Comuna("04303", "Monte Patria", "CO"),
  new Comuna("04304", "Punitaqui", "CO"),
  new Comuna("04305", "Río Hurtado", "CO"),
  new Comuna("05101", "Valparaíso", "VA"),
  new Comuna("05102", "Casablanca", "VA"),
  new Comuna("05103", "Concón", "VA"),
  new Comuna("05104", "Juan Fernández", "VA"),
  new Comuna("05105", "Puchuncaví", "VA"),
  new Comuna("05107", "Quintero", "VA"),
  new Comuna("05109", "Viña del Mar", "VA"),
  new Comuna("05201", "Isla de Pascua", "VA"),
  new Comuna("05301", "Los Andes", "VA"),
  new Comuna("05302", "Calle Larga", "VA"),
  new Comuna("05303", "Rinconada", "VA"),
  new Comuna("05304", "San Esteban", "VA"),
  new Comuna("05401", "La Ligua", "VA"),
  new Comuna("05402", "Cabildo", "VA"),
  new Comuna("05403", "Papudo", "VA"),
  new Comuna("05404", "Petorca", "VA"),
  new Comuna("05405", "Zapallar", "VA"),
  new Comuna("05501", "Quillota", "VA"),
  new Comuna("05502", "La Calera", "VA"),
  new Comuna("05503", "Hijuelas", "VA"),
  new Comuna("05504", "La Cruz", "VA"),
  new Comuna("05506", "Nogales", "VA"),
  new Comuna("05601", "San Antonio", "VA"),
  new Comuna("05602", "Algarrobo", "VA"),
  new Comuna("05603", "Cartagena", "VA"),
  new Comuna("05604", "El Quisco", "VA"),
  new Comuna("05605", "El Tabo", "VA"),
  new Comuna("05606", "Santo Domingo", "VA"),
  new Comuna("05701", "San Felipe", "VA"),
  new Comuna("05702", "Catemu", "VA"),
  new Comuna("05703", "Llay-Llay", "VA"),
  new Comuna("05704", "Panquehue", "VA"),
  new Comuna("05705", "Putaendo", "VA"),
  new Comuna("05706", "Santa María", "VA"),
  new Comuna("05801", "Quilpué", "VA"),
  new Comuna("05802", "Limache", "VA"),
  new Comuna("05803", "Olmué", "VA"),
  new Comuna("05804", "Villa Alemana", "VA"),
  new Comuna("06101", "Rancagua", "LI"),
  new Comuna("06102", "Codegua", "LI"),
  new Comuna("06103", "Coinco", "LI"),
  new Comuna("06104", "Coltauco", "LI"),
  new Comuna("06105", "Doñihue", "LI"),
  new Comuna("06106", "Graneros", "LI"),
  new Comuna("06107", "Las Cabras", "LI"),
  new Comuna("06108", "Machalí", "LI"),
  new Comuna("06109", "Malloa", "LI"),
  new Comuna("06110", "Mostazal", "LI"),
  new Comuna("06111", "Olivar", "LI"),
  new Comuna("06112", "Peumo", "LI"),
  new Comuna("06113", "Pichidegua", "LI"),
  new Comuna("06114", "Quinta de Tilcoco", "LI"),
  new Comuna("06115", "Rengo", "LI"),
  new Comuna("06116", "Requínoa", "LI"),
  new Comuna("06117", "San Vicente", "LI"),
  new Comuna("06201", "Pichilemu", "LI"),
  new Comuna("06202", "La Estrella", "LI"),
  new Comuna("06203", "Litueche", "LI"),
  new Comuna("06204", "Marchigüe", "LI"),
  new Comuna("06205", "Navidad", "LI"),
  new Comuna("06206", "Paredones", "LI"),
  new Comuna("06301", "San Fernando", "LI"),
  new Comuna("06302", "Chépica", "LI"),
  new Comuna("06303", "Chimbarongo", "LI"),
  new Comuna("06304", "Lolol", "LI"),
  new Comuna("06305", "Nancagua", "LI"),
  new Comuna("06306", "Palmilla", "LI"),
  new Comuna("06307", "Peralillo", "LI"),
  new Comuna("06308", "Placilla", "LI"),
  new Comuna("06309", "Pumanque", "LI"),
  new Comuna("06310", "Santa Cruz", "LI"),
  new Comuna("07101", "Talca", "ML"),
  new Comuna("07102", "Constitución", "ML"),
  new Comuna("07103", "Curepto", "ML"),
  new Comuna("07104", "Empedrado", "ML"),
  new Comuna("07105", "Maule", "ML"),
  new Comuna("07106", "Pelarco", "ML"),
  new Comuna("07107", "Pencahue", "ML"),
  new Comuna("07108", "Río Claro", "ML"),
  new Comuna("07109", "San Clemente", "ML"),
  new Comuna("07110", "San Rafael", "ML"),
  new Comuna("07201", "Cauquenes", "ML"),
  new Comuna("07202", "Chanco", "ML"),
  new Comuna("07203", "Pelluhue", "ML"),
  new Comuna("07301", "Curicó", "ML"),
  new Comuna("07302", "Hualañé", "ML"),
  new Comuna("07303", "Licantén", "ML"),
  new Comuna("07304", "Molina", "ML"),
  new Comuna("07305", "Rauco", "ML"),
  new Comuna("07306", "Romeral", "ML"),
  new Comuna("07307", "Sagrada Familia", "ML"),
  new Comuna("07308", "Teno", "ML"),
  new Comuna("07309", "Vichuquén", "ML"),
  new Comuna("07401", "Linares", "ML"),
  new Comuna("07402", "Colbún", "ML"),
  new Comuna("07403", "Longaví", "ML"),
  new Comuna("07404", "Parral", "ML"),
  new Comuna("07405", "Retiro", "ML"),
  new Comuna("07406", "San Javier", "ML"),
  new Comuna("07407", "Villa Alegre", "ML"),
  new Comuna("07408", "Yerbas Buenas", "ML"),
  new Comuna("16101", "Chillán", "NB"),
  new Comuna("16102", "Bulnes", "NB"),
  new Comuna("16103", "Chillán Viejo", "NB"),
  new Comuna("16104", "El Carmen", "NB"),
  new Comuna("16105", "Pemuco", "NB"),
  new Comuna("16106", "Pinto", "NB"),
  new Comuna("16107", "Quillón", "NB"),
  new Comuna("16108", "San Ignacio", "NB"),
  new Comuna("16109", "Yungay", "NB"),
  new Comuna("16201", "Quirihue", "NB"),
  new Comuna("16202", "Cobquecura", "NB"),
  new Comuna("16203", "Coelemu", "NB"),
  new Comuna("16204", "Ninhue", "NB"),
  new Comuna("16205", "Portezuelo", "NB"),
  new Comuna("16206", "Ránquil", "NB"),
  new Comuna("16207", "Treguaco", "NB"),
  new Comuna("16301", "San Carlos", "NB"),
  new Comuna("16302", "Coihueco", "NB"),
  new Comuna("16303", "Ñiquén", "NB"),
  new Comuna("16304", "San Fabián", "NB"),
  new Comuna("16305", "San Nicolás", "NB"),
  new Comuna("08101", "Concepción", "BI"),
  new Comuna("08102", "Coronel", "BI"),
  new Comuna("08103", "Chiguayante", "BI"),
  new Comuna("08104", "Florida", "BI"),
  new Comuna("08105", "Hualqui", "BI"),
  new Comuna("08106", "Lota", "BI"),
  new Comuna("08107", "Penco", "BI"),
  new Comuna("08108", "San Pedro de La Paz", "BI"),
  new Comuna("08109", "Santa Juana", "BI"),
  new Comuna("08110", "Talcahuano", "BI"),
  new Comuna("08111", "Tomé", "BI"),
  new Comuna("08112", "Hualpén", "BI"),
  new Comuna("08201", "Lebu", "BI"),
  new Comuna("08202", "Arauco", "BI"),
  new Comuna("08203", "Cañete", "BI"),
  new Comuna("08204", "Contulmo", "BI"),
  new Comuna("08205", "Curanilahue", "BI"),
  new Comuna("08206", "Los Álamos", "BI"),
  new Comuna("08207", "Tirúa", "BI"),
  new Comuna("08301", "Los Ángeles", "BI"),
  new Comuna("08302", "Antuco", "BI"),
  new Comuna("08303", "Cabrero", "BI"),
  new Comuna("08304", "Laja", "BI"),
  new Comuna("08305", "Mulchén", "BI"),
  new Comuna("08306", "Nacimiento", "BI"),
  new Comuna("08307", "Negrete", "BI"),
  new Comuna("08308", "Quilaco", "BI"),
  new Comuna("08309", "Quilleco", "BI"),
  new Comuna("08310", "San Rosendo", "BI"),
  new Comuna("08311", "Santa Bárbara", "BI"),
  new Comuna("08312", "Tucapel", "BI"),
  new Comuna("08313", "Yumbel", "BI"),
  new Comuna("08314", "Alto Biobío", "BI"),
  new Comuna("09101", "Temuco", "AR"),
  new Comuna("09102", "Carahue", "AR"),
  new Comuna("09103", "Cunco", "AR"),
  new Comuna("09104", "Curarrehue", "AR"),
  new Comuna("09105", "Freire", "AR"),
  new Comuna("09106", "Galvarino", "AR"),
  new Comuna("09107", "Gorbea", "AR"),
  new Comuna("09108", "Lautaro", "AR"),
  new Comuna("09109", "Loncoche", "AR"),
  new Comuna("09110", "Melipeuco", "AR"),
  new Comuna("09111", "Nueva Imperial", "AR"),
  new Comuna("09112", "Padre Las Casas", "AR"),
  new Comuna("09113", "Perquenco", "AR"),
  new Comuna("09114", "Pitrufquén", "AR"),
  new Comuna("09115", "Pucón", "AR"),
  new Comuna("09116", "Saavedra", "AR"),
  new Comuna("09117", "Teodoro Schmidt", "AR"),
  new Comuna("09118", "Toltén", "AR"),
  new Comuna("09119", "Vilcún", "AR"),
  new Comuna("09120", "Villarrica", "AR"),
  new Comuna("09121", "Cholchol", "AR"),
  new Comuna("09201", "Angol", "AR"),
  new Comuna("09202", "Collipulli", "AR"),
  new Comuna("09203", "Curacautín", "AR"),
  new Comuna("09204", "Ercilla", "AR"),
  new Comuna("09205", "Lonquimay", "AR"),
  new Comuna("09206", "Los Sauces", "AR"),
  new Comuna("09207", "Lumaco", "AR"),
  new Comuna("09208", "Purén", "AR"),
  new Comuna("09209", "Renaico", "AR"),
  new Comuna("09210", "Traiguén", "AR"),
  new Comuna("09211", "Victoria", "AR"),
  new Comuna("14101", "Valdivia", "LR"),
  new Comuna("14102", "Corral", "LR"),
  new Comuna("14103", "Lanco", "LR"),
  new Comuna("14104", "Los Lagos", "LR"),
  new Comuna("14105", "Máfil", "LR"),
  new Comuna("14106", "Mariquina", "LR"),
  new Comuna("14107", "Paillaco", "LR"),
  new Comuna("14108", "Panguipulli", "LR"),
  new Comuna("14201", "La Unión", "LR"),
  new Comuna("14202", "Futrono", "LR"),
  new Comuna("14203", "Lago Ranco", "LR"),
  new Comuna("14204", "Río Bueno", "LR"),
  new Comuna("10101", "Puerto Montt", "LL"),
  new Comuna("10102", "Calbuco", "LL"),
  new Comuna("10103", "Cochamó", "LL"),
  new Comuna("10104", "Fresia", "LL"),
  new Comuna("10105", "Frutillar", "LL"),
  new Comuna("10106", "Los Muermos", "LL"),
  new Comuna("10107", "Llanquihue", "LL"),
  new Comuna("10108", "Maullín", "LL"),
  new Comuna("10109", "Puerto Varas", "LL"),
  new Comuna("10201", "Castro", "LL"),
  new Comuna("10202", "Ancud", "LL"),
  new Comuna("10203", "Chonchi", "LL"),
  new Comuna("10204", "Curaco de Vélez", "LL"),
  new Comuna("10205", "Dalcahue", "LL"),
  new Comuna("10206", "Puqueldón", "LL"),
  new Comuna("10207", "Queilén", "LL"),
  new Comuna("10208", "Quellón", "LL"),
  new Comuna("10209", "Quemchi", "LL"),
  new Comuna("10210", "Quinchao", "LL"),
  new Comuna("10301", "Osorno", "LL"),
  new Comuna("10302", "Puerto Octay", "LL"),
  new Comuna("10303", "Purranque", "LL"),
  new Comuna("10304", "Puyehue", "LL"),
  new Comuna("10305", "Río Negro", "LL"),
  new Comuna("10306", "San Juan de la Costa", "LL"),
  new Comuna("10307", "San Pablo", "LL"),
  new Comuna("10401", "Chaitén", "LL"),
  new Comuna("10402", "Futaleufú", "LL"),
  new Comuna("10403", "Hualaihué", "LL"),
  new Comuna("10404", "Palena", "LL"),
  new Comuna("11101", "Coyhaique", "AI"),
  new Comuna("11102", "Lago Verde", "AI"),
  new Comuna("11201", "Aysén", "AI"),
  new Comuna("11202", "Cisnes", "AI"),
  new Comuna("11203", "Guaitecas", "AI"),
  new Comuna("11301", "Cochrane", "AI"),
  new Comuna("11302", "O'Higgins", "AI"),
  new Comuna("11303", "Tortel", "AI"),
  new Comuna("11401", "Chile Chico", "AI"),
  new Comuna("11402", "Río Ibáñez", "AI"),
  new Comuna("12101", "Punta Arenas", "MA"),
  new Comuna("12102", "Laguna Blanca", "MA"),
  new Comuna("12103", "Río Verde", "MA"),
  new Comuna("12104", "San Gregorio", "MA"),
  new Comuna("12201", "Cabo de Hornos", "MA"),
  new Comuna("12202", "Antártica", "MA"),
  new Comuna("12301", "Porvenir", "MA"),
  new Comuna("12302", "Primavera", "MA"),
  new Comuna("12303", "Timaukel", "MA"),
  new Comuna("12401", "Natales", "MA"),
  new Comuna("12402", "Torres del Paine", "MA"),
  new Comuna("13101", "Santiago", "RM"),
  new Comuna("13102", "Cerrillos", "RM"),
  new Comuna("13103", "Cerro Navia", "RM"),
  new Comuna("13104", "Conchalí", "RM"),
  new Comuna("13105", "El Bosque", "RM"),
  new Comuna("13106", "Estación Central", "RM"),
  new Comuna("13107", "Huechuraba", "RM"),
  new Comuna("13108", "Independencia", "RM"),
  new Comuna("13109", "La Cisterna", "RM"),
  new Comuna("13110", "La Florida", "RM"),
  new Comuna("13111", "La Granja", "RM"),
  new Comuna("13112", "La Pintana", "RM"),
  new Comuna("13113", "La Reina", "RM"),
  new Comuna("13114", "Las Condes", "RM"),
  new Comuna("13115", "Lo Barnechea", "RM"),
  new Comuna("13116", "Lo Espejo", "RM"),
  new Comuna("13117", "Lo Prado", "RM"),
  new Comuna("13118", "Macul", "RM"),
  new Comuna("13119", "Maipú", "RM"),
  new Comuna("13120", "Ñuñoa", "RM"),
  new Comuna("13121", "Pedro Aguirre Cerda", "RM"),
  new Comuna("13122", "Peñalolén", "RM"),
  new Comuna("13123", "Providencia", "RM"),
  new Comuna("13124", "Pudahuel", "RM"),
  new Comuna("13125", "Quilicura", "RM"),
  new Comuna("13126", "Quinta Normal", "RM"),
  new Comuna("13127", "Recoleta", "RM"),
  new Comuna("13128", "Renca", "RM"),
  new Comuna("13129", "San Joaquín", "RM"),
  new Comuna("13130", "San Miguel", "RM"),
  new Comuna("13131", "San Ramón", "RM"),
  new Comuna("13132", "Vitacura", "RM"),
  new Comuna("13201", "Puente Alto", "RM"),
  new Comuna("13202", "Pirque", "RM"),
  new Comuna("13203", "San José de Maipo", "RM"),
  new Comuna("13301", "Colina", "RM"),
  new Comuna("13302", "Lampa", "RM"),
  new Comuna("13303", "Til Til", "RM"),
  new Comuna("13401", "San Bernardo", "RM"),
  new Comuna("13402", "Buin", "RM"),
  new Comuna("13403", "Calera de Tango", "RM"),
  new Comuna("13404", "Paine", "RM"),
  new Comuna("13501", "Melipilla", "RM"),
  new Comuna("13502", "Alhué", "RM"),
  new Comuna("13503", "Curacaví", "RM"),
  new Comuna("13504", "María Pinto", "RM"),
  new Comuna("13505", "San Pedro", "RM"),
  new Comuna("13601", "Talagante", "RM"),
  new Comuna("13602", "El Monte", "RM"),
  new Comuna("13603", "Isla de Maipo", "RM"),
  new Comuna("13604", "Padre Hurtado", "RM"),
  new Comuna("13605", "Peñaflor", "RM")
];

export const ROLES : Rol[] = [
  new Rol("CLIENTE", "Cliente"),
  new Rol("ADMIN", "Administrador")
];

export const USUARIO_CLIENTE : Usuario[] = [
  new Usuario("11111111-1", "juan.perez@ejemplo.com",  "123456", "Juan Pérez",  "912345678"),
  new Usuario("22222222-2", "maria.lopez@ejemplo.com", "123456", "María López", "911223344"),
];

export const USUARIO_MIXTO : Usuario[] = [
  new Usuario("12345678-5", "carlos.garcia@ejemplo.com", "123456", "Carlos García", "955554444"),
];

export const USUARIO_ADMIN : Usuario[] = [
  new Usuario("11222333-9", "admin@ejemplo.com", "123456", "Administrador", "955556666"),
];

export const ESPECIES: Especie[] = [
  new Especie("PERRO", "Perro"),
  new Especie("GATO", "Gato"),
  new Especie("AVE", "Ave"),
  new Especie("ROEDOR", "Roedor"),
  new Especie("REPTIL", "Reptil"),
  new Especie("PEZ", "Pez"),
];

export const TIENDAS : Tienda[] = [
  new Tienda("MMM", "Mundo Mimoso Mascotas"),
  new Tienda("RAG", "Rincon Animal Gourmet:"),
  new Tienda("HUU", "Huellas Urbanas"),
  new Tienda("CCB", "Caninos y Compañía Boutique"),
  new Tienda("ZAP", "ZooManía Amigos Peludos"),
];

export const CATEGORIAS : Categoria[] = [
  new Categoria("ALIM", "Alimentación"),
  new Categoria("SERV", "Servicios"),
  new Categoria("ACCE", "Accesorios"),
];

export const SUBCATEGORIAS : Subcategoria[] = [
  new Subcategoria("ALIM_SECO", "Alimentos Secos", "ALIM"),
  new Subcategoria("ALIM_HUME", "Alimentos Húmedos", "ALIM"),
  new Subcategoria("ALIM_SNAC", "Snacks", "ALIM"),
  new Subcategoria("ALIM_COME", "Comederos y bebederos", "ALIM"),
  new Subcategoria("SERV_PELU", "Peluquería", "SERV"),
  new Subcategoria("SERV_HOTE", "Hotelería", "SERV"),
  new Subcategoria("SERV_RECR", "Recreación", "SERV"),
  new Subcategoria("SERV_FARM", "Farmacia", "SERV"),
  new Subcategoria("ACCE_VEST", "Vestuario y accesorios", "ACCE"),
  new Subcategoria("ACCE_JUGU", "Juguetes", "ACCE"),
  new Subcategoria("ACCE_TRAN", "Transporte y seguridad", "ACCE"),
  new Subcategoria("ACCE_ENRI", "Enriquecedores de espacio", "ACCE"),
];

export const SUBCATEGORIAS_DOS : SubcategoriaDos[] = [
  new SubcategoriaDos("SERV_RECR_PASE", "Paseos", "SERV_RECR"),
  new SubcategoriaDos("SERV_RECR_CUID", "Cuidadores", "SERV_RECR"),
  new SubcategoriaDos("SERV_RECR_ADIE", "Adiestramiento", "SERV_RECR"),
];

export const PRODUCTOS : Producto[] = [
  new Producto('c913ab46-b551-4a5a-a704-d00e416fec96', "NutriPellets Premium para Perros",        "ALIM", "ALIM_SECO", "PERRO",   "DESCRIPCION", "DETALLE", "/src/assets/images/AlimentoHumedoGatitoKittenCanChatPoulet155g.png"),
  new Producto('55492f66-8859-4ad1-bda3-cb6e7299b1f0', "GatoGourmet Delicias de Salmón",          "ALIM", "ALIM_SECO", "GATO",    "DESCRIPCION", "DETALLE", "/src/assets/images/AlimentoHumedoGatitoKittenProPlanPolloHigadoLata.png"),
  new Producto('f24b4f03-07dd-4e95-8287-309522747ece', "AvesFestín Mezcla de Semillas",           "ALIM", "ALIM_SNAC", "AVE",     "DESCRIPCION", "DETALLE", "/src/assets/images/AlimentoHumedoGatitoKittenThreeCatsPate.png"),
  new Producto('44d4e35c-c06d-4ad4-8659-bf0f4dc08303', "RoedorYummies Bloques Nutritivos",        "ALIM", "ALIM_SNAC", "ROEDOR",  "DESCRIPCION", "DETALLE", "/src/assets/images/AlimentoHumedoGatoAdultoCastradoThreeCatsPateSaborPollo.png"),
  new Producto('04a9d950-ce44-46ad-8bc7-1898df154971', "FiestaFish Copos Tropicales",             "ALIM", "ALIM_SNAC", "PEZ",     "DESCRIPCION", "DETALLE", "/src/assets/images/AlimentoHumedoGatoAdultoFancyFeastTerrinePollo.jpg"),
  new Producto('8c50fa77-7903-4865-ad38-e938d164fc8f', "ReptilSnack Insectos Deshidratados",      "ALIM", "ALIM_SNAC", "REPTIL",  "DESCRIPCION", "DETALLE", "/src/assets/images/AlimentoHumedoGatoAdultoHillsPrescriptionDietKDKidneyCareCatLata.png"),
  new Producto('63007c59-91ab-4acf-8948-bd4814add82c', "CanineCrunch Bocadillos de Pollo",        "ALIM", "ALIM_HUME", "PERRO",   "DESCRIPCION", "DETALLE", "/src/assets/images/AlimentoHumedoGatoAdultoNecesidadesEspecialesHillsPrescriptionDietCDMulticareUrinaryCatLata.png"),
  new Producto('22d92043-df21-4668-b479-09c112abee5e', "MiauMix Croquetas de Atún",               "ALIM", "ALIM_SECO", "GATO",    "DESCRIPCION", "DETALLE", "/src/assets/images/AlimentoHumedoGatoAdultoOptimumPollo.png"),
  new Producto('dd1bddf0-7d77-4ba3-b92c-23c88249de02', "HealthyHerbivore Hierbas para Conejos",   "ALIM", "ALIM_SECO", "ROEDOR",  "DESCRIPCION", "DETALLE", "/src/assets/images/AlimentoHumedoGatoAdultoProPlanUrinaryCatCarnePollo.png"),
  new Producto('56621388-5f76-4146-8deb-3dae548bdba2', "PawsLick Láminas de Salmón Liofilizado",  "ALIM", "ALIM_SECO", "GATO",    "DESCRIPCION", "DETALLE", "/src/assets/images/AlimentoHumedoGatoAdultoThreeCatsSaborCarneSobre.png")
];

export const STOCK : Stock[] = [
  new Stock("c913ab46-b551-4a5a-a704-d00e416fec96", "MMM", 19990, 30),
  new Stock("c913ab46-b551-4a5a-a704-d00e416fec96", "HUU", 20490, 25),
  new Stock("c913ab46-b551-4a5a-a704-d00e416fec96", "CCB", 18990, 40),
  new Stock("55492f66-8859-4ad1-bda3-cb6e7299b1f0", "ZAP", 17990, 35),
  new Stock("55492f66-8859-4ad1-bda3-cb6e7299b1f0", "RAG", 16500, 20),
  new Stock("55492f66-8859-4ad1-bda3-cb6e7299b1f0", "MMM", 18750, 28),
  new Stock("f24b4f03-07dd-4e95-8287-309522747ece", "HUU", 8990, 50),
  new Stock("f24b4f03-07dd-4e95-8287-309522747ece", "CCB", 9490, 45),
  new Stock("f24b4f03-07dd-4e95-8287-309522747ece", "ZAP", 7990, 60),
  new Stock("44d4e35c-c06d-4ad4-8659-bf0f4dc08303", "RAG", 5990, 40),
  new Stock("44d4e35c-c06d-4ad4-8659-bf0f4dc08303", "MMM", 6490, 35),
  new Stock("44d4e35c-c06d-4ad4-8659-bf0f4dc08303", "HUU", 5500, 50),
  new Stock("04a9d950-ce44-46ad-8bc7-1898df154971", "CCB", 10990, 30),
  new Stock("04a9d950-ce44-46ad-8bc7-1898df154971", "ZAP", 11490, 25),
  new Stock("04a9d950-ce44-46ad-8bc7-1898df154971", "RAG", 10500, 40),
  new Stock("8c50fa77-7903-4865-ad38-e938d164fc8f", "MMM", 12990, 20),
  new Stock("8c50fa77-7903-4865-ad38-e938d164fc8f", "HUU", 13490, 25),
  new Stock("8c50fa77-7903-4865-ad38-e938d164fc8f", "CCB", 11990, 30),
  new Stock("63007c59-91ab-4acf-8948-bd4814add82c", "ZAP", 14990, 35),
  new Stock("63007c59-91ab-4acf-8948-bd4814add82c", "RAG", 15490, 40),
  new Stock("63007c59-91ab-4acf-8948-bd4814add82c", "MMM", 13990, 30),
  new Stock("22d92043-df21-4668-b479-09c112abee5e", "HUU", 18990, 50),
  new Stock("22d92043-df21-4668-b479-09c112abee5e", "CCB", 19490, 45),
  new Stock("22d92043-df21-4668-b479-09c112abee5e", "ZAP", 17990, 55),
  new Stock("dd1bddf0-7d77-4ba3-b92c-23c88249de02", "RAG", 7990, 40),
  new Stock("dd1bddf0-7d77-4ba3-b92c-23c88249de02", "MMM", 8490, 35),
  new Stock("dd1bddf0-7d77-4ba3-b92c-23c88249de02", "HUU", 7500, 45),
  new Stock("56621388-5f76-4146-8deb-3dae548bdba2", "CCB", 16990, 30),
  new Stock("56621388-5f76-4146-8deb-3dae548bdba2", "ZAP", 17490, 25),
  new Stock("56621388-5f76-4146-8deb-3dae548bdba2", "RAG", 15990, 35)
];

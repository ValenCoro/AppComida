import { Categoria } from '../interfaces/categorias';

export const CATEGORIAS: Categoria[] = [
  {
    nombre: 'Hamburguesas',
    id: 250,
    imgUrl: 'https://cdn2.cocinadelirante.com/sites/default/files/images/2023/08/como-hacer-hamburguesa-de-atun.jpg',
    productos: [
      {
        id: 1,
        nombre: 'La Peligrosa',
        precio: 3299,
        ingredientes: ['Pan', 'Carne', 'Cucarachas'],
        imagen:
          'https://i.ytimg.com/vi/UScYsGCEqmQ/maxresdefault.jpg',
      },
      {
        id: 2,
        nombre: 'BichoBurguer',
        precio: 2899,
        ingredientes: ['Pan', 'Carne de lombriz', 'Gusanos', 'Grillos',],
        imagen:
          'https://hips.hearstapps.com/hmg-prod/images/patron-shows-a-grasshopper-burger-piled-high-with-dried-news-photo-495564123-1558447046.jpg',
      },
      {
        id: 3,
        nombre: 'La Apestosa',
        precio: 3599,
        ingredientes: ['Pan', 'Moho', 'Carne', 'Lechuga', 'Tomate'],
        imagen:
          'https://telefe-static2.akamaized.net/media/227615/hamburguesa.jpg?v=20200221114744000&format=extraLarge&width=929&height=523&mode=crop',
      },
    ],
  },
  {
    nombre: 'Pizzas',
    id: 1,
    imgUrl:
      'https://hips.hearstapps.com/hmg-prod/images/close-up-of-pizza-on-table-royalty-free-image-995467932-1559051477.jpg?resize=2048:*',
    productos: [
      {
        id: 4,
        nombre: 'Pizza Alacran',
        precio: 1499,
        ingredientes: ['Tomate','Muzarella','Alacran',],
        imagen:
          'https://www.publimetro.cl/resizer/aC-lznRjedom5_zkLOLrbPfeH6s=/1440x1080/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/MY4BTPRU5JDXFB4XK7TRQHNJMM.jpg',
      },
      {
        id: 5,
        nombre: 'BananaPizza',
        precio: 1399,
        ingredientes: ['Tomate','Banana'],
        imagen:
          'https://www.publimetro.cl/resizer/xBO5tDpv59JTkzbrX0vZo_Sb-F4=/800x0/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/BWPYG3XTP5BCRL6H3B7DD7Y2RA.jpg',
      },
      {
        id: 6,
        nombre: 'Pizza de Papas',
        precio: 1199,
        ingredientes: ['Tomate','Muzarella','Papitas'],
        imagen:
          'https://imagenes.elpais.com/resizer/-rR6tkTWWV4nTcqhsyPXZUwoPuc=/1960x1103/cloudfront-eu-central-1.images.arcpublishing.com/prisa/LFWVFNLUX5LBXDOPW7Y3HNMWGQ.jpg',
      },
    ],
  },
  {
    nombre: 'Postres',
    id: 2,
    imgUrl:
      'https://mandolina.co/wp-content/uploads/2023/06/postre-de-maracuya.png',
    productos: [
      {
        id: 7,
        nombre: 'Galletitas',
        precio: 599,
        ingredientes: [],
        imagen: 'data:image/jpeg;base64,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',
      },
      {
        id: 8,
        nombre: 'Torta Oreo',
        precio: 899,
        ingredientes: [],
        imagen:
          'https://fedecocina.net/imagenes/4x3/postre-oreo.jpg',
      },
      {
        id: 9,
        nombre: 'Torta de Bob Esponja',
        precio: 1499,
        ingredientes: [],
        imagen:
          'https://1.bp.blogspot.com/_DzYR37GsG2o/TK7-L4kZN5I/AAAAAAAABnk/35Nbfh5W4ok/s1600/Agost+110.JPG',
      },
    ],
  },
  {
    nombre: 'Bebidas',
    id: 3,
    imgUrl:
      'https://s1.abcstatics.com/media/viajar/2018/05/08/coca-cola-kvSF--1240x698@abc-kYUG--1240x698@abc.jpg',
    productos: [
      {
        id: 10,
        nombre: 'CocaCola',
        precio: 400,
        ingredientes: [],
        imagen:
          'https://cdn-3.expansion.mx/dims4/default/1b14363/2147483647/strip/true/crop/2096x1430+0+0/resize/1200x819!/format/webp/quality/60/?url=https%3A%2F%2Fcdn-3.expansion.mx%2F95%2F6c%2F722abfb544dcb4a46b9ca967a1ef%2Fistock-499925476.jpg',
      },
      {
        id: 11,
        nombre: 'Seven Up',
        precio: 400,
        ingredientes: [],
        imagen:
          'https://images.pizzahut.es/Products/Original/Botella_Seven_Up_Free-1885.png',
      },
      {
        id: 12,
        nombre: 'Agua',
        precio: 300,
        ingredientes: [],
        imagen:
          'https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/3040731_f.jpg',
      },
    ],
  },
];

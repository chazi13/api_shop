'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('menus', [
      {
        name: 'Sandwich Goreng',
        price: '5000',
        image: 'https://www.masakapaya.com/Uploads/Foto%20Resep/Juli18/Sandwich-Goreng-isi-Ragout.png',
        isStared: 1,
        categoryId: 1
      },
      {
        name: 'Bakwan Udang',
        price: '3000',
        image: 'https://www.masakapaya.com/Uploads/Foto%20Resep/Mei18/Bakwan-Goreng-(2).jpg',
        isStared: 0,
        categoryId: 1
      },
      {
        name: 'Lumpia Saus Yoghurt',
        price: '5000',
        image: 'https://www.masakapaya.com/Uploads/Foto%20Resep/Agustus18/Lumpia-Saus-Yoghurt-Lemon.png',
        isStared: 1,
        categoryId: 1
      },
      {
        name: 'Pastel Indomie',
        price: '3000',
        image: 'https://www.masakapaya.com/Uploads/Foto%20Resep/Oktober18/Pastel-Indomie.jpg',
        isStared: 0,
        categoryId: 1
      },
      {
        name: 'Ayam Geprek Telur Asin',
        price: '25000',
        image: 'https://www.masakapaya.com/Uploads/Foto%20Resep/Oktober18/Ayam-Geprek-Telur-Asin.jpg',
        isStared: 1,
        categoryId: 1
      },
      {
        name: 'Soto Betawi',
        price: '30000',
        image: 'https://www.masakapaya.com/Uploads/Foto%20Resep/Oktober18/Soto-Betawi.jpg',
        isStared: 1,
        categoryId: 1
      },
      {
        name: 'Shabu-shabu',
        price: '35000',
        image: 'https://www.masakapaya.com/Uploads/Foto%20Resep/Oktober18/Shabu-Shabu.jpg',
        isStared: 1,
        categoryId: 1
      },
      {
        name: 'Dimsum',
        price: '25000',
        image: 'https://www.masakapaya.com/Uploads/Foto%20Resep/Oktober18/Dimsum.jpg',
        isStared: 0,
        categoryId: 1
      },
      {
        name: 'Dorayaki Ice Cream',
        price: '10000',
        image: 'https://www.masakapaya.com/Uploads/Foto%20Resep/july%202019/Nicky%20Tirta%20Dorayaki%20crop.jpg',
        isStared: 1,
        categoryId: 1
      },
      {
        name: 'Kembang Tahu Susu',
        price: '7000',
        image: 'https://www.masakapaya.com/Uploads/Foto%20Resep/Oktober18/Kembang-Tahu-Susu.jpg',
        isStared: 1,
        categoryId: 1
      },
      {
        name: 'Chocolate Mousse',
        price: '5000',
        image: 'https://www.masakapaya.com/Uploads/Foto%20Resep/Oktober18/Chocolate-Mousse.jpg',
        isStared: 0,
        categoryId: 1
      },
      {
        name: 'Pudding Stroberi',
        price: '3000',
        image: 'https://www.masakapaya.com/Uploads/Foto%20Resep/september18/Puding-Strawberry.png',
        isStared: 0,
        categoryId: 1
      },
      {
        name: 'Es Kelapa Jeruk Nipis',
        price: '10000',
        image: 'https://hellosehat.com/wp-content/uploads/2018/11/es-kelapa-623x467.jpg',
        isStared: 0,
        categoryId: 1
      },
      {
        name: 'Es Bolo-bolo Buah',
        price: '8000',
        image: 'https://hellosehat.com/wp-content/uploads/2018/11/es-buah.jpg',
        isStared: 1,
        categoryId: 1
      },
      {
        name: 'Es Timun',
        price: '10000',
        image: 'https://hellosehat.com/wp-content/uploads/2018/11/es-timun-kerik-623x467.jpg',
        isStared: 0,
        categoryId: 1
      },
      {
        name: 'Smoothies Mangga',
        price: '15000',
        image: 'https://hellosehat.com/wp-content/uploads/2018/11/smoothies-mangga-623x467.jpg',
        isStared: 1,
        categoryId: 1
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};

exports.seed = function (knex){
  return knex("livros").del()
  .then(function() {
      return knex("livros").insert([
          {
              titulo:"Web Design Responsivo", autor: "Mauricio Silva", ano: 2014, preco: 73.0, foto: "https://d1pkzhm5uq4mnt.cloudfront.net/imagens/capas/4e37aef84e7eb21870481f92721651377842bc42.jpg"
          }
          

      ]);
  });
}


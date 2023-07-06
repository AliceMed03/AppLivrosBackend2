exports.seed = function (knex){
  return knex("editora").del()
  .then(function() {
      return knex("editora").insert([
          {
              nome:"Alicinha", 
              cidade: "Criciúma", 
              estado: "Santa Catarina", 
              telefone: "(48) 3433-5584", 
              rua: "Henrique Lage",
              cep: "88804-010"
          }
      ]);
  });
}


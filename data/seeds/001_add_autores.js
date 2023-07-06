exports.seed = function (knex){
  return knex("autores").del()
  .then(function() {
      return knex("autores").insert([
          {
              nome:"Alice", 
              sobrenome: "Medeiros", 
              idade: 20, 
              data_nascimento: '25/04/2003', 
              sexo: "Feminino",
              telefone: "(48) 9 8815-2251"
          }
          

      ]);
  });
}


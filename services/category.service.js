class CategoriesService {

  constructor(){

  }

  async create(data) {
    console.log("Llegamos al create");
  }

  find() {
    console.log("Llegamos al consultar todos");
  }

  async findOne(id) {
    console.log("Llegamos al consultar por id");
  }

  async update(id, changes) {
    console.log("Llegamos al actualizar");
  }

  async delete(id) {
    console.log("Llegamos al borrar");
  }

}

module.exports = CategoriesService;

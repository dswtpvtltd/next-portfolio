class Portfolio {
  constructor(model) {
    this.Model = model;
  }
  async getAll() {
    return await this.Model.find({});
  }
  async getById(id) {
    return await this.Model.findById(id);
  }
  async create(input) {
    return await this.Model.create(input);
  }
  async findAndUpdate(id, input) {
    return await this.Model.findByIdAndUpdate(id, input, {
      new: true,
    });
  }
  async findAndDelete(id) {
    await this.Model.findByIdAndRemove(id);
    return id;
  }
}

module.exports = Portfolio;

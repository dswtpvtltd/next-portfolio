const { portfolios } = require("./data");
const Portfolio = require("../database/models/portfolio");

class FakeDb {
  async populate() {
    await this.clean();
    await this.addData();
  }
  async addData() {
    await Portfolio.create(portfolios);
  }
  async clean() {
    await Portfolio.deleteMany();
  }
}

module.exports = new FakeDb();

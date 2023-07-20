const { portfolios, users } = require("./data");
const Portfolio = require("../database/models/portfolio");
const User = require("../database/models/user");

class FakeDb {
  async populate() {
    await this.clean();
    await this.addData();
  }
  async addData() {
    await Portfolio.create(portfolios);
    await User.create(users);
  }
  async clean() {
    await Portfolio.deleteMany();
    await User.deleteMany();
  }
}

module.exports = new FakeDb();

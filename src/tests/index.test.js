import Chai from "chai";
import chaiHttp from "chai-http";
import app from "../index";

Chai.use(chaiHttp);
Chai.should();

describe("Taxi24", () => {
  it("should welcome users", (done) => {
    Chai.request(app)
      .get("/")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property("message", "welcome to taxi24");
        done();
      });
  });
});

import Chai, { expect } from "chai";
import chaiHttp from "chai-http";
import app from "../index";
import mochData from "./mock/index.mock";

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

  it("should get all the drivers", (done) => {
    Chai.request(app)
      .get("/get-drivers")
      .end((err, res) => {
        expect(res.body.status).to.be.equal(200);
        expect(res.body).to.have.keys("message", "drivers", "status");
        expect(res.body.message).to.be.equal(
          "All Drivers have been retrieved successfully"
        );
        expect(res);
        done();
      });
  });

  it("should get all available drivers", (done) => {
    Chai.request(app)
      .get("/get-available-drivers")
      .end((err, res) => {
        expect(res.body.status).to.be.equal(200);
        expect(res.body).to.have.keys("message", "AvailableDrivers", "status");
        expect(res.body.message).to.be.equal(
          "All Available Drivers have been retrieved successfully"
        );
        expect(res);
        done();
      });
  });

  it("should get all available drivers", (done) => {
    Chai.request(app)
      .get("/get-available-drivers")
      .end((err, res) => {
        expect(res.body.status).to.be.equal(200);
        expect(res.body).to.have.keys("message", "AvailableDrivers", "status");
        expect(res.body.message).to.be.equal(
          "All Available Drivers have been retrieved successfully"
        );
        expect(res);
        done();
      });
  });

  it("should get a driver by id", (done) => {
    Chai.request(app)
      .get("/get-drivers/a2c67bc0-8831-460f-80d8-29c32dd6b56f")
      .end((err, res) => {
        expect(res.body.status).to.be.equal(200);
        expect(res.body).to.have.keys("message", "driver", "status");
        expect(res.body.message).to.be.equal(
          "The driver informations were retrieved"
        );
        expect(res);
        done();
      });
  });

  it("should get all the riders", (done) => {
    Chai.request(app)
      .get("/get-riders")
      .end((err, res) => {
        expect(res.body.status).to.be.equal(200);
        expect(res.body).to.have.keys("message", "riders", "status");
        expect(res.body.message).to.be.equal(
          "All Riders have been retrieved successfully"
        );
        expect(res);
        done();
      });
  });

  it("should get a rider by id", (done) => {
    Chai.request(app)
      .get("/get-riders/3f9ea596-6c69-4f09-9f71-2395d29b0fba")
      .end((err, res) => {
        expect(res.body.status).to.be.equal(200);
        expect(res.body).to.have.keys("message", "rider", "status");
        expect(res.body.message).to.be.equal(
          "The driver informations were retrieved"
        );
        expect(res);
        done();
      });
  });

  it("should get all active trips", (done) => {
    Chai.request(app)
      .get("/get-trips")
      .end((err, res) => {
        expect(res.body.status).to.be.equal(200);
        expect(res.body).to.have.keys("message", "trips", "status");
        expect(res.body.message).to.be.equal(
          "All active trips have been retrieved successfully"
        );
        expect(res);
        done();
      });
  });
});

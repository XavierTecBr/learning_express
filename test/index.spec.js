const chai = require("chai");
const http = require("chai-http");
const subSet = require("chai-subset");

const index = require("../index");

chai.use(http);
chai.use(subSet);

describe("Unit Tests", () => {
    
    it ("getHomeDefaultObject", () => {
        let schema = {
            name: name => name,
            code: code => code
        };

        let homeOject = index.getHomeDefaultObject();
        chai.expect(homeOject).to.containSubset(schema); 
    });

    it ("getMessageWithTwoParams", () => {
        let result = index.getMessageWithTwoParams({platform: "Youtube", name: "LanHouseDoChico"});
        chai.assert.equal(result, "Welcome to My Youtube Channel LanHouseDoChico.");
    });
});
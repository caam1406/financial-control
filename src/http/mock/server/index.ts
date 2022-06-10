import { createServer, Model } from "miragejs";

export const serverMock = () => {
  createServer({
    //fakeDtabase
    models: {
      transaction: Model, //set table name
    },
    //seedData
    seeds(server) {
      server.db.loadData({
        transactions: [
          {
            id: 1,
            title: "Transaction 1",
            type: "deposit",
            category: "job",
            amount: 100,
            createdAt: new Date(),
          },
          {
            id: 2,
            title: "Transaction 2",
            type: "deposit",
            category: "job",
            amount: 200,
            createdAt: new Date(),
          },
          {
            id: 3,
            title: "Transaction 3",
            type: "withdraw",
            category: "surviver",
            amount: 100,
            createdAt: new Date(),
          },
        ], //This name is same as model name
      });
    },
    routes() {
      this.namespace = "api"; // namespace for all routes
      this.get("/transactions", () => {
        return this.schema.all("transaction"); //get all transactions
      });
      this.post("/transactions", (schema, request) => {
        const data = JSON.parse(request.requestBody);
        return schema.create("transaction", data);
      });
    },
  });
};

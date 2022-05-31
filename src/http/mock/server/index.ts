import { createServer } from "miragejs";

export const serverMock = () => {
  createServer({
    routes() {
      this.namespace = "api"; // namespace for all routes
      this.get("/transactions", () => [
        {
          id: 1,
          title: "Bill Payment",
          value: -100,
          type: "out",
          createdAt: new Date(),
        },
      ]);
    },
  });
};

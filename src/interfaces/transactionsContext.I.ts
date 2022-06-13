import { ITransactionContent } from "./transactionContent.I";

export interface ITransactionsContext {
  transactions: Omit<ITransactionContent, "id" | "createdAt">[];
  setTransactions: React.Dispatch<React.SetStateAction<any>>;
}

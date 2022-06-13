import { ITransactionContent } from "./transactionContent.I";

export interface ITransactionsContext {
  transactions: ITransactionContent[];
  setTransactions: React.Dispatch<React.SetStateAction<any>>;
}

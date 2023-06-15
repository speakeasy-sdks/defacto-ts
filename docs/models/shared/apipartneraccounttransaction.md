# APIPartnerAccountTransaction


## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `account`                                                                                                     | *string*                                                                                                      | :heavy_minus_sign:                                                                                            | Business bank account identifier or reference                                                                 |
| `amount`                                                                                                      | *number*                                                                                                      | :heavy_check_mark:                                                                                            | Total amount of the transaction.                                                                              |
| `at`                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                 | :heavy_check_mark:                                                                                            | Date of the transaction                                                                                       |
| `category`                                                                                                    | *string*                                                                                                      | :heavy_minus_sign:                                                                                            | Category of this transaction (expense, salaries ...)                                                          |
| `counterpartyName`                                                                                            | *string*                                                                                                      | :heavy_minus_sign:                                                                                            | Business name of the transaction counterparty                                                                 |
| `currency`                                                                                                    | [APIPartnerAccountTransactionCurrency](../../models/shared/apipartneraccounttransactioncurrency.md)           | :heavy_minus_sign:                                                                                            | Transaction currency                                                                                          |
| `operationType`                                                                                               | [APIPartnerAccountTransactionOperationType](../../models/shared/apipartneraccounttransactionoperationtype.md) | :heavy_minus_sign:                                                                                            | Source or payment method of this transaction                                                                  |
| `reference`                                                                                                   | *string*                                                                                                      | :heavy_minus_sign:                                                                                            | Bank reference for the transaction                                                                            |
| `saltId`                                                                                                      | *string*                                                                                                      | :heavy_minus_sign:                                                                                            | Unique identifier of this transaction                                                                         |
| `settledBalance`                                                                                              | *number*                                                                                                      | :heavy_minus_sign:                                                                                            | Balance of the business bank account right after this transaction was processed                               |
| `side`                                                                                                        | [APIPartnerAccountTransactionSide](../../models/shared/apipartneraccounttransactionside.md)                   | :heavy_minus_sign:                                                                                            | Is the transaction a debit or a credit operation.                                                             |
| `status`                                                                                                      | [APIPartnerAccountTransactionStatus](../../models/shared/apipartneraccounttransactionstatus.md)               | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |
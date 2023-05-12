# businessData

### Available Operations

* [uploadAccounts](#uploadaccounts) - 
Upload bank account balances into our platform to refine borrower credit
line allowance.
 
This endpoint doesn't support updates on data already uploaded.

* [uploadInvoices](#uploadinvoices) - 
Upload business invoices into our platform to refine borrower credit
line allowance.

This endpoint doesn't support updates on data already uploaded.

* [uploadTransactions](#uploadtransactions) - 
Upload bank account transactions into our platform to refine borrower
credit line allowance.
  
This endpoint doesn't support updates on data already uploaded.


## uploadAccounts


Upload bank account balances into our platform to refine borrower credit
line allowance.
 
This endpoint doesn't support updates on data already uploaded.


### Example Usage

```typescript
import { Defacto } from "defacto";
import { UploadAccountsResponse } from "defacto/dist/sdk/models/operations";
import { APIPartnerBusinessAccountsIdentifierTypeEnum } from "defacto/dist/sdk/models/shared";

const sdk = new Defacto({
  security: {
    bearer: "YOUR_API_KEY_HERE",
  },
});

sdk.businessData.uploadAccounts({
  accounts: [
    {
      amount: 470132,
      id: "4ba4469b-6e21-4419-9989-0afa563e2516",
      lastUpdatedAt: new Date("2020-04-29T08:15:14.819Z"),
    },
  ],
  identifier: "eius",
  identifierType: APIPartnerBusinessAccountsIdentifierTypeEnum.HrNummer,
}).then((res: UploadAccountsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## uploadInvoices


Upload business invoices into our platform to refine borrower credit
line allowance.

This endpoint doesn't support updates on data already uploaded.


### Example Usage

```typescript
import { Defacto } from "defacto";
import { UploadInvoicesBusinessResponse } from "defacto/dist/sdk/models/operations";
import {
  APIPartnerBusinessInvoiceCurrencyEnum,
  APIPartnerBusinessInvoiceDirectionEnum,
  APIPartnerBusinessInvoicePaymentMethodEnum,
  APIPartnerBusinessInvoicesIdentifierTypeEnum,
  BuyerBusinessIdentifierIdentifierTypeEnum,
  SellerBusinessIdentifierIdentifierTypeEnum,
} from "defacto/dist/sdk/models/shared";

const sdk = new Defacto({
  security: {
    bearer: "YOUR_API_KEY_HERE",
  },
});

sdk.businessData.uploadInvoices({
  identifier: "deleniti",
  identifierType: APIPartnerBusinessInvoicesIdentifierTypeEnum.Bsn,
  invoices: [
    {
      buyer: {
        identifier: "architecto",
        identifierType: BuyerBusinessIdentifierIdentifierTypeEnum.Siren,
      },
      currency: APIPartnerBusinessInvoiceCurrencyEnum.Gbp,
      direction: APIPartnerBusinessInvoiceDirectionEnum.Supplier,
      dueAt: new Date("2022-01-23T10:45:15.714Z"),
      firstPaymentAt: new Date("2020-06-23T22:50:14.437Z"),
      invoiceNumber: "sed",
      issuedAt: new Date("2020-05-25T09:38:49.528Z"),
      lastPaymentAt: new Date("2022-11-02T16:33:42.080Z"),
      netAmount: 508315,
      paymentMethod: APIPartnerBusinessInvoicePaymentMethodEnum.Cheque,
      saltId: "magni",
      seller: {
        identifier: "sunt",
        identifierType: SellerBusinessIdentifierIdentifierTypeEnum.HrNummer,
      },
      taxAmount: 848009,
      toPayAmount: 864934,
      totalAmount: 807319,
    },
    {
      buyer: {
        identifier: "ea",
        identifierType: BuyerBusinessIdentifierIdentifierTypeEnum.Kvk,
      },
      currency: APIPartnerBusinessInvoiceCurrencyEnum.Eur,
      direction: APIPartnerBusinessInvoiceDirectionEnum.Supplier,
      dueAt: new Date("2022-12-06T18:05:48.866Z"),
      firstPaymentAt: new Date("2020-11-28T07:34:18.392Z"),
      invoiceNumber: "ipsam",
      issuedAt: new Date("2022-07-31T16:08:22.625Z"),
      lastPaymentAt: new Date("2022-11-25T01:41:45.601Z"),
      netAmount: 866383,
      paymentMethod: APIPartnerBusinessInvoicePaymentMethodEnum.DirectDebit,
      saltId: "voluptatibus",
      seller: {
        identifier: "perferendis",
        identifierType: SellerBusinessIdentifierIdentifierTypeEnum.BelgiumRegistrationNumber,
      },
      taxAmount: 230742,
      toPayAmount: 11714,
      totalAmount: 764912,
    },
  ],
}).then((res: UploadInvoicesBusinessResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## uploadTransactions


Upload bank account transactions into our platform to refine borrower
credit line allowance.
  
This endpoint doesn't support updates on data already uploaded.


### Example Usage

```typescript
import { Defacto } from "defacto";
import { UploadTransactionsResponse } from "defacto/dist/sdk/models/operations";
import {
  APIPartnerAccountTransactionCurrencyEnum,
  APIPartnerAccountTransactionOperationTypeEnum,
  APIPartnerAccountTransactionSideEnum,
  APIPartnerAccountTransactionsIdentifierTypeEnum,
  APIPartnerAccountTransactionStatusEnum,
} from "defacto/dist/sdk/models/shared";

const sdk = new Defacto({
  security: {
    bearer: "YOUR_API_KEY_HERE",
  },
});

sdk.businessData.uploadTransactions({
  endDate: new Date("2022-01-21T09:28:40.593Z"),
  identifier: "libero",
  identifierType: APIPartnerAccountTransactionsIdentifierTypeEnum.HrNummer,
  startDate: new Date("2022-08-30T02:49:20.597Z"),
  transactions: [
    {
      account: "dignissimos",
      amount: 54338,
      at: new Date("2022-10-20T00:01:48.775Z"),
      category: "eos",
      counterpartyName: "perferendis",
      currency: APIPartnerAccountTransactionCurrencyEnum.Eur,
      operationType: APIPartnerAccountTransactionOperationTypeEnum.SwiftIncome,
      reference: "quam",
      saltId: "dolor",
      settledBalance: 874573,
      side: APIPartnerAccountTransactionSideEnum.Credit,
      status: APIPartnerAccountTransactionStatusEnum.LessThanNilGreaterThan,
    },
    {
      account: "recusandae",
      amount: 608253,
      at: new Date("2021-10-22T10:35:49.400Z"),
      category: "voluptatem",
      counterpartyName: "porro",
      currency: APIPartnerAccountTransactionCurrencyEnum.Eur,
      operationType: APIPartnerAccountTransactionOperationTypeEnum.QontoFee,
      reference: "error",
      saltId: "eaque",
      settledBalance: 577229,
      side: APIPartnerAccountTransactionSideEnum.LessThanNilGreaterThan,
      status: APIPartnerAccountTransactionStatusEnum.Pending,
    },
    {
      account: "asperiores",
      amount: 934214,
      at: new Date("2022-05-21T21:39:29.335Z"),
      category: "dolorum",
      counterpartyName: "deleniti",
      currency: APIPartnerAccountTransactionCurrencyEnum.Gbp,
      operationType: APIPartnerAccountTransactionOperationTypeEnum.Cheque,
      reference: "nobis",
      saltId: "libero",
      settledBalance: 964490,
      side: APIPartnerAccountTransactionSideEnum.Debit,
      status: APIPartnerAccountTransactionStatusEnum.Declined,
    },
  ],
}).then((res: UploadTransactionsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

# BusinessData
(*businessData*)

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
import { APIPartnerBusinessAccountsIdentifierType } from "defacto/dist/sdk/models/shared";

const sdk = new Defacto({
  security: {
    bearer: "",
  },
});

sdk.businessData.uploadAccounts({
  accounts: [
    {
      amount: 79711,
      id: "<ID>",
      lastUpdatedAt: new Date("2022-09-04T05:03:11.864Z"),
    },
  ],
  identifier: "Folk support",
  identifierType: APIPartnerBusinessAccountsIdentifierType.Bsn,
}).then((res: UploadAccountsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [shared.APIPartnerBusinessAccounts](../../models/shared/apipartnerbusinessaccounts.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.UploadAccountsResponse](../../models/operations/uploadaccountsresponse.md)>**


## uploadInvoices


Upload business invoices into our platform to refine borrower credit
line allowance.

This endpoint doesn't support updates on data already uploaded.


### Example Usage

```typescript
import { Defacto } from "defacto";
import { UploadInvoicesBusinessResponse } from "defacto/dist/sdk/models/operations";
import {
  APIPartnerBusinessInvoiceCurrency,
  APIPartnerBusinessInvoiceDirection,
  APIPartnerBusinessInvoicePaymentMethod,
  APIPartnerBusinessInvoicesIdentifierType,
  BuyerBusinessIdentifierIdentifierType,
  SellerBusinessIdentifierIdentifierType,
} from "defacto/dist/sdk/models/shared";

const sdk = new Defacto({
  security: {
    bearer: "",
  },
});

sdk.businessData.uploadInvoices({
  identifier: "Creative itaque",
  identifierType: APIPartnerBusinessInvoicesIdentifierType.Kvk,
  invoices: [
    {
      buyer: {
        identifier: "Metal",
        identifierType: BuyerBusinessIdentifierIdentifierType.Name,
      },
      currency: APIPartnerBusinessInvoiceCurrency.Eur,
      direction: APIPartnerBusinessInvoiceDirection.Supplier,
      dueAt: new Date("2022-10-19T15:45:44.614Z"),
      firstPaymentAt: new Date("2023-03-30T08:13:25.125Z"),
      invoiceNumber: "Northeast Mountain",
      issuedAt: new Date("2022-06-22T03:34:12.554Z"),
      lastPaymentAt: new Date("2022-12-08T21:51:45.487Z"),
      netAmount: 243699,
      paymentMethod: APIPartnerBusinessInvoicePaymentMethod.Card,
      saltId: "microchip IP",
      seller: {
        identifier: "Steel Nissan",
        identifierType: SellerBusinessIdentifierIdentifierType.Bsn,
      },
      taxAmount: 406969,
      toPayAmount: 734042,
      totalAmount: 350644,
    },
  ],
}).then((res: UploadInvoicesBusinessResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [shared.APIPartnerBusinessInvoices](../../models/shared/apipartnerbusinessinvoices.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.UploadInvoicesBusinessResponse](../../models/operations/uploadinvoicesbusinessresponse.md)>**


## uploadTransactions


Upload bank account transactions into our platform to refine borrower
credit line allowance.
  
This endpoint doesn't support updates on data already uploaded.


### Example Usage

```typescript
import { Defacto } from "defacto";
import { UploadTransactionsResponse } from "defacto/dist/sdk/models/operations";
import {
  APIPartnerAccountTransactionCurrency,
  APIPartnerAccountTransactionOperationType,
  APIPartnerAccountTransactionSide,
  APIPartnerAccountTransactionsIdentifierType,
  APIPartnerAccountTransactionStatus,
} from "defacto/dist/sdk/models/shared";

const sdk = new Defacto({
  security: {
    bearer: "",
  },
});

sdk.businessData.uploadTransactions({
  endDate: new Date("2022-01-16T01:56:51.205Z"),
  identifier: "Loan",
  identifierType: APIPartnerAccountTransactionsIdentifierType.Steuernummer,
  startDate: new Date("2021-04-14T06:11:46.028Z"),
  transactions: [
    {
      account: "13201943",
      amount: 623650,
      at: new Date("2022-08-19T00:52:56.282Z"),
      category: "cultivate harness Grande",
      counterpartyName: "Frozen male Sleek",
      currency: APIPartnerAccountTransactionCurrency.Gbp,
      operationType: APIPartnerAccountTransactionOperationType.Card,
      reference: "conglomeration",
      saltId: "Intuitive East",
      settledBalance: 911839,
      side: APIPartnerAccountTransactionSide.LessThanNilGreaterThan,
      status: APIPartnerAccountTransactionStatus.Completed,
    },
  ],
}).then((res: UploadTransactionsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [shared.APIPartnerAccountTransactions](../../models/shared/apipartneraccounttransactions.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.UploadTransactionsResponse](../../models/operations/uploadtransactionsresponse.md)>**


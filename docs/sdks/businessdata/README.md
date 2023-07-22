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
import { APIPartnerBusinessAccountsIdentifierType } from "defacto/dist/sdk/models/shared";

const sdk = new Defacto({
  security: {
    bearer: "",
  },
});

sdk.businessData.uploadAccounts({
  accounts: [
    {
      amount: 102863,
      id: "41959890-afa5-463e-a516-fe4c8b711e5b",
      lastUpdatedAt: new Date("2022-01-01T10:06:00.916Z"),
    },
  ],
  identifier: "quibusdam",
  identifierType: APIPartnerBusinessAccountsIdentifierType.Siren,
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
  identifier: "saepe",
  identifierType: APIPartnerBusinessInvoicesIdentifierType.BelgiumRegistrationNumber,
  invoices: [
    {
      buyer: {
        identifier: "consequuntur",
        identifierType: BuyerBusinessIdentifierIdentifierType.Cif,
      },
      currency: APIPartnerBusinessInvoiceCurrency.Gbp,
      direction: APIPartnerBusinessInvoiceDirection.Customer,
      dueAt: new Date("2022-03-22T15:30:46.869Z"),
      firstPaymentAt: new Date("2020-05-28T21:33:10.895Z"),
      invoiceNumber: "maxime",
      issuedAt: new Date("2022-06-07T06:40:38.496Z"),
      lastPaymentAt: new Date("2022-08-05T09:04:26.932Z"),
      netAmount: 33222,
      paymentMethod: APIPartnerBusinessInvoicePaymentMethod.Other,
      saltId: "maiores",
      seller: {
        identifier: "quidem",
        identifierType: SellerBusinessIdentifierIdentifierType.Nif,
      },
      taxAmount: 453543,
      toPayAmount: 420075,
      totalAmount: 722056,
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
  endDate: new Date("2022-02-18T18:29:26.833Z"),
  identifier: "nemo",
  identifierType: APIPartnerAccountTransactionsIdentifierType.Steuernummer,
  startDate: new Date("2022-02-22T15:09:45.631Z"),
  transactions: [
    {
      account: "aut",
      amount: 764912,
      at: new Date("2022-01-21T09:28:40.593Z"),
      category: "libero",
      counterpartyName: "nobis",
      currency: APIPartnerAccountTransactionCurrency.Eur,
      operationType: APIPartnerAccountTransactionOperationType.DirectDebit,
      reference: "totam",
      saltId: "dignissimos",
      settledBalance: 54338,
      side: APIPartnerAccountTransactionSide.Credit,
      status: APIPartnerAccountTransactionStatus.Pending,
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


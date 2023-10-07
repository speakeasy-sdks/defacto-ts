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
import { APIPartnerBusinessAccountsIdentifierType } from "defacto/dist/sdk/models/shared";

(async() => {
  const sdk = new Defacto({
    security: {
      bearer: "",
    },
  });

  const res = await sdk.businessData.uploadAccounts({
    accounts: [
      {
        amount: 79711,
        id: "<ID>",
        lastUpdatedAt: new Date("2022-09-04T05:03:11.864Z"),
      },
    ],
    identifier: "Folk support",
    identifierType: APIPartnerBusinessAccountsIdentifierType.Bsn,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import {
  APIPartnerBusinessInvoiceCurrency,
  APIPartnerBusinessInvoiceDirection,
  APIPartnerBusinessInvoicePaymentMethod,
  APIPartnerBusinessInvoicesIdentifierType,
  BuyerBusinessIdentifierIdentifierType,
  SellerBusinessIdentifierIdentifierType,
} from "defacto/dist/sdk/models/shared";

(async() => {
  const sdk = new Defacto({
    security: {
      bearer: "",
    },
  });

  const res = await sdk.businessData.uploadInvoices({
    identifier: "Creative itaque",
    identifierType: APIPartnerBusinessInvoicesIdentifierType.Kvk,
    invoices: [
      {
        buyer: {
          identifier: "Metal",
          identifierType: BuyerBusinessIdentifierIdentifierType.Name,
        },
        direction: APIPartnerBusinessInvoiceDirection.Supplier,
        dueAt: new Date("2021-11-25T08:58:57.800Z"),
        invoiceNumber: "volt Northeast",
        issuedAt: new Date("2023-04-22T11:01:11.428Z"),
        netAmount: 604602,
        seller: {
          identifier: "bluetooth",
          identifierType: SellerBusinessIdentifierIdentifierType.VatNumber,
        },
      },
    ],
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import {
  APIPartnerAccountTransactionCurrency,
  APIPartnerAccountTransactionOperationType,
  APIPartnerAccountTransactionSide,
  APIPartnerAccountTransactionsIdentifierType,
  APIPartnerAccountTransactionStatus,
} from "defacto/dist/sdk/models/shared";

(async() => {
  const sdk = new Defacto({
    security: {
      bearer: "",
    },
  });

  const res = await sdk.businessData.uploadTransactions({
    identifier: "Grocery salmon",
    identifierType: APIPartnerAccountTransactionsIdentifierType.Steuernummer,
    transactions: [
      {
        amount: 94299,
        at: new Date("2021-05-24T14:23:21.579Z"),
      },
    ],
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [shared.APIPartnerAccountTransactions](../../models/shared/apipartneraccounttransactions.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.UploadTransactionsResponse](../../models/operations/uploadtransactionsresponse.md)>**


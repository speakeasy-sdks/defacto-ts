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
      amount: 138183,
      id: "c3f5ad01-9da1-4ffe-b8f0-97b0074f1547",
      lastUpdatedAt: new Date("2022-04-24T15:19:40.519Z"),
    },
  ],
  identifier: "enim",
  identifierType: APIPartnerBusinessAccountsIdentifierType.BelgiumRegistrationNumber,
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
  identifier: "commodi",
  identifierType: APIPartnerBusinessInvoicesIdentifierType.Steuernummer,
  invoices: [
    {
      buyer: {
        identifier: "quae",
        identifierType: BuyerBusinessIdentifierIdentifierType.VatNumber,
      },
      currency: APIPartnerBusinessInvoiceCurrency.Gbp,
      direction: APIPartnerBusinessInvoiceDirection.Receivable,
      dueAt: new Date("2021-04-09T11:24:10.949Z"),
      firstPaymentAt: new Date("2022-06-29T05:25:54.356Z"),
      invoiceNumber: "rem",
      issuedAt: new Date("2022-09-20T03:14:35.704Z"),
      lastPaymentAt: new Date("2021-04-10T08:07:33.561Z"),
      netAmount: 83112,
      paymentMethod: APIPartnerBusinessInvoicePaymentMethod.LessThanNilGreaterThan,
      saltId: "incidunt",
      seller: {
        identifier: "enim",
        identifierType: SellerBusinessIdentifierIdentifierType.Siret,
      },
      taxAmount: 667411,
      toPayAmount: 842342,
      totalAmount: 131797,
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
  endDate: new Date("2021-07-27T01:56:50.693Z"),
  identifier: "quibusdam",
  identifierType: APIPartnerAccountTransactionsIdentifierType.Name,
  startDate: new Date("2022-10-26T03:14:36.345Z"),
  transactions: [
    {
      account: "aliquid",
      amount: 586513,
      at: new Date("2022-12-17T07:42:55.593Z"),
      category: "magni",
      counterpartyName: "assumenda",
      currency: APIPartnerAccountTransactionCurrency.Eur,
      operationType: APIPartnerAccountTransactionOperationType.Income,
      reference: "fugit",
      saltId: "dolorum",
      settledBalance: 569618,
      side: APIPartnerAccountTransactionSide.Debit,
      status: APIPartnerAccountTransactionStatus.Declined,
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


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

async function run() {
  const sdk = new Defacto({
    security: {
      bearer: "<YOUR_API_KEY_HERE>",
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
    identifier: "string",
    identifierType: APIPartnerBusinessAccountsIdentifierType.Cif,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [shared.APIPartnerBusinessAccounts](../../sdk/models/shared/apipartnerbusinessaccounts.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.UploadAccountsResponse](../../sdk/models/operations/uploadaccountsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## uploadInvoices


Upload business invoices into our platform to refine borrower credit
line allowance.

This endpoint doesn't support updates on data already uploaded.


### Example Usage

```typescript
import { Defacto } from "defacto";
import {
  APIPartnerBusinessInvoiceCurrency,
  APIPartnerBusinessInvoicesIdentifierType,
  BuyerBusinessIdentifierIdentifierType,
  Direction,
  PaymentMethod,
  SellerBusinessIdentifierIdentifierType,
} from "defacto/dist/sdk/models/shared";

async function run() {
  const sdk = new Defacto({
    security: {
      bearer: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.businessData.uploadInvoices({
    identifier: "string",
    identifierType: APIPartnerBusinessInvoicesIdentifierType.Cif,
    invoices: [
      {
        buyer: {
          identifier: "string",
          identifierType: BuyerBusinessIdentifierIdentifierType.Kvk,
        },
        direction: Direction.Payable,
        dueAt: new Date("2022-09-26T23:29:22.021Z"),
        invoiceNumber: "string",
        issuedAt: new Date("2023-10-20T09:30:41.794Z"),
        netAmount: 569687,
        seller: {
          identifier: "string",
          identifierType: SellerBusinessIdentifierIdentifierType.Siret,
        },
      },
    ],
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [shared.APIPartnerBusinessInvoices](../../sdk/models/shared/apipartnerbusinessinvoices.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.UploadInvoicesBusinessResponse](../../sdk/models/operations/uploadinvoicesbusinessresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## uploadTransactions


Upload bank account transactions into our platform to refine borrower
credit line allowance.
  
This endpoint doesn't support updates on data already uploaded.


### Example Usage

```typescript
import { Defacto } from "defacto";
import {
  APIPartnerAccountTransactionCurrency,
  APIPartnerAccountTransactionsIdentifierType,
  APIPartnerAccountTransactionStatus,
  OperationType,
  Side,
} from "defacto/dist/sdk/models/shared";

async function run() {
  const sdk = new Defacto({
    security: {
      bearer: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.businessData.uploadTransactions({
    identifier: "string",
    identifierType: APIPartnerAccountTransactionsIdentifierType.Name,
    transactions: [
      {
        amount: 195960,
        at: new Date("2022-03-25T16:48:12.110Z"),
      },
    ],
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [shared.APIPartnerAccountTransactions](../../sdk/models/shared/apipartneraccounttransactions.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.UploadTransactionsResponse](../../sdk/models/operations/uploadtransactionsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

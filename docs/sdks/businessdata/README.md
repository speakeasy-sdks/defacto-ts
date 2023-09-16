# BusinessData

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
      amount: 969810,
      id: "aaa2352c-5955-4907-aff1-a3a2fa946773",
      lastUpdatedAt: new Date("2022-09-06T22:51:09.401Z"),
    },
  ],
  identifier: "quis",
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
  identifier: "laborum",
  identifierType: APIPartnerBusinessInvoicesIdentifierType.Bsn,
  invoices: [
    {
      buyer: {
        identifier: "enim",
        identifierType: BuyerBusinessIdentifierIdentifierType.Siren,
      },
      currency: APIPartnerBusinessInvoiceCurrency.Gbp,
      direction: APIPartnerBusinessInvoiceDirection.Customer,
      dueAt: new Date("2021-11-23T05:54:08.890Z"),
      firstPaymentAt: new Date("2021-05-11T16:11:54.761Z"),
      invoiceNumber: "aut",
      issuedAt: new Date("2022-05-18T15:52:05.226Z"),
      lastPaymentAt: new Date("2020-12-24T08:13:29.299Z"),
      netAmount: 96098,
      paymentMethod: APIPartnerBusinessInvoicePaymentMethod.LessThanNilGreaterThan,
      saltId: "voluptatibus",
      seller: {
        identifier: "vero",
        identifierType: SellerBusinessIdentifierIdentifierType.Cif,
      },
      taxAmount: 509624,
      toPayAmount: 976762,
      totalAmount: 55714,
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
  endDate: new Date("2022-02-05T15:41:25.512Z"),
  identifier: "cum",
  identifierType: APIPartnerAccountTransactionsIdentifierType.Siret,
  startDate: new Date("2022-07-23T18:36:43.822Z"),
  transactions: [
    {
      account: "ut",
      amount: 979587,
      at: new Date("2022-08-22T19:15:58.586Z"),
      category: "dolore",
      counterpartyName: "iusto",
      currency: APIPartnerAccountTransactionCurrency.Eur,
      operationType: APIPartnerAccountTransactionOperationType.Recall,
      reference: "enim",
      saltId: "accusamus",
      settledBalance: 414263,
      side: APIPartnerAccountTransactionSide.LessThanNilGreaterThan,
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


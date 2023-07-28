# loan

### Available Operations

* [cancel](#cancel) - Use this function to cancel a loan proposal. Available for LoanStatus.TO_VALIDATE,LoanStatus.VALIDATED and LoanStatus.SCHEDULED loans.
* [get](#get) - Get a loan by id
* [getEvents](#getevents) - Get the activity log of a loan.
* [list](#list) - List loans
* [request](#request) - 
Request a new loan. You can request a loan for only one invoice. At the moment, we don't support multiple-invoices financing.
- You can either request a loan for an existing invoice, in which case you should set invoice_ids.
- Or you can create the invoice and request a loan with a single call to this API.
- If you pass an invoice in invoices, the base64-encoded value of the PDF of the invoice is required under the document property. You can for example use base64guru.

* [update](#update) - 
Updates a loan.
- When the loan is SUBMITTED or TO_VALIDATE, all the below fields can be updated.
- When the loan is VALIDATED or SCHEDULED, the references and to_repay_at fields can be updated.
- When the loan is TO_REPAY, only the to_repay_at change be changed. The earliest acceptable date being loan.earliest_to_repay_at.

This operation is not available when the loan is in another status.

* [validate](#validate) - Use this function to accept a loan proposal. Available for LoanStatus.TO_VALIDATE loans only.

## cancel

Use this function to cancel a loan proposal. Available for LoanStatus.TO_VALIDATE,LoanStatus.VALIDATED and LoanStatus.SCHEDULED loans.

### Example Usage

```typescript
import { Defacto } from "defacto";
import { CancelLoanRequest, CancelLoanResponse } from "defacto/dist/sdk/models/operations";

const sdk = new Defacto({
  security: {
    bearer: "",
  },
});
const loanId: string = "eum";

sdk.loan.cancel(loanId).then((res: CancelLoanResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `loanId`                                                     | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.CancelLoanResponse](../../models/operations/cancelloanresponse.md)>**


## get

Get a loan by id

### Example Usage

```typescript
import { Defacto } from "defacto";
import { GetLoanRequest, GetLoanResponse } from "defacto/dist/sdk/models/operations";

const sdk = new Defacto({
  security: {
    bearer: "",
  },
});
const loanId: string = "quas";

sdk.loan.get(loanId).then((res: GetLoanResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `loanId`                                                     | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetLoanResponse](../../models/operations/getloanresponse.md)>**


## getEvents

Get the activity log of a loan.

### Example Usage

```typescript
import { Defacto } from "defacto";
import { GetLoanEventsRequest, GetLoanEventsResponse } from "defacto/dist/sdk/models/operations";

const sdk = new Defacto({
  security: {
    bearer: "",
  },
});
const loanId: string = "praesentium";

sdk.loan.getEvents(loanId).then((res: GetLoanEventsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `loanId`                                                     | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetLoanEventsResponse](../../models/operations/getloaneventsresponse.md)>**


## list

List loans

### Example Usage

```typescript
import { Defacto } from "defacto";
import { ListLoansLoanType, ListLoansResponse, ListLoansStatus } from "defacto/dist/sdk/models/operations";

const sdk = new Defacto({
  security: {
    bearer: "",
  },
});

sdk.loan.list({
  borrower: [
    "deleniti",
  ],
  cursor: "fugit",
  guaranteeCalled: false,
  guarantor: "fuga",
  id: [
    "482562f2-22e9-4817-ae17-cbe61e6b7b95",
    "bc0ab3c2-0c4f-4378-9fd8-71f99dd2efd1",
    "21aa6f1e-674b-4db0-8f15-756082d68ea1",
  ],
  loanType: [
    ListLoansLoanType.WalletFinancing,
    ListLoansLoanType.InvoiceBasedFinancing,
    ListLoansLoanType.WalletFinancing,
  ],
  pageSize: 92027,
  status: [
    ListLoansStatus.Submitted,
    ListLoansStatus.Canceled,
  ],
  toPayAtFrom: new Date("2022-10-08T01:09:40.281Z"),
  toPayAtTo: new Date("2022-05-21T17:17:20.623Z"),
  toRepayAtFrom: new Date("2022-11-25T18:47:58.319Z"),
  toRepayAtTo: new Date("2022-12-20T14:34:53.149Z"),
  toRepayAtWithinDays: 513075,
}).then((res: ListLoansResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [operations.ListLoansRequest](../../models/operations/listloansrequest.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.ListLoansResponse](../../models/operations/listloansresponse.md)>**


## request


Request a new loan. You can request a loan for only one invoice. At the moment, we don't support multiple-invoices financing.
- You can either request a loan for an existing invoice, in which case you should set invoice_ids.
- Or you can create the invoice and request a loan with a single call to this API.
- If you pass an invoice in invoices, the base64-encoded value of the PDF of the invoice is required under the document property. You can for example use base64guru.


### Example Usage

```typescript
import { Defacto } from "defacto";
import { RequestLoanResponse } from "defacto/dist/sdk/models/operations";
import {
  AccountCreationAccountHolderIdentifierType,
  AccountCreationAccountNumberType,
  AccountCreationBankIdentifierType,
  APIPostLoanBorrowerIdentifierType,
  APIPostLoanCurrency,
  APIPostLoanLoanType,
  APIRequiredInvoiceCreationCurrency,
  APIRequiredInvoiceCreationToAccountAccountHolderIdentifierType,
  APIRequiredInvoiceCreationToAccountAccountNumberType,
  APIRequiredInvoiceCreationToAccountBankIdentifierType,
  CounterpartyCreationIdentifierType,
} from "defacto/dist/sdk/models/shared";

const sdk = new Defacto({
  security: {
    bearer: "",
  },
});

sdk.loan.request({
  amount: 428796,
  autoValidate: false,
  borrower: {
    identifier: "mollitia",
    identifierType: APIPostLoanBorrowerIdentifierType.Siret,
  },
  currency: APIPostLoanCurrency.Gbp,
  invoiceIds: [
    "0394c260-71f9-43f5-b064-2dac7af515cc",
    "413aa63a-ae8d-4678-a4db-b675fd5e60b3",
  ],
  invoices: [
    {
      buyer: {
        identifier: "exercitationem",
        identifierType: CounterpartyCreationIdentifierType.LessThanNilGreaterThan,
        name: "Jesus Yost",
        vatNumber: "quidem",
      },
      currency: APIRequiredInvoiceCreationCurrency.Gbp,
      document: "necessitatibus",
      dueAt: new Date("2022-11-17T19:30:54.837Z"),
      invoiceNumber: "asperiores",
      issuedAt: new Date("2022-10-01T23:04:48.771Z"),
      metadata: {
        "beatae": "dignissimos",
      },
      netAmount: 950953,
      seller: {
        identifier: "debitis",
        identifierType: CounterpartyCreationIdentifierType.VatNumber,
        name: "Dr. Maryann Howe",
        vatNumber: "vitae",
      },
      taxAmount: 881721,
      toAccount: {
        accountHolder: {
          identifier: "similique",
          identifierType: APIRequiredInvoiceCreationToAccountAccountHolderIdentifierType.Name,
        },
        accountNumber: "aspernatur",
        accountNumberType: APIRequiredInvoiceCreationToAccountAccountNumberType.AccountNumber,
        bankIdentifier: "voluptas",
        bankIdentifierType: APIRequiredInvoiceCreationToAccountBankIdentifierType.RoutingNumber,
      },
      toPayAmount: 324405,
      totalAmount: 748789,
    },
    {
      buyer: {
        identifier: "dolorum",
        identifierType: CounterpartyCreationIdentifierType.VatNumber,
        name: "Ernest Labadie",
        vatNumber: "aliquam",
      },
      currency: APIRequiredInvoiceCreationCurrency.Gbp,
      document: "temporibus",
      dueAt: new Date("2022-10-06T05:22:53.091Z"),
      invoiceNumber: "cum",
      issuedAt: new Date("2021-11-21T14:04:14.152Z"),
      metadata: {
        "nesciunt": "culpa",
        "corrupti": "pariatur",
        "totam": "hic",
        "exercitationem": "nobis",
      },
      netAmount: 24619,
      seller: {
        identifier: "rerum",
        identifierType: CounterpartyCreationIdentifierType.Siren,
        name: "Benjamin Ziemann",
        vatNumber: "expedita",
      },
      taxAmount: 70869,
      toAccount: {
        accountHolder: {
          identifier: "iste",
          identifierType: APIRequiredInvoiceCreationToAccountAccountHolderIdentifierType.Name,
        },
        accountNumber: "laborum",
        accountNumberType: APIRequiredInvoiceCreationToAccountAccountNumberType.Iban,
        bankIdentifier: "in",
        bankIdentifierType: APIRequiredInvoiceCreationToAccountBankIdentifierType.RoutingNumber,
      },
      toPayAmount: 696077,
      totalAmount: 131289,
    },
  ],
  loanTo: {
    accountHolder: {
      identifier: "voluptas",
      identifierType: AccountCreationAccountHolderIdentifierType.Bsn,
    },
    accountNumber: "architecto",
    accountNumberType: AccountCreationAccountNumberType.AccountNumber,
    bankIdentifier: "sapiente",
    bankIdentifierType: AccountCreationBankIdentifierType.Name,
  },
  loanToReferences: [
    "reiciendis",
  ],
  loanType: APIPostLoanLoanType.InvoiceBasedFinancing,
  metadata: {
    "maiores": "incidunt",
    "sed": "provident",
    "eius": "necessitatibus",
  },
  notificationEmails: [
    "Kory.Lueilwitz27@yahoo.com",
  ],
  repaymentFromReferences: [
    "reiciendis",
    "ex",
  ],
  saltId: "sit",
  toPayAt: new Date("2022-02-10T20:44:13.580Z"),
  toRepayAt: new Date("2021-08-01T17:10:22.856Z"),
}).then((res: RequestLoanResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.APIPostLoan](../../models/shared/apipostloan.md)     | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.RequestLoanResponse](../../models/operations/requestloanresponse.md)>**


## update


Updates a loan.
- When the loan is SUBMITTED or TO_VALIDATE, all the below fields can be updated.
- When the loan is VALIDATED or SCHEDULED, the references and to_repay_at fields can be updated.
- When the loan is TO_REPAY, only the to_repay_at change be changed. The earliest acceptable date being loan.earliest_to_repay_at.

This operation is not available when the loan is in another status.


### Example Usage

```typescript
import { Defacto } from "defacto";
import { UpdateLoanRequest, UpdateLoanResponse } from "defacto/dist/sdk/models/operations";
import {
  PatchLoan,
  PatchLoanLoanTo,
  PatchLoanLoanToAccountHolder,
  PatchLoanLoanToAccountHolderIdentifierType,
  PatchLoanLoanToAccountNumberType,
  PatchLoanLoanToBankIdentifierType,
} from "defacto/dist/sdk/models/shared";

const sdk = new Defacto({
  security: {
    bearer: "",
  },
});
const loanId: string = "quaerat";
const patchLoan: PatchLoan = {
  amount: 277773,
  lenderId: "ipsam",
  loanTo: {
    accountHolder: {
      identifier: "debitis",
      identifierType: PatchLoanLoanToAccountHolderIdentifierType.Kvk,
    },
    accountNumber: "sit",
    accountNumberType: PatchLoanLoanToAccountNumberType.InternalId,
    bankIdentifier: "error",
    bankIdentifierType: PatchLoanLoanToBankIdentifierType.RoutingNumber,
  },
  loanToReferences: [
    "recusandae",
    "reiciendis",
  ],
  metadata: {
    "magni": "aperiam",
    "saepe": "numquam",
    "veniam": "in",
    "officiis": "beatae",
  },
  repaymentToReferences: [
    "exercitationem",
    "praesentium",
    "cum",
  ],
  toPayAt: new Date("2022-04-27T14:41:34.966Z"),
  toRepayAt: new Date("2021-10-03T15:49:29.329Z"),
  transferContractUrl: "hic",
};

sdk.loan.update(loanId, patchLoan).then((res: UpdateLoanResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `loanId`                                                     | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `patchLoan`                                                  | [shared.PatchLoan](../../models/shared/patchloan.md)         | :heavy_minus_sign:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.UpdateLoanResponse](../../models/operations/updateloanresponse.md)>**


## validate

Use this function to accept a loan proposal. Available for LoanStatus.TO_VALIDATE loans only.

### Example Usage

```typescript
import { Defacto } from "defacto";
import { ValidateLoanRequest, ValidateLoanResponse } from "defacto/dist/sdk/models/operations";

const sdk = new Defacto({
  security: {
    bearer: "",
  },
});
const loanId: string = "expedita";

sdk.loan.validate(loanId).then((res: ValidateLoanResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `loanId`                                                     | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.ValidateLoanResponse](../../models/operations/validateloanresponse.md)>**


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
const loanId: string = "adipisci";

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
const loanId: string = "asperiores";

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
const loanId: string = "earum";

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
    "modi",
  ],
  cursor: "iste",
  guaranteeCalled: false,
  guarantor: "dolorum",
  id: [
    "8d9cbf48-6333-423f-9b77-f3a4100674eb",
  ],
  loanType: [
    ListLoansLoanType.WalletFinancing,
  ],
  pageSize: 377752,
  status: [
    ListLoansStatus.ToRepayFees,
  ],
  toPayAtFrom: new Date("2022-06-16T23:42:38.113Z"),
  toPayAtTo: new Date("2022-02-23T01:35:05.899Z"),
  toRepayAtFrom: new Date("2022-04-04T12:00:33.616Z"),
  toRepayAtTo: new Date("2022-01-16T14:59:31.978Z"),
  toRepayAtWithinDays: 453697,
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
  amount: 677082,
  autoValidate: false,
  borrower: {
    identifier: "deleniti",
    identifierType: APIPostLoanBorrowerIdentifierType.Bsn,
  },
  currency: APIPostLoanCurrency.Gbp,
  invoiceIds: [
    "bf737ae4-203c-4e5e-aa95-d8a0d446ce2a",
  ],
  invoices: [
    {
      buyer: {
        identifier: "a",
        identifierType: CounterpartyCreationIdentifierType.Cif,
        name: "Tyrone Emard",
        vatNumber: "amet",
      },
      currency: APIRequiredInvoiceCreationCurrency.Gbp,
      document: "accusamus",
      dueAt: new Date("2022-09-08T12:03:15.868Z"),
      invoiceNumber: "dolorem",
      issuedAt: new Date("2021-06-12T13:41:06.619Z"),
      metadata: {
        "nihil": "sit",
      },
      netAmount: 711584,
      seller: {
        identifier: "neque",
        identifierType: CounterpartyCreationIdentifierType.Siren,
        name: "Kelli Hintz",
        vatNumber: "ipsum",
      },
      taxAmount: 277628,
      toAccount: {
        accountHolder: {
          identifier: "qui",
          identifierType: APIRequiredInvoiceCreationToAccountAccountHolderIdentifierType.Bsn,
        },
        accountNumber: "maxime",
        accountNumberType: APIRequiredInvoiceCreationToAccountAccountNumberType.InternalId,
        bankIdentifier: "soluta",
        bankIdentifierType: APIRequiredInvoiceCreationToAccountBankIdentifierType.Bic,
      },
      toPayAmount: 674848,
      totalAmount: 517379,
    },
  ],
  loanTo: {
    accountHolder: {
      identifier: "incidunt",
      identifierType: AccountCreationAccountHolderIdentifierType.Siren,
    },
    accountNumber: "dolores",
    accountNumberType: AccountCreationAccountNumberType.InternalId,
    bankIdentifier: "facilis",
    bankIdentifierType: AccountCreationBankIdentifierType.RoutingNumber,
  },
  loanToReferences: [
    "quam",
  ],
  loanType: APIPostLoanLoanType.WalletFinancing,
  metadata: {
    "temporibus": "qui",
  },
  notificationEmails: [
    "Burdette.Cummerata@gmail.com",
  ],
  repaymentFromReferences: [
    "ullam",
  ],
  saltId: "nam",
  toPayAt: new Date("2022-11-28T15:41:44.846Z"),
  toRepayAt: new Date("2020-10-05T00:59:28.911Z"),
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
const loanId: string = "nobis";
const patchLoan: PatchLoan = {
  amount: 92596,
  lenderId: "saepe",
  loanTo: {
    accountHolder: {
      identifier: "ipsum",
      identifierType: PatchLoanLoanToAccountHolderIdentifierType.Siren,
    },
    accountNumber: "nobis",
    accountNumberType: PatchLoanLoanToAccountNumberType.AccountNumber,
    bankIdentifier: "tempore",
    bankIdentifierType: PatchLoanLoanToBankIdentifierType.RoutingNumber,
  },
  loanToReferences: [
    "aperiam",
  ],
  metadata: {
    "delectus": "dolorem",
  },
  repaymentToReferences: [
    "dolore",
  ],
  toPayAt: new Date("2022-10-05T02:20:22.923Z"),
  toRepayAt: new Date("2022-10-19T18:50:59.428Z"),
  transferContractUrl: "quae",
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
const loanId: string = "aut";

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


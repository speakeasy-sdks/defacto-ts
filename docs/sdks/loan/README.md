# Loan

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
const loanId: string = "voluptatibus";

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
const loanId: string = "voluptas";

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
const loanId: string = "natus";

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
    "eos",
  ],
  cursor: "atque",
  guaranteeCalled: false,
  guarantor: "sit",
  id: [
    "d1ba77a8-9ebf-4737-ae42-03ce5e6a95d8",
  ],
  loanType: [
    ListLoansLoanType.WalletFinancing,
  ],
  pageSize: 55,
  status: [
    ListLoansStatus.IssueDetected,
  ],
  toPayAtFrom: new Date("2022-09-23T03:46:17.712Z"),
  toPayAtTo: new Date("2022-03-15T17:06:34.956Z"),
  toRepayAtFrom: new Date("2022-06-11T17:29:13.872Z"),
  toRepayAtTo: new Date("2021-02-04T11:05:24.484Z"),
  toRepayAtWithinDays: 456130,
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
  amount: 687488,
  autoValidate: false,
  borrower: {
    identifier: "iusto",
    identifierType: APIPostLoanBorrowerIdentifierType.VatNumber,
  },
  currency: APIPostLoanCurrency.Gbp,
  invoiceIds: [
    "f3be453f-870b-4326-b5a7-3429cdb1a842",
  ],
  invoices: [
    {
      buyer: {
        identifier: "dolores",
        identifierType: CounterpartyCreationIdentifierType.HrNummer,
        name: "Gilbert Kohler",
        vatNumber: "qui",
      },
      currency: APIRequiredInvoiceCreationCurrency.Eur,
      document: "fugit",
      dueAt: new Date("2022-07-06T20:37:36.497Z"),
      invoiceNumber: "sunt",
      issuedAt: new Date("2022-04-12T10:34:24.004Z"),
      metadata: {
        "hic": "voluptatem",
      },
      netAmount: 765326,
      seller: {
        identifier: "soluta",
        identifierType: CounterpartyCreationIdentifierType.HrNummer,
        name: "Miss Kerry Emmerich",
        vatNumber: "tempore",
      },
      taxAmount: 584476,
      toAccount: {
        accountHolder: {
          identifier: "aperiam",
          identifierType: APIRequiredInvoiceCreationToAccountAccountHolderIdentifierType.LessThanNilGreaterThan,
        },
        accountNumber: "dolorem",
        accountNumberType: APIRequiredInvoiceCreationToAccountAccountNumberType.Iban,
        bankIdentifier: "labore",
        bankIdentifierType: APIRequiredInvoiceCreationToAccountBankIdentifierType.Bic,
      },
      toPayAmount: 677263,
      totalAmount: 100294,
    },
  ],
  loanTo: {
    accountHolder: {
      identifier: "quae",
      identifierType: AccountCreationAccountHolderIdentifierType.Siret,
    },
    accountNumber: "quas",
    accountNumberType: AccountCreationAccountNumberType.InternalId,
    bankIdentifier: "consequatur",
    bankIdentifierType: AccountCreationBankIdentifierType.Name,
  },
  loanToReferences: [
    "repellendus",
  ],
  loanType: APIPostLoanLoanType.WalletFinancing,
  metadata: {
    "doloribus": "ut",
  },
  notificationEmails: [
    "Kyler51@hotmail.com",
  ],
  repaymentFromReferences: [
    "odio",
  ],
  saltId: "occaecati",
  toPayAt: new Date("2020-08-21T15:23:31.740Z"),
  toRepayAt: new Date("2021-03-07T21:49:29.078Z"),
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
const loanId: string = "quis";
const patchLoan: PatchLoan = {
  amount: 218403,
  lenderId: "delectus",
  loanTo: {
    accountHolder: {
      identifier: "voluptate",
      identifierType: PatchLoanLoanToAccountHolderIdentifierType.VatNumber,
    },
    accountNumber: "vero",
    accountNumberType: PatchLoanLoanToAccountNumberType.InternalId,
    bankIdentifier: "dignissimos",
    bankIdentifierType: PatchLoanLoanToBankIdentifierType.Name,
  },
  loanToReferences: [
    "distinctio",
  ],
  metadata: {
    "quod": "odio",
  },
  repaymentToReferences: [
    "similique",
  ],
  toPayAt: new Date("2021-04-02T18:28:29.036Z"),
  toRepayAt: new Date("2022-09-16T01:08:31.616Z"),
  transferContractUrl: "quibusdam",
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
const loanId: string = "illum";

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


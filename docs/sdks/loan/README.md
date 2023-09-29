# Loan
(*loan*)

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
const loanId: string = "Clifton";

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
const loanId: string = "female";

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
const loanId: string = "Executive";

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
    "Bicycle",
  ],
  cursor: "Product",
  guaranteeCalled: false,
  guarantor: "Shores",
  id: [
    "40dbf171-8b88-42a5-8805-557419e790e2",
  ],
  loanType: [
    ListLoansLoanType.InvoiceBasedFinancing,
  ],
  pageSize: 168183,
  status: [
    ListLoansStatus.Submitted,
  ],
  toPayAtFrom: new Date("2022-01-09T19:59:05.695Z"),
  toPayAtTo: new Date("2021-12-20T05:49:55.589Z"),
  toRepayAtFrom: new Date("2023-07-09T18:04:47.782Z"),
  toRepayAtTo: new Date("2023-08-01T08:27:33.943Z"),
  toRepayAtWithinDays: 311789,
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
  amount: 193368,
  autoValidate: false,
  borrower: {
    identifier: "Johns",
    identifierType: APIPostLoanBorrowerIdentifierType.Siret,
  },
  currency: APIPostLoanCurrency.Eur,
  invoiceIds: [
    "56d1f09d-ae62-4352-896c-e7636725e5c3",
  ],
  invoices: [
    {
      buyer: {
        identifier: "homogeneous",
        identifierType: CounterpartyCreationIdentifierType.BelgiumRegistrationNumber,
        name: "Persevering",
        vatNumber: "forenenst",
      },
      currency: APIRequiredInvoiceCreationCurrency.Gbp,
      document: "zowie",
      dueAt: new Date("2022-11-27T18:24:04.300Z"),
      invoiceNumber: "Reggae Hatchback",
      issuedAt: new Date("2021-05-28T21:51:57.413Z"),
      metadata: {
        "aut": "male",
      },
      netAmount: 424922,
      seller: {
        identifier: "doloribus until gosh",
        identifierType: CounterpartyCreationIdentifierType.Bsn,
        name: "Kelsie",
        vatNumber: "synergize Plastic",
      },
      taxAmount: 873008,
      toAccount: {
        accountHolder: {
          identifier: "Decentralized",
          identifierType: APIRequiredInvoiceCreationToAccountAccountHolderIdentifierType.Siren,
        },
        accountNumber: "Saint Stage maximized",
        accountNumberType: APIRequiredInvoiceCreationToAccountAccountNumberType.AccountNumber,
        bankIdentifier: "Dollar Djibouti woman",
        bankIdentifierType: APIRequiredInvoiceCreationToAccountBankIdentifierType.Bic,
      },
      toPayAmount: 977960,
      totalAmount: 887611,
    },
  ],
  loanTo: {
    accountHolder: {
      identifier: "invoice quidem",
      identifierType: AccountCreationAccountHolderIdentifierType.LessThanNilGreaterThan,
    },
    accountNumber: "Oganesson steradian Progressive",
    accountNumberType: AccountCreationAccountNumberType.Iban,
    bankIdentifier: "payment ouch Table",
    bankIdentifierType: AccountCreationBankIdentifierType.RoutingNumber,
  },
  loanToReferences: [
    "searchingly",
  ],
  loanType: APIPostLoanLoanType.InvoiceBasedFinancing,
  metadata: {
    "excepturi": "yowza",
  },
  notificationEmails: [
    "Jefferey.Abernathy64@yahoo.com",
  ],
  repaymentFromReferences: [
    "classmate",
  ],
  saltId: "West Electric Buckinghamshire",
  toPayAt: new Date("2021-11-09T06:25:24.342Z"),
  toRepayAt: new Date("2022-04-04T05:05:53.505Z"),
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
const loanId: string = "Van";
const patchLoan: PatchLoan = {
  amount: 15652,
  lenderId: "Reactive",
  loanTo: {
    accountHolder: {
      identifier: "Metal cheater Islands",
      identifierType: PatchLoanLoanToAccountHolderIdentifierType.Cif,
    },
    accountNumber: "dynamic white",
    accountNumberType: PatchLoanLoanToAccountNumberType.AccountNumber,
    bankIdentifier: "Forward",
    bankIdentifierType: PatchLoanLoanToBankIdentifierType.Name,
  },
  loanToReferences: [
    "immediately",
  ],
  metadata: {
    "aliquam": "East",
  },
  repaymentToReferences: [
    "Baht",
  ],
  toPayAt: new Date("2022-11-21T15:34:31.437Z"),
  toRepayAt: new Date("2023-01-30T09:22:35.379Z"),
  transferContractUrl: "Home users Sharable",
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
const loanId: string = "Liaison";

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


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
import { CancelLoanRequest } from "defacto/dist/sdk/models/operations";

(async() => {
  const sdk = new Defacto({
    security: {
      bearer: "",
    },
  });
const loanId: string = "Clifton";

  const res = await sdk.loan.cancel(loanId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { GetLoanRequest } from "defacto/dist/sdk/models/operations";

(async() => {
  const sdk = new Defacto({
    security: {
      bearer: "",
    },
  });
const loanId: string = "female";

  const res = await sdk.loan.get(loanId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { GetLoanEventsRequest } from "defacto/dist/sdk/models/operations";

(async() => {
  const sdk = new Defacto({
    security: {
      bearer: "",
    },
  });
const loanId: string = "Executive";

  const res = await sdk.loan.getEvents(loanId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { ListLoansLoanType, ListLoansStatus } from "defacto/dist/sdk/models/operations";

(async() => {
  const sdk = new Defacto({
    security: {
      bearer: "",
    },
  });

  const res = await sdk.loan.list({
    borrower: [
      "Bicycle",
    ],
    id: [
      "4a429302-eaca-440d-bf17-18b882a50805",
    ],
    loanType: [
      ListLoansLoanType.InvoiceBasedFinancing,
    ],
    status: [
      ListLoansStatus.Canceled,
    ],
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Defacto({
    security: {
      bearer: "",
    },
  });

  const res = await sdk.loan.request({
    amount: 193368,
    borrower: {
      identifier: "Johns",
    },
    invoiceIds: [
      "0356d1f0-9dae-4623-9249-6ce7636725e5",
    ],
    invoices: [
      {
        buyer: {},
        dueAt: new Date("2023-04-22T09:46:12.899Z"),
        invoiceNumber: "Jasmin",
        issuedAt: new Date("2022-01-28T20:17:34.992Z"),
        metadata: {
          "Metal": "forenenst",
        },
        seller: {},
        toAccount: {
          accountHolder: {
            identifier: "ubiquitous that SAS",
          },
          accountNumber: "Hatchback Alabama male",
        },
        totalAmount: 424922,
      },
    ],
    loanTo: {
      accountHolder: {
        identifier: "doloribus until gosh",
      },
      accountNumber: "Delaware Kwacha",
    },
    loanToReferences: [
      "HTTP",
    ],
    metadata: {
      "quaerat": "Account",
    },
    notificationEmails: [
      "Rick.Kuhlman34@yahoo.com",
    ],
    repaymentFromReferences: [
      "Cape",
    ],
    toPayAt: new Date("2021-03-31T02:09:56.241Z"),
    toRepayAt: new Date("2022-10-12T05:14:55.926Z"),
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { UpdateLoanRequest } from "defacto/dist/sdk/models/operations";
import {
  PatchLoan,
  PatchLoanLoanTo,
  PatchLoanLoanToAccountHolder,
  PatchLoanLoanToAccountHolderIdentifierType,
  PatchLoanLoanToAccountNumberType,
  PatchLoanLoanToBankIdentifierType,
} from "defacto/dist/sdk/models/shared";

(async() => {
  const sdk = new Defacto({
    security: {
      bearer: "",
    },
  });
const loanId: string = "Van";
const patchLoan: PatchLoan = {
  loanTo: {
    accountHolder: {
      identifier: "Reactive",
    },
    accountNumber: "Metal cheater Islands",
  },
  loanToReferences: [
    "online",
  ],
  metadata: {
    "dynamic": "white",
  },
  repaymentToReferences: [
    "bifurcated",
  ],
};

  const res = await sdk.loan.update(loanId, patchLoan);

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { ValidateLoanRequest } from "defacto/dist/sdk/models/operations";

(async() => {
  const sdk = new Defacto({
    security: {
      bearer: "",
    },
  });
const loanId: string = "Liaison";

  const res = await sdk.loan.validate(loanId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `loanId`                                                     | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.ValidateLoanResponse](../../models/operations/validateloanresponse.md)>**


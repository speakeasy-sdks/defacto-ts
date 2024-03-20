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

async function run() {
  const sdk = new Defacto({
    security: {
      bearer: "<YOUR_API_KEY_HERE>",
    },
  });
const loanId: string = "<value>";

  const res = await sdk.loan.cancel(loanId);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `loanId`                                                     | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.CancelLoanResponse](../../sdk/models/operations/cancelloanresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## get

Get a loan by id

### Example Usage

```typescript
import { Defacto } from "defacto";
import { GetLoanRequest } from "defacto/dist/sdk/models/operations";

async function run() {
  const sdk = new Defacto({
    security: {
      bearer: "<YOUR_API_KEY_HERE>",
    },
  });
const loanId: string = "<value>";

  const res = await sdk.loan.get(loanId);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `loanId`                                                     | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetLoanResponse](../../sdk/models/operations/getloanresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getEvents

Get the activity log of a loan.

### Example Usage

```typescript
import { Defacto } from "defacto";
import { GetLoanEventsRequest } from "defacto/dist/sdk/models/operations";

async function run() {
  const sdk = new Defacto({
    security: {
      bearer: "<YOUR_API_KEY_HERE>",
    },
  });
const loanId: string = "<value>";

  const res = await sdk.loan.getEvents(loanId);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `loanId`                                                     | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetLoanEventsResponse](../../sdk/models/operations/getloaneventsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## list

List loans

### Example Usage

```typescript
import { Defacto } from "defacto";
import { ListLoansQueryParamStatus, LoanType } from "defacto/dist/sdk/models/operations";

async function run() {
  const sdk = new Defacto({
    security: {
      bearer: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.loan.list({
    borrower: [
      "<value>",
    ],
    id: [
      "c184a429-302e-4aca-80db-f1718b882a50",
    ],
    loanType: [
      LoanType.WalletFinancing,
    ],
    status: [
      ListLoansQueryParamStatus.Submitted,
    ],
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.ListLoansRequest](../../sdk/models/operations/listloansrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.ListLoansResponse](../../sdk/models/operations/listloansresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## request


Request a new loan. You can request a loan for only one invoice. At the moment, we don't support multiple-invoices financing.
- You can either request a loan for an existing invoice, in which case you should set invoice_ids.
- Or you can create the invoice and request a loan with a single call to this API.
- If you pass an invoice in invoices, the base64-encoded value of the PDF of the invoice is required under the document property. You can for example use base64guru.


### Example Usage

```typescript
import { Defacto } from "defacto";
import {
  AccountCreationAccountNumberType,
  AccountCreationBankIdentifierType,
  AccountCreationIdentifierType,
  APIPostLoanCurrency,
  APIPostLoanIdentifierType,
  APIRequiredInvoiceCreationAccountNumberType,
  APIRequiredInvoiceCreationBankIdentifierType,
  APIRequiredInvoiceCreationCurrency,
  APIRequiredInvoiceCreationIdentifierType,
  CounterpartyCreationIdentifierType,
  LoanType,
} from "defacto/dist/sdk/models/shared";

async function run() {
  const sdk = new Defacto({
    security: {
      bearer: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.loan.request({
    amount: 193368,
    borrower: {
      identifier: "<value>",
    },
    invoiceIds: [
      "12e6e103-56d1-4f09-9ae6-2352496ce763",
    ],
    invoices: [
      {
        buyer: {},
        dueAt: new Date("2023-04-12T05:28:04.614Z"),
        invoiceNumber: "<value>",
        issuedAt: new Date("2023-06-01T07:28:09.115Z"),
        metadata: {
          "key": "<value>",
        },
        seller: {},
        toAccount: {
          accountHolder: {
            identifier: "<value>",
          },
          accountNumber: "<value>",
        },
        totalAmount: 143159,
      },
    ],
    loanTo: {
      accountHolder: {
        identifier: "<value>",
      },
      accountNumber: "<value>",
    },
    loanToReferences: [
      "<value>",
    ],
    metadata: {
      "key": "<value>",
    },
    notificationEmails: [
      "Tony.Hauck15@gmail.com",
    ],
    repaymentFromReferences: [
      "<value>",
    ],
    toPayAt: new Date("2023-02-09T18:49:05.936Z"),
    toRepayAt: new Date("2023-06-07T23:46:39.127Z"),
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.APIPostLoan](../../sdk/models/shared/apipostloan.md) | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.RequestLoanResponse](../../sdk/models/operations/requestloanresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

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
  PatchLoanAccountHolder,
  PatchLoanAccountNumberType,
  PatchLoanBankIdentifierType,
  PatchLoanIdentifierType,
  PatchLoanLoanTo,
} from "defacto/dist/sdk/models/shared";

async function run() {
  const sdk = new Defacto({
    security: {
      bearer: "<YOUR_API_KEY_HERE>",
    },
  });
const loanId: string = "<value>";
const patchLoan: PatchLoan = {
  loanTo: {
    accountHolder: {
      identifier: "<value>",
    },
    accountNumber: "<value>",
  },
  loanToReferences: [
    "<value>",
  ],
  metadata: {
    "key": "<value>",
  },
  repaymentToReferences: [
    "<value>",
  ],
};

  const res = await sdk.loan.update(loanId, patchLoan);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `loanId`                                                     | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `patchLoan`                                                  | [shared.PatchLoan](../../sdk/models/shared/patchloan.md)     | :heavy_minus_sign:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.UpdateLoanResponse](../../sdk/models/operations/updateloanresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## validate

Use this function to accept a loan proposal. Available for LoanStatus.TO_VALIDATE loans only.

### Example Usage

```typescript
import { Defacto } from "defacto";
import { ValidateLoanRequest } from "defacto/dist/sdk/models/operations";

async function run() {
  const sdk = new Defacto({
    security: {
      bearer: "<YOUR_API_KEY_HERE>",
    },
  });
const loanId: string = "<value>";

  const res = await sdk.loan.validate(loanId);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `loanId`                                                     | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.ValidateLoanResponse](../../sdk/models/operations/validateloanresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

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
import { CancelLoanResponse } from "defacto/dist/sdk/models/operations";

const sdk = new Defacto({
  security: {
    bearer: "YOUR_API_KEY_HERE",
  },
});

sdk.loan.cancel({
  loanId: "libero",
}).then((res: CancelLoanResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## get

Get a loan by id

### Example Usage

```typescript
import { Defacto } from "defacto";
import { GetLoanResponse } from "defacto/dist/sdk/models/operations";

const sdk = new Defacto({
  security: {
    bearer: "YOUR_API_KEY_HERE",
  },
});

sdk.loan.get({
  loanId: "illum",
}).then((res: GetLoanResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getEvents

Get the activity log of a loan.

### Example Usage

```typescript
import { Defacto } from "defacto";
import { GetLoanEventsResponse } from "defacto/dist/sdk/models/operations";

const sdk = new Defacto({
  security: {
    bearer: "YOUR_API_KEY_HERE",
  },
});

sdk.loan.getEvents({
  loanId: "soluta",
}).then((res: GetLoanEventsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## list

List loans

### Example Usage

```typescript
import { Defacto } from "defacto";
import { ListLoansLoanTypeEnum, ListLoansResponse, ListLoansStatusEnum } from "defacto/dist/sdk/models/operations";

const sdk = new Defacto({
  security: {
    bearer: "YOUR_API_KEY_HERE",
  },
});

sdk.loan.list({
  borrower: [
    "aliquam",
  ],
  cursor: "sapiente",
  guaranteeCalled: false,
  guarantor: "dicta",
  id: [
    "756082d6-8ea1-49f1-9170-51339d08086a",
    "1840394c-2607-41f9-bf5f-0642dac7af51",
  ],
  loanType: [
    ListLoansLoanTypeEnum.WalletFinancing,
    ListLoansLoanTypeEnum.WalletFinancing,
  ],
  pageSize: 288398,
  status: [
    ListLoansStatusEnum.Validated,
  ],
  toPayAtFrom: new Date("2021-09-04T08:55:11.388Z"),
  toPayAtTo: new Date("2022-10-03T04:29:10.698Z"),
  toRepayAtFrom: new Date("2021-09-01T22:08:53.618Z"),
  toRepayAtTo: new Date("2021-06-13T13:07:55.703Z"),
  toRepayAtWithinDays: 853940,
}).then((res: ListLoansResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

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
  AccountCreationAccountHolderIdentifierTypeEnum,
  AccountCreationAccountNumberTypeEnum,
  AccountCreationBankIdentifierTypeEnum,
  APIPostLoanBorrowerIdentifierTypeEnum,
  APIPostLoanCurrencyEnum,
  APIPostLoanLoanTypeEnum,
  APIRequiredInvoiceCreationCurrencyEnum,
  APIRequiredInvoiceCreationToAccountAccountHolderIdentifierTypeEnum,
  APIRequiredInvoiceCreationToAccountAccountNumberTypeEnum,
  APIRequiredInvoiceCreationToAccountBankIdentifierTypeEnum,
  CounterpartyCreationIdentifierTypeEnum,
} from "defacto/dist/sdk/models/shared";

const sdk = new Defacto({
  security: {
    bearer: "YOUR_API_KEY_HERE",
  },
});

sdk.loan.request({
  amount: 424089,
  autoValidate: false,
  borrower: {
    identifier: "ducimus",
    identifierType: APIPostLoanBorrowerIdentifierTypeEnum.Kvk,
  },
  currency: APIPostLoanCurrencyEnum.Eur,
  invoiceIds: [
    "dbb675fd-5e60-4b37-9ed4-f6fbee41f333",
    "17fe35b6-0eb1-4ea4-a655-5ba3c28744ed",
  ],
  invoices: [
    {
      buyer: {
        identifier: "adipisci",
        identifierType: CounterpartyCreationIdentifierTypeEnum.HrNummer,
        name: "Morris Weissnat",
        vatNumber: "corrupti",
      },
      currency: APIRequiredInvoiceCreationCurrencyEnum.Gbp,
      document: "totam",
      dueAt: new Date("2021-12-15T01:59:29.520Z"),
      invoiceNumber: "nobis",
      issuedAt: new Date("2022-04-20T15:43:20.562Z"),
      metadata: {
        "reiciendis": "explicabo",
      },
      netAmount: 994401,
      seller: {
        identifier: "facilis",
        identifierType: CounterpartyCreationIdentifierTypeEnum.Cif,
        name: "Raymond Moore",
        vatNumber: "sed",
      },
      taxAmount: 447516,
      toAccount: {
        accountHolder: {
          identifier: "commodi",
          identifierType: APIRequiredInvoiceCreationToAccountAccountHolderIdentifierTypeEnum.HrNummer,
        },
        accountNumber: "explicabo",
        accountNumberType: APIRequiredInvoiceCreationToAccountAccountNumberTypeEnum.AccountNumber,
        bankIdentifier: "unde",
        bankIdentifierType: APIRequiredInvoiceCreationToAccountBankIdentifierTypeEnum.Bic,
      },
      toPayAmount: 382808,
      totalAmount: 960257,
    },
    {
      buyer: {
        identifier: "debitis",
        identifierType: CounterpartyCreationIdentifierTypeEnum.Siret,
        name: "Thomas Lockman",
        vatNumber: "sed",
      },
      currency: APIRequiredInvoiceCreationCurrencyEnum.Gbp,
      document: "eius",
      dueAt: new Date("2022-05-09T23:54:09.125Z"),
      invoiceNumber: "ea",
      issuedAt: new Date("2021-11-23T23:35:18.899Z"),
      metadata: {
        "tempora": "tempora",
        "voluptate": "reiciendis",
        "ex": "sit",
        "non": "officiis",
      },
      netAmount: 505866,
      seller: {
        identifier: "facilis",
        identifierType: CounterpartyCreationIdentifierTypeEnum.Name,
        name: "Brittany Tremblay DDS",
        vatNumber: "error",
      },
      taxAmount: 333507,
      toAccount: {
        accountHolder: {
          identifier: "minima",
          identifierType: APIRequiredInvoiceCreationToAccountAccountHolderIdentifierTypeEnum.LessThanNilGreaterThan,
        },
        accountNumber: "reiciendis",
        accountNumberType: APIRequiredInvoiceCreationToAccountAccountNumberTypeEnum.InternalId,
        bankIdentifier: "magni",
        bankIdentifierType: APIRequiredInvoiceCreationToAccountBankIdentifierTypeEnum.Bic,
      },
      toPayAmount: 901483,
      totalAmount: 253642,
    },
  ],
  loanTo: {
    accountHolder: {
      identifier: "veniam",
      identifierType: AccountCreationAccountHolderIdentifierTypeEnum.Cif,
    },
    accountNumber: "officiis",
    accountNumberType: AccountCreationAccountNumberTypeEnum.Iban,
    bankIdentifier: "laudantium",
    bankIdentifierType: AccountCreationBankIdentifierTypeEnum.RoutingNumber,
  },
  loanToReferences: [
    "cum",
    "laboriosam",
    "dolorum",
  ],
  loanType: APIPostLoanLoanTypeEnum.WalletFinancing,
  metadata: {
    "hic": "expedita",
    "debitis": "neque",
    "dolorum": "nostrum",
  },
  notificationEmails: [
    "Katelyn54@hotmail.com",
    "Easter63@gmail.com",
    "Elinor.Adams@hotmail.com",
  ],
  repaymentFromReferences: [
    "voluptatum",
  ],
  saltId: "quas",
  toPayAt: new Date("2021-12-01T12:56:16.650Z"),
  toRepayAt: new Date("2022-07-01T12:15:51.307Z"),
}).then((res: RequestLoanResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## update


Updates a loan.
- When the loan is SUBMITTED or TO_VALIDATE, all the below fields can be updated.
- When the loan is VALIDATED or SCHEDULED, the references and to_repay_at fields can be updated.
- When the loan is TO_REPAY, only the to_repay_at change be changed. The earliest acceptable date being loan.earliest_to_repay_at.

This operation is not available when the loan is in another status.


### Example Usage

```typescript
import { Defacto } from "defacto";
import { UpdateLoanResponse } from "defacto/dist/sdk/models/operations";
import {
  PatchLoanLoanToAccountHolderIdentifierTypeEnum,
  PatchLoanLoanToAccountNumberTypeEnum,
  PatchLoanLoanToBankIdentifierTypeEnum,
} from "defacto/dist/sdk/models/shared";

const sdk = new Defacto({
  security: {
    bearer: "YOUR_API_KEY_HERE",
  },
});

sdk.loan.update({
  patchLoan: {
    amount: 405942,
    lenderId: "sed",
    loanTo: {
      accountHolder: {
        identifier: "sit",
        identifierType: PatchLoanLoanToAccountHolderIdentifierTypeEnum.Cif,
      },
      accountNumber: "nostrum",
      accountNumberType: PatchLoanLoanToAccountNumberTypeEnum.InternalId,
      bankIdentifier: "error",
      bankIdentifierType: PatchLoanLoanToBankIdentifierTypeEnum.Bic,
    },
    loanToReferences: [
      "reiciendis",
      "dolorem",
    ],
    metadata: {
      "dicta": "architecto",
      "occaecati": "labore",
      "quidem": "atque",
    },
    repaymentToReferences: [
      "nam",
      "tenetur",
      "laboriosam",
    ],
    toPayAt: new Date("2022-10-10T02:44:39.117Z"),
    toRepayAt: new Date("2022-02-02T22:51:17.351Z"),
    transferContractUrl: "unde",
  },
  loanId: "reiciendis",
}).then((res: UpdateLoanResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## validate

Use this function to accept a loan proposal. Available for LoanStatus.TO_VALIDATE loans only.

### Example Usage

```typescript
import { Defacto } from "defacto";
import { ValidateLoanResponse } from "defacto/dist/sdk/models/operations";

const sdk = new Defacto({
  security: {
    bearer: "YOUR_API_KEY_HERE",
  },
});

sdk.loan.validate({
  loanId: "provident",
}).then((res: ValidateLoanResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

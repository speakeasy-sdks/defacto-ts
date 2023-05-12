# invoice

### Available Operations

* [create](#create) - 
Create an invoice.
- If you create an invoice that will need to be edited afterwards, create a draft invoice with the is_draft parameter. Otherwise set is_draft to false.
- This endpoint requires the base64-encoded value of the PDF of the invoice. You can for example use [base64guru](https://base64.guru/converter/encode/pdf).

* [delete](#delete) - Delete an invoice by id
* [get](#get) - Get an invoice by id
* [list](#list) - Get your invoices
* [submit](#submit) - 
Submit an invoice for validation by Defacto (with status TO_SUBMIT or TO_EDIT).
If some data is missing prior to validating the invoice, a 422 error will be returned with the list of the missing fields.

* [update](#update) - Updates an invoice (with status TO_SUBMIT or TO_EDIT only)
* [upload](#upload) - Create an invoice entity from the PDF of an invoice. Send the file within a formData. The endpoint will automatically extract the invoice information and create an invoice entity from them.

## create


Create an invoice.
- If you create an invoice that will need to be edited afterwards, create a draft invoice with the is_draft parameter. Otherwise set is_draft to false.
- This endpoint requires the base64-encoded value of the PDF of the invoice. You can for example use [base64guru](https://base64.guru/converter/encode/pdf).


### Example Usage

```typescript
import { Defacto } from "defacto";
import { CreateInvoiceResponse } from "defacto/dist/sdk/models/operations";
import {
  APIDraftableInvoiceCreationBuyerIdentifierTypeEnum,
  APIDraftableInvoiceCreationCurrencyEnum,
  APIDraftableInvoiceCreationSellerIdentifierTypeEnum,
  APIDraftableInvoiceCreationToAccountAccountHolderIdentifierTypeEnum,
  APIDraftableInvoiceCreationToAccountAccountNumberTypeEnum,
  APIDraftableInvoiceCreationToAccountBankIdentifierTypeEnum,
} from "defacto/dist/sdk/models/shared";

const sdk = new Defacto({
  security: {
    bearer: "YOUR_API_KEY_HERE",
  },
});

sdk.invoice.create({
  buyer: {
    identifier: "repellendus",
    identifierType: APIDraftableInvoiceCreationBuyerIdentifierTypeEnum.BelgiumRegistrationNumber,
    name: "Alexander Prosacco",
    vatNumber: "quae",
  },
  currency: APIDraftableInvoiceCreationCurrencyEnum.Gbp,
  document: "odio",
  dueAt: new Date("2021-01-17T10:17:06.805Z"),
  invoiceNumber: "quisquam",
  isDraft: false,
  issuedAt: new Date("2021-03-07T21:49:29.078Z"),
  metadata: {
    "ipsum": "delectus",
    "voluptate": "consectetur",
  },
  netAmount: 878870,
  seller: {
    identifier: "tenetur",
    identifierType: APIDraftableInvoiceCreationSellerIdentifierTypeEnum.Cif,
    name: "Kelvin Schmidt",
    vatNumber: "facilis",
  },
  taxAmount: 874288,
  toAccount: {
    accountHolder: {
      identifier: "ducimus",
      identifierType: APIDraftableInvoiceCreationToAccountAccountHolderIdentifierTypeEnum.Name,
    },
    accountNumber: "quibusdam",
    accountNumberType: APIDraftableInvoiceCreationToAccountAccountNumberTypeEnum.InternalId,
    bankIdentifier: "sequi",
    bankIdentifierType: APIDraftableInvoiceCreationToAccountBankIdentifierTypeEnum.RoutingNumber,
  },
  toPayAmount: 773326,
  totalAmount: 13236,
}).then((res: CreateInvoiceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## delete

Delete an invoice by id

### Example Usage

```typescript
import { Defacto } from "defacto";
import { DeleteInvoiceResponse } from "defacto/dist/sdk/models/operations";

const sdk = new Defacto({
  security: {
    bearer: "YOUR_API_KEY_HERE",
  },
});

sdk.invoice.delete({
  invoiceId: "voluptatibus",
}).then((res: DeleteInvoiceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## get

Get an invoice by id

### Example Usage

```typescript
import { Defacto } from "defacto";
import { GetInvoiceResponse } from "defacto/dist/sdk/models/operations";

const sdk = new Defacto({
  security: {
    bearer: "YOUR_API_KEY_HERE",
  },
});

sdk.invoice.get({
  invoiceId: "exercitationem",
}).then((res: GetInvoiceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## list

Get your invoices

### Example Usage

```typescript
import { Defacto } from "defacto";
import { ListInvoicesResponse, ListInvoicesStatusEnum } from "defacto/dist/sdk/models/operations";

const sdk = new Defacto({
  security: {
    bearer: "YOUR_API_KEY_HERE",
  },
});

sdk.invoice.list({
  buyer: [
    "fugit",
    "porro",
    "maiores",
    "doloribus",
  ],
  cursor: "iusto",
  invoiceId: [
    "70a45626-d436-4813-b16d-9f5fce6c5561",
    "46c3e250-fb00-48c4-ae14-1aac366c8dd6",
    "b1442907-4747-478a-bbd4-66d28c10ab3c",
    "dca42519-04e5-423c-be0b-c7178e4796f2",
  ],
  pageSize: 645570,
  seller: [
    "accusantium",
    "porro",
  ],
  status: [
    ListInvoicesStatusEnum.ToEdit,
    ListInvoicesStatusEnum.ToEdit,
  ],
}).then((res: ListInvoicesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## submit


Submit an invoice for validation by Defacto (with status TO_SUBMIT or TO_EDIT).
If some data is missing prior to validating the invoice, a 422 error will be returned with the list of the missing fields.


### Example Usage

```typescript
import { Defacto } from "defacto";
import { SubmitInvoiceResponse } from "defacto/dist/sdk/models/operations";
import {
  APIPatchInvoiceBuyerIdentifierTypeEnum,
  APIPatchInvoiceCurrencyEnum,
  APIPatchInvoiceSellerIdentifierTypeEnum,
  APIPatchInvoiceToAccountAccountHolderIdentifierTypeEnum,
  APIPatchInvoiceToAccountAccountNumberTypeEnum,
  APIPatchInvoiceToAccountBankIdentifierTypeEnum,
} from "defacto/dist/sdk/models/shared";

const sdk = new Defacto({
  security: {
    bearer: "YOUR_API_KEY_HERE",
  },
});

sdk.invoice.submit({
  apiPatchInvoice: {
    buyer: {
      identifier: "consequuntur",
      identifierType: APIPatchInvoiceBuyerIdentifierTypeEnum.Kvk,
      name: "Lee O'Conner",
      vatNumber: "explicabo",
    },
    currency: APIPatchInvoiceCurrencyEnum.Eur,
    dueAt: new Date("2022-11-08T08:09:29.073Z"),
    invoiceNumber: "sapiente",
    issuedAt: new Date("2022-10-24T16:43:59.350Z"),
    metadata: {
      "saepe": "occaecati",
    },
    netAmount: 543806,
    seller: {
      identifier: "et",
      identifierType: APIPatchInvoiceSellerIdentifierTypeEnum.Cif,
      name: "Sheldon Boehm",
      vatNumber: "nam",
    },
    taxAmount: 877131,
    toAccount: {
      accountHolder: {
        identifier: "aliquid",
        identifierType: APIPatchInvoiceToAccountAccountHolderIdentifierTypeEnum.Siren,
      },
      accountNumber: "saepe",
      accountNumberType: APIPatchInvoiceToAccountAccountNumberTypeEnum.AccountNumber,
      bankIdentifier: "harum",
      bankIdentifierType: APIPatchInvoiceToAccountBankIdentifierTypeEnum.RoutingNumber,
    },
    toPayAmount: 699622,
    totalAmount: 580197,
  },
  invoiceId: "minima",
}).then((res: SubmitInvoiceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## update

Updates an invoice (with status TO_SUBMIT or TO_EDIT only)

### Example Usage

```typescript
import { Defacto } from "defacto";
import { UpdateInvoiceResponse } from "defacto/dist/sdk/models/operations";
import {
  APIPatchInvoiceBuyerIdentifierTypeEnum,
  APIPatchInvoiceCurrencyEnum,
  APIPatchInvoiceSellerIdentifierTypeEnum,
  APIPatchInvoiceToAccountAccountHolderIdentifierTypeEnum,
  APIPatchInvoiceToAccountAccountNumberTypeEnum,
  APIPatchInvoiceToAccountBankIdentifierTypeEnum,
} from "defacto/dist/sdk/models/shared";

const sdk = new Defacto({
  security: {
    bearer: "YOUR_API_KEY_HERE",
  },
});

sdk.invoice.update({
  apiPatchInvoice: {
    buyer: {
      identifier: "distinctio",
      identifierType: APIPatchInvoiceBuyerIdentifierTypeEnum.BelgiumRegistrationNumber,
      name: "Kristi Renner",
      vatNumber: "consequuntur",
    },
    currency: APIPatchInvoiceCurrencyEnum.Eur,
    dueAt: new Date("2022-01-28T10:14:21.975Z"),
    invoiceNumber: "sapiente",
    issuedAt: new Date("2022-07-17T18:42:13.476Z"),
    metadata: {
      "provident": "a",
      "nulla": "quas",
      "esse": "quasi",
    },
    netAmount: 951875,
    seller: {
      identifier: "error",
      identifierType: APIPatchInvoiceSellerIdentifierTypeEnum.Kvk,
      name: "Rufus Crona",
      vatNumber: "facere",
    },
    taxAmount: 85001,
    toAccount: {
      accountHolder: {
        identifier: "consequuntur",
        identifierType: APIPatchInvoiceToAccountAccountHolderIdentifierTypeEnum.Siren,
      },
      accountNumber: "similique",
      accountNumberType: APIPatchInvoiceToAccountAccountNumberTypeEnum.AccountNumber,
      bankIdentifier: "aliquid",
      bankIdentifierType: APIPatchInvoiceToAccountBankIdentifierTypeEnum.Name,
    },
    toPayAmount: 62713,
    totalAmount: 936747,
  },
  invoiceId: "vel",
}).then((res: UpdateInvoiceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## upload

Create an invoice entity from the PDF of an invoice. Send the file within a formData. The endpoint will automatically extract the invoice information and create an invoice entity from them.

### Example Usage

```typescript
import { Defacto } from "defacto";
import { UploadInvoicesResponse } from "defacto/dist/sdk/models/operations";

const sdk = new Defacto({
  security: {
    bearer: "YOUR_API_KEY_HERE",
  },
});

sdk.invoice.upload({
  buyer: "in",
  seller: "eius",
}).then((res: UploadInvoicesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

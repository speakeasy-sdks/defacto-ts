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
  APIDraftableInvoiceCreationBuyerIdentifierType,
  APIDraftableInvoiceCreationCurrency,
  APIDraftableInvoiceCreationSellerIdentifierType,
  APIDraftableInvoiceCreationToAccountAccountHolderIdentifierType,
  APIDraftableInvoiceCreationToAccountAccountNumberType,
  APIDraftableInvoiceCreationToAccountBankIdentifierType,
} from "defacto/dist/sdk/models/shared";

const sdk = new Defacto({
  security: {
    bearer: "",
  },
});

sdk.invoice.create({
  buyer: {
    identifier: "magni",
    identifierType: APIDraftableInvoiceCreationBuyerIdentifierType.Cif,
    name: "Marion Reichert DDS",
    vatNumber: "soluta",
  },
  currency: APIDraftableInvoiceCreationCurrency.Gbp,
  document: "et",
  dueAt: new Date("2022-05-07T21:24:02.842Z"),
  invoiceNumber: "veritatis",
  isDraft: false,
  issuedAt: new Date("2021-11-23T21:35:15.992Z"),
  metadata: {
    "cupiditate": "aperiam",
    "delectus": "dolorem",
    "dolore": "labore",
  },
  netAmount: 240829,
  seller: {
    identifier: "dolorum",
    identifierType: APIDraftableInvoiceCreationSellerIdentifierType.Siren,
    name: "Margaret Luettgen MD",
    vatNumber: "repellendus",
  },
  taxAmount: 785153,
  toAccount: {
    accountHolder: {
      identifier: "doloribus",
      identifierType: APIDraftableInvoiceCreationToAccountAccountHolderIdentifierType.Name,
    },
    accountNumber: "facilis",
    accountNumberType: APIDraftableInvoiceCreationToAccountAccountNumberType.AccountNumber,
    bankIdentifier: "qui",
    bankIdentifierType: APIDraftableInvoiceCreationToAccountBankIdentifierType.Bic,
  },
  toPayAmount: 512393,
  totalAmount: 485628,
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
    bearer: "",
  },
});

sdk.invoice.delete("occaecati").then((res: DeleteInvoiceResponse) => {
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
    bearer: "",
  },
});

sdk.invoice.get("voluptatibus").then((res: GetInvoiceResponse) => {
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
import { ListInvoicesResponse, ListInvoicesStatus } from "defacto/dist/sdk/models/operations";

const sdk = new Defacto({
  security: {
    bearer: "",
  },
});

sdk.invoice.list({
  buyer: [
    "vero",
    "omnis",
    "quis",
    "ipsum",
  ],
  cursor: "delectus",
  invoiceId: [
    "3ef7fbc7-abd7-44dd-b9c0-f5d2cff7c70a",
    "45626d43-6813-4f16-99f5-fce6c556146c",
  ],
  pageSize: 232234,
  seller: [
    "aspernatur",
    "minima",
    "eaque",
    "a",
  ],
  status: [
    ListInvoicesStatus.ToSubmit,
    ListInvoicesStatus.ToSubmit,
    ListInvoicesStatus.ToEdit,
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
  APIPatchInvoiceBuyerIdentifierType,
  APIPatchInvoiceCurrency,
  APIPatchInvoiceSellerIdentifierType,
  APIPatchInvoiceToAccountAccountHolderIdentifierType,
  APIPatchInvoiceToAccountAccountNumberType,
  APIPatchInvoiceToAccountBankIdentifierType,
} from "defacto/dist/sdk/models/shared";

const sdk = new Defacto({
  security: {
    bearer: "",
  },
});

sdk.invoice.submit("impedit", {
  buyer: {
    identifier: "aliquam",
    identifierType: APIPatchInvoiceBuyerIdentifierType.Siren,
    name: "Miss Dennis Friesen",
    vatNumber: "placeat",
  },
  currency: APIPatchInvoiceCurrency.Eur,
  dueAt: new Date("2022-07-31T12:04:26.954Z"),
  invoiceNumber: "nobis",
  issuedAt: new Date("2021-05-05T09:22:07.208Z"),
  metadata: {
    "voluptas": "libero",
    "quasi": "tempora",
    "numquam": "explicabo",
    "provident": "ipsa",
  },
  netAmount: 476477,
  seller: {
    identifier: "magnam",
    identifierType: APIPatchInvoiceSellerIdentifierType.Cif,
    name: "Joy Klocko",
    vatNumber: "reprehenderit",
  },
  taxAmount: 695626,
  toAccount: {
    accountHolder: {
      identifier: "fugiat",
      identifierType: APIPatchInvoiceToAccountAccountHolderIdentifierType.Name,
    },
    accountNumber: "eum",
    accountNumberType: APIPatchInvoiceToAccountAccountNumberType.AccountNumber,
    bankIdentifier: "assumenda",
    bankIdentifierType: APIPatchInvoiceToAccountBankIdentifierType.Bic,
  },
  toPayAmount: 509342,
  totalAmount: 788546,
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
  APIPatchInvoiceBuyerIdentifierType,
  APIPatchInvoiceCurrency,
  APIPatchInvoiceSellerIdentifierType,
  APIPatchInvoiceToAccountAccountHolderIdentifierType,
  APIPatchInvoiceToAccountAccountNumberType,
  APIPatchInvoiceToAccountBankIdentifierType,
} from "defacto/dist/sdk/models/shared";

const sdk = new Defacto({
  security: {
    bearer: "",
  },
});

sdk.invoice.update("veritatis", {
  buyer: {
    identifier: "ipsa",
    identifierType: APIPatchInvoiceBuyerIdentifierType.Bsn,
    name: "Luis Satterfield",
    vatNumber: "fuga",
  },
  currency: APIPatchInvoiceCurrency.Eur,
  dueAt: new Date("2022-08-17T13:23:48.206Z"),
  invoiceNumber: "ab",
  issuedAt: new Date("2022-12-24T22:15:46.522Z"),
  metadata: {
    "debitis": "ipsam",
    "aspernatur": "sequi",
  },
  netAmount: 779192,
  seller: {
    identifier: "esse",
    identifierType: APIPatchInvoiceSellerIdentifierType.LessThanNilGreaterThan,
    name: "Lola Schmidt IV",
    vatNumber: "totam",
  },
  taxAmount: 882710,
  toAccount: {
    accountHolder: {
      identifier: "aliquam",
      identifierType: APIPatchInvoiceToAccountAccountHolderIdentifierType.Cif,
    },
    accountNumber: "occaecati",
    accountNumberType: APIPatchInvoiceToAccountAccountNumberType.AccountNumber,
    bankIdentifier: "sapiente",
    bankIdentifierType: APIPatchInvoiceToAccountBankIdentifierType.Bic,
  },
  toPayAmount: 645570,
  totalAmount: 475289,
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
    bearer: "",
  },
});

sdk.invoice.upload("accusantium", "porro").then((res: UploadInvoicesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

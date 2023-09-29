# Invoice
(*invoice*)

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
    identifier: "bluetooth Extended",
    identifierType: APIDraftableInvoiceCreationBuyerIdentifierType.Siren,
    name: "Cambridgeshire grey technology",
    vatNumber: "deposit",
  },
  currency: APIDraftableInvoiceCreationCurrency.Eur,
  document: "male",
  dueAt: new Date("2023-07-27T06:25:16.774Z"),
  invoiceNumber: "quantify Polestar mobile",
  isDraft: false,
  issuedAt: new Date("2022-12-20T14:24:16.947Z"),
  metadata: {
    "ullam": "Durham",
  },
  netAmount: 901176,
  seller: {
    identifier: "overriding",
    identifierType: APIDraftableInvoiceCreationSellerIdentifierType.VatNumber,
    name: "female",
    vatNumber: "functionalities Grocery Borders",
  },
  taxAmount: 100966,
  toAccount: {
    accountHolder: {
      identifier: "Direct metrics",
      identifierType: APIDraftableInvoiceCreationToAccountAccountHolderIdentifierType.Siret,
    },
    accountNumber: "Interactions Senior Mouse",
    accountNumberType: APIDraftableInvoiceCreationToAccountAccountNumberType.Iban,
    bankIdentifier: "array Edinburg Investor",
    bankIdentifierType: APIDraftableInvoiceCreationToAccountBankIdentifierType.RoutingNumber,
  },
  toPayAmount: 787096,
  totalAmount: 906537,
}).then((res: CreateInvoiceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [shared.APIDraftableInvoiceCreation](../../models/shared/apidraftableinvoicecreation.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.CreateInvoiceResponse](../../models/operations/createinvoiceresponse.md)>**


## delete

Delete an invoice by id

### Example Usage

```typescript
import { Defacto } from "defacto";
import { DeleteInvoiceRequest, DeleteInvoiceResponse } from "defacto/dist/sdk/models/operations";

const sdk = new Defacto({
  security: {
    bearer: "",
  },
});
const invoiceId: string = "program";

sdk.invoice.delete(invoiceId).then((res: DeleteInvoiceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `invoiceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.DeleteInvoiceResponse](../../models/operations/deleteinvoiceresponse.md)>**


## get

Get an invoice by id

### Example Usage

```typescript
import { Defacto } from "defacto";
import { GetInvoiceRequest, GetInvoiceResponse } from "defacto/dist/sdk/models/operations";

const sdk = new Defacto({
  security: {
    bearer: "",
  },
});
const invoiceId: string = "female";

sdk.invoice.get(invoiceId).then((res: GetInvoiceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `invoiceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetInvoiceResponse](../../models/operations/getinvoiceresponse.md)>**


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
    "Bicycle",
  ],
  cursor: "Product",
  invoiceId: [
    "02eaca40-dbf1-4718-b882-a50805557419",
  ],
  pageSize: 931165,
  seller: [
    "RAM",
  ],
  status: [
    ListInvoicesStatus.ToSubmit,
  ],
}).then((res: ListInvoicesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.ListInvoicesRequest](../../models/operations/listinvoicesrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.ListInvoicesResponse](../../models/operations/listinvoicesresponse.md)>**


## submit


Submit an invoice for validation by Defacto (with status TO_SUBMIT or TO_EDIT).
If some data is missing prior to validating the invoice, a 422 error will be returned with the list of the missing fields.


### Example Usage

```typescript
import { Defacto } from "defacto";
import { SubmitInvoiceRequest, SubmitInvoiceResponse } from "defacto/dist/sdk/models/operations";
import {
  APIPatchInvoice,
  APIPatchInvoiceBuyer,
  APIPatchInvoiceBuyerIdentifierType,
  APIPatchInvoiceCurrency,
  APIPatchInvoiceSeller,
  APIPatchInvoiceSellerIdentifierType,
  APIPatchInvoiceToAccount,
  APIPatchInvoiceToAccountAccountHolder,
  APIPatchInvoiceToAccountAccountHolderIdentifierType,
  APIPatchInvoiceToAccountAccountNumberType,
  APIPatchInvoiceToAccountBankIdentifierType,
} from "defacto/dist/sdk/models/shared";

const sdk = new Defacto({
  security: {
    bearer: "",
  },
});
const invoiceId: string = "sad";
const apiPatchInvoice: APIPatchInvoice = {
  buyer: {
    identifier: "grey Pound",
    identifierType: APIPatchInvoiceBuyerIdentifierType.BelgiumRegistrationNumber,
    name: "seriously Representative less",
    vatNumber: "ew alias",
  },
  currency: APIPatchInvoiceCurrency.LessThanNilGreaterThan,
  dueAt: new Date("2022-03-11T10:34:32.330Z"),
  invoiceNumber: "Van Licensed",
  issuedAt: new Date("2021-07-19T11:44:26.485Z"),
  metadata: {
    "impedit": "website",
  },
  netAmount: 509444,
  seller: {
    identifier: "Southeast synthesizing blue",
    identifierType: APIPatchInvoiceSellerIdentifierType.Siret,
    name: "lavender",
    vatNumber: "intranet",
  },
  taxAmount: 598256,
  toAccount: {
    accountHolder: {
      identifier: "West",
      identifierType: APIPatchInvoiceToAccountAccountHolderIdentifierType.Name,
    },
    accountNumber: "temporibus pink",
    accountNumberType: APIPatchInvoiceToAccountAccountNumberType.AccountNumber,
    bankIdentifier: "interface inwardly utilisation",
    bankIdentifierType: APIPatchInvoiceToAccountBankIdentifierType.RoutingNumber,
  },
  toPayAmount: 162935,
  totalAmount: 200240,
};

sdk.invoice.submit(invoiceId, apiPatchInvoice).then((res: SubmitInvoiceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                        | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `invoiceId`                                                      | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `apiPatchInvoice`                                                | [shared.APIPatchInvoice](../../models/shared/apipatchinvoice.md) | :heavy_minus_sign:                                               | N/A                                                              |
| `config`                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)     | :heavy_minus_sign:                                               | Available config options for making requests.                    |


### Response

**Promise<[operations.SubmitInvoiceResponse](../../models/operations/submitinvoiceresponse.md)>**


## update

Updates an invoice (with status TO_SUBMIT or TO_EDIT only)

### Example Usage

```typescript
import { Defacto } from "defacto";
import { UpdateInvoiceRequest, UpdateInvoiceResponse } from "defacto/dist/sdk/models/operations";
import {
  APIPatchInvoice,
  APIPatchInvoiceBuyer,
  APIPatchInvoiceBuyerIdentifierType,
  APIPatchInvoiceCurrency,
  APIPatchInvoiceSeller,
  APIPatchInvoiceSellerIdentifierType,
  APIPatchInvoiceToAccount,
  APIPatchInvoiceToAccountAccountHolder,
  APIPatchInvoiceToAccountAccountHolderIdentifierType,
  APIPatchInvoiceToAccountAccountNumberType,
  APIPatchInvoiceToAccountBankIdentifierType,
} from "defacto/dist/sdk/models/shared";

const sdk = new Defacto({
  security: {
    bearer: "",
  },
});
const invoiceId: string = "Van";
const apiPatchInvoice: APIPatchInvoice = {
  buyer: {
    identifier: "Reactive",
    identifierType: APIPatchInvoiceBuyerIdentifierType.LessThanNilGreaterThan,
    name: "Quality",
    vatNumber: "invoice Arizona",
  },
  currency: APIPatchInvoiceCurrency.Eur,
  dueAt: new Date("2023-09-09T16:01:31.674Z"),
  invoiceNumber: "withdrawal extend",
  issuedAt: new Date("2021-10-01T03:16:58.654Z"),
  metadata: {
    "nemo": "Carolina",
  },
  netAmount: 993680,
  seller: {
    identifier: "East Baht Quality",
    identifierType: APIPatchInvoiceSellerIdentifierType.LessThanNilGreaterThan,
    name: "driver users",
    vatNumber: "Gasoline Lev",
  },
  taxAmount: 481319,
  toAccount: {
    accountHolder: {
      identifier: "Wooden",
      identifierType: APIPatchInvoiceToAccountAccountHolderIdentifierType.Nif,
    },
    accountNumber: "Internal invoice",
    accountNumberType: APIPatchInvoiceToAccountAccountNumberType.Iban,
    bankIdentifier: "Buckinghamshire frictionless haptic",
    bankIdentifierType: APIPatchInvoiceToAccountBankIdentifierType.Name,
  },
  toPayAmount: 579805,
  totalAmount: 823897,
};

sdk.invoice.update(invoiceId, apiPatchInvoice).then((res: UpdateInvoiceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                        | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `invoiceId`                                                      | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `apiPatchInvoice`                                                | [shared.APIPatchInvoice](../../models/shared/apipatchinvoice.md) | :heavy_minus_sign:                                               | N/A                                                              |
| `config`                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)     | :heavy_minus_sign:                                               | Available config options for making requests.                    |


### Response

**Promise<[operations.UpdateInvoiceResponse](../../models/operations/updateinvoiceresponse.md)>**


## upload

Create an invoice entity from the PDF of an invoice. Send the file within a formData. The endpoint will automatically extract the invoice information and create an invoice entity from them.

### Example Usage

```typescript
import { Defacto } from "defacto";
import { UploadInvoicesRequest, UploadInvoicesResponse } from "defacto/dist/sdk/models/operations";

const sdk = new Defacto({
  security: {
    bearer: "",
  },
});
const buyer: string = "Market";
const seller: string = "hard";

sdk.invoice.upload(buyer, seller).then((res: UploadInvoicesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `buyer`                                                                                                | *string*                                                                                               | :heavy_minus_sign:                                                                                     | Business identifier of the buyer, must be in the form - such as SIREN-899021021 for a french company.  |
| `seller`                                                                                               | *string*                                                                                               | :heavy_minus_sign:                                                                                     | Business identifier of the seller, must be in the form - such as SIREN-899021021 for a french company. |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.UploadInvoicesResponse](../../models/operations/uploadinvoicesresponse.md)>**


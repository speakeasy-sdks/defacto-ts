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
    identifier: "labore",
    identifierType: APIDraftableInvoiceCreationBuyerIdentifierType.Nif,
    name: "Robin Keebler",
    vatNumber: "architecto",
  },
  currency: APIDraftableInvoiceCreationCurrency.Eur,
  document: "et",
  dueAt: new Date("2022-04-17T13:06:08.135Z"),
  invoiceNumber: "provident",
  isDraft: false,
  issuedAt: new Date("2021-11-07T17:49:17.039Z"),
  metadata: {
    "accusantium": "mollitia",
  },
  netAmount: 968962,
  seller: {
    identifier: "mollitia",
    identifierType: APIDraftableInvoiceCreationSellerIdentifierType.Name,
    name: "Carmen Treutel",
    vatNumber: "quasi",
  },
  taxAmount: 435865,
  toAccount: {
    accountHolder: {
      identifier: "doloribus",
      identifierType: APIDraftableInvoiceCreationToAccountAccountHolderIdentifierType.Steuernummer,
    },
    accountNumber: "eius",
    accountNumberType: APIDraftableInvoiceCreationToAccountAccountNumberType.InternalId,
    bankIdentifier: "deleniti",
    bankIdentifierType: APIDraftableInvoiceCreationToAccountBankIdentifierType.Name,
  },
  toPayAmount: 447926,
  totalAmount: 100226,
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
const invoiceId: string = "architecto";

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
const invoiceId: string = "repudiandae";

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
    "ullam",
  ],
  cursor: "expedita",
  invoiceId: [
    "7fd2ed02-8921-4cdd-8692-601fb576b0d5",
  ],
  pageSize: 975522,
  seller: [
    "perferendis",
  ],
  status: [
    ListInvoicesStatus.Deleted,
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
const invoiceId: string = "amet";
const apiPatchInvoice: APIPatchInvoice = {
  buyer: {
    identifier: "aut",
    identifierType: APIPatchInvoiceBuyerIdentifierType.BelgiumRegistrationNumber,
    name: "Mindy Renner",
    vatNumber: "quis",
  },
  currency: APIPatchInvoiceCurrency.Gbp,
  dueAt: new Date("2022-12-12T03:59:56.327Z"),
  invoiceNumber: "quis",
  issuedAt: new Date("2022-10-27T11:39:54.088Z"),
  metadata: {
    "perferendis": "dolores",
  },
  netAmount: 793698,
  seller: {
    identifier: "quam",
    identifierType: APIPatchInvoiceSellerIdentifierType.VatNumber,
    name: "Dean Welch",
    vatNumber: "facilis",
  },
  taxAmount: 596656,
  toAccount: {
    accountHolder: {
      identifier: "voluptatem",
      identifierType: APIPatchInvoiceToAccountAccountHolderIdentifierType.BelgiumRegistrationNumber,
    },
    accountNumber: "consequuntur",
    accountNumberType: APIPatchInvoiceToAccountAccountNumberType.AccountNumber,
    bankIdentifier: "error",
    bankIdentifierType: APIPatchInvoiceToAccountBankIdentifierType.Bic,
  },
  toPayAmount: 577229,
  totalAmount: 699098,
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
const invoiceId: string = "adipisci";
const apiPatchInvoice: APIPatchInvoice = {
  buyer: {
    identifier: "asperiores",
    identifierType: APIPatchInvoiceBuyerIdentifierType.LessThanNilGreaterThan,
    name: "Sheryl Parisian",
    vatNumber: "provident",
  },
  currency: APIPatchInvoiceCurrency.LessThanNilGreaterThan,
  dueAt: new Date("2021-01-26T22:08:21.462Z"),
  invoiceNumber: "quaerat",
  issuedAt: new Date("2022-03-16T07:10:00.236Z"),
  metadata: {
    "dolorem": "dolorem",
  },
  netAmount: 222443,
  seller: {
    identifier: "qui",
    identifierType: APIPatchInvoiceSellerIdentifierType.VatNumber,
    name: "Marshall Ritchie",
    vatNumber: "reiciendis",
  },
  taxAmount: 227414,
  toAccount: {
    accountHolder: {
      identifier: "dolorum",
      identifierType: APIPatchInvoiceToAccountAccountHolderIdentifierType.Name,
    },
    accountNumber: "veritatis",
    accountNumberType: APIPatchInvoiceToAccountAccountNumberType.Iban,
    bankIdentifier: "ipsa",
    bankIdentifierType: APIPatchInvoiceToAccountBankIdentifierType.RoutingNumber,
  },
  toPayAmount: 487838,
  totalAmount: 311796,
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
const buyer: string = "accusamus";
const seller: string = "quidem";

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


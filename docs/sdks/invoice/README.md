# Invoice

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
    identifier: "dolorum",
    identifierType: APIDraftableInvoiceCreationBuyerIdentifierType.Cif,
    name: "Angel Wolff II",
    vatNumber: "cumque",
  },
  currency: APIDraftableInvoiceCreationCurrency.Gbp,
  document: "ea",
  dueAt: new Date("2022-04-29T11:09:12.937Z"),
  invoiceNumber: "accusamus",
  isDraft: false,
  issuedAt: new Date("2022-06-02T20:02:58.167Z"),
  metadata: {
    "enim": "accusamus",
  },
  netAmount: 965417,
  seller: {
    identifier: "quidem",
    identifierType: APIDraftableInvoiceCreationSellerIdentifierType.Bsn,
    name: "Lynn Kuvalis",
    vatNumber: "amet",
  },
  taxAmount: 643990,
  toAccount: {
    accountHolder: {
      identifier: "nisi",
      identifierType: APIDraftableInvoiceCreationToAccountAccountHolderIdentifierType.Cif,
    },
    accountNumber: "natus",
    accountNumberType: APIDraftableInvoiceCreationToAccountAccountNumberType.AccountNumber,
    bankIdentifier: "molestiae",
    bankIdentifierType: APIDraftableInvoiceCreationToAccountBankIdentifierType.Bic,
  },
  toPayAmount: 470132,
  totalAmount: 301575,
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
const invoiceId: string = "distinctio";

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
const invoiceId: string = "id";

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
    "labore",
  ],
  cursor: "labore",
  invoiceId: [
    "69b6e214-1959-4890-afa5-63e2516fe4c8",
  ],
  pageSize: 703889,
  seller: [
    "in",
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
const invoiceId: string = "architecto";
const apiPatchInvoice: APIPatchInvoice = {
  buyer: {
    identifier: "repudiandae",
    identifierType: APIPatchInvoiceBuyerIdentifierType.Nif,
    name: "Jessie Zulauf",
    vatNumber: "saepe",
  },
  currency: APIPatchInvoiceCurrency.LessThanNilGreaterThan,
  dueAt: new Date("2022-11-02T16:33:42.080Z"),
  invoiceNumber: "praesentium",
  issuedAt: new Date("2022-09-01T04:49:52.515Z"),
  metadata: {
    "sunt": "quo",
  },
  netAmount: 848009,
  seller: {
    identifier: "pariatur",
    identifierType: APIPatchInvoiceSellerIdentifierType.BelgiumRegistrationNumber,
    name: "Miriam Connelly Jr.",
    vatNumber: "maiores",
  },
  taxAmount: 697429,
  toAccount: {
    accountHolder: {
      identifier: "ipsam",
      identifierType: APIPatchInvoiceToAccountAccountHolderIdentifierType.Cif,
    },
    accountNumber: "autem",
    accountNumberType: APIPatchInvoiceToAccountAccountNumberType.InternalId,
    bankIdentifier: "eaque",
    bankIdentifierType: APIPatchInvoiceToAccountBankIdentifierType.Name,
  },
  toPayAmount: 365496,
  totalAmount: 975522,
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
const invoiceId: string = "perferendis";
const apiPatchInvoice: APIPatchInvoice = {
  buyer: {
    identifier: "fugiat",
    identifierType: APIPatchInvoiceBuyerIdentifierType.VatNumber,
    name: "Erma Hessel",
    vatNumber: "nobis",
  },
  currency: APIPatchInvoiceCurrency.Eur,
  dueAt: new Date("2022-06-24T19:43:09.208Z"),
  invoiceNumber: "dignissimos",
  issuedAt: new Date("2022-08-30T06:29:24.707Z"),
  metadata: {
    "nesciunt": "eos",
  },
  netAmount: 18521,
  seller: {
    identifier: "dolores",
    identifierType: APIPatchInvoiceSellerIdentifierType.BelgiumRegistrationNumber,
    name: "Rosa Swift",
    vatNumber: "recusandae",
  },
  taxAmount: 608253,
  toAccount: {
    accountHolder: {
      identifier: "facilis",
      identifierType: APIPatchInvoiceToAccountAccountHolderIdentifierType.Bsn,
    },
    accountNumber: "voluptatem",
    accountNumberType: APIPatchInvoiceToAccountAccountNumberType.InternalId,
    bankIdentifier: "consequuntur",
    bankIdentifierType: APIPatchInvoiceToAccountBankIdentifierType.RoutingNumber,
  },
  toPayAmount: 621479,
  totalAmount: 50370,
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
const buyer: string = "occaecati";
const seller: string = "rerum";

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


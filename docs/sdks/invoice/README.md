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
import {
  APIDraftableInvoiceCreationAccountNumberType,
  APIDraftableInvoiceCreationBankIdentifierType,
  APIDraftableInvoiceCreationCurrency,
  APIDraftableInvoiceCreationIdentifierType,
  APIDraftableInvoiceCreationSchemasIdentifierType,
  APIDraftableInvoiceCreationSchemasToAccountIdentifierType,
} from "defacto/dist/sdk/models/shared";

(async() => {
  const sdk = new Defacto({
    security: {
      bearer: "",
    },
  });

  const res = await sdk.invoice.create({
    buyer: {},
    metadata: {
      "key": "string",
    },
    seller: {},
    toAccount: {
      accountHolder: {
        identifier: "string",
      },
      accountNumber: "string",
    },
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [shared.APIDraftableInvoiceCreation](../../sdk/models/shared/apidraftableinvoicecreation.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.CreateInvoiceResponse](../../sdk/models/operations/createinvoiceresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## delete

Delete an invoice by id

### Example Usage

```typescript
import { Defacto } from "defacto";
import { DeleteInvoiceRequest } from "defacto/dist/sdk/models/operations";

(async() => {
  const sdk = new Defacto({
    security: {
      bearer: "",
    },
  });
const invoiceId: string = "string";

  const res = await sdk.invoice.delete(invoiceId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `invoiceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.DeleteInvoiceResponse](../../sdk/models/operations/deleteinvoiceresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## get

Get an invoice by id

### Example Usage

```typescript
import { Defacto } from "defacto";
import { GetInvoiceRequest } from "defacto/dist/sdk/models/operations";

(async() => {
  const sdk = new Defacto({
    security: {
      bearer: "",
    },
  });
const invoiceId: string = "string";

  const res = await sdk.invoice.get(invoiceId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `invoiceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetInvoiceResponse](../../sdk/models/operations/getinvoiceresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## list

Get your invoices

### Example Usage

```typescript
import { Defacto } from "defacto";
import { QueryParamStatus } from "defacto/dist/sdk/models/operations";

(async() => {
  const sdk = new Defacto({
    security: {
      bearer: "",
    },
  });

  const res = await sdk.invoice.list({
    buyer: [
      "string",
    ],
    invoiceId: [
      "c184a429-302e-4aca-80db-f1718b882a50",
    ],
    seller: [
      "string",
    ],
    status: [
      QueryParamStatus.ToEdit,
    ],
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.ListInvoicesRequest](../../sdk/models/operations/listinvoicesrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.ListInvoicesResponse](../../sdk/models/operations/listinvoicesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## submit


Submit an invoice for validation by Defacto (with status TO_SUBMIT or TO_EDIT).
If some data is missing prior to validating the invoice, a 422 error will be returned with the list of the missing fields.


### Example Usage

```typescript
import { Defacto } from "defacto";
import { SubmitInvoiceRequest } from "defacto/dist/sdk/models/operations";
import {
  APIPatchInvoice,
  APIPatchInvoiceAccountHolder,
  APIPatchInvoiceAccountNumberType,
  APIPatchInvoiceBankIdentifierType,
  APIPatchInvoiceBuyer,
  APIPatchInvoiceCurrency,
  APIPatchInvoiceIdentifierType,
  APIPatchInvoiceSchemasIdentifierType,
  APIPatchInvoiceSchemasToAccountIdentifierType,
  APIPatchInvoiceSeller,
  APIPatchInvoiceToAccount,
} from "defacto/dist/sdk/models/shared";

(async() => {
  const sdk = new Defacto({
    security: {
      bearer: "",
    },
  });
const invoiceId: string = "string";
const apiPatchInvoice: APIPatchInvoice = {
  buyer: {},
  metadata: {
    "key": "string",
  },
  seller: {},
  toAccount: {
    accountHolder: {
      identifier: "string",
    },
    accountNumber: "string",
  },
};

  const res = await sdk.invoice.submit(invoiceId, apiPatchInvoice);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                               | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `invoiceId`                                                             | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| `apiPatchInvoice`                                                       | [shared.APIPatchInvoice](../../../sdk/models/shared/apipatchinvoice.md) | :heavy_minus_sign:                                                      | N/A                                                                     |
| `config`                                                                | [AxiosRequestConfig](https://axios-http.com/docs/req_config)            | :heavy_minus_sign:                                                      | Available config options for making requests.                           |


### Response

**Promise<[operations.SubmitInvoiceResponse](../../sdk/models/operations/submitinvoiceresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## update

Updates an invoice (with status TO_SUBMIT or TO_EDIT only)

### Example Usage

```typescript
import { Defacto } from "defacto";
import { UpdateInvoiceRequest } from "defacto/dist/sdk/models/operations";
import {
  APIPatchInvoice,
  APIPatchInvoiceAccountHolder,
  APIPatchInvoiceAccountNumberType,
  APIPatchInvoiceBankIdentifierType,
  APIPatchInvoiceBuyer,
  APIPatchInvoiceCurrency,
  APIPatchInvoiceIdentifierType,
  APIPatchInvoiceSchemasIdentifierType,
  APIPatchInvoiceSchemasToAccountIdentifierType,
  APIPatchInvoiceSeller,
  APIPatchInvoiceToAccount,
} from "defacto/dist/sdk/models/shared";

(async() => {
  const sdk = new Defacto({
    security: {
      bearer: "",
    },
  });
const invoiceId: string = "string";
const apiPatchInvoice: APIPatchInvoice = {
  buyer: {},
  metadata: {
    "key": "string",
  },
  seller: {},
  toAccount: {
    accountHolder: {
      identifier: "string",
    },
    accountNumber: "string",
  },
};

  const res = await sdk.invoice.update(invoiceId, apiPatchInvoice);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                               | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `invoiceId`                                                             | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| `apiPatchInvoice`                                                       | [shared.APIPatchInvoice](../../../sdk/models/shared/apipatchinvoice.md) | :heavy_minus_sign:                                                      | N/A                                                                     |
| `config`                                                                | [AxiosRequestConfig](https://axios-http.com/docs/req_config)            | :heavy_minus_sign:                                                      | Available config options for making requests.                           |


### Response

**Promise<[operations.UpdateInvoiceResponse](../../sdk/models/operations/updateinvoiceresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## upload

Create an invoice entity from the PDF of an invoice. Send the file within a formData. The endpoint will automatically extract the invoice information and create an invoice entity from them.

### Example Usage

```typescript
import { Defacto } from "defacto";
import { UploadInvoicesRequest } from "defacto/dist/sdk/models/operations";

(async() => {
  const sdk = new Defacto({
    security: {
      bearer: "",
    },
  });
const buyer: string = "string";
const seller: string = "string";

  const res = await sdk.invoice.upload(buyer, seller);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `buyer`                                                                                                | *string*                                                                                               | :heavy_minus_sign:                                                                                     | Business identifier of the buyer, must be in the form - such as SIREN-899021021 for a french company.  |
| `seller`                                                                                               | *string*                                                                                               | :heavy_minus_sign:                                                                                     | Business identifier of the seller, must be in the form - such as SIREN-899021021 for a french company. |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.UploadInvoicesResponse](../../sdk/models/operations/uploadinvoicesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

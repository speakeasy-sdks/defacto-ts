# Eligibility
(*.eligibility*)

### Available Operations

* [getCreditLine](#getcreditline) - Get credit line
* [listCreditLine](#listcreditline) - Get the credit line associated with your account
* [listCreditLines](#listcreditlines) - List all the credit lines that have been opened for your company. By default, this includes all credit lines that have been created for borrowers you registered, as well as the credit line associated with your account.
* [requestElligibilityBorrower](#requestelligibilityborrower) - 
Ask for the eligibility of a borrower.

* [requestElligibilityBuyer](#requestelligibilitybuyer) - 
Ask for the eligibility of a buyer.

* [requestElligibilityQuote](#requestelligibilityquote) - Ask for the eligibility of a quote.
* [requestElligibilitySeller](#requestelligibilityseller) - 
Ask for the eligibility of a seller.


## getCreditLine

Get credit line

### Example Usage

```typescript
import { Defacto } from "defacto";
import { GetCreditLineRequest } from "defacto/dist/sdk/models/operations";

(async() => {
  const sdk = new Defacto({
    security: {
      bearer: "",
    },
  });
const creditLineId: string = "string";
const at: Date = new Date("2022-10-25T14:52:10.068Z");

  const res = await sdk.eligibility.getCreditLine(creditLineId, at);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                     | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `creditLineId`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `at`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `config`                                                                                      | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                  | :heavy_minus_sign:                                                                            | Available config options for making requests.                                                 |


### Response

**Promise<[operations.GetCreditLineResponse](../../models/operations/getcreditlineresponse.md)>**


## listCreditLine

Get the credit line associated with your account

### Example Usage

```typescript
import { Defacto } from "defacto";

(async() => {
  const sdk = new Defacto({
    security: {
      bearer: "",
    },
  });

  const res = await sdk.eligibility.listCreditLine();


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.ListCreditLineResponse](../../models/operations/listcreditlineresponse.md)>**


## listCreditLines

List all the credit lines that have been opened for your company. By default, this includes all credit lines that have been created for borrowers you registered, as well as the credit line associated with your account.

### Example Usage

```typescript
import { Defacto } from "defacto";
import { ListCreditLinesRequest } from "defacto/dist/sdk/models/operations";

(async() => {
  const sdk = new Defacto({
    security: {
      bearer: "",
    },
  });
const borrower: string[] = [
  "string",
];
const cursor: string = "string";
const id: string[] = [
  "128aa121-6f99-4826-b263-d729e6d603d0",
];
const pageSize: number = 781880;

  const res = await sdk.eligibility.listCreditLines(borrower, cursor, id, pageSize);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `borrower`                                                   | *string*[]                                                   | :heavy_minus_sign:                                           | Search by borrower company number (e.g. SIREN or NIF)        |
| `cursor`                                                     | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `id`                                                         | *string*[]                                                   | :heavy_minus_sign:                                           | UUID(s) of the credit line(s).                               |
| `pageSize`                                                   | *number*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.ListCreditLinesResponse](../../models/operations/listcreditlinesresponse.md)>**


## requestElligibilityBorrower


Ask for the eligibility of a borrower.


### Example Usage

```typescript
import { Defacto } from "defacto";
import { APIBorrowerEligibilityIdentifierType } from "defacto/dist/sdk/models/shared";

(async() => {
  const sdk = new Defacto({
    security: {
      bearer: "",
    },
  });

  const res = await sdk.eligibility.requestElligibilityBorrower({
    identifier: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [shared.APIBorrowerEligibility](../../models/shared/apiborrowereligibility.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.RequestElligibilityBorrowerResponse](../../models/operations/requestelligibilityborrowerresponse.md)>**


## requestElligibilityBuyer


Ask for the eligibility of a buyer.


### Example Usage

```typescript
import { Defacto } from "defacto";
import { APIBorrowerEligibilityIdentifierType } from "defacto/dist/sdk/models/shared";

(async() => {
  const sdk = new Defacto({
    security: {
      bearer: "",
    },
  });

  const res = await sdk.eligibility.requestElligibilityBuyer({
    identifier: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [shared.APIBorrowerEligibility](../../models/shared/apiborrowereligibility.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.RequestElligibilityBuyerResponse](../../models/operations/requestelligibilitybuyerresponse.md)>**


## requestElligibilityQuote

Ask for the eligibility of a quote.

### Example Usage

```typescript
import { Defacto } from "defacto";
import { APIQuoteEligibilityIdentifierType, BusinessIdentifierIdentifierType } from "defacto/dist/sdk/models/shared";

(async() => {
  const sdk = new Defacto({
    security: {
      bearer: "",
    },
  });

  const res = await sdk.eligibility.requestElligibilityQuote({
    amount: 367035,
    borrower: {
      identifier: "string",
    },
    buyer: {
      identifier: "string",
    },
    endDate: new Date("2023-12-08T04:18:59.213Z"),
    seller: {
      identifier: "string",
    },
    startDate: new Date("2021-11-17T15:27:10.874Z"),
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `request`                                                                | [shared.APIQuoteEligibility](../../models/shared/apiquoteeligibility.md) | :heavy_check_mark:                                                       | The request object to use for the request.                               |
| `config`                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)             | :heavy_minus_sign:                                                       | Available config options for making requests.                            |


### Response

**Promise<[operations.RequestElligibilityQuoteResponse](../../models/operations/requestelligibilityquoteresponse.md)>**


## requestElligibilitySeller


Ask for the eligibility of a seller.


### Example Usage

```typescript
import { Defacto } from "defacto";
import { APIBorrowerEligibilityIdentifierType } from "defacto/dist/sdk/models/shared";

(async() => {
  const sdk = new Defacto({
    security: {
      bearer: "",
    },
  });

  const res = await sdk.eligibility.requestElligibilitySeller({
    identifier: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [shared.APIBorrowerEligibility](../../models/shared/apiborrowereligibility.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.RequestElligibilitySellerResponse](../../models/operations/requestelligibilitysellerresponse.md)>**


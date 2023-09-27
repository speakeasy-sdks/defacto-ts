# Eligibility
(*eligibility*)

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
import { GetCreditLineRequest, GetCreditLineResponse } from "defacto/dist/sdk/models/operations";

const sdk = new Defacto({
  security: {
    bearer: "",
  },
});
const creditLineId: string = "tempore";
const at: Date = new Date("2022-01-14T19:13:42.009Z");

sdk.eligibility.getCreditLine(creditLineId, at).then((res: GetCreditLineResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { ListCreditLineResponse } from "defacto/dist/sdk/models/operations";

const sdk = new Defacto({
  security: {
    bearer: "",
  },
});

sdk.eligibility.listCreditLine().then((res: ListCreditLineResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { ListCreditLinesRequest, ListCreditLinesResponse } from "defacto/dist/sdk/models/operations";

const sdk = new Defacto({
  security: {
    bearer: "",
  },
});
const borrower: string[] = [
  "eum",
];
const cursor: string = "non";
const id: string[] = [
  "c969e9a3-efa7-47df-b14c-d66ae395efb9",
];
const pageSize: number = 725255;

sdk.eligibility.listCreditLines(borrower, cursor, id, pageSize).then((res: ListCreditLinesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { RequestElligibilityBorrowerResponse } from "defacto/dist/sdk/models/operations";
import { APIBorrowerEligibilityIdentifierType } from "defacto/dist/sdk/models/shared";

const sdk = new Defacto({
  security: {
    bearer: "",
  },
});

sdk.eligibility.requestElligibilityBorrower({
  identifier: "id",
  identifierType: APIBorrowerEligibilityIdentifierType.Kvk,
}).then((res: RequestElligibilityBorrowerResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { RequestElligibilityBuyerResponse } from "defacto/dist/sdk/models/operations";
import { APIBorrowerEligibilityIdentifierType } from "defacto/dist/sdk/models/shared";

const sdk = new Defacto({
  security: {
    bearer: "",
  },
});

sdk.eligibility.requestElligibilityBuyer({
  identifier: "deleniti",
  identifierType: APIBorrowerEligibilityIdentifierType.LessThanNilGreaterThan,
}).then((res: RequestElligibilityBuyerResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { RequestElligibilityQuoteResponse } from "defacto/dist/sdk/models/operations";
import { APIQuoteEligibilityBorrowerIdentifierType, BusinessIdentifierIdentifierType } from "defacto/dist/sdk/models/shared";

const sdk = new Defacto({
  security: {
    bearer: "",
  },
});

sdk.eligibility.requestElligibilityQuote({
  amount: 230533,
  borrower: {
    identifier: "deserunt",
    identifierType: APIQuoteEligibilityBorrowerIdentifierType.Nif,
  },
  buyer: {
    identifier: "vel",
    identifierType: BusinessIdentifierIdentifierType.Bsn,
  },
  endDate: new Date("2022-01-19T08:19:15.156Z"),
  seller: {
    identifier: "perferendis",
    identifierType: BusinessIdentifierIdentifierType.Cif,
  },
  startDate: new Date("2022-04-14T15:11:13.227Z"),
}).then((res: RequestElligibilityQuoteResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { RequestElligibilitySellerResponse } from "defacto/dist/sdk/models/operations";
import { APIBorrowerEligibilityIdentifierType } from "defacto/dist/sdk/models/shared";

const sdk = new Defacto({
  security: {
    bearer: "",
  },
});

sdk.eligibility.requestElligibilitySeller({
  identifier: "id",
  identifierType: APIBorrowerEligibilityIdentifierType.Name,
}).then((res: RequestElligibilitySellerResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [shared.APIBorrowerEligibility](../../models/shared/apiborrowereligibility.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.RequestElligibilitySellerResponse](../../models/operations/requestelligibilitysellerresponse.md)>**


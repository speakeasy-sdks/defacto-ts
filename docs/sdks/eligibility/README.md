# eligibility

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
const creditLineId: string = "ipsum";
const at: Date = new Date("2021-11-14T09:53:27.431Z");

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
  "excepturi",
];
const cursor: string = "pariatur";
const id: string[] = [
  "488e1e91-e450-4ad2-abd4-4269802d502a",
];
const pageSize: number = 569618;

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
  identifier: "tempora",
  identifierType: APIBorrowerEligibilityIdentifierType.HrNummer,
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
  identifier: "tempore",
  identifierType: APIBorrowerEligibilityIdentifierType.Name,
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
  amount: 962189,
  borrower: {
    identifier: "eum",
    identifierType: APIQuoteEligibilityBorrowerIdentifierType.VatNumber,
  },
  buyer: {
    identifier: "eligendi",
    identifierType: BusinessIdentifierIdentifierType.Kvk,
  },
  endDate: new Date("2022-05-29T21:42:45.399Z"),
  seller: {
    identifier: "necessitatibus",
    identifierType: BusinessIdentifierIdentifierType.Kvk,
  },
  startDate: new Date("2022-07-22T03:36:34.615Z"),
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
  identifier: "debitis",
  identifierType: APIBorrowerEligibilityIdentifierType.LessThanNilGreaterThan,
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


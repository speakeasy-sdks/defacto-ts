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
import { GetCreditLineResponse } from "defacto/dist/sdk/models/operations";

const sdk = new Defacto({
  security: {
    bearer: "",
  },
});

sdk.eligibility.getCreditLine("eos", new Date("2022-10-30T14:09:25.982Z")).then((res: GetCreditLineResponse) => {
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
import { ListCreditLinesResponse } from "defacto/dist/sdk/models/operations";

const sdk = new Defacto({
  security: {
    bearer: "",
  },
});

sdk.eligibility.listCreditLines([
  "quam",
  "dolor",
  "vero",
  "nostrum",
], "hic", [
  "9b90c289-09b3-4fe4-9a8d-9cbf48633323",
  "f9b77f3a-4100-4674-abf6-9280d1ba77a8",
  "9ebf737a-e420-43ce-9e6a-95d8a0d446ce",
  "2af7a73c-f3be-4453-b870-b326b5a73429",
], 807581).then((res: ListCreditLinesResponse) => {
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
  identifier: "pariatur",
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
  identifier: "dicta",
  identifierType: APIBorrowerEligibilityIdentifierType.HrNummer,
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
  amount: 517379,
  borrower: {
    identifier: "incidunt",
    identifierType: APIQuoteEligibilityBorrowerIdentifierType.Siren,
  },
  buyer: {
    identifier: "dolores",
    identifierType: BusinessIdentifierIdentifierType.HrNummer,
  },
  endDate: new Date("2022-03-17T21:02:01.759Z"),
  seller: {
    identifier: "quam",
    identifierType: BusinessIdentifierIdentifierType.Kvk,
  },
  startDate: new Date("2022-06-14T07:24:20.121Z"),
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
  identifier: "neque",
  identifierType: APIBorrowerEligibilityIdentifierType.Siren,
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


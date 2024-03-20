# Onboarding
(*onboarding*)

### Available Operations

* [deactivateBorrower](#deactivateborrower)
* [enrollBorrower](#enrollborrower)
* [listBorrowers](#listborrowers) - List all your borrowers
* [signBorrower](#signborrower) - Register the date a new borrower accepted our T&Cs

## deactivateBorrower

### Example Usage

```typescript
import { Defacto } from "defacto";
import { DeactivateBorrowerRequest } from "defacto/dist/sdk/models/operations";

async function run() {
  const sdk = new Defacto({
    security: {
      bearer: "<YOUR_API_KEY_HERE>",
    },
  });
const borrowerId: string = "<value>";

  const res = await sdk.onboarding.deactivateBorrower(borrowerId);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `borrowerId`                                                 | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.DeactivateBorrowerResponse](../../sdk/models/operations/deactivateborrowerresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## enrollBorrower

### Example Usage

```typescript
import { Defacto } from "defacto";
import { APIPostBorrowerIdentifierType } from "defacto/dist/sdk/models/shared";
import { RFCDate } from "defacto/dist/sdk/types";

async function run() {
  const sdk = new Defacto({
    security: {
      bearer: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.onboarding.enrollBorrower({
    address: {
      addressLine1: "16063 Crona Burgs",
      city: "Duncanport",
      country: "Antarctica (the territory South of 60 deg S)",
      postalCode: "01224",
    },
    directors: [
      {
        address: {
          country: "Niue",
        },
        birthPlace: {},
      },
    ],
    identifier: "<value>",
    metadata: {
      "key": "<value>",
    },
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                            | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `request`                                                            | [shared.APIPostBorrower](../../sdk/models/shared/apipostborrower.md) | :heavy_check_mark:                                                   | The request object to use for the request.                           |
| `config`                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)         | :heavy_minus_sign:                                                   | Available config options for making requests.                        |


### Response

**Promise<[operations.EnrollBorrowerResponse](../../sdk/models/operations/enrollborrowerresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listBorrowers

List all your borrowers

### Example Usage

```typescript
import { Defacto } from "defacto";
import { ListBorrowersRequest } from "defacto/dist/sdk/models/operations";

async function run() {
  const sdk = new Defacto({
    security: {
      bearer: "<YOUR_API_KEY_HERE>",
    },
  });
const borrowerId: string[] = [
  "ea2a2e84-a3b5-41bb-9e07-36c532ce23cc",
];
const borrowerIdentifier: string = "<value>";
const cursor: string = "<value>";
const pageSize: number = 667100;

  const res = await sdk.onboarding.listBorrowers(borrowerId, borrowerIdentifier, cursor, pageSize);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                      | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `borrowerId`                                                   | *string*[]                                                     | :heavy_minus_sign:                                             | UUID(s) of the borrower(s) in Defacto API.                     |
| `borrowerIdentifier`                                           | *string*                                                       | :heavy_minus_sign:                                             | Legal identifier of the business, such as its SIREN in France. |
| `cursor`                                                       | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `pageSize`                                                     | *number*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `config`                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)   | :heavy_minus_sign:                                             | Available config options for making requests.                  |


### Response

**Promise<[operations.ListBorrowersResponse](../../sdk/models/operations/listborrowersresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## signBorrower

Register the date a new borrower accepted our T&Cs

### Example Usage

```typescript
import { Defacto } from "defacto";
import { SignBorrowerRequest } from "defacto/dist/sdk/models/operations";
import { SignedInput } from "defacto/dist/sdk/models/shared";

async function run() {
  const sdk = new Defacto({
    security: {
      bearer: "<YOUR_API_KEY_HERE>",
    },
  });
const borrowerId: string = "<value>";
const signedInput: SignedInput = {
  signedAt: new Date("2022-05-26T08:33:07.925Z"),
};

  const res = await sdk.onboarding.signBorrower(borrowerId, signedInput);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `borrowerId`                                                 | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `signedInput`                                                | [shared.SignedInput](../../sdk/models/shared/signedinput.md) | :heavy_minus_sign:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.SignBorrowerResponse](../../sdk/models/operations/signborrowerresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

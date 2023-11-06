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

(async() => {
  const sdk = new Defacto({
    security: {
      bearer: "",
    },
  });
const borrowerId: string = "string";

  const res = await sdk.onboarding.deactivateBorrower(borrowerId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `borrowerId`                                                 | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.DeactivateBorrowerResponse](../../models/operations/deactivateborrowerresponse.md)>**


## enrollBorrower

### Example Usage

```typescript
import { Defacto } from "defacto";
import { APIPostBorrowerIdentifierType } from "defacto/dist/sdk/models/shared";
import { RFCDate } from "defacto/dist/sdk/types";

(async() => {
  const sdk = new Defacto({
    security: {
      bearer: "",
    },
  });

  const res = await sdk.onboarding.enrollBorrower({
    address: {
      addressLine1: "string",
      city: "North Layla",
      country: "Anguilla",
      postalCode: "39105-2401",
    },
    directors: [
      {
        address: {
          country: "Azerbaijan",
        },
        birthPlace: {},
      },
    ],
    identifier: "string",
    metadata: {
      "key": "string",
    },
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                        | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `request`                                                        | [shared.APIPostBorrower](../../models/shared/apipostborrower.md) | :heavy_check_mark:                                               | The request object to use for the request.                       |
| `config`                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)     | :heavy_minus_sign:                                               | Available config options for making requests.                    |


### Response

**Promise<[operations.EnrollBorrowerResponse](../../models/operations/enrollborrowerresponse.md)>**


## listBorrowers

List all your borrowers

### Example Usage

```typescript
import { Defacto } from "defacto";
import { ListBorrowersRequest } from "defacto/dist/sdk/models/operations";

(async() => {
  const sdk = new Defacto({
    security: {
      bearer: "",
    },
  });
const borrowerId: string[] = [
  "ea2a2e84-a3b5-41bb-9e07-36c532ce23cc",
];
const borrowerIdentifier: string = "string";
const cursor: string = "string";
const pageSize: number = 667100;

  const res = await sdk.onboarding.listBorrowers(borrowerId, borrowerIdentifier, cursor, pageSize);


  if (res.statusCode == 200) {
    // handle response
  }
})();
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

**Promise<[operations.ListBorrowersResponse](../../models/operations/listborrowersresponse.md)>**


## signBorrower

Register the date a new borrower accepted our T&Cs

### Example Usage

```typescript
import { Defacto } from "defacto";
import { SignBorrowerRequest } from "defacto/dist/sdk/models/operations";
import { SignedInput } from "defacto/dist/sdk/models/shared";

(async() => {
  const sdk = new Defacto({
    security: {
      bearer: "",
    },
  });
const borrowerId: string = "string";
const signedInput: SignedInput = {
  signedAt: new Date("2021-05-26T05:22:09.176Z"),
};

  const res = await sdk.onboarding.signBorrower(borrowerId, signedInput);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `borrowerId`                                                 | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `signedInput`                                                | [shared.SignedInput](../../models/shared/signedinput.md)     | :heavy_minus_sign:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.SignBorrowerResponse](../../models/operations/signborrowerresponse.md)>**


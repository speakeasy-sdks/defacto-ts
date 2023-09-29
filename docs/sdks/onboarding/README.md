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
import { DeactivateBorrowerRequest, DeactivateBorrowerResponse } from "defacto/dist/sdk/models/operations";

const sdk = new Defacto({
  security: {
    bearer: "",
  },
});
const borrowerId: string = "Factors";

sdk.onboarding.deactivateBorrower(borrowerId).then((res: DeactivateBorrowerResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { EnrollBorrowerResponse } from "defacto/dist/sdk/models/operations";
import { APIPostBorrowerIdentifierType } from "defacto/dist/sdk/models/shared";
import { RFCDate } from "defacto/dist/sdk/types";

const sdk = new Defacto({
  security: {
    bearer: "",
  },
});

sdk.onboarding.enrollBorrower({
  accountNumber: "Southeast",
  address: {
    addressLine1: "National",
    addressLine2: "Modern Northeast",
    city: "South Macie",
    country: "Singapore",
    postalCode: "40033-0616",
    state: "female Gender neural",
  },
  directors: [
    {
      address: {
        addressLine1: "male strategy orchestration",
        addressLine2: "withdrawal deserted",
        city: "South Lorenz",
        country: "Papua New Guinea",
        postalCode: "35268-4020",
        state: "solution Androgynous",
      },
      birthDate: new RFCDate("2022-03-29"),
      birthPlace: {
        city: "Kokomo",
        country: "Antarctica (the territory South of 60 deg S)",
      },
      businessEmail: "Missouri.Williamson4@gmail.com",
      businessPhoneNumber: "Northwest Missouri Berkshire",
      firstName: "Lonie",
      lastName: "Effertz",
      nationality: "beyond over Architect",
      title: "Cis sensor monetize",
    },
  ],
  identifier: "Rap South online",
  identifierType: APIPostBorrowerIdentifierType.LessThanNilGreaterThan,
  legalForm: "composite siemens",
  metadata: {
    "dignissimos": "man",
  },
  name: "Sausages",
  preferredLanguage: "renounce",
  signedAt: new Date("2022-10-02T22:52:49.029Z"),
  vatNumber: "Northwest Oriental Account",
  waitForReady: false,
}).then((res: EnrollBorrowerResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { ListBorrowersRequest, ListBorrowersResponse } from "defacto/dist/sdk/models/operations";

const sdk = new Defacto({
  security: {
    bearer: "",
  },
});
const borrowerId: string[] = [
  "ea2a2e84-a3b5-41bb-9e07-36c532ce23cc",
];
const borrowerIdentifier: string = "Assistant";
const cursor: string = "orchid";
const pageSize: number = 788273;

sdk.onboarding.listBorrowers(borrowerId, borrowerIdentifier, cursor, pageSize).then((res: ListBorrowersResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { SignBorrowerRequest, SignBorrowerResponse } from "defacto/dist/sdk/models/operations";
import { SignedInput } from "defacto/dist/sdk/models/shared";

const sdk = new Defacto({
  security: {
    bearer: "",
  },
});
const borrowerId: string = "Alaska";
const signedInput: SignedInput = {
  signedAt: new Date("2023-02-10T21:07:04.855Z"),
  waitForReady: false,
};

sdk.onboarding.signBorrower(borrowerId, signedInput).then((res: SignBorrowerResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `borrowerId`                                                 | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `signedInput`                                                | [shared.SignedInput](../../models/shared/signedinput.md)     | :heavy_minus_sign:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.SignBorrowerResponse](../../models/operations/signborrowerresponse.md)>**


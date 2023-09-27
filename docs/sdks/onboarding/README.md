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
const borrowerId: string = "sequi";

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
  accountNumber: "natus",
  address: {
    addressLine1: "impedit",
    addressLine2: "aut",
    city: "Germantown",
    country: "Switzerland",
    postalCode: "79947",
    state: "ducimus",
  },
  directors: [
    {
      address: {
        addressLine1: "alias",
        addressLine2: "officia",
        city: "West Hallie",
        country: "Burkina Faso",
        postalCode: "82145",
        state: "dicta",
      },
      birthDate: new RFCDate("2022-01-08"),
      birthPlace: {
        city: "South Sagestead",
        country: "Virgin Islands, British",
      },
      businessEmail: "Victor.Schamberger77@yahoo.com",
      businessPhoneNumber: "corporis",
      firstName: "Estel",
      lastName: "Jacobi",
      nationality: "inventore",
      title: "Mrs.",
    },
  ],
  identifier: "ea",
  identifierType: APIPostBorrowerIdentifierType.BelgiumRegistrationNumber,
  legalForm: "consectetur",
  metadata: {
    "recusandae": "aspernatur",
  },
  name: "Shirley Wilderman Jr.",
  preferredLanguage: "deleniti",
  signedAt: new Date("2022-02-01T11:35:02.584Z"),
  vatNumber: "fugit",
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
  "e141aac3-66c8-4dd6-b144-2907474778a7",
];
const borrowerIdentifier: string = "quidem";
const cursor: string = "fugiat";
const pageSize: number = 283519;

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
const borrowerId: string = "eum";
const signedInput: SignedInput = {
  signedAt: new Date("2022-03-05T04:36:55.913Z"),
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


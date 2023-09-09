# onboarding

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
const borrowerId: string = "quas";

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
  accountNumber: "itaque",
  address: {
    addressLine1: "consequatur",
    addressLine2: "est",
    city: "San Francisco",
    country: "Western Sahara",
    postalCode: "75105",
    state: "odio",
  },
  directors: [
    {
      address: {
        addressLine1: "occaecati",
        addressLine2: "voluptatibus",
        city: "Terrystead",
        country: "Greenland",
        postalCode: "94289",
        state: "dignissimos",
      },
      birthDate: new RFCDate("2020-11-08"),
      birthPlace: {
        city: "Kuhicfurt",
        country: "Pitcairn Islands",
      },
      businessEmail: "Jessica_Greenholt19@hotmail.com",
      businessPhoneNumber: "natus",
      firstName: "Oma",
      lastName: "Ankunding",
      nationality: "voluptatibus",
      title: "Mrs.",
    },
  ],
  identifier: "nulla",
  identifierType: APIPostBorrowerIdentifierType.Siren,
  legalForm: "porro",
  metadata: {
    "maiores": "doloribus",
  },
  name: "Miss Vicky Kuphal",
  preferredLanguage: "ipsam",
  signedAt: new Date("2022-11-12T00:45:12.094Z"),
  vatNumber: "vel",
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
  "d436813f-16d9-4f5f-8e6c-556146c3e250",
];
const borrowerIdentifier: string = "a";
const cursor: string = "libero";
const pageSize: number = 13948;

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
const borrowerId: string = "aut";
const signedInput: SignedInput = {
  signedAt: new Date("2021-06-17T11:25:30.782Z"),
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


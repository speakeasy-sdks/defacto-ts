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
import { DeactivateBorrowerResponse } from "defacto/dist/sdk/models/operations";

const sdk = new Defacto({
  security: {
    bearer: "YOUR_API_KEY_HERE",
  },
});

sdk.onboarding.deactivateBorrower({
  borrowerId: "repellendus",
}).then((res: DeactivateBorrowerResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## enrollBorrower

### Example Usage

```typescript
import { Defacto } from "defacto";
import { EnrollBorrowerResponse } from "defacto/dist/sdk/models/operations";
import { APIPostBorrowerIdentifierTypeEnum } from "defacto/dist/sdk/models/shared";
import { RFCDate } from "defacto/dist/sdk/types";

const sdk = new Defacto({
  security: {
    bearer: "YOUR_API_KEY_HERE",
  },
});

sdk.onboarding.enrollBorrower({
  accountNumber: "delectus",
  address: {
    addressLine1: "voluptates",
    addressLine2: "perferendis",
    city: "Predovicport",
    country: "Slovenia",
    postalCode: "56307-9054",
    state: "asperiores",
  },
  directors: [
    {
      address: {
        addressLine1: "suscipit",
        addressLine2: "quidem",
        city: "Boca Raton",
        country: "Kiribati",
        postalCode: "84568",
        state: "officiis",
      },
      birthDate: new RFCDate("2021-02-22"),
      birthPlace: {
        city: "East Gunnar",
        country: "Wallis and Futuna",
      },
      businessEmail: "Savanah.Mueller@yahoo.com",
      businessPhoneNumber: "repudiandae",
      firstName: "Karen",
      lastName: "Littel",
      nationality: "sunt",
      title: "Dr.",
    },
    {
      address: {
        addressLine1: "dolorum",
        addressLine2: "repellendus",
        city: "Fort Alphonso",
        country: "Turks and Caicos Islands",
        postalCode: "01133",
        state: "velit",
      },
      birthDate: new RFCDate("2021-04-24"),
      birthPlace: {
        city: "Fort Carole",
        country: "Moldova",
      },
      businessEmail: "Laverne90@hotmail.com",
      businessPhoneNumber: "occaecati",
      firstName: "Carolanne",
      lastName: "Considine",
      nationality: "id",
      title: "Mrs.",
    },
    {
      address: {
        addressLine1: "reprehenderit",
        addressLine2: "error",
        city: "West Maurineside",
        country: "Ecuador",
        postalCode: "04050-4917",
        state: "iure",
      },
      birthDate: new RFCDate("2022-06-09"),
      birthPlace: {
        city: "Raustad",
        country: "Macedonia",
      },
      businessEmail: "Emmett36@gmail.com",
      businessPhoneNumber: "perspiciatis",
      firstName: "Janie",
      lastName: "O'Conner",
      nationality: "voluptas",
      title: "Mr.",
    },
  ],
  identifier: "maiores",
  identifierType: APIPostBorrowerIdentifierTypeEnum.LessThanNilGreaterThan,
  legalForm: "dolores",
  metadata: {
    "minima": "dolore",
    "dolorum": "nesciunt",
    "quae": "recusandae",
  },
  name: "Calvin Kreiger",
  preferredLanguage: "culpa",
  signedAt: new Date("2022-02-09T21:52:52.867Z"),
  vatNumber: "laudantium",
  waitForReady: false,
}).then((res: EnrollBorrowerResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## listBorrowers

List all your borrowers

### Example Usage

```typescript
import { Defacto } from "defacto";
import { ListBorrowersResponse } from "defacto/dist/sdk/models/operations";

const sdk = new Defacto({
  security: {
    bearer: "YOUR_API_KEY_HERE",
  },
});

sdk.onboarding.listBorrowers({
  borrowerId: [
    "5e7956f9-251a-45a9-9a66-0ff57bfaad4f",
    "9efc1b45-12c1-4032-a48d-c2f615199ebf",
  ],
  borrowerIdentifier: "illum",
  cursor: "eaque",
  pageSize: 935833,
}).then((res: ListBorrowersResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## signBorrower

Register the date a new borrower accepted our T&Cs

### Example Usage

```typescript
import { Defacto } from "defacto";
import { SignBorrowerResponse } from "defacto/dist/sdk/models/operations";

const sdk = new Defacto({
  security: {
    bearer: "YOUR_API_KEY_HERE",
  },
});

sdk.onboarding.signBorrower({
  signedInput: {
    signedAt: new Date("2021-01-13T02:22:20.450Z"),
    waitForReady: false,
  },
  borrowerId: "debitis",
}).then((res: SignBorrowerResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

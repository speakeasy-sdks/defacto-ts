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
    bearer: "",
  },
});

sdk.onboarding.deactivateBorrower("debitis").then((res: DeactivateBorrowerResponse) => {
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
import { APIPostBorrowerIdentifierType } from "defacto/dist/sdk/models/shared";
import { RFCDate } from "defacto/dist/sdk/types";

const sdk = new Defacto({
  security: {
    bearer: "",
  },
});

sdk.onboarding.enrollBorrower({
  accountNumber: "neque",
  address: {
    addressLine1: "dolorum",
    addressLine2: "nostrum",
    city: "Padbergstad",
    country: "Tanzania",
    postalCode: "51280",
    state: "culpa",
  },
  directors: [
    {
      address: {
        addressLine1: "magnam",
        addressLine2: "consequatur",
        city: "Gagetown",
        country: "Malawi",
        postalCode: "93054-1043",
        state: "saepe",
      },
      birthDate: new RFCDate("2022-12-25"),
      birthPlace: {
        city: "Fort Cornelius",
        country: "Papua New Guinea",
      },
      businessEmail: "Baby69@gmail.com",
      businessPhoneNumber: "atque",
      firstName: "Margarett",
      lastName: "Reilly",
      nationality: "tenetur",
      title: "Mrs.",
    },
    {
      address: {
        addressLine1: "alias",
        addressLine2: "amet",
        city: "Klockostead",
        country: "Virgin Islands, British",
        postalCode: "89906-6486",
        state: "praesentium",
      },
      birthDate: new RFCDate("2022-05-02"),
      birthPlace: {
        city: "Port Tevinland",
        country: "Mali",
      },
      businessEmail: "Yvette_Leannon@yahoo.com",
      businessPhoneNumber: "maxime",
      firstName: "Aubrey",
      lastName: "Koepp",
      nationality: "amet",
      title: "Dr.",
    },
    {
      address: {
        addressLine1: "ea",
        addressLine2: "atque",
        city: "Torphyside",
        country: "Tanzania",
        postalCode: "31495-8653",
        state: "repudiandae",
      },
      birthDate: new RFCDate("2021-12-01"),
      birthPlace: {
        city: "Fort Marinahaven",
        country: "Finland",
      },
      businessEmail: "Alphonso3@hotmail.com",
      businessPhoneNumber: "beatae",
      firstName: "Chandler",
      lastName: "Halvorson",
      nationality: "laboriosam",
      title: "Mrs.",
    },
  ],
  identifier: "a",
  identifierType: APIPostBorrowerIdentifierType.Bsn,
  legalForm: "magnam",
  metadata: {
    "consequuntur": "occaecati",
    "officiis": "perspiciatis",
    "in": "adipisci",
    "eveniet": "occaecati",
  },
  name: "Beverly Olson",
  preferredLanguage: "error",
  signedAt: new Date("2022-08-22T02:57:43.536Z"),
  vatNumber: "quidem",
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
    bearer: "",
  },
});

sdk.onboarding.listBorrowers([
  "3e060807-e2b6-4e3a-b884-5f0597a60ff2",
  "a54a31e9-4764-4a3e-865e-7956f9251a5a",
  "9da660ff-57bf-4aad-8f9e-fc1b4512c103",
  "2648dc2f-6151-499e-bfd0-e9fe6c632ca3",
], "animi", "necessitatibus", 862063).then((res: ListBorrowersResponse) => {
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
    bearer: "",
  },
});

sdk.onboarding.signBorrower("consequatur", {
  signedAt: new Date("2022-11-29T01:33:31.768Z"),
  waitForReady: false,
}).then((res: SignBorrowerResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

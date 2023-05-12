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
    bearer: "YOUR_API_KEY_HERE",
  },
});

sdk.eligibility.getCreditLine({
  at: new Date("2022-10-15T11:27:32.342Z"),
  creditLineId: "dolorem",
}).then((res: GetCreditLineResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## listCreditLine

Get the credit line associated with your account

### Example Usage

```typescript
import { Defacto } from "defacto";
import { ListCreditLineResponse } from "defacto/dist/sdk/models/operations";

const sdk = new Defacto({
  security: {
    bearer: "YOUR_API_KEY_HERE",
  },
});

sdk.eligibility.listCreditLine().then((res: ListCreditLineResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## listCreditLines

List all the credit lines that have been opened for your company. By default, this includes all credit lines that have been created for borrowers you registered, as well as the credit line associated with your account.

### Example Usage

```typescript
import { Defacto } from "defacto";
import { ListCreditLinesResponse } from "defacto/dist/sdk/models/operations";

const sdk = new Defacto({
  security: {
    bearer: "YOUR_API_KEY_HERE",
  },
});

sdk.eligibility.listCreditLines({
  borrower: [
    "qui",
  ],
  cursor: "ipsum",
  id: [
    "9b77f3a4-1006-474e-bf69-280d1ba77a89",
    "ebf737ae-4203-4ce5-a6a9-5d8a0d446ce2",
    "af7a73cf-3be4-453f-870b-326b5a73429c",
    "db1a8422-bb67-49d2-b227-15bf0cbb1e31",
  ],
  pageSize: 749255,
}).then((res: ListCreditLinesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## requestElligibilityBorrower


Ask for the eligibility of a borrower.


### Example Usage

```typescript
import { Defacto } from "defacto";
import { RequestElligibilityBorrowerResponse } from "defacto/dist/sdk/models/operations";
import { APIBorrowerEligibilityIdentifierTypeEnum } from "defacto/dist/sdk/models/shared";

const sdk = new Defacto({
  security: {
    bearer: "YOUR_API_KEY_HERE",
  },
});

sdk.eligibility.requestElligibilityBorrower({
  identifier: "quos",
  identifierType: APIBorrowerEligibilityIdentifierTypeEnum.HrNummer,
}).then((res: RequestElligibilityBorrowerResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## requestElligibilityBuyer


Ask for the eligibility of a buyer.


### Example Usage

```typescript
import { Defacto } from "defacto";
import { RequestElligibilityBuyerResponse } from "defacto/dist/sdk/models/operations";
import { APIBorrowerEligibilityIdentifierTypeEnum } from "defacto/dist/sdk/models/shared";

const sdk = new Defacto({
  security: {
    bearer: "YOUR_API_KEY_HERE",
  },
});

sdk.eligibility.requestElligibilityBuyer({
  identifier: "cupiditate",
  identifierType: APIBorrowerEligibilityIdentifierTypeEnum.Siret,
}).then((res: RequestElligibilityBuyerResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## requestElligibilityQuote

Ask for the eligibility of a quote.

### Example Usage

```typescript
import { Defacto } from "defacto";
import { RequestElligibilityQuoteResponse } from "defacto/dist/sdk/models/operations";
import {
  APIQuoteEligibilityBorrowerIdentifierTypeEnum,
  BusinessIdentifierIdentifierTypeEnum,
} from "defacto/dist/sdk/models/shared";

const sdk = new Defacto({
  security: {
    bearer: "YOUR_API_KEY_HERE",
  },
});

sdk.eligibility.requestElligibilityQuote({
  amount: 961937,
  borrower: {
    identifier: "dolorem",
    identifierType: APIQuoteEligibilityBorrowerIdentifierTypeEnum.Name,
  },
  buyer: {
    identifier: "labore",
    identifierType: BusinessIdentifierIdentifierTypeEnum.VatNumber,
  },
  endDate: new Date("2022-10-19T18:50:59.428Z"),
  seller: {
    identifier: "quae",
    identifierType: BusinessIdentifierIdentifierTypeEnum.Siret,
  },
  startDate: new Date("2021-02-21T10:38:46.777Z"),
}).then((res: RequestElligibilityQuoteResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## requestElligibilitySeller


Ask for the eligibility of a seller.


### Example Usage

```typescript
import { Defacto } from "defacto";
import { RequestElligibilitySellerResponse } from "defacto/dist/sdk/models/operations";
import { APIBorrowerEligibilityIdentifierTypeEnum } from "defacto/dist/sdk/models/shared";

const sdk = new Defacto({
  security: {
    bearer: "YOUR_API_KEY_HERE",
  },
});

sdk.eligibility.requestElligibilitySeller({
  identifier: "consequatur",
  identifierType: APIBorrowerEligibilityIdentifierTypeEnum.HrNummer,
}).then((res: RequestElligibilitySellerResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

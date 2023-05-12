# testing

### Available Operations

* [getSandboxBusinessGenerator](#getsandboxbusinessgenerator) - 
Generate a fake business for you to use in your test.
Important, this endpoint does not create the business but simply return the payload.
Call `/borrowers` to register this business and generate loan for it
Warning: these invoices and their IBANs will not work in production.

* [getSandboxIbanGenerator](#getsandboxibangenerator) - 
Generate a new IBAN that will produce a given scenario on the sandbox, for example a rejected loan.
Each IBAN can be used as the account of a single counterparty or borrower (a buyer or seller of yours).
So, if you want to test the API for several of your counterparties, you will have to generate several of them.
The BIC associated to these IBANs is FK2FACTO.
Also, if you want to test another scenario on a given business, create a new IBAN and use it in the to_account field of the next invoice and loan that you create for this counterparty.
For more information on the scenarios of the sandbox, please refer to the Testing Multiple Scenarios & Errors section.
Warning: these IBANs will not work in production.

* [hello](#hello) - Make a first call to this endpoint to test your connection to Defacto API with your API Key
* [postSandboxBusinessEligible](#postsandboxbusinesseligible) - 
This endpoint enables you to configure the eligibility of a business.
Pass NOT_ELIGIBLE to make a business non-eligible.
Then, you'll be able to test how the Defacto API behaves when requesting a loan for a non-eligible business.
You can test multiple scenarios:
(1) when the business is the borrower or
(2) when the business is on the invoice to finance but is not the borrower.

* [postSandboxInvoiceGenerator](#postsandboxinvoicegenerator) - 
!!! The documentation website is not able to display the full response of this endpoint. The use of the curl command is recommended. !!!

Generate a fake invoice that will produce a given scenario on the sandbox, for example a rejected loan.
The generation will not add the invoice to the list of your invoices. You must do this via API.
To achieve this, you can copy the invoice_creation_payload into the payload of the invoice creation API.
If you want to test another scenario on a given business, create another fake invoice.
For more information on the scenarios of the sandbox, please refer to the Testing your integration section.
Warning: these invoices and their IBANs will not work in production.


## getSandboxBusinessGenerator


Generate a fake business for you to use in your test.
Important, this endpoint does not create the business but simply return the payload.
Call `/borrowers` to register this business and generate loan for it
Warning: these invoices and their IBANs will not work in production.


### Example Usage

```typescript
import { Defacto } from "defacto";
import { GetSandboxBusinessGeneratorCountryEnum, GetSandboxBusinessGeneratorResponse } from "defacto/dist/sdk/models/operations";

const sdk = new Defacto({
  security: {
    bearer: "YOUR_API_KEY_HERE",
  },
});

sdk.testing.getSandboxBusinessGenerator({
  country: GetSandboxBusinessGeneratorCountryEnum.Deu,
  isBorrower: false,
}).then((res: GetSandboxBusinessGeneratorResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getSandboxIbanGenerator


Generate a new IBAN that will produce a given scenario on the sandbox, for example a rejected loan.
Each IBAN can be used as the account of a single counterparty or borrower (a buyer or seller of yours).
So, if you want to test the API for several of your counterparties, you will have to generate several of them.
The BIC associated to these IBANs is FK2FACTO.
Also, if you want to test another scenario on a given business, create a new IBAN and use it in the to_account field of the next invoice and loan that you create for this counterparty.
For more information on the scenarios of the sandbox, please refer to the Testing Multiple Scenarios & Errors section.
Warning: these IBANs will not work in production.


### Example Usage

```typescript
import { Defacto } from "defacto";
import {
  GetSandboxIbanGeneratorCountryEnum,
  GetSandboxIbanGeneratorResponse,
  GetSandboxIbanGeneratorScenarioEnum,
} from "defacto/dist/sdk/models/operations";

const sdk = new Defacto({
  security: {
    bearer: "YOUR_API_KEY_HERE",
  },
});

sdk.testing.getSandboxIbanGenerator({
  country: GetSandboxIbanGeneratorCountryEnum.Esp,
  scenario: GetSandboxIbanGeneratorScenarioEnum.Reject,
}).then((res: GetSandboxIbanGeneratorResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## hello

Make a first call to this endpoint to test your connection to Defacto API with your API Key

### Example Usage

```typescript
import { Defacto } from "defacto";
import { HelloResponse } from "defacto/dist/sdk/models/operations";

const sdk = new Defacto({
  security: {
    bearer: "YOUR_API_KEY_HERE",
  },
});

sdk.testing.hello().then((res: HelloResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## postSandboxBusinessEligible


This endpoint enables you to configure the eligibility of a business.
Pass NOT_ELIGIBLE to make a business non-eligible.
Then, you'll be able to test how the Defacto API behaves when requesting a loan for a non-eligible business.
You can test multiple scenarios:
(1) when the business is the borrower or
(2) when the business is on the invoice to finance but is not the borrower.


### Example Usage

```typescript
import { Defacto } from "defacto";
import { PostSandboxBusinessEligibleResponse } from "defacto/dist/sdk/models/operations";
import { BusinessEligibileParamsScenarioEnum, BusinessIdentifierIdentifierTypeEnum } from "defacto/dist/sdk/models/shared";

const sdk = new Defacto({
  security: {
    bearer: "YOUR_API_KEY_HERE",
  },
});

sdk.testing.postSandboxBusinessEligible({
  businessIdentifier: {
    identifier: "suscipit",
    identifierType: BusinessIdentifierIdentifierTypeEnum.Nif,
  },
  scenario: BusinessEligibileParamsScenarioEnum.Ok,
}).then((res: PostSandboxBusinessEligibleResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## postSandboxInvoiceGenerator


!!! The documentation website is not able to display the full response of this endpoint. The use of the curl command is recommended. !!!

Generate a fake invoice that will produce a given scenario on the sandbox, for example a rejected loan.
The generation will not add the invoice to the list of your invoices. You must do this via API.
To achieve this, you can copy the invoice_creation_payload into the payload of the invoice creation API.
If you want to test another scenario on a given business, create another fake invoice.
For more information on the scenarios of the sandbox, please refer to the Testing your integration section.
Warning: these invoices and their IBANs will not work in production.


### Example Usage

```typescript
import { Defacto } from "defacto";
import { PostSandboxInvoiceGeneratorResponse } from "defacto/dist/sdk/models/operations";
import {
  GenerateInvoiceRequestBuyerIdentifierTypeEnum,
  GenerateInvoiceRequestCountryEnum,
  GenerateInvoiceRequestScenarioEnum,
  GenerateInvoiceRequestSellerIdentifierTypeEnum,
} from "defacto/dist/sdk/models/shared";

const sdk = new Defacto({
  security: {
    bearer: "YOUR_API_KEY_HERE",
  },
});

sdk.testing.postSandboxInvoiceGenerator({
  buyer: {
    identifier: "eum",
    identifierType: GenerateInvoiceRequestBuyerIdentifierTypeEnum.Nif,
    name: "Alfonso Bernier",
    vatNumber: "voluptates",
  },
  country: GenerateInvoiceRequestCountryEnum.Deu,
  scenario: GenerateInvoiceRequestScenarioEnum.Reject,
  seller: {
    identifier: "libero",
    identifierType: GenerateInvoiceRequestSellerIdentifierTypeEnum.Name,
    name: "Bill Brown",
    vatNumber: "quo",
  },
}).then((res: PostSandboxInvoiceGeneratorResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

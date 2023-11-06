# Testing
(*testing*)

### Available Operations

* [generateBusiness](#generatebusiness) - 
Generate a fake business for you to use in your test.
Important, this endpoint does not create the business but simply return the payload.
Call `/borrowers` to register this business and generate loan for it
Warning: these invoices and their IBANs will not work in production.

* [generateIban](#generateiban) - 
Generate a new IBAN that will produce a given scenario on the sandbox, for example a rejected loan.
Each IBAN can be used as the account of a single counterparty or borrower (a buyer or seller of yours).
So, if you want to test the API for several of your counterparties, you will have to generate several of them.
The BIC associated to these IBANs is FK2FACTO.
Also, if you want to test another scenario on a given business, create a new IBAN and use it in the to_account field of the next invoice and loan that you create for this counterparty.
For more information on the scenarios of the sandbox, please refer to the Testing Multiple Scenarios & Errors section.
Warning: these IBANs will not work in production.

* [generateInvoice](#generateinvoice) - 
!!! The documentation website is not able to display the full response of this endpoint. The use of the curl command is recommended. !!!

Generate a fake invoice that will produce a given scenario on the sandbox, for example a rejected loan.
The generation will not add the invoice to the list of your invoices. You must do this via API.
To achieve this, you can copy the invoice_creation_payload into the payload of the invoice creation API.
If you want to test another scenario on a given business, create another fake invoice.
For more information on the scenarios of the sandbox, please refer to the Testing your integration section.
Warning: these invoices and their IBANs will not work in production.

* [hello](#hello) - Make a first call to this endpoint to test your connection to Defacto API with your API Key
* [setBusinessEligible](#setbusinesseligible) - 
This endpoint enables you to configure the eligibility of a business.
Pass NOT_ELIGIBLE to make a business non-eligible.
Then, you'll be able to test how the Defacto API behaves when requesting a loan for a non-eligible business.
You can test multiple scenarios:
(1) when the business is the borrower or
(2) when the business is on the invoice to finance but is not the borrower.


## generateBusiness


Generate a fake business for you to use in your test.
Important, this endpoint does not create the business but simply return the payload.
Call `/borrowers` to register this business and generate loan for it
Warning: these invoices and their IBANs will not work in production.


### Example Usage

```typescript
import { Defacto } from "defacto";
import { GenerateBusinessCountry, GenerateBusinessRequest } from "defacto/dist/sdk/models/operations";

(async() => {
  const sdk = new Defacto({
    security: {
      bearer: "",
    },
  });
const country: GenerateBusinessCountry = GenerateBusinessCountry.Deu;
const isBorrower: boolean = false;

  const res = await sdk.testing.generateBusiness(country, isBorrower);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `country`                                                                                | [operations.GenerateBusinessCountry](../../models/operations/generatebusinesscountry.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `isBorrower`                                                                             | *boolean*                                                                                | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.GenerateBusinessResponse](../../models/operations/generatebusinessresponse.md)>**


## generateIban


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
import { GenerateIbanCountry, GenerateIbanRequest, GenerateIbanScenario } from "defacto/dist/sdk/models/operations";

(async() => {
  const sdk = new Defacto({
    security: {
      bearer: "",
    },
  });
const country: GenerateIbanCountry = GenerateIbanCountry.Deu;
const scenario: GenerateIbanScenario = GenerateIbanScenario.Success;

  const res = await sdk.testing.generateIban(country, scenario);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `country`                                                                          | [operations.GenerateIbanCountry](../../models/operations/generateibancountry.md)   | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `scenario`                                                                         | [operations.GenerateIbanScenario](../../models/operations/generateibanscenario.md) | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.GenerateIbanResponse](../../models/operations/generateibanresponse.md)>**


## generateInvoice


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
import {
  GenerateInvoiceRequestBuyerIdentifierType,
  GenerateInvoiceRequestCountry,
  GenerateInvoiceRequestScenario,
  GenerateInvoiceRequestSellerIdentifierType,
} from "defacto/dist/sdk/models/shared";

(async() => {
  const sdk = new Defacto({
    security: {
      bearer: "",
    },
  });

  const res = await sdk.testing.generateInvoice({
    buyer: {},
    seller: {},
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [shared.GenerateInvoiceRequest](../../models/shared/generateinvoicerequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.GenerateInvoiceResponse](../../models/operations/generateinvoiceresponse.md)>**


## hello

Make a first call to this endpoint to test your connection to Defacto API with your API Key

### Example Usage

```typescript
import { Defacto } from "defacto";

(async() => {
  const sdk = new Defacto({
    security: {
      bearer: "",
    },
  });

  const res = await sdk.testing.hello();


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.HelloResponse](../../models/operations/helloresponse.md)>**


## setBusinessEligible


This endpoint enables you to configure the eligibility of a business.
Pass NOT_ELIGIBLE to make a business non-eligible.
Then, you'll be able to test how the Defacto API behaves when requesting a loan for a non-eligible business.
You can test multiple scenarios:
(1) when the business is the borrower or
(2) when the business is on the invoice to finance but is not the borrower.


### Example Usage

```typescript
import { Defacto } from "defacto";
import { BusinessEligibileParamsScenario, BusinessIdentifierIdentifierType } from "defacto/dist/sdk/models/shared";

(async() => {
  const sdk = new Defacto({
    security: {
      bearer: "",
    },
  });

  const res = await sdk.testing.setBusinessEligible({
    businessIdentifier: {
      identifier: "string",
    },
    scenario: BusinessEligibileParamsScenario.Ok,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [shared.BusinessEligibileParams](../../models/shared/businesseligibileparams.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.SetBusinessEligibleResponse](../../models/operations/setbusinesseligibleresponse.md)>**


<div align="center">
    <img src="https://github.com/speakeasy-sdks/defacto-ts/assets/6267663/08d572c0-4205-4400-b962-4dab1c9afee9" width="350px">
    <h1>Typescript SDK</h1>
   <p>Connect Defacto's API and offer your users seamless embedded lending solutions</p>
   <a href="[https://smartcar.com/docs/api/](https://developers.getdefacto.com/)"><img src="https://img.shields.io/static/v1?label=Docs&message=API Ref&color=000&style=for-the-badge" /></a>
   <a href="https://github.com/speakeasy-sdks/defacto-ts/actions"><img src="https://img.shields.io/github/actions/workflow/status/speakeasy-sdks/defacto-ts/speakeasy_sdk_generation.yml?style=for-the-badge" /></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge" /></a>
  <!-- <a href="https://github.com/speakeasy-sdks/defacto-ts/releases"><img src="https://img.shields.io/github/v/release/speakeasy-sdks/defacto-ts?sort=semver&style=for-the-badge" /></a> -->
</div>

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://github.com/speakeasy-sdks/defacto-ts
```

### Yarn

```bash
yarn add https://github.com/speakeasy-sdks/defacto-ts
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import { Defacto } from "defacto";
import { ListBillsStatus } from "defacto/dist/sdk/models/operations";

(async () => {
    const sdk = new Defacto({
        security: {
            bearer: "",
        },
    });

    const res = await sdk.billing.listBills({
        businessId: ["123e62b5-ef5d-43b3-825e-9f0f1d4ec684"],
        businessIdentifier: ["string"],
        status: [ListBillsStatus.SentToPayer],
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [billing](docs/sdks/billing/README.md)

* [listBills](docs/sdks/billing/README.md#listbills) - List your fees invoices (i.e: your Defacto bill) for the loans you performed on the platform. By default, this endpoint only returns your own bills, but you may request bills for your own specific borrowers (with a business identifier or ID) depending on your contract type.
* [sendBill](docs/sdks/billing/README.md#sendbill) - 
This endpoint enables you to notify Defacto when you sent the bill for the fees of the loans to your user.
A bill should be sent to the user only when its status is VALIDATED (see GET /bills endpoint).

It is very important to use this endpoint so that Defacto can proceed to a recollection process
that will be fair for our users.

This endpoint is useful only for partners who send the bill themselves.
By default the bills are sent the the payers of the fees by Defacto.
If you need to send them by yourself please get in touch with us.


### [businessData](docs/sdks/businessdata/README.md)

* [uploadAccounts](docs/sdks/businessdata/README.md#uploadaccounts) - 
Upload bank account balances into our platform to refine borrower credit
line allowance.
 
This endpoint doesn't support updates on data already uploaded.

* [uploadInvoices](docs/sdks/businessdata/README.md#uploadinvoices) - 
Upload business invoices into our platform to refine borrower credit
line allowance.

This endpoint doesn't support updates on data already uploaded.

* [uploadTransactions](docs/sdks/businessdata/README.md#uploadtransactions) - 
Upload bank account transactions into our platform to refine borrower
credit line allowance.
  
This endpoint doesn't support updates on data already uploaded.


### [eligibility](docs/sdks/eligibility/README.md)

* [getCreditLine](docs/sdks/eligibility/README.md#getcreditline) - Get credit line
* [listCreditLine](docs/sdks/eligibility/README.md#listcreditline) - Get the credit line associated with your account
* [listCreditLines](docs/sdks/eligibility/README.md#listcreditlines) - List all the credit lines that have been opened for your company. By default, this includes all credit lines that have been created for borrowers you registered, as well as the credit line associated with your account.
* [requestElligibilityBorrower](docs/sdks/eligibility/README.md#requestelligibilityborrower) - 
Ask for the eligibility of a borrower.

* [requestElligibilityBuyer](docs/sdks/eligibility/README.md#requestelligibilitybuyer) - 
Ask for the eligibility of a buyer.

* [requestElligibilityQuote](docs/sdks/eligibility/README.md#requestelligibilityquote) - Ask for the eligibility of a quote.
* [requestElligibilitySeller](docs/sdks/eligibility/README.md#requestelligibilityseller) - 
Ask for the eligibility of a seller.


### [invoice](docs/sdks/invoice/README.md)

* [create](docs/sdks/invoice/README.md#create) - 
Create an invoice.
- If you create an invoice that will need to be edited afterwards, create a draft invoice with the is_draft parameter. Otherwise set is_draft to false.
- This endpoint requires the base64-encoded value of the PDF of the invoice. You can for example use [base64guru](https://base64.guru/converter/encode/pdf).

* [delete](docs/sdks/invoice/README.md#delete) - Delete an invoice by id
* [get](docs/sdks/invoice/README.md#get) - Get an invoice by id
* [list](docs/sdks/invoice/README.md#list) - Get your invoices
* [submit](docs/sdks/invoice/README.md#submit) - 
Submit an invoice for validation by Defacto (with status TO_SUBMIT or TO_EDIT).
If some data is missing prior to validating the invoice, a 422 error will be returned with the list of the missing fields.

* [update](docs/sdks/invoice/README.md#update) - Updates an invoice (with status TO_SUBMIT or TO_EDIT only)
* [upload](docs/sdks/invoice/README.md#upload) - Create an invoice entity from the PDF of an invoice. Send the file within a formData. The endpoint will automatically extract the invoice information and create an invoice entity from them.

### [loan](docs/sdks/loan/README.md)

* [cancel](docs/sdks/loan/README.md#cancel) - Use this function to cancel a loan proposal. Available for LoanStatus.TO_VALIDATE,LoanStatus.VALIDATED and LoanStatus.SCHEDULED loans.
* [get](docs/sdks/loan/README.md#get) - Get a loan by id
* [getEvents](docs/sdks/loan/README.md#getevents) - Get the activity log of a loan.
* [list](docs/sdks/loan/README.md#list) - List loans
* [request](docs/sdks/loan/README.md#request) - 
Request a new loan. You can request a loan for only one invoice. At the moment, we don't support multiple-invoices financing.
- You can either request a loan for an existing invoice, in which case you should set invoice_ids.
- Or you can create the invoice and request a loan with a single call to this API.
- If you pass an invoice in invoices, the base64-encoded value of the PDF of the invoice is required under the document property. You can for example use base64guru.

* [update](docs/sdks/loan/README.md#update) - 
Updates a loan.
- When the loan is SUBMITTED or TO_VALIDATE, all the below fields can be updated.
- When the loan is VALIDATED or SCHEDULED, the references and to_repay_at fields can be updated.
- When the loan is TO_REPAY, only the to_repay_at change be changed. The earliest acceptable date being loan.earliest_to_repay_at.

This operation is not available when the loan is in another status.

* [validate](docs/sdks/loan/README.md#validate) - Use this function to accept a loan proposal. Available for LoanStatus.TO_VALIDATE loans only.

### [onboarding](docs/sdks/onboarding/README.md)

* [deactivateBorrower](docs/sdks/onboarding/README.md#deactivateborrower)
* [enrollBorrower](docs/sdks/onboarding/README.md#enrollborrower)
* [listBorrowers](docs/sdks/onboarding/README.md#listborrowers) - List all your borrowers
* [signBorrower](docs/sdks/onboarding/README.md#signborrower) - Register the date a new borrower accepted our T&Cs

### [payment](docs/sdks/payment/README.md)

* [list](docs/sdks/payment/README.md#list) - Get payments related to loans

### [testing](docs/sdks/testing/README.md)

* [generateBusiness](docs/sdks/testing/README.md#generatebusiness) - 
Generate a fake business for you to use in your test.
Important, this endpoint does not create the business but simply return the payload.
Call `/borrowers` to register this business and generate loan for it
Warning: these invoices and their IBANs will not work in production.

* [generateIban](docs/sdks/testing/README.md#generateiban) - 
Generate a new IBAN that will produce a given scenario on the sandbox, for example a rejected loan.
Each IBAN can be used as the account of a single counterparty or borrower (a buyer or seller of yours).
So, if you want to test the API for several of your counterparties, you will have to generate several of them.
The BIC associated to these IBANs is FK2FACTO.
Also, if you want to test another scenario on a given business, create a new IBAN and use it in the to_account field of the next invoice and loan that you create for this counterparty.
For more information on the scenarios of the sandbox, please refer to the Testing Multiple Scenarios & Errors section.
Warning: these IBANs will not work in production.

* [generateInvoice](docs/sdks/testing/README.md#generateinvoice) - 
!!! The documentation website is not able to display the full response of this endpoint. The use of the curl command is recommended. !!!

Generate a fake invoice that will produce a given scenario on the sandbox, for example a rejected loan.
The generation will not add the invoice to the list of your invoices. You must do this via API.
To achieve this, you can copy the invoice_creation_payload into the payload of the invoice creation API.
If you want to test another scenario on a given business, create another fake invoice.
For more information on the scenarios of the sandbox, please refer to the Testing your integration section.
Warning: these invoices and their IBANs will not work in production.

* [hello](docs/sdks/testing/README.md#hello) - Make a first call to this endpoint to test your connection to Defacto API with your API Key
* [setBusinessEligible](docs/sdks/testing/README.md#setbusinesseligible) - 
This endpoint enables you to configure the eligibility of a business.
Pass NOT_ELIGIBLE to make a business non-eligible.
Then, you'll be able to test how the Defacto API behaves when requesting a loan for a non-eligible business.
You can test multiple scenarios:
(1) when the business is the borrower or
(2) when the business is on the invoice to finance but is not the borrower.


### [webhook](docs/sdks/webhook/README.md)

* [create](docs/sdks/webhook/README.md#create) - 
Create a webhook subscription.

⚠️ Our webhooks always call the POST method of the given url.

For more information on webhooks such as how to secure them, you can refer to our guide.


* [delete](docs/sdks/webhook/README.md#delete) - Delete a webhook subscription.
* [list](docs/sdks/webhook/README.md#list) - 
List your webhook subscription.

⚠️ Our webhooks always call the POST method of the given url.

For more information on webhooks such as how to secure them, you can refer to our guide.


* [update](docs/sdks/webhook/README.md#update) - 
Update a webhook subscription.

⚠️ Our webhooks always call the POST method of the given url.

For more information on webhooks such as how to secure them, you can refer to our guide.
<!-- End SDK Available Operations -->



<!-- Start Dev Containers -->

<!-- End Dev Containers -->



<!-- Start Pagination -->
# Pagination

Some of the endpoints in this SDK support pagination. To use pagination, you make your SDK calls as usual, but the
returned response object will have a `next` method that can be called to pull down the next group of results. If the
return value of `next` is `null`, then there are no more pages to be fetched.

Here's an example of one such pagination call:
<!-- End Pagination -->

<!-- Placeholder for Future Speakeasy SDK Sections -->



### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)


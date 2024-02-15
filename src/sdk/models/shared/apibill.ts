/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { BusinessIdentifier } from "./businessidentifier";
import { PaymentApi } from "./paymentapi";

/**
 * Type of legal business identifier of the business, such as the SIRET in France.
 */
export enum APIBillSchemasIdentifierType {
    Siret = "siret",
    Siren = "siren",
    VatNumber = "vat_number",
    Name = "name",
    Nif = "nif",
    Cif = "cif",
    Kvk = "kvk",
    Bsn = "bsn",
    HrNummer = "hr_nummer",
    BelgiumRegistrationNumber = "belgium_registration_number",
    Steuernummer = "steuernummer",
}

export class APIBillBuyer extends SpeakeasyBase {
    @SpeakeasyMetadata()
    businessId?: any;

    @SpeakeasyMetadata()
    id?: any;

    /**
     * Legal identifier of the business, such as its SIRET in France.
     */
    @SpeakeasyMetadata()
    identifier: string;

    /**
     * Type of legal business identifier of the business, such as the SIRET in France.
     */
    @SpeakeasyMetadata()
    identifierType?: APIBillSchemasIdentifierType;

    /**
     * Legal name of the business.
     */
    @SpeakeasyMetadata()
    name?: string;

    /**
     * The VAT number of the business, if European
     */
    @SpeakeasyMetadata()
    vatNumber?: string;
}

/**
 * Currency of the invoice. Use ISO 4217 currency code.
 */
export enum APIBillCurrency {
    Eur = "EUR",
    Gbp = "GBP",
}

/**
 * Type of legal business identifier of the business, such as the SIRET in France.
 */
export enum APIBillIdentifierType {
    Siret = "siret",
    Siren = "siren",
    VatNumber = "vat_number",
    Name = "name",
    Nif = "nif",
    Cif = "cif",
    Kvk = "kvk",
    Bsn = "bsn",
    HrNummer = "hr_nummer",
    BelgiumRegistrationNumber = "belgium_registration_number",
    Steuernummer = "steuernummer",
}

export class APIBillSeller extends SpeakeasyBase {
    @SpeakeasyMetadata()
    businessId?: any;

    @SpeakeasyMetadata()
    id?: any;

    /**
     * Legal identifier of the business, such as its SIRET in France.
     */
    @SpeakeasyMetadata()
    identifier: string;

    /**
     * Type of legal business identifier of the business, such as the SIRET in France.
     */
    @SpeakeasyMetadata()
    identifierType?: APIBillIdentifierType;

    /**
     * Legal name of the business.
     */
    @SpeakeasyMetadata()
    name?: string;

    /**
     * The VAT number of the business, if European
     */
    @SpeakeasyMetadata()
    vatNumber?: string;
}

/**
 * TO_SUBMIT, SUBMITTED, TO_EDIT or VERIFIED TO_SUBMIT: the invoice is a draft, you can correct it and submit it when correct SUBMITTED: the invoice has been submitted and Defacto is verifying it TO_EDIT: the invoice has not been validated by Defacto. It should be edited before you can submit it again VERIFIED: the invoice has been verified by Defacto. A loan can now be requested for the invoice.
 */
export enum APIBillStatus {
    ToSubmit = "TO_SUBMIT",
    Submitted = "SUBMITTED",
    ToEdit = "TO_EDIT",
    Verified = "VERIFIED",
    Deleted = "DELETED",
}

/**
 * The type of account number (e.g. IBAN).
 */
export enum APIBillAccountNumberType {
    Iban = "iban",
    AccountNumber = "account_number",
    InternalId = "internal_id",
}

/**
 * The type of bank identifier (e.g. BIC).
 */
export enum APIBillBankIdentifierType {
    Bic = "bic",
    RoutingNumber = "routing_number",
    Name = "name",
}

export class APIBillToAccountDetails extends SpeakeasyBase {
    /**
     * The account identifier. Only IBANs are supported at the moment.
     */
    @SpeakeasyMetadata()
    accountNumber: string;

    /**
     * The type of account number (e.g. IBAN).
     */
    @SpeakeasyMetadata()
    accountNumberType: APIBillAccountNumberType;

    /**
     * The identifier of the bank.
     */
    @SpeakeasyMetadata()
    bankIdentifier: string;

    /**
     * The type of bank identifier (e.g. BIC).
     */
    @SpeakeasyMetadata()
    bankIdentifierType: APIBillBankIdentifierType;
}

export class Invoice extends SpeakeasyBase {
    @SpeakeasyMetadata()
    buyer?: APIBillBuyer;

    /**
     * Currency of the invoice. Use ISO 4217 currency code.
     */
    @SpeakeasyMetadata()
    currency?: APIBillCurrency;

    @SpeakeasyMetadata()
    documentUrl?: string;

    @SpeakeasyMetadata()
    dueAt?: Date;

    @SpeakeasyMetadata()
    id?: any;

    /**
     * Invoice number as displayed on the invoice
     */
    @SpeakeasyMetadata()
    invoiceNumber: string;

    /**
     * True by default, set to false if you want to create and validate invoice in one API call.
     */
    @SpeakeasyMetadata()
    isDraft?: boolean;

    @SpeakeasyMetadata()
    issuedAt?: Date;

    @SpeakeasyMetadata()
    loanIds?: string[];

    /**
     * This object is yours, it enables you to add custom data.
     */
    @SpeakeasyMetadata()
    metadata?: Record<string, any>;

    /**
     * Amount before tax, in cents
     */
    @SpeakeasyMetadata()
    netAmount: number;

    @SpeakeasyMetadata()
    seller?: APIBillSeller;

    /**
     * TO_SUBMIT, SUBMITTED, TO_EDIT or VERIFIED TO_SUBMIT: the invoice is a draft, you can correct it and submit it when correct SUBMITTED: the invoice has been submitted and Defacto is verifying it TO_EDIT: the invoice has not been validated by Defacto. It should be edited before you can submit it again VERIFIED: the invoice has been verified by Defacto. A loan can now be requested for the invoice.
     */
    @SpeakeasyMetadata()
    status?: APIBillStatus;

    /**
     * Amount of tax, in cents
     */
    @SpeakeasyMetadata()
    taxAmount?: number;

    @SpeakeasyMetadata()
    toAccountDetails?: APIBillToAccountDetails;

    /**
     * Remaining amount due by buyer to seller, in cents. Set at 0 for fully paid invoices.
     */
    @SpeakeasyMetadata()
    toPayAmount?: number;

    /**
     * Sum of net amount and tax amount, in cents
     */
    @SpeakeasyMetadata()
    totalAmount?: number;
}

export enum Status {
    Generated = "GENERATED",
    Validated = "VALIDATED",
    SentToPayer = "SENT_TO_PAYER",
    ToPay = "TO_PAY",
    Paid = "PAID",
    Invalid = "INVALID",
}

export class APIBill extends SpeakeasyBase {
    @SpeakeasyMetadata()
    amendsBillId?: string;

    @SpeakeasyMetadata()
    billedBusiness: BusinessIdentifier;

    @SpeakeasyMetadata()
    documentUrl?: string;

    @SpeakeasyMetadata()
    dueDate: Date;

    @SpeakeasyMetadata()
    emailSentToPayerOn?: Date;

    @SpeakeasyMetadata()
    endDate: Date;

    @SpeakeasyMetadata()
    id: string;

    @SpeakeasyMetadata()
    invoice?: Invoice;

    @SpeakeasyMetadata()
    invoiceNumber?: string;

    @SpeakeasyMetadata()
    payment: PaymentApi;

    @SpeakeasyMetadata()
    ranAt: Date;

    @SpeakeasyMetadata()
    startDate: Date;

    @SpeakeasyMetadata()
    status: Status;
}

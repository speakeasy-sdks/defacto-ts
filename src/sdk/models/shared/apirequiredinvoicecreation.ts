/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CounterpartyCreation } from "./counterpartycreation";
import { Expose, Transform, Type } from "class-transformer";

/**
 * Currency of the invoice. Use ISO 4217 currency code.
 */
export enum APIRequiredInvoiceCreationCurrency {
    Eur = "EUR",
    Gbp = "GBP",
}

/**
 * Type of legal business identifier of the business, such as the SIRET in France.
 */
export enum APIRequiredInvoiceCreationToAccountAccountHolderIdentifierType {
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
    LessThanNilGreaterThan = "<nil>",
}

/**
 * The business owning the account.
 */
export class APIRequiredInvoiceCreationToAccountAccountHolder extends SpeakeasyBase {
    /**
     * Legal identifier of the business, such as its SIRET in France.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "identifier" })
    identifier: string;

    /**
     * Type of legal business identifier of the business, such as the SIRET in France.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "identifier_type" })
    identifierType?: APIRequiredInvoiceCreationToAccountAccountHolderIdentifierType;
}

/**
 * The type of account number (e.g. IBAN).
 */
export enum APIRequiredInvoiceCreationToAccountAccountNumberType {
    Iban = "iban",
    AccountNumber = "account_number",
    InternalId = "internal_id",
}

/**
 * The type of bank identifier (e.g. BIC).
 */
export enum APIRequiredInvoiceCreationToAccountBankIdentifierType {
    Bic = "bic",
    RoutingNumber = "routing_number",
    Name = "name",
}

/**
 * Beneficiary account as mentioned on the invoice. Note that this does not determine the account where the loan payment will be made.That is done separately when calling the POST /loans endpoint.
 */
export class APIRequiredInvoiceCreationToAccount extends SpeakeasyBase {
    /**
     * The business owning the account.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "account_holder" })
    @Type(() => APIRequiredInvoiceCreationToAccountAccountHolder)
    accountHolder?: APIRequiredInvoiceCreationToAccountAccountHolder;

    /**
     * The account identifier. Only IBANs are supported at the moment.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "account_number" })
    accountNumber: string;

    /**
     * The type of account number (e.g. IBAN).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "account_number_type" })
    accountNumberType?: APIRequiredInvoiceCreationToAccountAccountNumberType;

    /**
     * The identifier of the bank.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "bank_identifier" })
    bankIdentifier?: string;

    /**
     * The type of bank identifier (e.g. BIC).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "bank_identifier_type" })
    bankIdentifierType?: APIRequiredInvoiceCreationToAccountBankIdentifierType;
}

export class APIRequiredInvoiceCreation extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "buyer" })
    @Type(() => CounterpartyCreation)
    buyer: CounterpartyCreation;

    /**
     * Currency of the invoice. Use ISO 4217 currency code.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "currency" })
    currency?: APIRequiredInvoiceCreationCurrency;

    /**
     * PDF binary (format base64 string)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "document" })
    document?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "due_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    dueAt: Date;

    /**
     * Invoice number as displayed on the invoice
     */
    @SpeakeasyMetadata()
    @Expose({ name: "invoice_number" })
    invoiceNumber: string;

    @SpeakeasyMetadata()
    @Expose({ name: "issued_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    issuedAt: Date;

    /**
     * This object is yours, it enables you to add custom data.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "metadata" })
    metadata?: Record<string, any>;

    /**
     * Amount before tax, in cents
     */
    @SpeakeasyMetadata()
    @Expose({ name: "net_amount" })
    netAmount?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "seller" })
    @Type(() => CounterpartyCreation)
    seller: CounterpartyCreation;

    /**
     * Amount of tax, in cents
     */
    @SpeakeasyMetadata()
    @Expose({ name: "tax_amount" })
    taxAmount?: number;

    /**
     * Beneficiary account as mentioned on the invoice. Note that this does not determine the account where the loan payment will be made.That is done separately when calling the POST /loans endpoint.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "to_account" })
    @Type(() => APIRequiredInvoiceCreationToAccount)
    toAccount?: APIRequiredInvoiceCreationToAccount;

    /**
     * Remaining amount due by buyer to seller, in cents. Set at 0 for fully paid invoices.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "to_pay_amount" })
    toPayAmount?: number;

    /**
     * Sum of net amount and tax amount, in cents
     */
    @SpeakeasyMetadata()
    @Expose({ name: "total_amount" })
    totalAmount: number;
}

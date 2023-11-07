/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AccountCreation } from "./accountcreation";
import { APIRequiredInvoiceCreation } from "./apirequiredinvoicecreation";
import { Expose, Transform, Type } from "class-transformer";

/**
 * Type of legal business identifier of the business, such as the SIRET in France.
 */
export enum APIPostLoanIdentifierType {
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
 * Entity legally contracting the loan
 */
export class Borrower extends SpeakeasyBase {
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
    identifierType?: APIPostLoanIdentifierType;
}

/**
 * ISO 4217 currency code.
 */
export enum APIPostLoanCurrency {
    Eur = "EUR",
    Gbp = "GBP",
}

/**
 * Type of loan to request. For example, INVOICE_BASED_FINANCING to finance invoices. Depending on the value of this field, another field with a name matching this value may be to complete. For example, for INVOICE_BASED_FINANCING either invoice_ids or invoices should be set.For WALLET_FINANCING, no specific field needs to be set.
 */
export enum LoanType {
    InvoiceBasedFinancing = "INVOICE_BASED_FINANCING",
    WalletFinancing = "WALLET_FINANCING",
}

export class APIPostLoan extends SpeakeasyBase {
    /**
     * Loan amount in cents
     */
    @SpeakeasyMetadata()
    @Expose({ name: "amount" })
    amount: number;

    /**
     * Automatically validate the loan
     */
    @SpeakeasyMetadata()
    @Expose({ name: "auto_validate" })
    autoValidate?: boolean;

    /**
     * Entity legally contracting the loan
     */
    @SpeakeasyMetadata()
    @Expose({ name: "borrower" })
    @Type(() => Borrower)
    borrower?: Borrower;

    /**
     * ISO 4217 currency code.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "currency" })
    currency?: APIPostLoanCurrency;

    /**
     * Invoices already uploaded that the loan should finance
     */
    @SpeakeasyMetadata()
    @Expose({ name: "invoice_ids" })
    invoiceIds?: string[];

    /**
     * Invoices to create that the loan finances
     */
    @SpeakeasyMetadata({ elemType: APIRequiredInvoiceCreation })
    @Expose({ name: "invoices" })
    @Type(() => APIRequiredInvoiceCreation)
    invoices?: APIRequiredInvoiceCreation[];

    /**
     * Bank account receiving the money of the loan
     */
    @SpeakeasyMetadata()
    @Expose({ name: "loan_to" })
    @Type(() => AccountCreation)
    loanTo: AccountCreation;

    /**
     * References in the transfer of the loan payment, on the account receiving the money
     */
    @SpeakeasyMetadata()
    @Expose({ name: "loan_to_references" })
    loanToReferences?: string[];

    /**
     * Type of loan to request. For example, INVOICE_BASED_FINANCING to finance invoices. Depending on the value of this field, another field with a name matching this value may be to complete. For example, for INVOICE_BASED_FINANCING either invoice_ids or invoices should be set.For WALLET_FINANCING, no specific field needs to be set.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "loan_type" })
    loanType?: LoanType;

    /**
     * This object is yours, it enables you to add custom data.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "metadata" })
    metadata?: Record<string, any>;

    @SpeakeasyMetadata()
    @Expose({ name: "notification_emails" })
    notificationEmails?: string[];

    /**
     * References in the transfer of the loan repayment, on the account sending the money
     */
    @SpeakeasyMetadata()
    @Expose({ name: "repayment_from_references" })
    repaymentFromReferences?: string[];

    /**
     * Unique key to ensure idempotency of the creation request.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "salt_id" })
    saltId?: string;

    /**
     * Loan disbursement estimated date
     */
    @SpeakeasyMetadata()
    @Expose({ name: "to_pay_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    toPayAt: Date;

    /**
     * Loan reimbursement estimated date
     */
    @SpeakeasyMetadata()
    @Expose({ name: "to_repay_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    toRepayAt: Date;
}

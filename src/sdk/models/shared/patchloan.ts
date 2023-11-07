/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform, Type } from "class-transformer";

/**
 * Type of legal business identifier of the business, such as the SIRET in France.
 */
export enum PatchLoanIdentifierType {
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
export class PatchLoanAccountHolder extends SpeakeasyBase {
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
    identifierType?: PatchLoanIdentifierType;
}

/**
 * The type of account number (e.g. IBAN).
 */
export enum PatchLoanAccountNumberType {
    Iban = "iban",
    AccountNumber = "account_number",
    InternalId = "internal_id",
}

/**
 * The type of bank identifier (e.g. BIC).
 */
export enum PatchLoanBankIdentifierType {
    Bic = "bic",
    RoutingNumber = "routing_number",
    Name = "name",
}

/**
 * Bank account receiving the money of the loan
 */
export class PatchLoanLoanTo extends SpeakeasyBase {
    /**
     * The business owning the account.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "account_holder" })
    @Type(() => PatchLoanAccountHolder)
    accountHolder?: PatchLoanAccountHolder;

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
    accountNumberType?: PatchLoanAccountNumberType;

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
    bankIdentifierType?: PatchLoanBankIdentifierType;
}

export class PatchLoan extends SpeakeasyBase {
    /**
     * Loan amount in cents
     */
    @SpeakeasyMetadata()
    @Expose({ name: "amount" })
    amount?: number;

    /**
     * Defacto ID for the entity lending the money
     */
    @SpeakeasyMetadata()
    @Expose({ name: "lender_id" })
    lenderId?: any;

    /**
     * Bank account receiving the money of the loan
     */
    @SpeakeasyMetadata()
    @Expose({ name: "loan_to" })
    @Type(() => PatchLoanLoanTo)
    loanTo?: PatchLoanLoanTo;

    /**
     * References in the transfer of the loan payment, on the account receiving the money
     */
    @SpeakeasyMetadata()
    @Expose({ name: "loan_to_references" })
    loanToReferences?: string[];

    @SpeakeasyMetadata()
    @Expose({ name: "metadata" })
    metadata?: Record<string, any>;

    /**
     * References in the transfer of the loan repayment, on the account receiving the money
     */
    @SpeakeasyMetadata()
    @Expose({ name: "repayment_to_references" })
    repaymentToReferences?: string[];

    /**
     * Loan disbursement estimated date
     */
    @SpeakeasyMetadata()
    @Expose({ name: "to_pay_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    toPayAt?: Date;

    /**
     * Loan reimbursement estimated date
     */
    @SpeakeasyMetadata()
    @Expose({ name: "to_repay_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    toRepayAt?: Date;

    /**
     * URL of the contract for loans that have been transferred to another lender
     */
    @SpeakeasyMetadata()
    @Expose({ name: "transfer_contract_url" })
    transferContractUrl?: string;
}

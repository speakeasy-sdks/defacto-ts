/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { LightBusiness } from "./lightbusiness";

export class LoanAPIAddress extends SpeakeasyBase {
    @SpeakeasyMetadata()
    addressLine1?: string;

    @SpeakeasyMetadata()
    addressLine2?: string;

    @SpeakeasyMetadata()
    city?: string;

    @SpeakeasyMetadata()
    country?: string;

    @SpeakeasyMetadata()
    postalCode?: string;

    @SpeakeasyMetadata()
    state?: string;
}

/**
 * Type of legal business identifier of the business, such as the SIRET in France.
 */
export enum LoanAPIIdentifierType {
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
export class LoanAPIBorrower extends SpeakeasyBase {
    @SpeakeasyMetadata()
    address?: LoanAPIAddress;

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
    identifierType?: LoanAPIIdentifierType;

    /**
     * Legal form of the business.
     */
    @SpeakeasyMetadata()
    legalForm?: string;

    /**
     * Legal name of the business.
     */
    @SpeakeasyMetadata()
    name?: string;

    /**
     * Name of the national organization where the business is registered. For example the RCS of Paris in France
     */
    @SpeakeasyMetadata()
    registrationBody?: string;

    /**
     * The part of the capital of a company that comes from the issue of shares, in cents.
     */
    @SpeakeasyMetadata()
    shareCapital?: number;

    /**
     * The VAT number of the business, if European
     */
    @SpeakeasyMetadata()
    vatNumber?: string;
}

/**
 * ISO 4217 currency code.
 */
export enum LoanAPICurrency {
    Eur = "EUR",
    Gbp = "GBP",
}

export class LoanAPISchemasAddress extends SpeakeasyBase {
    @SpeakeasyMetadata()
    addressLine1?: string;

    @SpeakeasyMetadata()
    addressLine2?: string;

    @SpeakeasyMetadata()
    city?: string;

    @SpeakeasyMetadata()
    country?: string;

    @SpeakeasyMetadata()
    postalCode?: string;

    @SpeakeasyMetadata()
    state?: string;
}

/**
 * Type of legal business identifier of the business, such as the SIRET in France.
 */
export enum LoanAPISchemasIdentifierType {
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
 * Entity legally responsible to payback the loan
 */
export class Guarantor extends SpeakeasyBase {
    @SpeakeasyMetadata()
    address?: LoanAPISchemasAddress;

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
    identifierType?: LoanAPISchemasIdentifierType;

    /**
     * Legal form of the business.
     */
    @SpeakeasyMetadata()
    legalForm?: string;

    /**
     * Legal name of the business.
     */
    @SpeakeasyMetadata()
    name?: string;

    /**
     * Name of the national organization where the business is registered. For example the RCS of Paris in France
     */
    @SpeakeasyMetadata()
    registrationBody?: string;

    /**
     * The part of the capital of a company that comes from the issue of shares, in cents.
     */
    @SpeakeasyMetadata()
    shareCapital?: number;

    /**
     * The VAT number of the business, if European
     */
    @SpeakeasyMetadata()
    vatNumber?: string;
}

/**
 * The type of account number (e.g. IBAN).
 */
export enum LoanAPIAccountNumberType {
    Iban = "iban",
    AccountNumber = "account_number",
    InternalId = "internal_id",
}

/**
 * The type of bank identifier (e.g. BIC).
 */
export enum LoanAPIBankIdentifierType {
    Bic = "bic",
    RoutingNumber = "routing_number",
    Name = "name",
}

/**
 * Bank account used to transfer the amount of the loan to the borrower
 */
export class LoanFrom extends SpeakeasyBase {
    /**
     * The account identifier. Only IBANs are supported at the moment.
     */
    @SpeakeasyMetadata()
    accountNumber: string;

    /**
     * The type of account number (e.g. IBAN).
     */
    @SpeakeasyMetadata()
    accountNumberType: LoanAPIAccountNumberType;

    /**
     * The identifier of the bank.
     */
    @SpeakeasyMetadata()
    bankIdentifier: string;

    /**
     * The type of bank identifier (e.g. BIC).
     */
    @SpeakeasyMetadata()
    bankIdentifierType: LoanAPIBankIdentifierType;
}

/**
 * The type of account number (e.g. IBAN).
 */
export enum LoanAPISchemasAccountNumberType {
    Iban = "iban",
    AccountNumber = "account_number",
    InternalId = "internal_id",
}

/**
 * The type of bank identifier (e.g. BIC).
 */
export enum LoanAPISchemasBankIdentifierType {
    Bic = "bic",
    RoutingNumber = "routing_number",
    Name = "name",
}

/**
 * Bank account receiving the money of the loan
 */
export class LoanTo extends SpeakeasyBase {
    /**
     * The account identifier. Only IBANs are supported at the moment.
     */
    @SpeakeasyMetadata()
    accountNumber: string;

    /**
     * The type of account number (e.g. IBAN).
     */
    @SpeakeasyMetadata()
    accountNumberType: LoanAPISchemasAccountNumberType;

    /**
     * The identifier of the bank.
     */
    @SpeakeasyMetadata()
    bankIdentifier: string;

    /**
     * The type of bank identifier (e.g. BIC).
     */
    @SpeakeasyMetadata()
    bankIdentifierType: LoanAPISchemasBankIdentifierType;
}

export enum LoanAPILoanType {
    InvoiceBasedFinancing = "INVOICE_BASED_FINANCING",
    WalletFinancing = "WALLET_FINANCING",
}

/**
 * The type of account number (e.g. IBAN).
 */
export enum LoanAPISchemasRepaymentFromAccountNumberType {
    Iban = "iban",
    AccountNumber = "account_number",
    InternalId = "internal_id",
}

/**
 * The type of bank identifier (e.g. BIC).
 */
export enum LoanAPISchemasRepaymentFromBankIdentifierType {
    Bic = "bic",
    RoutingNumber = "routing_number",
    Name = "name",
}

/**
 * Bank account repaying the loan
 */
export class RepaymentFrom extends SpeakeasyBase {
    /**
     * The account identifier. Only IBANs are supported at the moment.
     */
    @SpeakeasyMetadata()
    accountNumber: string;

    /**
     * The type of account number (e.g. IBAN).
     */
    @SpeakeasyMetadata()
    accountNumberType: LoanAPISchemasRepaymentFromAccountNumberType;

    /**
     * The identifier of the bank.
     */
    @SpeakeasyMetadata()
    bankIdentifier: string;

    /**
     * The type of bank identifier (e.g. BIC).
     */
    @SpeakeasyMetadata()
    bankIdentifierType: LoanAPISchemasRepaymentFromBankIdentifierType;
}

export enum RepaymentMethod {
    DirectDebit = "DIRECT_DEBIT",
    Sct = "SCT",
    P2P = "P2P",
    LessThanNilGreaterThan = "<nil>",
}

/**
 * The type of account number (e.g. IBAN).
 */
export enum LoanAPISchemasRepaymentToAccountNumberType {
    Iban = "iban",
    AccountNumber = "account_number",
    InternalId = "internal_id",
}

/**
 * The type of bank identifier (e.g. BIC).
 */
export enum LoanAPISchemasRepaymentToBankIdentifierType {
    Bic = "bic",
    RoutingNumber = "routing_number",
    Name = "name",
}

/**
 * Bank account to send the loan repayment to
 */
export class RepaymentTo extends SpeakeasyBase {
    /**
     * The account identifier. Only IBANs are supported at the moment.
     */
    @SpeakeasyMetadata()
    accountNumber: string;

    /**
     * The type of account number (e.g. IBAN).
     */
    @SpeakeasyMetadata()
    accountNumberType: LoanAPISchemasRepaymentToAccountNumberType;

    /**
     * The identifier of the bank.
     */
    @SpeakeasyMetadata()
    bankIdentifier: string;

    /**
     * The type of bank identifier (e.g. BIC).
     */
    @SpeakeasyMetadata()
    bankIdentifierType: LoanAPISchemasRepaymentToBankIdentifierType;
}

export enum LoanAPIStatus {
    Submitted = "SUBMITTED",
    ToValidate = "TO_VALIDATE",
    Declined = "DECLINED",
    Validated = "VALIDATED",
    Canceled = "CANCELED",
    Scheduled = "SCHEDULED",
    Initiated = "INITIATED",
    ToRepay = "TO_REPAY",
    ToRepayFees = "TO_REPAY_FEES",
    Overdue = "OVERDUE",
    Closed = "CLOSED",
    IssueDetected = "ISSUE_DETECTED",
    Deleted = "DELETED",
}

export class LoanAPI extends SpeakeasyBase {
    /**
     * Loan amount in cents
     */
    @SpeakeasyMetadata()
    amount: number;

    /**
     * Entity receiving the money
     */
    @SpeakeasyMetadata()
    beneficiary: LightBusiness;

    /**
     * Entity legally contracting the loan
     */
    @SpeakeasyMetadata()
    borrower?: LoanAPIBorrower;

    /**
     * Loan full repayment date
     */
    @SpeakeasyMetadata()
    closedAt?: Date;

    @SpeakeasyMetadata()
    contractUrl?: string;

    /**
     * ISO 4217 currency code.
     */
    @SpeakeasyMetadata()
    currency: LoanAPICurrency;

    @SpeakeasyMetadata()
    denialReason?: string;

    /**
     * Loan reimbursement earliest possible date
     */
    @SpeakeasyMetadata()
    earliestToRepayAt?: Date;

    /**
     * In cents (estimated loan duration * interest * amount)
     */
    @SpeakeasyMetadata()
    feesEstimated?: number;

    /**
     * Fees if you repay today. In cents (current duration * interest * amount)
     */
    @SpeakeasyMetadata()
    feesOngoing?: number;

    /**
     * Entity legally responsible to payback the loan
     */
    @SpeakeasyMetadata()
    guarantor?: Guarantor;

    @SpeakeasyMetadata()
    id?: any;

    /**
     * Invoices already uploaded that the loan should finance
     */
    @SpeakeasyMetadata()
    invoiceIds?: string[];

    /**
     * Bank account used to transfer the amount of the loan to the borrower
     */
    @SpeakeasyMetadata()
    loanFrom?: LoanFrom;

    /**
     * References in the transfer of the loan payment, on the account sending the money
     */
    @SpeakeasyMetadata()
    loanFromReferences?: string[];

    /**
     * Bank account receiving the money of the loan
     */
    @SpeakeasyMetadata()
    loanTo?: LoanTo;

    /**
     * References in the transfer of the loan payment, on the account receiving the money
     */
    @SpeakeasyMetadata()
    loanToReferences?: string[];

    @SpeakeasyMetadata()
    loanType: LoanAPILoanType;

    @SpeakeasyMetadata()
    metadata?: Record<string, any>;

    @SpeakeasyMetadata()
    notificationEmails?: string[];

    /**
     * Amount of the loan that has been repaid by the borrower, in cents
     */
    @SpeakeasyMetadata()
    repaidAmount?: number;

    @SpeakeasyMetadata()
    repaidNominalAt?: Date;

    /**
     * Bank account repaying the loan
     */
    @SpeakeasyMetadata()
    repaymentFrom?: RepaymentFrom;

    /**
     * References in the transfer of the loan repayment, on the account sending the money
     */
    @SpeakeasyMetadata()
    repaymentFromReferences?: string[];

    @SpeakeasyMetadata()
    repaymentMethod?: RepaymentMethod;

    /**
     * Bank account to send the loan repayment to
     */
    @SpeakeasyMetadata()
    repaymentTo?: RepaymentTo;

    /**
     * References in the transfer of the loan repayment, on the account receiving the money
     */
    @SpeakeasyMetadata()
    repaymentToReferences?: string[];

    @SpeakeasyMetadata()
    status?: LoanAPIStatus;

    @SpeakeasyMetadata()
    submittedAt: Date;

    /**
     * Loan disbursement estimated date
     */
    @SpeakeasyMetadata()
    toPayAt: Date;

    /**
     * Loan reimbursement estimated date
     */
    @SpeakeasyMetadata()
    toRepayAt: Date;

    @SpeakeasyMetadata()
    transferContractUrl?: string;
}

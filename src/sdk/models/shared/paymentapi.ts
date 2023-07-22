/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { PaymentRelationApi } from "./paymentrelationapi";

export enum PaymentApiCurrency {
    Eur = "EUR",
    Gbp = "GBP",
}

/**
 * The type of account number (e.g. IBAN).
 */
export enum PaymentApiFromAccountDetailsAccountNumberType {
    Iban = "iban",
    AccountNumber = "account_number",
    InternalId = "internal_id",
}

/**
 * The type of bank identifier (e.g. BIC).
 */
export enum PaymentApiFromAccountDetailsBankIdentifierType {
    Bic = "bic",
    RoutingNumber = "routing_number",
    Name = "name",
}

export class PaymentApiFromAccountDetails extends SpeakeasyBase {
    /**
     * The account identifier. Only IBANs are supported at the moment.
     */
    @SpeakeasyMetadata()
    accountNumber: string;

    /**
     * The type of account number (e.g. IBAN).
     */
    @SpeakeasyMetadata()
    accountNumberType: PaymentApiFromAccountDetailsAccountNumberType;

    /**
     * The identifier of the bank.
     */
    @SpeakeasyMetadata()
    bankIdentifier: string;

    /**
     * The type of bank identifier (e.g. BIC).
     */
    @SpeakeasyMetadata()
    bankIdentifierType: PaymentApiFromAccountDetailsBankIdentifierType;
}

export enum PaymentApiPaymentMethod {
    DirectDebit = "DIRECT_DEBIT",
    Sct = "SCT",
    P2P = "P2P",
    LessThanNilGreaterThan = "<nil>",
}

export enum PaymentApiPaymentType {
    LoanPayment = "LOAN_PAYMENT",
    RepaymentNominal = "REPAYMENT_NOMINAL",
    RepaymentFees = "REPAYMENT_FEES",
    RepaymentFull = "REPAYMENT_FULL",
    Refund = "REFUND",
    Extra = "EXTRA",
    Internal = "INTERNAL",
    Returned = "RETURNED",
    RevenueShare = "REVENUE_SHARE",
    LoanPurchase = "LOAN_PURCHASE",
    Chargeback = "CHARGEBACK",
    ChannelVerification = "CHANNEL_VERIFICATION",
    PaymentProviderFees = "PAYMENT_PROVIDER_FEES",
    LessThanNilGreaterThan = "<nil>",
}

export enum PaymentApiProviderName {
    Swan = "SWAN",
    Sandbox = "SANDBOX",
    Lemonway = "LEMONWAY",
    Test = "TEST",
}

export class PaymentApiProvider extends SpeakeasyBase {
    @SpeakeasyMetadata()
    name: PaymentApiProviderName;

    @SpeakeasyMetadata()
    originalId?: string;

    @SpeakeasyMetadata()
    paymentId?: string;
}

export enum PaymentApiStatus {
    Proposed = "PROPOSED",
    Scheduled = "SCHEDULED",
    Canceled = "CANCELED",
    Failed = "FAILED",
    Instructed = "INSTRUCTED",
    InTransit = "IN_TRANSIT",
    Paid = "PAID",
}

/**
 * The type of account number (e.g. IBAN).
 */
export enum PaymentApiToAccountDetailsAccountNumberType {
    Iban = "iban",
    AccountNumber = "account_number",
    InternalId = "internal_id",
}

/**
 * The type of bank identifier (e.g. BIC).
 */
export enum PaymentApiToAccountDetailsBankIdentifierType {
    Bic = "bic",
    RoutingNumber = "routing_number",
    Name = "name",
}

export class PaymentApiToAccountDetails extends SpeakeasyBase {
    /**
     * The account identifier. Only IBANs are supported at the moment.
     */
    @SpeakeasyMetadata()
    accountNumber: string;

    /**
     * The type of account number (e.g. IBAN).
     */
    @SpeakeasyMetadata()
    accountNumberType: PaymentApiToAccountDetailsAccountNumberType;

    /**
     * The identifier of the bank.
     */
    @SpeakeasyMetadata()
    bankIdentifier: string;

    /**
     * The type of bank identifier (e.g. BIC).
     */
    @SpeakeasyMetadata()
    bankIdentifierType: PaymentApiToAccountDetailsBankIdentifierType;
}

export class PaymentApi extends SpeakeasyBase {
    @SpeakeasyMetadata()
    amount: number;

    @SpeakeasyMetadata()
    currency?: PaymentApiCurrency;

    @SpeakeasyMetadata()
    failureReason?: string;

    @SpeakeasyMetadata()
    fromAccountDetails?: PaymentApiFromAccountDetails;

    @SpeakeasyMetadata()
    fromReferences?: string[];

    @SpeakeasyMetadata()
    id?: any;

    @SpeakeasyMetadata()
    isInstant?: boolean;

    @SpeakeasyMetadata()
    paidAt?: Date;

    @SpeakeasyMetadata()
    paymentMethod?: PaymentApiPaymentMethod;

    @SpeakeasyMetadata()
    paymentType?: PaymentApiPaymentType;

    @SpeakeasyMetadata()
    provider?: PaymentApiProvider;

    @SpeakeasyMetadata()
    relatedTo?: PaymentRelationApi;

    @SpeakeasyMetadata()
    scheduledAt?: Date;

    @SpeakeasyMetadata()
    status: PaymentApiStatus;

    @SpeakeasyMetadata()
    toAccountDetails?: PaymentApiToAccountDetails;

    @SpeakeasyMetadata()
    toReferences?: string[];
}

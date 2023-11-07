/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";

/**
 * Transaction currency
 */
export enum APIPartnerAccountTransactionCurrency {
    Eur = "EUR",
    Gbp = "GBP",
}

/**
 * Source or payment method of this transaction
 */
export enum OperationType {
    Income = "income",
    Transfer = "transfer",
    Card = "card",
    DirectDebit = "direct_debit",
    QontoFee = "qonto_fee",
    Cheque = "cheque",
    Recall = "recall",
    SwiftIncome = "swift_income",
    LessThanNilGreaterThan = "<nil>",
}

/**
 * Is the transaction a debit or a credit operation.
 */
export enum Side {
    Debit = "debit",
    Credit = "credit",
    LessThanNilGreaterThan = "<nil>",
}

export enum APIPartnerAccountTransactionStatus {
    Pending = "pending",
    Completed = "completed",
    Declined = "declined",
    LessThanNilGreaterThan = "<nil>",
}

export class APIPartnerAccountTransaction extends SpeakeasyBase {
    /**
     * Business bank account identifier or reference
     */
    @SpeakeasyMetadata()
    @Expose({ name: "account" })
    account?: string;

    /**
     * Total amount of the transaction.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "amount" })
    amount: number;

    /**
     * Date of the transaction
     */
    @SpeakeasyMetadata()
    @Expose({ name: "at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    at: Date;

    /**
     * Category of this transaction (expense, salaries ...)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "category" })
    category?: string;

    /**
     * Business name of the transaction counterparty
     */
    @SpeakeasyMetadata()
    @Expose({ name: "counterparty_name" })
    counterpartyName?: string;

    /**
     * Transaction currency
     */
    @SpeakeasyMetadata()
    @Expose({ name: "currency" })
    currency?: APIPartnerAccountTransactionCurrency;

    /**
     * Source or payment method of this transaction
     */
    @SpeakeasyMetadata()
    @Expose({ name: "operation_type" })
    operationType?: OperationType;

    /**
     * Bank reference for the transaction
     */
    @SpeakeasyMetadata()
    @Expose({ name: "reference" })
    reference?: string;

    /**
     * Unique identifier of this transaction
     */
    @SpeakeasyMetadata()
    @Expose({ name: "salt_id" })
    saltId?: string;

    /**
     * Balance of the business bank account right after this transaction was processed
     */
    @SpeakeasyMetadata()
    @Expose({ name: "settled_balance" })
    settledBalance?: number;

    /**
     * Is the transaction a debit or a credit operation.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "side" })
    side?: Side;

    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: APIPartnerAccountTransactionStatus;
}

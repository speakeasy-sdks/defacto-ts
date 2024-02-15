/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

/**
 * Type of legal business identifier of the business, such as the SIRET in France.
 */
export enum AccountCreationIdentifierType {
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

/**
 * The business owning the account.
 */
export class AccountHolder extends SpeakeasyBase {
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
    identifierType?: AccountCreationIdentifierType;
}

/**
 * The type of account number (e.g. IBAN).
 */
export enum AccountCreationAccountNumberType {
    Iban = "iban",
    AccountNumber = "account_number",
    InternalId = "internal_id",
}

/**
 * The type of bank identifier (e.g. BIC).
 */
export enum AccountCreationBankIdentifierType {
    Bic = "bic",
    RoutingNumber = "routing_number",
    Name = "name",
}

export class AccountCreation extends SpeakeasyBase {
    /**
     * The business owning the account.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "account_holder" })
    @Type(() => AccountHolder)
    accountHolder?: AccountHolder;

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
    accountNumberType?: AccountCreationAccountNumberType;

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
    bankIdentifierType?: AccountCreationBankIdentifierType;
}

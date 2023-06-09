/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Director } from "./director";
import { Expose, Transform, Type } from "class-transformer";

export class APIPostBorrowerAddress extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "address_line_1" })
    addressLine1: string;

    @SpeakeasyMetadata()
    @Expose({ name: "address_line_2" })
    addressLine2?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "city" })
    city: string;

    @SpeakeasyMetadata()
    @Expose({ name: "country" })
    country: string;

    @SpeakeasyMetadata()
    @Expose({ name: "postal_code" })
    postalCode: string;

    @SpeakeasyMetadata()
    @Expose({ name: "state" })
    state?: string;
}

/**
 * Type of legal business identifier of the business, such as the SIRET in France.
 */
export enum APIPostBorrowerIdentifierType {
    Siret = "siret",
    Siren = "siren",
    VatNumber = "vat_number",
    Nif = "nif",
    Cif = "cif",
    Kvk = "kvk",
    Bsn = "bsn",
    HrNummer = "hr_nummer",
    BelgiumRegistrationNumber = "belgium_registration_number",
    Steuernummer = "steuernummer",
    LessThanNilGreaterThan = "<nil>",
}

export class APIPostBorrower extends SpeakeasyBase {
    /**
     * The account identifier. Only IBANs are supported at the moment.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "account_number" })
    accountNumber?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "address" })
    @Type(() => APIPostBorrowerAddress)
    address?: APIPostBorrowerAddress;

    @SpeakeasyMetadata({ elemType: Director })
    @Expose({ name: "directors" })
    @Type(() => Director)
    directors?: Director[];

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
    identifierType?: APIPostBorrowerIdentifierType;

    /**
     * Legal form of the business.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "legal_form" })
    legalForm?: string;

    /**
     * This object is yours, it enables you to add custom data.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "metadata" })
    metadata?: Record<string, any>;

    /**
     * Legal name of the business.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    /**
     * Preferred language of the borrower in format ISO 639-1 (examples: [fr, en, es, de, nl]).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "preferred_language" })
    preferredLanguage?: string;

    /**
     * datetime of the borrower's signature. Usually time the borrower clicked on our T&Cs checkbox
     */
    @SpeakeasyMetadata()
    @Expose({ name: "signed_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    signedAt?: Date;

    /**
     * The VAT number of the business, if European
     */
    @SpeakeasyMetadata()
    @Expose({ name: "vat_number" })
    vatNumber?: string;

    /**
     * Wait for the borrower to be ready to request a first loan.Many actions have to run in the background (KYC, scoring, contract generation and so on).We recommend you to subscribe to the CreditLine.CREATED webhook in order to be notified in real time when the credit line is available.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "wait_for_ready" })
    waitForReady?: boolean;
}

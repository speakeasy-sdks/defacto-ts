/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { APILightAccount } from "./apilightaccount";
import { Employee } from "./employee";

export class Address extends SpeakeasyBase {
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
export enum IdentifierType {
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

export enum APIBorrowerStatus {
    ToSign = "TO_SIGN",
    Signed = "SIGNED",
    SddSetup = "SDD_SETUP",
    AllPaymentSetup = "ALL_PAYMENT_SETUP",
    Ready = "READY",
    Canceled = "CANCELED",
    LessThanNilGreaterThan = "<nil>",
}

export class APIBorrower extends SpeakeasyBase {
    /**
     * Bank accounts of the business.
     */
    @SpeakeasyMetadata({ elemType: APILightAccount })
    accounts?: APILightAccount[];

    @SpeakeasyMetadata()
    address?: Address;

    /**
     * Pre-signed url to download the contract
     */
    @SpeakeasyMetadata()
    contractS3Url?: string;

    /**
     * Legal directors of the business.
     */
    @SpeakeasyMetadata({ elemType: Employee })
    directors: Employee[];

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
    identifierType?: IdentifierType;

    /**
     * Legal form of the business.
     */
    @SpeakeasyMetadata()
    legalForm?: string;

    /**
     * This object is yours, it enables you to add custom data.
     */
    @SpeakeasyMetadata()
    metadata?: Record<string, any>;

    /**
     * Legal name of the business.
     */
    @SpeakeasyMetadata()
    name?: string;

    /**
     * datetime of the borrower's signature. Usually time the borrower clicked on our T&Cs checkbox
     */
    @SpeakeasyMetadata()
    signedAt?: Date;

    @SpeakeasyMetadata()
    status?: APIBorrowerStatus;

    /**
     * The VAT number of the business, if European
     */
    @SpeakeasyMetadata()
    vatNumber?: string;
}

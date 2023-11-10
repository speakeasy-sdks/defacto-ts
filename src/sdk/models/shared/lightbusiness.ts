/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";

export class LightBusinessAddress extends SpeakeasyBase {
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
export enum LightBusinessIdentifierType {
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

export class LightBusiness extends SpeakeasyBase {
    @SpeakeasyMetadata()
    address?: LightBusinessAddress;

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
    identifierType?: LightBusinessIdentifierType;

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

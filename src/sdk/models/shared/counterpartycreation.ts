/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Type of legal business identifier of the business, such as the SIRET in France.
 */
export enum CounterpartyCreationIdentifierType {
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

export class CounterpartyCreation extends SpeakeasyBase {
    /**
     * Legal identifier of the business, such as its SIRET in France.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "identifier" })
    identifier?: string;

    /**
     * Type of legal business identifier of the business, such as the SIRET in France.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "identifier_type" })
    identifierType?: CounterpartyCreationIdentifierType;

    /**
     * Legal name of the business.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    /**
     * The VAT number of the business, if European
     */
    @SpeakeasyMetadata()
    @Expose({ name: "vat_number" })
    vatNumber?: string;
}

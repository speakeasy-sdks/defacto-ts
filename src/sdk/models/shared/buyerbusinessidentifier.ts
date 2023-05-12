/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum BuyerBusinessIdentifierIdentifierTypeEnum {
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

export class BuyerBusinessIdentifier extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "identifier" })
  identifier: string;

  @SpeakeasyMetadata()
  @Expose({ name: "identifier_type" })
  identifierType: BuyerBusinessIdentifierIdentifierTypeEnum;
}
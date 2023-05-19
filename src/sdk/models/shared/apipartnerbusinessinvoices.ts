/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { APIPartnerBusinessInvoice } from "./apipartnerbusinessinvoice";
import { Expose, Type } from "class-transformer";

export enum APIPartnerBusinessInvoicesIdentifierType {
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

export class APIPartnerBusinessInvoices extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "identifier" })
  identifier: string;

  @SpeakeasyMetadata()
  @Expose({ name: "identifier_type" })
  identifierType: APIPartnerBusinessInvoicesIdentifierType;

  /**
   * List of invoices of the business.
   */
  @SpeakeasyMetadata({ elemType: APIPartnerBusinessInvoice })
  @Expose({ name: "invoices" })
  @Type(() => APIPartnerBusinessInvoice)
  invoices?: APIPartnerBusinessInvoice[];
}

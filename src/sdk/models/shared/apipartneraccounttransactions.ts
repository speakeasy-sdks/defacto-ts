/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { APIPartnerAccountTransaction } from "./apipartneraccounttransaction";
import { Expose, Transform, Type } from "class-transformer";

/**
 * Type of legal business identifier of the business, such as the SIRET in France.
 */
export enum APIPartnerAccountTransactionsIdentifierType {
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

export class APIPartnerAccountTransactions extends SpeakeasyBase {
  /**
   * End date of the financials you're sending.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "end_date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  endDate?: Date;

  /**
   * Legal identifier of the business, such as its SIREN in France.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "identifier" })
  identifier: string;

  /**
   * Type of legal business identifier of the business, such as the SIRET in France.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "identifier_type" })
  identifierType: APIPartnerAccountTransactionsIdentifierType;

  /**
   * Start date of the financials you're sending.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "start_date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  startDate?: Date;

  /**
   * List of account transactions of the business.
   */
  @SpeakeasyMetadata({ elemType: APIPartnerAccountTransaction })
  @Expose({ name: "transactions" })
  @Type(() => APIPartnerAccountTransaction)
  transactions?: APIPartnerAccountTransaction[];
}

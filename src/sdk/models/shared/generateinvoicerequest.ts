/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

/**
 * Type of legal business identifier of the business, such as the SIRET in France.
 */
export enum GenerateInvoiceRequestBuyerIdentifierTypeEnum {
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

export class GenerateInvoiceRequestBuyer extends SpeakeasyBase {
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
  identifierType?: GenerateInvoiceRequestBuyerIdentifierTypeEnum;

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

export enum GenerateInvoiceRequestCountryEnum {
  Fra = "FRA",
  Esp = "ESP",
  Nld = "NLD",
  Deu = "DEU",
  Bel = "BEL",
}

export enum GenerateInvoiceRequestScenarioEnum {
  Success = "SUCCESS",
  SuccessOneDayLater = "SUCCESS_ONE_DAY_LATER",
  Reject = "REJECT",
  Fail = "FAIL",
}

/**
 * Type of legal business identifier of the business, such as the SIRET in France.
 */
export enum GenerateInvoiceRequestSellerIdentifierTypeEnum {
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

export class GenerateInvoiceRequestSeller extends SpeakeasyBase {
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
  identifierType?: GenerateInvoiceRequestSellerIdentifierTypeEnum;

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

export class GenerateInvoiceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "buyer" })
  @Type(() => GenerateInvoiceRequestBuyer)
  buyer?: GenerateInvoiceRequestBuyer;

  @SpeakeasyMetadata()
  @Expose({ name: "country" })
  country?: GenerateInvoiceRequestCountryEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "scenario" })
  scenario?: GenerateInvoiceRequestScenarioEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "seller" })
  @Type(() => GenerateInvoiceRequestSeller)
  seller?: GenerateInvoiceRequestSeller;
}
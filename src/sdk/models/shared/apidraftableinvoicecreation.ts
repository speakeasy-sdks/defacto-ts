/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform, Type } from "class-transformer";

/**
 * Type of legal business identifier of the business, such as the SIRET in France.
 */
export enum APIDraftableInvoiceCreationBuyerIdentifierType {
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

export class APIDraftableInvoiceCreationBuyer extends SpeakeasyBase {
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
  identifierType?: APIDraftableInvoiceCreationBuyerIdentifierType;

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

/**
 * Currency of the invoice. Use ISO 4217 currency code.
 */
export enum APIDraftableInvoiceCreationCurrency {
  Eur = "EUR",
  Gbp = "GBP",
}

/**
 * Type of legal business identifier of the business, such as the SIRET in France.
 */
export enum APIDraftableInvoiceCreationSellerIdentifierType {
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

export class APIDraftableInvoiceCreationSeller extends SpeakeasyBase {
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
  identifierType?: APIDraftableInvoiceCreationSellerIdentifierType;

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

/**
 * Type of legal business identifier of the business, such as the SIRET in France.
 */
export enum APIDraftableInvoiceCreationToAccountAccountHolderIdentifierType {
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

/**
 * The business owning the account.
 */
export class APIDraftableInvoiceCreationToAccountAccountHolder extends SpeakeasyBase {
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
  identifierType?: APIDraftableInvoiceCreationToAccountAccountHolderIdentifierType;
}

/**
 * The type of account number (e.g. IBAN).
 */
export enum APIDraftableInvoiceCreationToAccountAccountNumberType {
  Iban = "iban",
  AccountNumber = "account_number",
  InternalId = "internal_id",
}

/**
 * The type of bank identifier (e.g. BIC).
 */
export enum APIDraftableInvoiceCreationToAccountBankIdentifierType {
  Bic = "bic",
  RoutingNumber = "routing_number",
  Name = "name",
}

/**
 * Beneficiary account as mentioned on the invoice. Note that this does not determine the account where the loan payment will be made.That is done separately when calling the POST /loans endpoint.
 */
export class APIDraftableInvoiceCreationToAccount extends SpeakeasyBase {
  /**
   * The business owning the account.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "account_holder" })
  @Type(() => APIDraftableInvoiceCreationToAccountAccountHolder)
  accountHolder?: APIDraftableInvoiceCreationToAccountAccountHolder;

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
  accountNumberType?: APIDraftableInvoiceCreationToAccountAccountNumberType;

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
  bankIdentifierType?: APIDraftableInvoiceCreationToAccountBankIdentifierType;
}

export class APIDraftableInvoiceCreation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "buyer" })
  @Type(() => APIDraftableInvoiceCreationBuyer)
  buyer?: APIDraftableInvoiceCreationBuyer;

  /**
   * Currency of the invoice. Use ISO 4217 currency code.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency?: APIDraftableInvoiceCreationCurrency;

  /**
   * PDF binary (format base64 string)
   */
  @SpeakeasyMetadata()
  @Expose({ name: "document" })
  document?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "due_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  dueAt?: Date;

  /**
   * Invoice number as displayed on the invoice
   */
  @SpeakeasyMetadata()
  @Expose({ name: "invoice_number" })
  invoiceNumber?: string;

  /**
   * True by default, set to false if you want to create and validate invoice in one API call.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "is_draft" })
  isDraft?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "issued_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  issuedAt?: Date;

  /**
   * This object is yours, it enables you to add custom data.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  metadata?: Record<string, any>;

  /**
   * Amount before tax, in cents
   */
  @SpeakeasyMetadata()
  @Expose({ name: "net_amount" })
  netAmount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "seller" })
  @Type(() => APIDraftableInvoiceCreationSeller)
  seller?: APIDraftableInvoiceCreationSeller;

  /**
   * Amount of tax, in cents
   */
  @SpeakeasyMetadata()
  @Expose({ name: "tax_amount" })
  taxAmount?: number;

  /**
   * Beneficiary account as mentioned on the invoice. Note that this does not determine the account where the loan payment will be made.That is done separately when calling the POST /loans endpoint.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "to_account" })
  @Type(() => APIDraftableInvoiceCreationToAccount)
  toAccount?: APIDraftableInvoiceCreationToAccount;

  /**
   * Remaining amount due by buyer to seller, in cents. Set at 0 for fully paid invoices.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "to_pay_amount" })
  toPayAmount?: number;

  /**
   * Sum of net amount and tax amount, in cents
   */
  @SpeakeasyMetadata()
  @Expose({ name: "total_amount" })
  totalAmount?: number;
}

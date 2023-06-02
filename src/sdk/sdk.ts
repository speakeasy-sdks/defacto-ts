/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import { Billing } from "./billing";
import { BusinessData } from "./businessdata";
import { Eligibility } from "./eligibility";
import { Invoice } from "./invoice";
import { Loan } from "./loan";
import * as shared from "./models/shared";
import { Onboarding } from "./onboarding";
import { Payment } from "./payment";
import { Testing } from "./testing";
import { Webhook } from "./webhook";
import axios from "axios";
import { AxiosInstance } from "axios";

/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = ["https://api.getdefacto.com"] as const;

/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};

export class Defacto {
    public billing: Billing;
    public businessData: BusinessData;
    public eligibility: Eligibility;
    public invoice: Invoice;
    public loan: Loan;
    public onboarding: Onboarding;
    public payment: Payment;
    public testing: Testing;
    public webhook: Webhook;

    public _defaultClient: AxiosInstance;
    public _securityClient: AxiosInstance;
    public _serverURL: string;
    private _language = "typescript";
    private _sdkVersion = "1.7.1";
    private _genVersion = "2.34.7";
    private _globals: any;

    constructor(props?: SDKProps) {
        this._serverURL = props?.serverURL ?? ServerList[0];

        this._defaultClient = props?.defaultClient ?? axios.create({ baseURL: this._serverURL });
        if (props?.security) {
            let security: shared.Security = props.security;
            if (!(props.security instanceof utils.SpeakeasyBase))
                security = new shared.Security(props.security);
            this._securityClient = utils.createSecurityClient(this._defaultClient, security);
        } else {
            this._securityClient = this._defaultClient;
        }

        this.billing = new Billing(
            this._defaultClient,
            this._securityClient,
            this._serverURL,
            this._language,
            this._sdkVersion,
            this._genVersion
        );

        this.businessData = new BusinessData(
            this._defaultClient,
            this._securityClient,
            this._serverURL,
            this._language,
            this._sdkVersion,
            this._genVersion
        );

        this.eligibility = new Eligibility(
            this._defaultClient,
            this._securityClient,
            this._serverURL,
            this._language,
            this._sdkVersion,
            this._genVersion
        );

        this.invoice = new Invoice(
            this._defaultClient,
            this._securityClient,
            this._serverURL,
            this._language,
            this._sdkVersion,
            this._genVersion
        );

        this.loan = new Loan(
            this._defaultClient,
            this._securityClient,
            this._serverURL,
            this._language,
            this._sdkVersion,
            this._genVersion
        );

        this.onboarding = new Onboarding(
            this._defaultClient,
            this._securityClient,
            this._serverURL,
            this._language,
            this._sdkVersion,
            this._genVersion
        );

        this.payment = new Payment(
            this._defaultClient,
            this._securityClient,
            this._serverURL,
            this._language,
            this._sdkVersion,
            this._genVersion
        );

        this.testing = new Testing(
            this._defaultClient,
            this._securityClient,
            this._serverURL,
            this._language,
            this._sdkVersion,
            this._genVersion
        );

        this.webhook = new Webhook(
            this._defaultClient,
            this._securityClient,
            this._serverURL,
            this._language,
            this._sdkVersion,
            this._genVersion
        );
    }
}

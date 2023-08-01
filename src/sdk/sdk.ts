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
     * Allows overriding the default server used by the SDK
     */
    serverIdx?: number;

    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};

export class SDKConfiguration {
    defaultClient: AxiosInstance;
    securityClient: AxiosInstance;
    serverURL: string;
    serverDefaults: any;
    language = "typescript";
    openapiDocVersion = "v1.0.0";
    sdkVersion = "1.17.1";
    genVersion = "2.75.2";

    public constructor(init?: Partial<SDKConfiguration>) {
        Object.assign(this, init);
    }
}

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

    private sdkConfiguration: SDKConfiguration;

    constructor(props?: SDKProps) {
        let serverURL = props?.serverURL;
        const serverIdx = props?.serverIdx ?? 0;

        if (!serverURL) {
            serverURL = ServerList[serverIdx];
        }

        const defaultClient = props?.defaultClient ?? axios.create({ baseURL: serverURL });
        let securityClient = defaultClient;

        if (props?.security) {
            let security: shared.Security = props.security;
            if (!(props.security instanceof utils.SpeakeasyBase)) {
                security = new shared.Security(props.security);
            }
            securityClient = utils.createSecurityClient(defaultClient, security);
        }

        this.sdkConfiguration = new SDKConfiguration({
            defaultClient: defaultClient,
            securityClient: securityClient,
            serverURL: serverURL,
        });

        this.billing = new Billing(this.sdkConfiguration);
        this.businessData = new BusinessData(this.sdkConfiguration);
        this.eligibility = new Eligibility(this.sdkConfiguration);
        this.invoice = new Invoice(this.sdkConfiguration);
        this.loan = new Loan(this.sdkConfiguration);
        this.onboarding = new Onboarding(this.sdkConfiguration);
        this.payment = new Payment(this.sdkConfiguration);
        this.testing = new Testing(this.sdkConfiguration);
        this.webhook = new Webhook(this.sdkConfiguration);
    }
}

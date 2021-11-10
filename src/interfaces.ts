import type { Dinero } from "dinero.js";

export interface LineItem {
  account: string;
  amount?: Dinero<number>;
  tags?: string | string[];
}

export interface Transaction {
  date: Date;
  lineItems: LineItem[];
  payee: string;
  ref?: number | string;
}

export interface Paycheck {
  date: Date;
  federalWithholding: Dinero<number>;
  medicaidEmployer: Dinero<number>;
  medicaidEmployee: Dinero<number>;
  payee: string;
  socialSecurityEmployer: Dinero<number>;
  socialSecurityEmployee: Dinero<number>;
  wage: Dinero<number>;
}

export interface GenPaycheckArgs {
  date: Date;
  federalWithholding?: string;
  payee: string;
  wage: string;
}

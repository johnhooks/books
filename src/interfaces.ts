import type { Dinero } from "dinero.js";

export type Maybe<T> = T | null;

export type Tags = string | string[];

export interface LineItem {
  account: string;
  amount?: Dinero<number>;
  tags?: Tags;
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
  federalWithholding: Dinero<number>;
  payee: string;
  wage: Dinero<number>;
}

export interface Tax {
  amount: number;
  scale: number;
}

export interface PayrollTaxes<T> {
  socialSecurityEmployer: T;
  socialSecurityEmployee: T;
  medicaidEmployer: T;
  medicaidEmployee: T;
}

export type Rates = PayrollTaxes<Tax>;

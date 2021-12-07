import { FeeMarketEIP1559TxData, AccessListEIP2930TxData, TxData } from '@ethereumjs/tx';

export type signTransactionResult = {
	messageHash: string;
	r: string;
	s: string;
	v: string;
	rawTransaction: string;
	transactionHash: string;
};

export type signTransactionFunction = (
	transaction: TxData | AccessListEIP2930TxData | FeeMarketEIP1559TxData,
	privateKey: string,
) => signTransactionResult;

export type signResult = {
	message: string;
	messageHash: string;
	r: string;
	s: string;
	v: string;
};

export type signFunction = (data: string, privateKey: string) => signResult;

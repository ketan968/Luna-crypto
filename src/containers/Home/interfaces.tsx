export interface portfolioTrackerInterface {
  transaction_hash: string;
  address: string;
  block_timestamp: string;
  //   key: number;
  block_number: string;
  block_hash: string;
  to_address: string;
  from_address: string;
  value: string;
}
export interface tokenBalancesInterface {
  balance: string;
  decimals: string;
  //   key: number;
  logo?: string | undefined;
  thumbnail?: string | undefined;
  name: string;
  symbol: string;
  token_address: string;
}
// export { portfolioTrackerInterface, tokenBalancesInterface };

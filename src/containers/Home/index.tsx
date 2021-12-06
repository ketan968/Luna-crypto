import React, { useEffect, useState } from "react";
import "./style.scss";
import { Button, Layout, Tabs } from "antd";
import { useMoralis, useMoralisWeb3Api } from "react-moralis";
import {
  portfolioTrackerInterface,
  tokenBalancesInterface,
} from "./interfaces";
import Portfolio from "./portfolio";
import AllTransactions from "./allTransactions";
import tokenValues from "./tokenValues";
import TokenValues from "./tokenValues";
import { NETWORK_CHAINS } from "../../utils/constants";
const { Header, Footer, Sider, Content } = Layout;
const { TabPane } = Tabs;
function Home(props: object) {
  const {
    authenticate,
    logout,
    isAuthenticated,
    user,
    web3,
    isWeb3Enabled,
    enableWeb3,
    Moralis,
    isAuthenticating,
    authError,
  } = useMoralis();
  const Web3Api = useMoralisWeb3Api();
  const [loader, setLoader] = useState({
    auth: false,
  });
  const [portfolioTrackerTransactions, setPortfolioTrackerTransactions] =
    useState<portfolioTrackerInterface[]>([]);

  const [tokenBalances, setTokenBalances] = useState<tokenBalancesInterface[]>(
    []
  );
  const [transactions, setTransactions] = useState([]);
  // console.log({ portfolioTrackerTransactions, tokenBalances, transactions });
  const TAB_TITLES = {
    PORTFOLIO_TRACKER: "PORTFOLIO_TRACKER",
    TRANSACTIONS: "TRANSACTIONS",
  };
  const [activeTabIndex, setActiveTabIndex] = useState(
    TAB_TITLES.PORTFOLIO_TRACKER
  );
  useEffect(() => {
    enableWeb3();
  }, []);
  async function gettokens(add: string) {
    //get all balances of tokens
    NETWORK_CHAINS.map((chain: any) => {
      Moralis.Web3API.account
        .getTokenBalances({
          chain: chain,
          address: add,
        })
        .then((res: any) => {
          // let arr = res.map(
          //   (token: any, index: number) => {
          //     return token["key"] = index;
          //   }
          // );
          let temp = tokenBalances;
          // debugger;

          res.forEach((item: any) => {
            console.log(item);
            item["chain"] = chain;
            temp.push(item);
          });
          setTokenBalances(temp);
        });

      // //get token transfers
      // Moralis.Web3API.account
      //   .getTokenTransfers({
      //     chain: chain,
      //     address: add,
      //   })
      //   .then((value: any) => {
      //     let temp = portfolioTrackerTransactions;
      //     value.result.forEach((item: any) => {
      //       temp.push(item);
      //     });
      //     setPortfolioTrackerTransactions(temp);
      //   })
      //   .catch((err) => console.log(err));

      // //get all transfers
      // Moralis.Web3API.account
      //   .getTransactions({
      //     address: add,
      //     chain: chain,
      //   })
      //   .then((res: any) => {
      //     let temp = [];
      //     temp = transactions;
      //     res.result.forEach((item: any) => {
      //       temp.push(item);
      //     });
      //     setTransactions(temp);
      //   })
      //   .catch((err) => console.log(err));
      // //get all token balances
      // Moralis.Web3API.account
      //   .getTokenBalances({
      //     chain: chain,
      //     address: add,
      //   })
      //   .then((res: any) => {
      //     setTokenBalances(res);
      //   });
    });
  }
  useEffect(() => {
    if (isAuthenticated && user) {
      const accounts = user.get("accounts");

      accounts && accounts.map((account: any) => gettokens(account));
    }
  }, [isAuthenticated]);
  // const getDataForAllUserAccounts = (accounts : <string>[]) => {

  // }
  console.log(isAuthenticated, "isAuthenticated");
  return (
    <div className="HomeContainer">
      <Layout hasSider={false}>
        <Header>
          {isAuthenticated ? (
            <>
              <h2 className="user">Welcome {user && user.get("username")}</h2>
              <Button shape="round" type="primary" onClick={() => logout()}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <h2 className="user">Please Login</h2>
              <Button type="primary" onClick={() => authenticate()}>
                Authenticate
              </Button>
            </>
          )}
        </Header>
        <Content>
          {isAuthenticated ? (
            <>
              <TokenValues tokens={tokenBalances} />
              {/* <Tabs
                activeKey={activeTabIndex}
                onChange={(tab) => setActiveTabIndex(tab)}
              >
                <TabPane
                  key={TAB_TITLES.PORTFOLIO_TRACKER}
                  tab="Portfolio Tracker"
                >
                  <Portfolio transactions={portfolioTrackerTransactions} />
                </TabPane>
                <TabPane
                  key={TAB_TITLES.TRANSACTIONS}
                  tab="All User Trasactions"
                >
                  <AllTransactions transactions={transactions} />
                </TabPane>
              </Tabs> */}
            </>
          ) : (
            <h2>Please Login to view your data</h2>
          )}
        </Content>
      </Layout>
    </div>
  );
}

export default Home;

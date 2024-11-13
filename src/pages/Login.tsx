import React from 'react';

interface Login {
  title: string;
  items: string[];
}

const accounts: Login[] = [
  {
    title: 'Banking and Investing',
    items: ['Online Banking', 'EasyWeb', 'TD Wealth', 'TD Private Client Wealth'],
  },
  {
    title: 'Cards',
    items: ['Credit Card', 'Gift Card', 'TD Commercial Plus Card'],
  },
  {
    title: 'Other',
    items: [
      'TD eTreasury',
      'TDFX',
      'TD Bank Trade',
      'Asset Based Lending',
      'TD Digital Express',
    ],
  },
];

const AccountSection: React.FC<{ account: Login }> = ({ account }) => (
  <div className="border border-gray-300 p-4 rounded-md">
    <h3 className="text-lg font-bold mb-2">{account.title}</h3>
    <ul className="list-disc pl-6">
      {account.items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </div>
);

const Login: React.FC = () => (
  <div className="container mx-auto mt-10">
    <h1 className="text-3xl font-bold text-green-500 mb-6">
      Log In To Your Other Accounts
    </h1>
    <div className="flex justify-around gap-6">
      {accounts.map((account) => (
        <AccountSection key={account.title} account={account} />
      ))}
    </div>
  </div>
);

export default Login;
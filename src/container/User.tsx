import React from "react";
import CardAccount from "../components/CardAccount";
import { accounts } from "../utils/constantes";

const User = () => (
  <main className="main bg-dark">
    <div className="header">
      <h1>
        Welcome back
        <br />
        Tony Jarvis!
      </h1>
      <button className="edit-button">Edit Name</button>
    </div>
    <h2 className="sr-only">Accounts</h2>
    {accounts.map((account) => (
      <CardAccount
        key={account.title}
        title={account.title}
        amount={account.amount}
        desc={account.desc}
      />
    ))}
  </main>
);

export default User;

import iconChat from "../img/icon-chat.png";
import iconMoney from "../img/icon-money.png";
import iconSecurity from "../img/icon-security.png";

export const features: Array<{ icon: string; title: string; text: string }> = [
  {
    icon: iconChat,
    title: "You are our #1 priority",
    text: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
  },
  {
    icon: iconMoney,
    title: "More savings means higher rates",
    text: "The more you save with us, the higher your interest rate will be!",
  },
  {
    icon: iconSecurity,
    title: "Security you can trust",
    text: "We use top of the line encryption to make sure your data and money is always safe.",
  },
];

export const accounts: Array<{ title: string; amount: string; desc: string }> =
  [
    {
      title: "Argent Bank Checking (x8349)",
      amount: "$2,082.79",
      desc: "Available Balance",
    },
    {
      title: "Argent Bank Savings (x6712)",
      amount: "$10,928.42",
      desc: "Available Balance",
    },
    {
      title: "Argent Bank Credit Card (x8349)",
      amount: "$184.30",
      desc: "Current Balance",
    },
  ];

export const inputList: Array<{ label: string; type: string }> = [
  { label: "Username", type: "text" },
  { label: "Password", type: "password" },
];

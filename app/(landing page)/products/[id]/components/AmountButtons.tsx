import React from "react";

interface AmountButtonsProps {
  amount: number;
  increaseAmount: () => void;
  decreaseAmount: () => void;
}
export default function AmountButtons({
  amount,
  increaseAmount,
  decreaseAmount,
}: AmountButtonsProps) {
  return (
    <div>
      <button onClick={decreaseAmount}>-</button>
      <span>{amount}</span>
      <button onClick={increaseAmount}>+</button>
    </div>
  );
}

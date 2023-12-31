import { useCallback, useEffect, useState } from "react"

import { InputCheckbox } from "../InputCheckbox"
import { TransactionPaneComponent } from "./types"

export const TransactionPane: TransactionPaneComponent = ({
  transaction,
  loading,
  setTransactionApproval: consumerSetTransactionApproval,
}) => {
  const [approved, setApproved] = useState(transaction.approved)
  useEffect(() => {
    setApproved(approved);
    console.log(transaction.merchant);
    console.log("approvedvalue", approved);
    console.log("transaction", transaction.approved);
  }, [transaction]);

  const updateTransactionApproval = useCallback(
    async (newValue: boolean) => {
      await consumerSetTransactionApproval({
        transactionId: transaction.id,
        newValue,
      })
      setApproved(newValue)
    },
    [consumerSetTransactionApproval, transaction.id]
  )
  return (
    <div className="RampPane">
      <div className="RampPane--content">
        <p className="RampText">{transaction.merchant} </p>
        <b>{moneyFormatter.format(transaction.amount)}</b>
        <p className="RampText--hushed RampText--s">
          {transaction.employee.firstName} {transaction.employee.lastName} - {transaction.date}
        </p>
      </div>
      <InputCheckbox
        id={transaction.id}
        checked={approved}
        disabled={loading}
        onChange={updateTransactionApproval}
      />
    </div>
  )
}

const moneyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
})

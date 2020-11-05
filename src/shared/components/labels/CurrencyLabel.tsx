import React from 'react'

interface IProps {
    value: number;
}

const CurrencyLabel: React.FC<IProps> = ({ value }) => {
    return (
        <span>${value.toFixed(2)}</span>
    )
}

export default CurrencyLabel

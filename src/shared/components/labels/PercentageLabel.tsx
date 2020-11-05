import React from 'react'
interface IProps {
    value: number;
}
const PercentageLabel: React.FC<IProps> = ({ value }) => {
    return (
        <span>{value.toFixed(2)}%</span>
    )
}

export default PercentageLabel

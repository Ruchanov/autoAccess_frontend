import React, { useState, useEffect } from 'react';
import styles from './CreditCalculator.module.css'; // Подключите соответствующий CSS модуль

const CreditCalculator = ({ defaultPrice }) => {
    const [price, setPrice] = useState(defaultPrice);
    const [downPayment, setDownPayment] = useState(1000000);
    const [term, setTerm] = useState('12');
    const [monthlyPayment, setMonthlyPayment] = useState(null);
    const [isDownPaymentValid, setIsDownPaymentValid] = useState(true);

    const calculateMonthlyPayment = () => {
        setIsDownPaymentValid(downPayment >= 1000000 && downPayment <= price);

        if (isDownPaymentValid) {
            const loanAmount = price - downPayment;
            const monthlyInterestRate = 0.16 / 12; // Примерная процентная ставка в месяц
            const numberOfPayments = term;
            const monthlyPayment =
                loanAmount * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
                (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

            setMonthlyPayment(monthlyPayment.toFixed(2));
        } else {
            setMonthlyPayment(null);
        }
    };

    useEffect(() => {
        calculateMonthlyPayment();
    }, [price, downPayment, term, isDownPaymentValid]);

    return (
        <div className={styles.calculator}>
            <h2>Credit Calculator</h2>
            <div>
                <label>Car Price: </label>
                <input
                    type="number"
                    value={price}
                    onChange={e => setPrice(Math.max(0, e.target.value))}
                    className={styles.input}
                />
            </div>
            <div>
                <label>Down Payment: </label>
                <input
                    type="number"
                    value={downPayment}
                    onChange={e => setDownPayment(e.target.value)}
                    className={isDownPaymentValid ? styles.input : styles.inputError}
                />
                {!isDownPaymentValid && <p className={styles.errorText}>Down payment must be between 1,000,000 and the car price.</p>}
            </div>
            <div>
                <label>Term (months): </label>
                <select value={term} onChange={e => setTerm(e.target.value)} className={styles.select}>
                    <option value="12">12 months</option>
                    <option value="24">24 months</option>
                    <option value="36">36 months</option>
                    <option value="48">48 months</option>
                    <option value="60">60 months</option>
                </select>
            </div>
            <p>Monthly Payment: {monthlyPayment ? `${monthlyPayment} тг` : 'N/A'}</p>
            <a href={'https://guide.kaspi.kz/client/ru/auto_credit/receive'}>
                <button>Расчитать кредит</button>
            </a>
        </div>
    );
};

export default CreditCalculator;

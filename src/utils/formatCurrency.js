const formatCurrency = (value, currency) => {
    return value.toLocaleString('pt-BR', {style: 'currency', currency });

};

export default formatCurrency;
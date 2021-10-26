<>
  <label htmlFor="money-input">Money input label</label>
  <MoneyInput
    id="money-input"
    amount={1000}
    size="lg"
    onAmountChange={value => console.log('amount changed', value)}
    onCurrencyChange={() => alert('currency changed')}
    addon={null}
    searchPlaceholder="Type a currency or country"
    onCustomAction={() => alert('Custom action')}
    customActionLabel="Custom action label"
    currencies={[
      {
        header: 'Popular currencies',
      },
      {
        value: 'EUR',
        label: 'EUR',
        note: 'Euro',
        currency: 'eur',
        searchable: 'Spain, Germany, France, Austria',
      },
      {
        value: 'GBP',
        label: 'GBP',
        note: 'British pound',
        currency: 'gbp',
        searchable: 'England, Scotland, Wales',
      },
      {
        value: 'USD',
        label: 'USD - Outside of the US',
        note: 'United States Dollar',
        currency: 'usd',
        global: true,
        searchable: 'United States, Spain, Germany, France, Austria',
      },
    ]}
    selectedCurrency={{
      value: 'EUR',
      label: 'EUR',
      note: 'Euro',
      currency: 'eur',
      searchable: 'Spain, Germany, France, Austria',
    }}
  />
</>;

const Table = ({ data }) => {
  return (
    <>
      <table className="table-auto w-full text-left">
        <thead>
          <tr>
            <th className="px-4 py-2 border-r border-slate-300 bg-slate-200">
              Name
            </th>
            <th className="px-4 py-2 border-r border-slate-300 bg-slate-200">
              Code
            </th>
            <th className="px-4 py-2 border-r border-slate-300 bg-slate-200">
              unit
            </th>
            <th className="px-4 py-2 border-r border-slate-300 bg-slate-200">
              Purchase Price
            </th>
            <th className="px-4 py-2 border-r border-slate-300 bg-slate-200">
              Sell Price
            </th>
            <th className="px-4 py-2 border-r border-slate-300 bg-slate-200">
              Average Price
            </th>
            <th className="px-4 py-2 border-slate-300 bg-slate-200">Action</th>
          </tr>
        </thead>
        <tbody className="text-slate-600">
          {data &&
            data.map((currency, index) => (
              <tr key={index}>
                <td className="border border-l-0 px-4 py-2">{currency.name}</td>
                <td className="border border-l-0 px-4 py-2">{currency.code}</td>
                <td className="border border-l-0 px-4 py-2">
                  <span className="num-2">{currency.unit}</span>
                </td>
                <td className="border border-l-0 px-4 py-2">
                  <span className="num-2">{currency.purchasePrice}</span>
                </td>
                <td className="border border-l-0 px-4 py-2">
                  <span className="num-2">{currency.sellPrice}</span>
                </td>
                <td className="border border-l-0 px-4 py-2">
                  <span className="num-2">{currency.averagePrice}</span>
                </td>
                <td className="border border-l-0 border-r-0 px-4 py-2">
                  <button>Buy</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;

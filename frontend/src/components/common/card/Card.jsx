const Card = ({ title }) => {
  return (
    <>
      <div className="text-sm bg-white border border-slate-300">
        <div className="border-b p-6">{title}</div>

        <table className="table-auto w-full text-left">
          <thead>
            <tr>
              <th className="px-4 py-2 border-r border-slate-300 bg-slate-200">
                currency
              </th>
              <th className="px-4 py-2 border-r border-slate-300 bg-slate-200">
                unit
              </th>
              <th className="px-4 py-2 border-r border-slate-300 bg-slate-200">
                value
              </th>
              <th className="px-4 py-2 border-slate-300 bg-slate-200">
                actions
              </th>
            </tr>
          </thead>
          <tbody className="text-slate-600">
            <tr>
              <td className="border border-l-0 px-4 py-2">GBP</td>
              <td className="border border-l-0 px-4 py-2">
                <span className="num-2">1</span>
              </td>
              <td className="border border-l-0 px-4 py-2">
                <span className="num-2">5.83</span>
              </td>
              <td className="border border-l-0 border-r-0 px-4 py-2">
                <button>Buy</button>
              </td>
            </tr>
            <tr>
              <td className="border border-l-0 border-b-0 px-4 py-2">EUR</td>
              <td className="border border-l-0 border-b-0 px-4 py-2">
                <span className="num-2">1</span>
              </td>
              <td className="border border-l-0 border-b-0 px-4 py-2">
                <span className="num-2">4.16</span>
              </td>
              <td className="px-4 py-2">
                <button>Buy</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Card;

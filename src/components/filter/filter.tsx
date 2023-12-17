import { useFootballer } from '../../hooks/footballer.hooks';

export const Filter = () => {
  const { handleFilterFootballer } = useFootballer();

  return (
    <div className="filter-container">
      <select name="filter-positions" onChange={handleFilterFootballer}>
        <option value="">What position do you want?</option>
        <option value="GK">GK</option>
        <option value="RB">RB</option>
        <option value="CBR">CBR</option>
        <option value="CBL">CBL</option>
        <option value="LB">LB</option>
        <option value="CM">CM</option>
        <option value="RW">RW</option>
        <option value="LW">LW</option>
        <option value="ST">ST</option>
        <option value="CF">CF</option>
      </select>
    </div>
  );
};

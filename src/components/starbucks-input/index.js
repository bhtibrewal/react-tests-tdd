const StarbucksInput = ({ name, value, onChange, error = "" }) => {

    return (< >
        <label htmlFor={name}>{name}</label>
        <input id={name} value={value} onChange={(e) => onChange(name, e.target.value)} />
        <div>{error}</div>
    </>)
}
export default StarbucksInput
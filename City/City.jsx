// add this to a new file City.jsx in the components folder
// destructures props object into 3 variables, two with defaults
function City({ name, state = "NSW", country = "Australia" }) {
  return (
    <div className="City componentBox">
      <strong>{name}</strong> is in {state}, {country}
    </div>
  );
}

export default City;

// need to put in app.jsx file import city from '.components/City/City';

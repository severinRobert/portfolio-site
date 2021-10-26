import CVCard from '../components/CVCard.js';

function CV() {
  return (
    <div className="cv">
      <div className="row">
        <div className="column">
          <CVCard title="profil"/>
          <CVCard title="skills"/>
        </div>
        <div className="column">
          <CVCard title="experiences"/>
          <CVCard title="formations"/>
        </div>
      </div>
    </div>
  );
}

export default CV;
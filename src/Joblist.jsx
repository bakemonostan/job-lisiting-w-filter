import { useEffect } from 'react';

const Joblist = ({
  company,
  new: isNew,
  featured,
  position,
  postedAt,
  contract,
  location,
  logo,
  role,
  tools,
  level,
  languages,
  id,
  handleClick,
}) => {
  useEffect(() => {}, []);

  return (
    <section className='main'>
      <div className={`card ${id === 1 || id === 2 ? 'border-right' : ' '}`}>
        <div className='info'>
          <div className='logo-contanier'>
            <img src={logo} alt={company} className='logo' />
          </div>
          <div className='company_info'>
            <h4 className='company'>
              {company} {isNew && <span className='new'>New!</span>}
              {featured && <span className='new'>Featured!</span>}
            </h4>

            <p className='position'>{position}</p>
            <div className='others'>
              <ul className='list'>
                <li>{postedAt}</li>
                <li>{contract}</li>
                <li>{location}</li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className='roles'>
          <button type='button' value={role} onClick={(e) => handleClick(role)}>
            {role}
          </button>

          <button
            type='button'
            value={level}
            onClick={(e) => handleClick(level)}
          >
            {level}
          </button>
          {languages.map((item, index) => {
            return (
              <button
                key={index}
                type='button'
                value={item}
                onClick={(e) => handleClick(item)}
              >
                {item}
              </button>
            );
          })}
          {tools.map((item, index) => {
            return (
              <button
                key={index}
                type='button'
                value={item}
                onClick={(e) => handleClick(item)}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Joblist;

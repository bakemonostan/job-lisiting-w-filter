import './App.css';
import jobs from './data.json';
import { useEffect, useState } from 'react';
import Joblist from './Joblist';

function App() {
  const [jobLists, setjobLists] = useState([]);
  const [filteredCat, setFilteredCat] = useState([]);
  const [cat, setCat] = useState([]);

  const handleClick = (val) => {
    const newList = jobLists.filter((jobs) => {
      const { tools, languages, role } = jobs;
      if (role === val) {
        return role === val;
      }
      if (tools.includes(val)) {
        return tools !== val;
      }
      if (languages.includes(val)) {
        return languages !== val;
      }
      return jobs.level === val;
    });
    console.log(newList);
    setFilteredCat(newList);
    if (!cat.includes(val)) {
      setCat([...cat, val]);
    }
  };

  const clearCat = (arg) => {
    if (cat.includes(arg)) {
      setFilteredCat(jobs);
      setCat([]);
    }
  };

  useEffect(() => {
    setjobLists(jobs);
    setFilteredCat(jobs);
  }, []);
  return (
    <div>
      <header className='header'>
        <div className='header_img'></div>

        {cat.map((item) => {
          return (
            <span style={{ marginLeft: '1rem', backgroundColor: 'gray' }}>
              {item} <button onClick={() => clearCat(item)}>X</button>
            </span>
          );
        })}
      </header>
      <main>
        {filteredCat.map((item) => {
          return (
            <Joblist
              key={item.id}
              {...item}
              handleClick={handleClick}
              // filterJobs={filterJobs}
            />
          );
        })}
      </main>
    </div>
  );
}

export default App;


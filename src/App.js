import './App.css';
import jobs from './data.json';
import { useEffect, useState } from 'react';
import Joblist from './Joblist';
import Category from './Category';

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

    if (!cat.includes(val)) {
      setCat([...cat, val]);
    }
    setFilteredCat(newList);
  };

  const removeSingleCat = (item) => {
    const newCat = cat.filter((c) => {
      return c !== item;
    });
    console.log(cat);
    setCat(newCat);
    setFilteredCat(jobs);
  };

  const clearCat = () => {
    setCat([]);
    setjobLists(jobs);
    setFilteredCat(jobs);
  };

  useEffect(() => {
    setjobLists(jobs);
    setFilteredCat(jobs);
  }, []);

  return (
    <div>
      <header className='header'>
        <div className='header_img'></div>
        {cat.length >= 1 && (
          <Category>
            <div>
              {cat.map((item) => {
                return (
                  <span key={item} className='filtered_cat'>
                    {item}{' '}
                    <button type='button' onClick={() => removeSingleCat(item)}>
                      X
                    </button>
                  </span>
                );
              })}
            </div>
            <button className='clear_btn' onClick={clearCat}>
              Clear
            </button>
          </Category>
        )}
      </header>
      <main>
        {filteredCat.map((item) => {
          return <Joblist key={item.id} {...item} handleClick={handleClick} />;
        })}
      </main>
    </div>
  );
}

export default App;


import React, { useState, useEffect } from 'react';

const Practice3 = () => {
  /*
   * 1. Create a value in state using hooks called catImg
   * 2. Use useEffect to make an API call to https://cataas.com/cat for a random picture of a cat
   * 3. Add the url for the image to the page below the title
   * 4. Pass an empty array of dependencies to useEffect so it only fetches on initial page load
   */
  const [catImg, setCatImg] = useState('');

  const fetchCat = () => {
    fetch('https://cataas.com/cat')
      .then((response) => response.blob())
      .then((blob) => setCatImg(URL.createObjectURL(blob)))
      // .then((blob) => console.log(blob))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchCat();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchCat();
    }, 5000);
    return () => clearTimeout(timer);
  }, [catImg]);

  return (
    <>
      <h1>Random Cat Photo</h1>
      {catImg && <img src={catImg} alt='Random Cat Image' width='250' />}
    </>
  );
};

export default Practice3;

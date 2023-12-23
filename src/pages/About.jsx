import React, { useEffect } from 'react';
import Animation from '../assets/js/Animation';
import axios from 'axios';

const About = () => {
  useEffect(() => {
    const fetchData = async () => {
      const apiUrl = process.env.REACT_APP_API_URL;
      const apiToken = process.env.REACT_APP_API_TOKEN;
      try {
        const response = await axios.get(apiUrl, {
          headers: {
            // Include any necessary authentication headers here
            Authorization: `Bearer ${apiToken}`,
          },
        });

        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="flex justify-center">
        <h1 className="font-roboto anim opacity-0" data-anim="fade-in-up" data-duration="0.8">
          About Page
        </h1>
      </div>
      <Animation />
    </>
  );
};

export default About;

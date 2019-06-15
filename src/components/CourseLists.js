import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function CourseLists() {
  const courses = useSelector(state => state.data);
  const dispatch = useDispatch();

  const addCourse = () => {
    dispatch({ type: 'ADD_COURSE', title: 'Almeida' });
  };

  return (
    <>
      <ul>
        {courses.map(course => {
          return <li>{course}</li>;
        })}
      </ul>
      <button onClick={addCourse} type="button">
        Adicionar
      </button>
    </>
  );
}

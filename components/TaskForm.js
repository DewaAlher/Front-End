import React from 'react';
import {useForm} from 'react-hook-form';

const TaskForm = ({onSubmit, formState}) => {
  const {register, handleSubmit, errors} = useForm ();

  return (
    <form onSubmit={handleSubmit (onSubmit)}>
      <div className="form-group">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          ref={register ({required: true})}
          className="form-control"
        />
        {errors.title &&
          <span className="text-danger">This field is required</span>}
      </div>

      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          ref={register}
          className="form-control"
        />
      </div>

      <button
        type="submit"
        disabled={!formState.isValid}
        className="btn btn-primary"
      >
        Submit
      </button>
    </form>
  );
};

export default TaskForm;

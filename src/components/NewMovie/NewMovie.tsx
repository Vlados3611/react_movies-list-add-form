import React, { useState } from 'react';
import { TextField } from '../TextField';

import { Movie } from '../../types/Movie';

type Props = {
  onAdd: (movies: Movie) => void;
};

export const NewMovie: React.FC<Props> = ({ onAdd }) => {
  // Increase the count after successful form submission
  // to reset touched status of all the `Field`s
  const [count, setCount] = useState(0);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [imdbUrl, setImdbUrl] = useState('');
  const [imdbId, setImdbId] = useState('');

  const resetAllChanges = () => {
    setTitle('');
    setDescription('');
    setImgUrl('');
    setImdbUrl('');
    setImdbId('');
  };

  const isEqual = (
    title.length > 0
    && imgUrl.length > 0
    && imdbUrl.length > 0
    && imdbId.length > 0
  );

  return (
    <form
      className="NewMovie"
      key={count}
      onSubmit={(event) => {
        event.preventDefault();

        const newMovie = {
          title,
          description,
          imgUrl,
          imdbUrl,
          imdbId,
        };

        if (isEqual) {
          onAdd(newMovie);
          resetAllChanges();
          setCount(prevState => prevState + 1);
        }
      }}
    >
      <h2 className="title">Add a movie</h2>

      <TextField
        name="title"
        label="Title"
        value={title}
        onChange={setTitle}
        required
      />

      <TextField
        name="description"
        label="Description"
        value={description}
        onChange={setDescription}
      />

      <TextField
        name="imgUrl"
        label="Image URL"
        value={imgUrl}
        onChange={setImgUrl}
        required
      />

      <TextField
        name="imdbUrl"
        label="Imdb URL"
        value={imdbUrl}
        onChange={setImdbUrl}
        required
      />

      <TextField
        name="imdbId"
        label="Imdb ID"
        value={imdbId}
        onChange={setImdbId}
        required
      />

      <div className="field is-grouped">
        <div className="control">
          {
            isEqual
              ? (
                <button
                  type="submit"
                  data-cy="submit-button"
                  className="button is-link"
                >
                  Add
                </button>
              ) : (
                <button
                  type="submit"
                  data-cy="submit-button"
                  className="button is-link"
                  disabled
                >
                  Add
                </button>
              )
          }
        </div>
      </div>
    </form>
  );
};

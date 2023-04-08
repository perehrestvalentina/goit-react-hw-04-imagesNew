import { Audio } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <>
      <Audio
        className="true"
        height="80"
        width="100"
        radius="9"
        color="black"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
    </>
  );
};

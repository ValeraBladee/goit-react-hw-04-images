import { ThreeDots } from 'react-loader-spinner';

export default function Loader() {
  return (
    <ThreeDots
      height="100"
      width="100"
      radius="9"
      color="#3f51b5;"
      ariaLabel="three-dots-loading"
      wrapperStyle={{
        margin: '20px 0',
        marginRight: 'auto',
        marginLeft: 'auto',
        display: 'flex',
        justifyContent: 'center',
      }}
      wrapperClassName=""
      visible={true}
    />
  );
}

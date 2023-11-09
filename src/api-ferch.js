import axios from 'axios';

const API_CEY = '39538903-b61d7980a82458644abd1a2e7';
const configurationParam_API = 'image_type = photo & orientation=horizontal';

export default async function getImage(searchPhoto, page) {
  try {
    const { data } = await axios.get(
      `https://pixabay.com/api/?q=${searchPhoto}&page=${page}&key=${API_CEY}&=${configurationParam_API}&per_page=12`
    );
    return data;
  } catch (error) {
    console.error(error.message);
  }
}

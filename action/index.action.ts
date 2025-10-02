import axios from "axios";

export const fetchEvents = async (): Promise<NewsAndEvents[]> => {
  try {
    const response = await axios.get(
      process.env.NEXT_PUBLIC_API_URL + "/events"
    );
    return response.data.data.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
